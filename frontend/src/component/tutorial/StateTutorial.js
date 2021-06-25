import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
        /*Constructor late method binding*/
        // this.counter= this.counter.bind(this);
        this.counter = this.counter.bind(this)
    }
    /*Internal methods*/
    counter(e){
        this.setState((prevState, props)=>({count:  parseInt(prevState.count) + parseInt(e.target.value)}))
    }

    // componentWillMount() {
    //
    // }
    //
    // componentDidMount() {
    //
    // }
    //
    // componentWillReceiveProps(nextProps) {
    //
    // }
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //
    // }
    //
    // componentWillUpdate(nextProps, nextState) {
    //
    // }
    //
    // componentDidUpdate(prevProps, prevState) {
    //
    // }
    //
    // componentWillUnmount() {
    //
    // }

    viewer(e){
        // return(
            // <di>{value + this.state.count}</di>
            console.log(this.state.count)
            e.preventDefault();
        // )
    }
    render() {
        const {value} = this.props;

        if(value === true){
            return (
            <div>
               <form onSubmit={this.viewer.bind(this)}>
                   <label>
                    Name:
                    <input type="text"  onChange={this.counter}/>
                    </label>

                   <input type="submit" value="Submit"/>
               </form>
            </div>
        );
        }
        else {

        }

    }
}

// MyComponent.propTypes = {};

export default MyComponent;
