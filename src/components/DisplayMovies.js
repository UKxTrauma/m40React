import React from 'react' 
import { useState } from "react";
import { listFilms } from '../utils';


const DisplayMovies = ({movieListState, setMovieListState})=>{
    const loadMovies = async (event) => {
        event.preventDefault()
        let movies = await listFilms()
        console.log(typeof(movies))
        console.log(movies)
        setMovieListState(movies)
    }
    
    return (
        <form onSubmit ={loadMovies} className='usernames'>
            <button type='submit' id='movie'>Movie list</button>
            {movieListState.map((movies, index) => (<h3 key={index}>{movies.title}<br></br>{movies.actor}</h3>))}
        </form>
    )
}

export default DisplayMovies;