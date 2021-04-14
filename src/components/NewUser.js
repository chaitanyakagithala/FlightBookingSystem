import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

function NewUser() {
    const [value, setValue] = useState({ userEmail: "", password: "", name: "", phoneNumber: "" })
    const history = useHistory()
    const eventHandler = e => {
        e.preventDefault()
        axios.post("/createUser", value)
            .then(response => {
                const data =  response.data
                alert(`${data.name} ,you have  Created Account successfully`)
                history.push("/userlogin")

            })
            .catch(
                alert("username already exists")
            )

    }
    return (
        <div>
            <form onSubmit={eventHandler}>
                <label>EnterName*</label>
                <input type="text"
                    required
                    value={value.name}
                    onChange={e => setValue({ ...value, name: e.target.value })}
                />                <br />

                <label>userEmail*</label>
                <input type="email"
                    required
                    value={value.userEmail}
                    onChange={e => setValue({ ...value, userEmail: e.target.value })}
                />                <br />

                <label>password*</label>
                <input type="password"
                    required
                    value={value.password}
                    onChange={e => setValue({ ...value, password: e.target.value })}
                />                <br />

                <label>phoneNumber*</label>
                <input type="text"
                    required
                    pattern="[7-9]{1}[0-9]{9}"
                    title="Phone number with 7-9 and remaing 9 digit with 0-9"
                    value={value.phoneNumber}
                    onChange={e => setValue({ ...value, phoneNumber: e.target.value })}
                />
                <br />



                <button type="submit"> CreateAccount</button>


            </form>
        </div>
    )
}

export default NewUser