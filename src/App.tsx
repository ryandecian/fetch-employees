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

  const [employees, setEmployees] = useState([sampleEmployee]);

  const getEmployee = () => {
    // Send the request
    fetch("https://randomuser.me/api?nat=en")
      .then((response) => response.json())
      .then((data) => {
        const newEmployee = data.results[0];
        setEmployees((ancienDonnee) => [...ancienDonnee, newEmployee]);
      });
  };

  return (
    <div className="CSSApp">
      <div className="cardCSS">
       {employees.map((employee, index) => (
       <EmployeeCard key={index} employee={employee} />
       ))}
       </div>
       <button 
       type="button" 
       
       onClick = {getEmployee}>Get employee</button>
    </div>
  )
}

export default App
