import { useEffect, useState } from "react";
import "./App.css"
import MovieCard from "./components/MovieCard";
import UserModal from "./components/UserModal";
import AccountModal from "./components/AccountModal";
import MovieModal from "./components/MovieModal";
import MovieSearch from "./components/MovieSearch";


const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([])
  const [movieListState, setMovieListState] = useState([])
  const [user, setUser]= useState()
  const [token, setToken] = useState("")

  return (
    <div className="main">
      <h1>Movie Database</h1>
      <br></br>
      <br></br>
      {!user ?
      <>
      <UserModal setter={setUser} setToken={setToken}/>
      </>
      : <h2>User: {user} is logged in</h2>}
      {user ? 
      <div className="navDiv">
        <div id="manageNav">
          <AccountModal />
          <MovieModal />
        </div>
        <div id="searchNav">
          <MovieSearch />
          <MovieCard movieListState={movieListState} setMovieListState={setMovieListState}/>
        </div>
      </div>
      : <h2>Login to search for a movie</h2>}
      <br></br>
    </div>
  )
}

export default App;


