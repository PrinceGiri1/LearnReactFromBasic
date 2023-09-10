import React, {Component} from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: "Welcome to Explore Edify, Please Subscribe my youtube channel."
        }
    }

    changeMessage() {
        this.setState({
            message: "Thanks you for Subcribe the channel."
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subcribe</button>
            </div>
        )
    }
}

export default Message;