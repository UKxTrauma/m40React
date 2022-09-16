import React from 'react' 
import { useState } from "react";
import { editpassword } from '../utils';

const PasswordEdit = ({token}) => {
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        await editpassword(token, password)
    }

    return (
        <form onSubmit ={submitHandler} className='showUser hideUser'>
            <label> Update password:<br></br>
                <input onChange={(event) => setPassword(event.target.value)}
                placeholder='enter new password' />
            </label>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default PasswordEdit