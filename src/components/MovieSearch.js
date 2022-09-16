import React from 'react' 
import { useState } from "react";
import { listFilms } from '../utils';


const MovieSearch = ({movieListState, setMovieListState})=>{
    const findMovies = async (event) => {
        event.preventDefault()
        let movies = await listFilms()
        console.log(typeof(movies))
        console.log(movies)
        setMovieListState(movies)
    }
    
    return (
    <form onSubmit ={findMovies}>
        <input onChange={(event) => findMovies(event.target.value)} placeholder="search for a movie"/>
        <button type='submit' id='searchButt'>🔍</button>
    </form>
        // <form onSubmit ={loadMovies} className='usernames'>
        //     <button type='submit' id='movie'>Movie list</button>
        //     {movieListState.map((movies, index) => (<h3 key={index}>{movies.title}<br></br>{movies.actor}</h3>))}
        // </form>
    )
}

export default MovieSearch;