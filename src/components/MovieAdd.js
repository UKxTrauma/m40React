import React from 'react' 
import { useState } from "react";
import { movieAdd } from '../utils';

const MovieAdd = () => {
    const [title, setTitle] = useState()
    const [actor, setActor] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        await movieAdd(title, actor)
    }

    return (
        <form onSubmit ={submitHandler} className="formStyle">
                <input onChange={(event) => setTitle(event.target.value)} placeholder="title"/>
            <br></br>
                <input onChange={(event) => setActor(event.target.value)} placeholder="lead actor"/>
            <br></br>
            <button type='submit'>CREATE ENTRY</button>
        </form>
    )
}

export default MovieAdd