import React, {Component} from "react";

// function Greet(){
//     return <h1>Hello zekarias </h1>
// }



export function Greet(props){
    return(
        <div>{this.props.name}</div>
    )
}

export class GreetClass extends Component{
    constructor() {
        super()
        this.state ={
            message: "Welcome"
        }
    }
    changeState(){
        this.setState({
            message: "Thank you Mohit!"
        })
    }
    render() {return(
        <div>{this.props.name}
        <button onClick={() => this.changeState()}  >{this.state.message} </button></div>

    )
    }
}

export default GreetClass;

