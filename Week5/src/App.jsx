import { useState } from 'react'

import './App.css'

import "./components/Root.jsx"
import Root from './components/Root.jsx';
import "./components/Homepage.jsx"
import Homepage from './components/Homepage.jsx'
import "./components/Categories.jsx"
import Categories from './components/Categories.jsx';
import "./components/categories/MovieList.jsx"
import "./components/categories/MovieList.jsx"
import MovieList from './components/categories/MovieList.jsx';
import MovieDetails from './components/categories/MovieDetails.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';


import {createBrowserRouter, RouterProvider} from "react-router-dom";

const authorizationcode = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTU4YWYyZWFkNDE4MjY0YTBjMDEzMTczNTNiYzI4OSIsIm5iZiI6MTcyODIwMTQyMi45Mzc3OSwic3ViIjoiNjcwMjNmYzE5ZWJlYTE5MDA2Zjg4ODkwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.x-2m1kbLZxVjsWSCtEbYFHYTwopDHRCa6HWrUPLgLno`
const nowplayingURL = 'https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1'
const popularURL = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
const topratedURL = 'https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1'
const upcomingURL = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
const kk = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <h1>에러</h1>,
        children:[
          {path:'/',element:<Homepage url={popularURL}/>},
          {
            path:'/login',
            element:<Login/>
          },
          {
            path:'/signup',
            element:<Signup/>
          },
          {
            path:'/movies',
            element:<Categories/>,
          },
          {
            path:'/movies/details/:id',
            element:<MovieDetails></MovieDetails>
          },
          {
            path:'/search',
            element:<h1 style={{color:"white"}}>검색 페이지</h1>
          },
          {
            path:"/movies/now-playing",
            element:<MovieList url={nowplayingURL}></MovieList>
          },
          {
            path:"/movies/popular",
            element:<MovieList url={popularURL}></MovieList>
          },
          {
            path:"/movies/top-rated",
            element:<MovieList url={topratedURL}></MovieList>
          },
          {
            path:"/movies/up-coming",
            element:<MovieList url={upcomingURL}></MovieList>
          },
        ]
    },
])

function App() {
    return <RouterProvider router={router}/>
}

export default App