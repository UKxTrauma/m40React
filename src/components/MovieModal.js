import Modal from 'react-modal'
import { useState } from 'react'
import '../movieModal.css';
import MovieAdd from "./MovieAdd";
import TitleEdit from "./TitleEdit";
import ActorEdit from "./ActorEdit";
import MovieDelete from "./MovieDelete";
import MoviesDelete from "./MoviesDelete";
Modal.setAppElement('#root');

const MovieModal = ({token}) => {
    const [movieStateModal, showMovieStateModal] = useState(false)
    function openMovieModal() { showMovieStateModal(true); }
    function closeMovieModal() { showMovieStateModal(false); }

    return (
        <div className="imageBox">
            <button onClick={openMovieModal} id="movies">Manage Movies</button>
            <Modal isOpen={movieStateModal} onRequestClose={closeMovieModal} className="modalContent" contentLabel="Example Modal" overlayClassName="modalZ">
                <MovieAdd />
                {/* <TitleEdit token={token} />
                <ActorEdit token={token} />
                <MovieDelete token={token} />
                <MoviesDelete token={token} /> */}
            </Modal>
        </div>
    )
}

export default MovieModal