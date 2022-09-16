import React from 'react' 
import { useState } from "react";
import { searchFilms } from '../utils';


const MovieCard = ({movieListState, setMovieListState})=>{
    const loadMovies = async (event) => {
        event.preventDefault()
        let movies = await searchFilms()
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

export default MovieCard;