import axios from 'axios'
import React,{useState,useEffect,useRef} from 'react'
import {Link} from 'react-router-dom'

function Flights() {

const [flights,setFlight] = useState([])
const [flightNum,setFlightnum] = useState(0)
const inputRef = useRef(null)

const eventHandler = ()=>{
  console.log(flightNum )
}
useEffect(()=>{
  axios.get("/getAllFlights")
  .then((response=>{
    setFlight(response.data)
    setFlightnum(inputRef.current.data)
  }))
},[])

  return (

    <>
      <button> Booking history</button>
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
              <td ref = {inputRef}>{item.flightNumber}</td>
              <td>{item.arrivalTime}</td>
              <td>{item.departureTime}</td>
              <Link to = "/bookticket">
              <button onClick = {eventHandler}> book</button>
              </Link>
            </tr>
          })}
        </tbody>
      </table>

    </>
  )
}

export default Flights 