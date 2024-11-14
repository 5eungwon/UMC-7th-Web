import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useRef } from "react";

const getMovies = async ({ pageParam = 1, url }) => {
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    },
    params: { page: pageParam }
  });
  console.log("Fetched page:", pageParam);  // 페이지 확인용 콘솔
  return response.data;
};

function MovieList({ url }) {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: ({ pageParam = 1 }) => getMovies({ pageParam, url }),
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
    },
  });

  const handleScroll = () => {
    const scrollTop = homepageContentRef.current.scrollTop;
    const clientHeight = homepageContentRef.current.clientHeight;
    const scrollHeight = homepageContentRef.current.scrollHeight;
    
    if (clientHeight + scrollTop >= scrollHeight - 5) {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    }
  };
  const homepageContentRef = React.useRef(null);
  useEffect(() => {
    if (!homepageContentRef.current) return;
    const currentRef = homepageContentRef.current;
    currentRef.addEventListener("scroll", handleScroll);
    return () => currentRef.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, isFetchingNextPage]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <HomepageContent ref={homepageContentRef}>
      {data.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page.results.map((movie) => (
            <div key={movie.id}>
              <div style={{ height: "85%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Link to={`/movies/details/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
                    style={{ width: "95%", height: "95%", borderRadius: "4%" }}
                    alt={movie?.title}
                  />
                </Link>
              </div>
              <div style={{ height: "15%", color: "white", fontSize: "small" }}>
                {movie?.title}
                <br />
                {movie?.release_date}
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
      {isFetchingNextPage && <div>Loading more...</div>}
    </HomepageContent>
  );
}

export default MovieList;

const HomepageContent = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;
