
interface EmployeeCardProps {
    employee: {
         name: {
             first: string;
             last: string;
         };
         email: string;
         picture: {
             medium: string;
         };
     };
  }
   
  
  function EmployeeCard(props: EmployeeCardProps) {

    const {employee} = props
    
    return (
      <div>
         <figure className='DisplayEmployee'>
           <img src={employee.picture.medium} alt={employee.name.first} />
           <section className="information">
               <strong>{employee.name.first} {employee.name.last}</strong>
               <div>{employee.email}</div>
           </section>
         </figure>
      </div>
    );
  }
  
  export default EmployeeCard;