// Import React and Component from 'react'
import React, { Component } from 'react';

// Define your class component
class Welcome extends Component {
    // Render method should return JSX
    render() {
        return <h1>This is class component</h1>;
    }
}
// Notes : In Class Component props work like this.props.name here we can not defind props like fundctional component.
export default Welcome;