

import {resetPasswordConfirm} from "../../redux/login/loginAction";
import React, {Component, useState} from 'react';
import {withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {DASHBOARD_URL} from "../../utils/Constant";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import UpdatedComponent from "../../utils/StyleUtil";
import { FormControl} from "react-bootstrap";

class ResetPasswordConfirm extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            password: "",
            re_password: "",
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();

        const {uid, token} = this.props.match.params;

        const userInput = {
            'uid': uid,
            'token': token,
            'new_password': this.state.password,
            're_new_password': this.state.re_password
            }

        this.props.resetPasswordConfirm(userInput);
    }

    render() {
        const classes = this.props.classes;
        function Copyright() {
          return (
            <Typography variant="body2" color="textSecondary" align="center">
              {"Copyright © "}
              <Link color="inherit" href="https://klar.zekariashirpo.com/">
                Your Website
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          );
        }

        return (

        <Grid container component="main" className={classes.root}>
              <CssBaseline />
                  <Grid container justify="center" className={classes.image}>
                    <Grid
                      item
                      xs={12}
                      sm={8}
                      md={5}
                      component={Paper}
                      direction="row"
                      elevation={6}
                      square
                    >
                      <Grid className={classes.paper}>
                        <Avatar className={classes.avatar}>
                          <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                          Reset Password
                        </Typography>
                        <form className={classes.form} noValidate>

                          <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={this.onChange}
                            value={this.state.password}

                          />

                          <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="re_password"
                            label="Confirm Password"
                            type="password"
                            id="re_password"
                            autoComplete="re_password"
                            onChange={this.onChange}
                            value={this.state.re_password}

                          />

                          <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.onSubmit}
                          >
                            Reset
                          </Button>

                          <Box mt={5}>
                            <Copyright />
                          </Box>
                        </form>
                      </Grid>
                </Grid>
              </Grid>
    </Grid>

        );
    }
}

ResetPasswordConfirm.propTypes = {
    resetPasswordConfirm: PropTypes.func.isRequired
};

export default connect(null, {resetPasswordConfirm}) (withRouter(UpdatedComponent(ResetPasswordConfirm)));
