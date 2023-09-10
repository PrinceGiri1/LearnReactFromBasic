import React from 'react';
// function Invited({name, herename})
function Invited(props) {
    // Destructureing
    // const {name, heroname} = props
    return(
    <div>
        <h1>Welcome to Explore Edify {props.name} work as {props.profe}</h1>
         {props.children}
    </div>
    )
}
// Notes: Props are immulable means i cannt change. so when we need changes in props then we use state.
export default Invited;