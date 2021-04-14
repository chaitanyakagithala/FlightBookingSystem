import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import { FlightContext, UserContext } from './UserContext';



function Passenger() {
    const { flightNumber } = useContext(FlightContext)
    const { userId } = useContext(UserContext)

    const history = useHistory()
    const [value, setValue] = useState({ pnrNumber: 10, passengerName: "", phoneNumber: "", flight: { flightNumber }, user: { userId } })

    const eventHandler = async e => {
        e.preventDefault()

        const response = await axios.post(`/bookTicket`, value)
        const data = await response.data
        console.log(data)
        console.log(response.status)

        if (response.status === 200) {
            alert(`${data}`)
            history.push("/flights")
        }

    }

    console.log({ userId, flightNumber })
    return (


        <div>
            <form onSubmit={eventHandler}>
                {/* <label>pnrNumber</label>
                <input type="text"
                    value={value.pnrNumber}
                    onChange={e => setValue({ ...value, pnrNumber: e.target.value })}
                /> */}
                <label>passengerName</label>
                <input type="text"
                    required
                    value={value.passengerName}
                    onChange={e => setValue({ ...value, passengerName: e.target.value })}
                />
                <label>phoneNumber</label>
                <input type="text"
                    required
                    pattern="[7-9]{1}[0-9]{9}"
                    title="Phone number with 7-9 and remaing 9 digit with 0-9"
                    value={value.phoneNumber}
                    onChange={e => setValue({ ...value, phoneNumber: e.target.value })}
                />

                <button type="submit"> Confirm </button>
            </form>

        </div>

    )
}

export default Passenger

