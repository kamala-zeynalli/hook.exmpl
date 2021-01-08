import React, { useState } from 'react' ;

 function Count() {
   const [task , setTask ] = useState (0) 

   
   return(
       <div className="header"> 
          <h1> Number of my task: {task} </h1>
           <button className="add" onClick={ () => setTask (task + 1)} > Add </button> 
           <button className="back" onClick={() => setTask("")}> Clear </button>
         
         <h3> New task list:</h3>

        
       </div>
   )
}
export default Count;
