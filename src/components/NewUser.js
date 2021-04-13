import React ,{useState}from 'react'
import {useHistory } from 'react-router-dom'
import axios from 'axios'

function NewUser() {
    const [value , setValue] = useState({userEmail :"",password : "",name:"",phoneNumber :""})
    const history=useHistory()
    const eventHandler =async e =>{
        e.preventDefault()
        console.log(value)
     const response =await axios.post("/createUser",value)
     const data=await response.data
     if(data!==null){
         alert(`${data.name} Created Account successfully`)
         history.push("/userlogin")
     }
        
        
    }
    return (
        <div>
            <form  onSubmit = {eventHandler}> 
            <label>EnterName*</label>
                <input type="text" 
                value= {value.name}
                onChange = {e => setValue({...value,name : e.target.value})}
                />
                <label>userEmail*</label>
                <input type="text" 
                value= {value.userEmail}
                onChange = {e => setValue({...value,userEmail : e.target.value})}
                />
                <label>password*</label>
                <input type="text" 
                value= {value.password}
                onChange = {e => setValue({...value,password:e.target.value})}
                />
                 <label>phoneNumber*</label>
                <input type="text" 
                value= {value.phoneNumber}
                onChange = {e => setValue({...value,phoneNumber : e.target.value})}
                />

            
              
                <button type = "submit"> CreateAccount</button>
                
               
            </form>
        </div>
    )
}

export default NewUser