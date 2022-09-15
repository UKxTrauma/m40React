import Modal from 'react-modal'
import { useState } from 'react'
import '../modal.css';
import Register from './Register';
import Login from './Login';
Modal.setAppElement('#root')

const UserModal = ({setter, setToken}) => {
    const [loginStateModal, showLoginStateModal] = useState(false)
    const [registerStateModal, showRegisterStateModal] = useState(false)
    function openLoginModal() { showLoginStateModal(true); }
    function openRegisterModal() { showRegisterStateModal(true); }
    function closeLoginModal() { showLoginStateModal(false); }
    function closeRegisterModal() { showRegisterStateModal(false); }

    return (
        <div className="imageBox">
            <div>
                <button onClick={openLoginModal} id="Login">Log-in</button>
                <Modal isOpen={loginStateModal} onRequestClose={closeLoginModal} className="modalContent" contentLabel="Example Modal" overlayClassName="modalZ">
                   <Login setter={setter} setToken={setToken} />
                </Modal>
            </div>
            <div>
                <button onClick={openRegisterModal} id="Register">Register</button>
                <Modal isOpen={registerStateModal} onRequestClose={closeRegisterModal} className="modalContent" contentLabel="Example Modal" overlayClassName="modalZ">
                   <Register />
                </Modal>
            </div>
        </div>
    )
}

export default UserModal