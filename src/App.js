import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage'
import  {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import AdminDetails from './components/AdminDetails'
import NewUser from './components/NewUser'
import UserDetails from './components/UserDetails'
import Flights from './components/Flights'
import FlightManagement from './components/FlightManagement'
import Passenger from './components/Passenger';
import AddNewFlights from './components/AddNewFlights';
import BookHistory from './components/BookHistory';
import { FlightContext, UserContext } from './components/UserContext';
import React ,{useState} from 'react'
import DeleteFlight from './components/DeleteFlight';

function App() {
  const [userId,setUserId] = useState('')
  const [flightNumber,setFlightNum] = useState("")
  
  return (
    <div className="App">
    <Router>
    <>
      <Homepage/>
      <Switch>
      <UserContext.Provider value = {{userId,setUserId:d=>{console.log(d);setUserId(d)}}}>
      <FlightContext.Provider value = {{flightNumber,setFlightNum}}>
     <Route path = "/bookticket" exact component = {Passenger}/>
      <Route path = "/adminlogin" exact component = {AdminDetails}/>
      <Route path = "/userlogin/newuser" component = {NewUser}/>
      
      <Route path = "/userlogin" exact component = {UserDetails}/>
      
      <Route path = "/flights" component = {Flights}/>
      <Route path = "/flightmangement" component ={FlightManagement}/>
      <Route path = "/addFlights" component = {AddNewFlights} />
      <Route path = "/bookHistory" component = {BookHistory}/>
      <Route path = "/deleteFlight" component = {DeleteFlight}/>
      </FlightContext.Provider>
      </UserContext.Provider>
      </Switch>
    </>
    </Router>
  </div>
  );
}

export default App;
