import React ,{useState}from 'react'
import {Link,useHistory} from 'react-router-dom'

function AdminDetails() {

    const AdminLogin = "chay@123"
    const AdminPassword = "chay123"
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const history = useHistory()
     const Clickhandler = () =>{
      
         if(username== AdminLogin& password ==AdminPassword){
            alert(`${username}  ${password}`)
             history.push("/flightmangement")
         }
         else{
             alert("incorrect details")
         }
     }

    return (
        <div>
        <input 
        type="text" 
        name ="username" 
        value = {username}
        onChange = {e =>{setUsername(e.target.value)}}
        placeholder = "username"
        />
        
        <input 
        type="password" 
         name ="password"
         value ={password}
         onChange = {e=>{setPassword(e.target.value)}}
         placeholder = "password"
         />
       
        <button onClick = {Clickhandler}>login</button>
    
      </div>
    )
}

export default AdminDetails