import React from 'react' 
import { useState } from "react";
import { deleteaccount } from '../utils';

const AccountDelete = ({token}) => {
    const [confirm, setConfirm] = useState(false)

    const submitHandler = async (event) => {
        event.preventDefault()
        if(confirm){
            await deleteaccount(token)
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
        <form onSubmit ={submitHandler}>
            <label> Delete your account:
                <input onChange={confirmation}
                placeholder='type "DELETE" to confirm' />
            </label>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default AccountDelete
