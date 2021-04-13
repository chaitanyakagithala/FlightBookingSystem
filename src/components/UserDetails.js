import React, { useState ,useContext} from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';
import { UserContext } from './UserContext';

function UserDetails() {
   const {setUserId} = useContext(UserContext)
    const history = useHistory()
    const [value, setValue] = useState({ userEmail: "", password: "" })

    const eventHandler = async e => {
        e.preventDefault()

        const response = await axios.get(`/getByUserEmailAndPassword/${value.userEmail}/${value.password}`)
        const data = await response.data
        if (data.userEmail != null) {
            console.log(data)
            history.push("/flights")
            console.log(data.userId)
            setUserId(data.userId)
        }
        else{
            alert("enter correct details")
        }

    }


    return (


        <div>
            <form onSubmit={eventHandler}>
                <label>userEmail*</label>
                <input type="text"
                    value={value.userEmail}
                    onChange={e => setValue({ ...value, userEmail: e.target.value })}
                />
                <label>password*</label>
                <input type="text"
                    value={value.password}
                    onChange={e => setValue({ ...value, password: e.target.value })}
                />

                <button type="submit"> login</button>
            </form>
            <br />

            <Link to="/userlogin/newuser">
                <button> Create account</button>
            </Link>

        </div>

    )
}

export default UserDetails

