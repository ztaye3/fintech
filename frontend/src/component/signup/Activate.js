import React, {Component} from 'react';
import PropTypes from 'prop-types';
import activateAction from "../../redux/signup/activateAction";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";


class Activate extends Component {

    constructor(props) {
        super(props);

    }

    verify_account = e => {

        const {uid, token} = this.props.match.params;

        const userInput = {
            'uid': uid,
            'token': token
            }

        this.props.activateAction(userInput);

    }

    componentDidMount() {
        this.verify_account()
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

Activate.propTypes = {
    activateAction: PropTypes.func.isRequired,
};

export default connect(null, {activateAction})(withRouter(Activate));
