import { useEffect, useState } from "react";
import "./App.css"
import SearchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";
import DisplayUsers from "./components/DisplayUsers";
// import Login from './components/Login';
import NameEdit from "./components/NameEdit";
import EmailEdit from "./components/EmailEdit";
import PasswordEdit from "./components/PasswordEdit";
import AccountDelete from "./components/UserDelete";
import UserModal from "./components/Modal";
// import Register from "./components/Register";

// const API_URL = process.env.REACT_APP_API_URL
// console.log(API_URL)

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([])
  const [movieListState, setMovieListState] = useState([])
  const [user, setUser]= useState()
  const [token, setToken] = useState("")

  // useEffect (() =>{
  //     searchFilms()
  // })

  // const searchFilms = async () => {
  //   console.log("inside search films")
  //   const req = await fetch(`${process.env.REACT_APP_API_URL}movie/list`, {
  //     method: "GET",
  //     headers: {"Content-Type": "application/json"}
  //   })

  //   const res = await req.json()
  //   console.log(res)
  //   setMovies(res)
  // }

  return (
    <div className="app">
      <h1>Movie Database</h1>
      <br></br>
      <br></br>
      {/* <Register />
      <Login setter={setUser} setToken={setToken}/> */}
      <UserModal setter={setUser} setToken={setToken}/>
      {user ? 
      <>
      <DisplayUsers />
      <NameEdit token={token}/>
      <EmailEdit token={token}/>
      <PasswordEdit token={token}/>
      <AccountDelete token={token}/>
      <MovieCard movieListState={movieListState} setMovieListState={setMovieListState}/>
      {/* <div className="search">
        <input
            placeholder='Search for a film'
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value) }
        />
        <img 
          src={SearchIcon}
          alt='search'
          onClick={() => searchFilms(searchTerm)}
        />
      </div> */}
      {/* { movies?.length > 0 
        ?(
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      } */}
      </>
      : <h2>Login to search for a movie</h2>}
      <br></br>
    </div>
  )
}

export default App;


