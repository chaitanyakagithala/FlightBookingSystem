import axios from 'axios'
import React,{useState,useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { FlightContext } from './UserContext'

function DeleteFlight() {
   const history = useHistory() 
  //const [flightNum,setFlightNum] = useState(0)
 const {flightNumber} = useContext(FlightContext)
 const eventHandler =  ()=>{
     axios.delete(`/deleteFlight/${flightNumber}`)
     .then(response =>{
        alert(response.data)
        history.push("/flightmangement")
     })
     .catch(error =>{
         alert("cannot delete flights with bookings ")
     })
    
 }
 
    return ( 
        <div>
            <h1>Make sure you want to delete Flight</h1>
             <button onClick = {eventHandler}> delete Flight</button>
             <h2> No</h2>
             <Link to = "/flightmangement">
             <button> Back</button>
             </Link>
        </div>
    )
}

export default DeleteFlight
