import React, {Component} from "react";

class Count extends Component {
    // Destructureing
    // const {name, heroname} = this.props
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    incrementValue() {
        this.setState({
            count: this.state.count + 1
        } 
        )
    }
    
    render(){
        return(
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={() => this. incrementValue()}>Increament</button>
            </div>
        )
    }
}

export default Count;