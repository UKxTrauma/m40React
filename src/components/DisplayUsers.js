import React from 'react';
import { useState } from "react";
import { displayUsers } from '../utils';

const DisplayUsers = ({wide, setWide}) => {

    const [usernames, setUsernames] = useState([])

    const [toggle, setToggle] = useState(false);

    const loadUsernames = async (event) => {
        event.preventDefault()
        let users = await displayUsers()
        console.log(users)
        setUsernames(users)
    }

    return (
        // onClick={() => setToggle(!toggle)}
        <form onSubmit ={loadUsernames}>
            <button type='submit' onClick={() => {setWide(!wide); setToggle(!toggle)}} >DISPLAY ALL USERS</button>
                <div className={toggle ? "showUser" : "hideUser"}>
                    <div className="userList">
                        {usernames.map((user, index) => (
                            <h1 key={index}>{user}</h1>
                        ))}
                    </div>
                </div>
        </form>
    )
}
export default DisplayUsers
