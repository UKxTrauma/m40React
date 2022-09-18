import React from 'react'
import { useState } from "react";
import { listFilms } from '../utils';


const DisplayMovies = ({ movieListState, setMovieListState }) => {
    // const [usernames, setUsernames] = useState([])
    const [toggle, setToggle] = useState(false);
    const loadMovies = async (event) => {
        event.preventDefault()
        let movies = await listFilms()
        console.log(movies)
        setMovieListState(movies)
    }

    return (
        <form onSubmit={loadMovies} className='outerUserList2'>
            <button type='submit' onClick={() => setToggle(!toggle)} id='movie'>Movie list</button>
            <div className={toggle ? "showUser" : "hideUser"}>
                <div className="movieList">
                    {movieListState.map((movies, index) => (<h3 key={index}>Title: &nbsp;&nbsp;&nbsp;{movies.title}<br></br>Lead: &nbsp;&nbsp;&nbsp;{movies.actor}</h3>))}
                </div>
            </div>
        </form>
    )
}

export default DisplayMovies;