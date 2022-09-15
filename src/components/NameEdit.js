import React from 'react' 
import { useState } from "react";
import { editname } from '../utils';

const NameEdit = ({token}) => {
    const [name, setName] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        await editname(token, name)
    }

    return (
        <form onSubmit ={submitHandler}>
            <label> Update name:
                <input onChange={(event) => setName(event.target.value)}
                placeholder='enter new name' />
            </label>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default NameEdit