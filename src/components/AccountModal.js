import Modal from 'react-modal'
import { useState } from 'react'
import '../accountModal.css';
import DisplayUsers from "./DisplayUsers";
import NameEdit from "./NameEdit";
import EmailEdit from "./EmailEdit";
import PasswordEdit from "./PasswordEdit";
import AccountDelete from "./UserDelete";
Modal.setAppElement('#root');

const AccountModal = ({token}) => {
    const [accountStateModal, showAccountStateModal] = useState(false)
    function openAccountModal() { showAccountStateModal(true); }
    function closeAccountModal() { showAccountStateModal(false); }

    return (
        <div className="imageBox">
            <button onClick={openAccountModal} id="account">Manage account</button>
            <Modal isOpen={accountStateModal} onRequestClose={closeAccountModal} className="modalContent" contentLabel="Example Modal" overlayClassName="modalZ">
                <DisplayUsers />
                <NameEdit token={token} />
                <EmailEdit token={token} />
                <PasswordEdit token={token} />
                <AccountDelete token={token} />
            </Modal>
        </div>
    )
}

export default AccountModal