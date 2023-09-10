 import React from 'react'
 
 function NameList() {
    const names = ['prince', 'priyana', 'ashwani']
   return (
     <div>
       {/* <h1>This is {names[0]}</h1>
       <h1>This is {names[1]}</h1>
       <h1>This is {names[2]}</h1> */}

       {
        names.map(name => <h1>{name}</h1>)
       }
     </div>
   )
 }
 
 export default NameList
 