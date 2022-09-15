import React from 'react' 
import { useState } from "react";
import { register } from '../utils';

const Register = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        await register(name, email, password)
    }

    return (
        <form onSubmit ={submitHandler}>
            <label> Name:
                <input onChange={(event) => setName(event.target.value)} />
            </label>
            <br></br>

            <label> Email:
                <input onChange={(event) => setEmail(event.target.value)} />
            </label>
            <br></br>

            <label> password:
                <input onChange={(event) => setPassword(event.target.value)} />
            </label>
            <br></br>
            <button type='submit'>Click here to signup</button>
        </form>
    )
}

export default Register