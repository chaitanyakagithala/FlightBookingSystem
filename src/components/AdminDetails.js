import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

function AdminDetails() {

    const AdminLogin = "chay@123"
    const AdminPassword = "chay123"
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const Clickhandler = () => {

        if (username == AdminLogin & password == AdminPassword) {

            history.push("/flightmangement")
        }
        else {
            alert("incorrect details enter again")
        }
    }

    return (
        <div>
            <input
                type="text"
                required
                name="username"
                value={username}
                onChange={e => { setUsername(e.target.value) }}
                placeholder="username"
            />
            <br />
            <input
                type="password"
                name="password"
                required
                value={password}
                onChange={e => { setPassword(e.target.value) }}
                placeholder="password"
            />               
             <br />


            <button onClick={Clickhandler}>login</button>

        </div>
    )
}

export default AdminDetails