import React from 'react'
import { listFilms } from '../utils';


const DisplayMovies = ({ setMovieListState, toggle, setToggle }) => {
    const loadMovies = async (event) => {
            event.preventDefault()
            let movies = await listFilms()
            setMovieListState(movies)
        }
        
        return (
            <form onSubmit={loadMovies} >
                <button type='submit' onClick={() => setToggle(!toggle)} id='movie'>Movie list</button>
           </form>
    )
}

export default DisplayMovies;