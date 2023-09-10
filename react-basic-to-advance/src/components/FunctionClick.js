import React from 'react'

function FunctionClick() {
    function handleEvent(){
        console.log("Clicked on button.")
    }
    return(
        <div>
            <h1>This is Event Handler for functional components for more check developer tools</h1>
            <button onClick={handleEvent}>Click me</button>
        </div>
    )
}

export default FunctionClick
