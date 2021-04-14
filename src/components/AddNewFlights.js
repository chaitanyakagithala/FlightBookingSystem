import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function AddNewFlights() {
    const history = useHistory()
    const [value, setValue] = useState({ flightNumber: "", arrivalTime: "", departureTime: "" })
    const eventHandler = (async (e) => {
        e.preventDefault()
        const response = await axios.post("/addFlight", value)
        const data = response.data
        if (response.status == 200) {
            alert(data)
        }
        else {
            alert("give valid details")
        }
        history.push("/flightmangement")

    })
    return (
        <div>
            <form onSubmit={eventHandler}>
                <label>flightNumber</label>
                <input type="text"

                    value={value.flightNumber}
                    onChange={e => setValue({ ...value, flightNumber: e.target.value })}
                />
                <br />

                <label>arrivalTime</label>
                <input type="text"
                    pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"
                    value={value.arrivalTime}
                    onChange={e => setValue({ ...value, arrivalTime: e.target.value })}
                />
                <br />
                <label>departureTime</label>
                <input type="text"
                    pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"
                    value={value.departureTime}
                    onChange={e => setValue({ ...value, departureTime: e.target.value })}
                />
                <br />

                <button type="submit"> Add </button>
            </form>
        </div>
    )
}

export default AddNewFlights
