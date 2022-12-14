import React from 'react' 
import { useState } from "react";
import { movieDelete } from '../utils';

const MovieDelete = ({token}) => {
    const [confirm, setConfirm] = useState(false)

    const submitHandler = async (event) => {
        event.preventDefault()
        if(confirm){
            await movieDelete(token)
        }
    }

    const confirmation = async (val) => {
        if(val.target.value === 'DELETE'){
            await setConfirm(true)
        } else {
            console.log('not confirmed')
        }
    }

    return (
        <form onSubmit ={submitHandler} className='showUser hideUser'>
            <label> Delete your account:<br></br>
                <input onChange={confirmation}
                placeholder='type "DELETE" to confirm' />
            </label>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default MovieDelete