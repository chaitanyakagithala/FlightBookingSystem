import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import {Link,useHistory} from 'react-router-dom'
import { FlightContext } from './UserContext'

function FlightManagement() {

   const {setFlightNum} = useContext(FlightContext)
   const history = useHistory()
    const [flights,setFlight] = useState([])
    const eventHandler = (flightNum)=>{
        console.log(flightNum )
        function myFunc(e){
        setFlightNum(flightNum)
        history.push("/deleteFlight")
        }
        return myFunc
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
                  <button onClick = {eventHandler(item.flightNumber)}>Remove flight</button>
                  
                </tr>
              })}
            </tbody>
          </table>
    
        </>
      )
    }

export default FlightManagement