/*
import { useState } from 'react'
import './App.css'
import EmployeeCard from './components/EmployeeCard'

const sampleEmployee = {
   name: {
     first: "Charlie",
     last: "THOMPSON",
   },
   email: "charlie.thompson@example.com",
   picture: {
     medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
   },
}

function App() {

  const [employees, setEmployee] = useState(sampleEmployee);

  const getEmployee = () => {
    // Send the request
    fetch("https://randomuser.me/api?nat=en")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data.results[0]);
      });
  };

  const [cardEmployee, setCardEmployee] = useState([])
  const ajoutValeur = ({employees}) => {
    setCardEmployee((ancienValeur) => [ancienValeur, {employees}]);
  }
  return (
    <div className="App">{
       cardEmployee.map((member) => {
        return (
       <EmployeeCard 
       employee={member}
       />
      )
      })}
       <button 
       type="button" 
       
       onClick = { () => ajoutValeur({employees})}>Get employee</button>
    </div>
  )
}

export default App

*/