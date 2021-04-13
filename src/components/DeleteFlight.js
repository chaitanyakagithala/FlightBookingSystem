import axios from 'axios'
import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'

function DeleteFlight() {
    const [flightNumber,setValue] = useState(0)
    const history = useHistory()
 const eventHandler = async()=>{
  const response = await axios.post(`/deleteFlight ${flightNumber}`)
   response.data ? history.push("/flightmangement") : alert("give valid flightNumber")
 }
    return ( 
        <div>
            <h1>Make sure you want to delete Flight</h1>
            <label>flightNumber</label>
                <input type="text"
                    value={value.flightNumber}
                    onChange={e => setValue({  flightNumber: e.target.value })}
                />
                <button onClick = {eventHandler}> Delete</button>
        </div>
    )
}

export default DeleteFlight
