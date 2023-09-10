import React, { Component } from 'react'

class ClassClick extends Component {
    handleEvent(){
        console.log('checked is work')
        alert("Thanks for click me")
    }
    
  render() {
    return (
      <div>
        <h1>This is Class Component for Event Handler</h1>
        <button onClick={this.handleEvent}>Class Event</button>
      </div>
    )
  }
}

export default ClassClick
