import React from 'react' 
import { useState } from "react";
import { searchFilms } from '../utils';


const MovieCard = ({movieListState, setMovieListState})=>{
    // {movie: { title, actor, _id } }

    // const [movieList, setMovieList] = useState([])
    const loadMovies = async (event) => {
        event.preventDefault()
        let movies = await searchFilms()
        console.log(typeof(movies))
        console.log(movies)
        setMovieListState(movies)
    }
    
    return (
        <form onSubmit ={loadMovies} className='usernames'>
            {movieListState.map((movies, index) => (<h3 key={index}>{movies.title}<br></br>{movies.actor}</h3>))}
            {/* {movieListState.map((movies, index) => (
                <h3 key={index}>{movies}</h3>
            ))} */}
            <button type='submit'>Movie list</button>
        </form>
    )
}

export default MovieCard;

// import React from 'react';
// import { useState } from "react";
// import { searchFilms } from '../utils';

// const DisplayMovies = () => {

//     const [usernames, setUsernames] = useState([])

//     const loadMovies = async (event) => {
//         event.preventDefault()
//         let users = await displayMovies()
//         let movies = await searchFilms()
//         console.log(movies)
//     }

//     return (
//         <form onSubmit ={loadUsernames} className='usernames'>
//                 {usernames.map((user, index) => (
//                     <h3 key={index}>{user}</h3>
//                 ))}
//             <button type='submit'>View movies</button>
//         </form>
//     )
// }
// export default DisplayMovies