import React from 'react';
import { useState } from "react";
import { displayUsers } from '../utils';

const DisplayUsers = () => {

    const [usernames, setUsernames] = useState([])

    const loadUsernames = async (event) => {
        event.preventDefault()
        let users = await displayUsers()
        console.log(users)
        setUsernames(users)
    }

    return (
        <form onSubmit ={loadUsernames} className='usernames'>
                {usernames.map((user, index) => (
                    <h3 key={index}>{user}</h3>
                ))}
            <button type='submit'>User list</button>
        </form>
    )
}
export default DisplayUsers
