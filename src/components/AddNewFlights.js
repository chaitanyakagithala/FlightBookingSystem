import axios from 'axios'
import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'

function AddNewFlights() {
    const history = useHistory()
    const [value,setValue] = useState({flightNumber:0,arrivalTime:"",departureTime:""})
    const eventHandler =(async()=>{
        const response = await axios.post("/addFlight",value)
        const data = response.data
        if(response.status == 200){
            alert(data)
           history.push("/flightmangement")
        }
        else{
            alert("give valid details")
        }

    })
    return (
        <div>
            <form onSubmit={eventHandler}>
                <label>flightNumber</label>
                <input type="text"
                    value={value.flightNumber}
                    onChange={e => setValue({ ...value, flightNumber: e.target.value })}
                />
                <label>arrivalTime</label>
                <input type="text"
                    value={value.arrivalTime}
                    onChange={e => setValue({ ...value, arrivalTime: e.target.value })}
                />
                <label>departureTime</label>
                <input type="text"
                    value={value.departureTime}
                    onChange={e => setValue({ ...value, departureTime: e.target.value })}
                />

                <button type="submit"> Add </button>
            </form>
        </div>
    )
}

export default AddNewFlights
