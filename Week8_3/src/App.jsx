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
import Search from './Search.jsx';


import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { createContext,useContext } from 'react';
export const MyContext = createContext();



const nowplayingURL = 'https://api.themoviedb.org/3/movie/now_playing?language=ko-KR'
const popularURL = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=popularity.desc";
const topratedURL = 'https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1'
const upcomingURL = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
const kk = 'https://api.themoviedb.org/3/genre/movie/list?language=ko';
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
            element:<Search></Search>
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
    const [refreshtoken,setrefresh] = useState();
    const [accesstoken,setaccess] = useState();
    const [username,setusername] = useState();
    return <MyContext.Provider value={{refreshtoken,accesstoken,setrefresh,setaccess,username,setusername}}>
        <RouterProvider router={router}/>
    </MyContext.Provider>
}

export default App