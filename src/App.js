import { useEffect, useState } from "react";
import "./App.css"
import DisplayMovies from "./components/DisplayMovies";
import UserModal from "./components/UserModal";
import AccountModal from "./components/AccountModal";
import MovieModal from "./components/MovieModal";
import MovieSearch from "./components/MovieSearch";
import animated from './images/animated.mp4';


const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([])
  const [movieListState, setMovieListState] = useState([])
  const [user, setUser] = useState()
  const [token, setToken] = useState("")

  return (
    <div className="main">
      <video autoPlay muted loop id="myVideo">
        <source src={animated} type='video/mp4' />
        Your browser doe snot support the video tag.
      </video>
      <div className="contrast">
        {!user ?
          <>
            <h1 className="title">BRETT'S MOVIE DATABASE</h1>
            <br></br>
            <br></br>
            <h2>log-in for more functionality</h2>
            <div>
              <UserModal setter={setUser} setToken={setToken} movieListState={movieListState} setMovieListState={setMovieListState}/>
              <br></br>
            </div>
          </>
          :
          <>
            <h1 className="title">BRETT'S MOVIE DATABASE</h1>
            <br></br>
            <br></br>
            <h2>User: {user} is logged in</h2>
            <div className="navDiv">
              <div id="manageNav">
                <AccountModal token={token} />
                <DisplayMovies movieListState={movieListState} setMovieListState={setMovieListState} />
                <MovieModal />
              </div>
              <div id="searchNav">
                <MovieSearch />
              </div>
            </div>
          </>}

      </div>
    </div>



    // <div className="main">
    //   <video autoPlay muted loop id="myVideo">
    //     <source src={animated} type='video/mp4'/>
    //     Your browser doe snot support the video tag.
    //   </video>
    //   <div className="contrast">
    //     {!user ?
    //       <>
    //         <h1 className="title">BRETT'S MOVIE DATABASE</h1>
    //         <br></br>
    //         <br></br>
    //         <UserModal setter={setUser} setToken={setToken} />
    //       </>
    //       : 
    //       <>
    //         <h1 className="title">BRETT'S MOVIE DATABASE</h1>
    //         <br></br>
    //         <br></br>
    //         <h2>User: {user} is logged in</h2>
    //       </>}
    //     {user ?
    //       <div className="navDiv">
    //         <div id="manageNav">
    //           <AccountModal token={token} />
    //           <MovieModal />
    //         </div>
    //         <div id="searchNav">
    //           <MovieSearch />
    //         </div>
    //       </div>
    //     :
    //       <h2>log-in for more functionality</h2>}
    //     <div className="outerUserList">
    //       <DisplayMovies movieListState={movieListState} setMovieListState={setMovieListState} />
    //       <br></br>
    //     </div>
    //   </div>
    // </div>
  )
}

export default App;


