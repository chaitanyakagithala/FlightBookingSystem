import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function FlightManagement() {

    const [flights,setFlight] = useState([])
    const eventHandler = ()=>{
      
    }
    useEffect(()=>{
      axios.get("/getAllFlights")
      .then((response=>{
        setFlight(response.data)
    
      }))
    },[])
    
      return (
    
        <>
        <Link to = "addFlights">
        <button> Add  New FLights </button>
        </Link>
          <h2> Flights Management</h2>
          <table >
            <thead >
              <tr>
                <th >flightNumber</th>
                <th >arrivaltime</th>
                <th >departuretime</th>
    
              </tr>
            </thead>
            <tbody>
              {flights.map(item => {
                return <tr key={item.Id}>
                  <td >{item.flightNumber}</td>
                  <td>{item.arrivalTime}</td>
                  <td>{item.departureTime}</td>
                  
                </tr>
              })}
            </tbody>
          </table>
    
        </>
      )
    }

export default FlightManagement