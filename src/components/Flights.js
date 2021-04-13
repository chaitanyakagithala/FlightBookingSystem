import axios from 'axios'
import React,{useState,useEffect,useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import { FlightContext, UserContext } from './UserContext'

function Flights() {

 const userId = useContext(UserContext)
 const history = useHistory()
 console.log(userId)
const [flights,setFlight] = useState([])
const {setFlightNum} = useContext(FlightContext)

const eventHandler = (flightNum)=>{
  console.log(flightNum )
  function myFunc(e){
  setFlightNum(flightNum)
  history.push("/bookticket")
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
    <Link to = "/bookHistory">
    <button> Booking history</button>
    </Link>
    <Link to = "/userlogin">
    <button> Log Out</button>
    </Link>
     
      <h2>Flight Tickect Booking</h2>
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
              
              <button onClick = {eventHandler(item.flightNumber)}> book</button>
              
            </tr>
          })}
        </tbody>
      </table>

    </>
  )
}

export default Flights 