import React ,{useState,useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';



function Passenger() {
    const history = useHistory()
    const [value, setValue] = useState({ pnrNumber: 0,passengerNamee: "",phoneNumber:"",flight:{flightNumber:"452"},user:{userId:"1"} })

    const eventHandler = async e => {
        e.preventDefault()
    
     const response =await axios.post(`/bookTicket`,value)
     const data = await response.data
     console.log(data)
     console.log(response.status)

    if( response.status==200){
        alert(`${data}`)
        history.push("/flights")
     }
     
}
   

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
                    value={value.passengerName}
                    onChange={e => setValue({ ...value, passengerName: e.target.value })}
                />
                <label>phoneNumber</label>
                <input type="text"
                    value={value.phoneNumber}
                    onChange={e => setValue({ ...value, phoneNumber: e.target.value })}
                />

                <button type="submit"> Confirm </button>
            </form>
        
        </div>
        
    )
}

export default Passenger

