import axios from 'axios'
import React,{useState,useEffect,useContext} from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from './UserContext'

function BookHistory() {
    const [Passengers,setValue] =  useState([])
    const{userId} = useContext(UserContext)
 useEffect( async()=>{
   const response = await axios.get(`/bookHistory/${userId}` )
   setValue(response.data)
 })

    return (
        <>
          <Link to = "/userlogin">
         <button> Log Out</button>
       </Link>  
            <h2> Booking History</h2>
      <table >
        <thead >
          <tr>
            <th > pnrNumber</th>
            <th > passengerName</th>
            <th >phoneNumber</th>
            <th >Flight Number</th>
            <th >User ID</th>

          </tr>
        </thead>
        <tbody>
          {Passengers.map(item => {
            return <tr key={item.pnrNumber}>
              <td >{item.pnrNumber}</td>
              <td>{item.passengerName}</td>
              <td>{item.phoneNumber}</td>  
              <td>{item.flight}</td>  
              <td>{item.user}</td>  
   
                 
            </tr>
          })}
        </tbody>
      </table>
        </>
    )
}

export default BookHistory
