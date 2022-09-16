import React from 'react' 
import { useState } from "react";
import { editTitle } from '../utils';

const TitleEdit = ({token}) => {
    const [title, setTitle] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        await editTitle(token, title)
    }

    return (
        <form onSubmit ={submitHandler} className="showUser hideUser">
            <label> Update title:<br></br>
                <input onChange={(event) => setTitle(event.target.value)}
                placeholder='enter new title' />
            </label>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default TitleEdit