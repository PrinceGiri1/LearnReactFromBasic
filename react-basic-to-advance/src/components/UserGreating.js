import React, { Component } from 'react'
// #conditional rendering
class UserGreating extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {
    // short circuit appro
    return this.state.isLoggedIn && <div>Welcome Prince!</div>
    // return(
    //     this.state.isLoggedIn ?
    //     <div>Welcome Prince!</div> :
    //     <div>Welcome Guest!</div>
    // )

    // Element variable appro
    // let message
    //     if (this.state.isLoggedIn) {
    //         message = <div>Welcome Prince!</div>
    //     } else {
    //         message = <div>Welcome Guest!</div>
    //     }
    
    // return <div>{message}</div>
    
    // if else appro

    // if (this.state.isLoggedIn) {
    //     return(
    //         <div>Welcome Prince!</div>
    //     )
    // } else {
    // return(
    //     <div>Welcome Guest!</div>
    // )}
    // return (
    //   <div>
    //     <h1>Hello Prince!</h1>
    //     <h1>Hello Guest!</h1>
    //   </div>
    // )
  }
}

export default UserGreating
