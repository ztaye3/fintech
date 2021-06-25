import React, {Component} from 'react';
// import {action} from "../redux"
import {connect} from "react-redux";
import {work} from "./action";

class MyComponent extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                <h1>{this.props.signup}</h1>
                <button onClick={this.props.pleasework}>Sign up</button>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        signup: state.username
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        pleasework: () => dispatch(work())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MyComponent);
