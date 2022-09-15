import React from 'react' 
import { useState } from "react";
import { login } from '../utils';

const Login = ({setter, setToken}) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        let token = await login(email, password, setter)
        setToken(token)
    }

    return (
        <form onSubmit ={submitHandler}>
            <label> Email:
                <input onChange={(event) => setEmail(event.target.value)} />
            </label>
            <br></br>

            <label> password:
                <input onChange={(event) => setPassword(event.target.value)} />
            </label>
            <br></br>
            <button type='submit'>Click here to login</button>
        </form>
    )
}

export default Login