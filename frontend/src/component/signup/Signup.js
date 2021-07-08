import React, {Component, useState} from 'react';
import {withRouter, Redirect, Link as RouterLink} from "react-router-dom";
import signupAction from "../../redux/signup/signupAction";
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
import Container from "@material-ui/core/Container";



class Signup extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            username : "",
            password : "",
            re_password: "",
            email : "",
            first_name : "",
            last_name : "",
            is_moderator : false,
            is_reporter : false,
        }
    }

    onChange = e => {

        const target = e.target;
        const  value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value    });
    }

    onSignupClick = e => {
        e.preventDefault();
        console.log(this.state)
       if(this.state.re_password === this.state.password){
            const userInput = {
            username: this.state.username,
            password: this.state.password,
            re_password: this.state.re_password,
            email : this.state.email,
            first_name : this.state.first_name,
            last_name : this.state.last_name,
            is_moderator : this.state.is_moderator === "on",
            is_reporter : this.state.is_reporter === "on",
        }
        this.props.signupAction(userInput);
       }
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
        
        if (this.props.isAuthenticated) {
            return <Redirect to='/dashboard' />
        }
        else if (this.props.signupUser.isSubmitted) {
            return (
                 <div className={classes.heroContent}>
                      <Container maxWidth="sm">
                        <Typography
                          component="h1"
                          variant="h2"
                          align="center"
                          color="textPrimary"
                          gutterBottom
                        >
                          Welcome to Klar!
                        </Typography>
                        <Typography
                          variant="h5"
                          align="center"
                          color="textSecondary"
                          paragraph
                        >
                          Account activation link sent to <div className={classes.colorPrimary}>{this.state.email}</div>
                        </Typography>
                        <div className={classes.heroButtons}>
                          <Grid container spacing={2} justify="center">
                            <Grid item>
                              <Button
                                component={RouterLink}
                                to={"/login"}
                                variant="contained"
                                color="primary"
                              >
                                Sign In
                              </Button>
                            </Grid>
                          </Grid>
                        </div>
                      </Container>
                    </div>
            )
        }
        else {
            return(
            
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
                          Sign Up
                        </Typography>
                        <form className={classes.form} noValidate>

                         <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="User Name"
                            name="username"
                            autoComplete="username"
                            onChange={this.onChange}
                            value={this.state.username}
                            onInvalid={this.props.signupUser.usernameError[0]}
                            autoFocus
                          />

                            <FormControl.Feedback type="invalid"/>
                            {this.props.signupUser.usernameError[0]}

                            <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="first_name"
                            label="First Name"
                            name="first_name"
                            autoComplete="first_name"
                            onChange={this.onChange}
                            value={this.state.first_name}
                            autoFocus
                          />

                            <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="last_name"
                            label="Last Name"
                            name="last_name"
                            autoComplete="last_name"
                            onChange={this.onChange}
                            value={this.state.last_name}
                            autoFocus
                          />

                          <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={this.onChange}
                            value={this.state.email}
                            onInvalid={this.props.signupUser.emailError[0]}
                            onError={this.props.signupUser.emailError[0]}
                            autoFocus
                          />
                           <FormControl.Feedback type="invalid"/>
                          <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="password"
                            onChange={this.onChange}
                            value={this.state.password}
                            onInvalid={this.props.signupUser.passwordError[0]}
                          />
                            <FormControl.Feedback type="invalid"/>
                            {this.props.signupUser.passwordError[0]}
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
                            onInvalid={this.props.signupUser.passwordError[0]}
                          />

                            <FormControl.Feedback type="invalid"/>
                            {this.props.signupUser.passwordError[0]}

                            <FormControlLabel
                            control={<Checkbox color="primary"
                                        checked={this.state.is_reporter}
                                        name="is_reporter"
                                        onChange={this.onChange}
                                        id="is_reporter"
                            />}
                            label="News Reporter"
                          />
                            <FormControlLabel
                            control={<Checkbox color="primary"
                                        checked={this.state.is_moderator}
                                        name="is_moderator"
                                        id="is_moderator"
                                        onChange={this.onChange}
                            />}
                            label="News Moderator"
                          />
                          <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.onSignupClick}
                          >
                            Sign Up
                          </Button>
                          <Grid container>

                            <Grid item>
                              <Link href="/login" variant="body2">
                                {"Already have an account? Sign In"}
                              </Link>
                            </Grid>
                          </Grid>
                          <Box mt={5}>
                            <Copyright />
                          </Box>
                        </form>
                      </Grid>
                </Grid>
              </Grid>
    </Grid>

        )
        }
    }
}

Signup.propTypes = {
  signupAction: PropTypes.func.isRequired,
  signupUser: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.any.isRequired

};

const mapStateToProps = state => ({
  signupUser: state.signupUser,
  isAuthenticated: state.loginUser.isAuthenticated
});

export default connect(mapStateToProps, {
  signupAction
})(withRouter(UpdatedComponent(Signup)));