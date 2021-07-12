import React, {Component} from 'react';
import PropTypes from 'prop-types';
import activateAction from "../../redux/signup/activateAction";
import {Link as RouterLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";
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
import UpdatedComponent from "../../utils/StyleUtil";
import { FormControl} from "react-bootstrap";
import Container from "@material-ui/core/Container";
import {Copyright} from "../../utils/StyleUtil";
import LinearProgress from '@material-ui/core/LinearProgress';
import { ListItem, withStyles } from '@material-ui/core';
import CardContent from "@material-ui/core/CardContent";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';import Fab from "@material-ui/core/Fab";
import CardMedia from "@material-ui/core/CardMedia";
import List from "@material-ui/core/List";


class Activate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            is_moderator : false,
            is_reporter : false,
            profile_picture: null,
            profilePicturePreview: null,

        }
    }

    // Verify account
    verify_account = e => {

        const {uid, token} = this.props.match.params;
        const userInput = {
            'uid': uid,
            'token': token
            }
        this.props.activateAction(userInput, "activate");
    }

    // Configure state for view selection
    configureState = e => {
        this.props.activateAction(null, "changeState")
    }

    // Configure account
    configureAccount = e => {

        const userInput = {
                            is_moderator : this.state.is_moderator ,
                            is_reporter : this.state.is_reporter,
        }
        this.props.activateAction(userInput, "configureAccount");
    }

    // Submit account choice and profile picture
    submitAccountDetails = e => {
        e.preventDefault()

        const userInput = {

                is_moderator : this.props.is_moderator,
                is_reporter : this.props.is_reporter,
                profile_picture: this.state.profile_picture
        }

        this.props.activateAction(userInput, "setupAccountDetails");
    }

    onChange = e => {

        const target = e.target;
        const  value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value    });

        // Set image
       if(e.target.files != null){
            this.setState({
          profile_picture: e.target.files[0],
          profilePicturePreview: URL.createObjectURL(e.target.files[0]),

        });
        }
       }

    // Skip to login
    skipAccountSetup = () => {
        this.props.activateAction(null, "skip")
    }

    // Send user 'uid' and 'token' for account verification during component mount
    componentDidMount() {

        // If the component called for the first time
        if(!this.props.isAccountActivated && !this.props.configureAccountType && !this.props.uploadProfilePicture)
            this.verify_account()
        }

    render() {

        const classes = this.props.classes;
        const flexContainer = {
          display: 'flex',
          flexDirection: 'row',
          padding: 0,
        };

        // Check if account is already activated
        if(this.props.isAccountActivated){

            // If account configuration is true
           if(this.props.configureAccountType){

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
                                  <Typography
                                  component="h2"
                                  variant="h4"
                                  align="center"
                                  color="textPrimary"
                                  gutterBottom
                                >
                                Your account has been activated successfully!
                                </Typography>
                                  <br/>

                                <Typography
                                      variant="h5"
                                      align="center"
                                      color="textSecondary"
                                      paragraph
                                    >
                                  Let's do a quick profile setup

                                </Typography>
                                  <br/><br/>

                                  <Container  maxWidth="xl">
                                    <Container maxWidth="md" style={{paddingLeft: '60px'}}>
                                        <Avatar className={classes.avatar}>
                                    <LockOutlinedIcon />
                                    </Avatar>
                                    </Container>
                                  <Typography
                                      variant="h5"
                                      color="textPrimary"
                                      paragraph
                                    >
                                  Account Type
                                </Typography>

                                  <form className={classes.form} noValidate>
                                  <FormControlLabel
                                    control={<Checkbox color="primary"
                                                checked={this.state.is_reporter}
                                                name="is_reporter"
                                                id="is_reporter"
                                                onChange={this.onChange}
                                    />}
                                    label="News Reporter"
                                  />
                                <br/>
                            <FormControlLabel
                                    control={<Checkbox color="primary"
                                                checked={this.state.is_moderator}
                                                name="is_moderator"
                                                id="is_moderator"
                                                onChange={this.onChange}
                                    />}
                                    label="News Moderator"
                                  />
                                      <br/><br/>
                                 <Container>
                                     <Button
                                    color="secondary"
                                    component={RouterLink}
                                    variant="outlined"
                                    onClick={this.configureState}
                                    style={{ borderRadius: 25, width: 100, height: 32, borderColor: "green",float: "left"
                                      }}
                                    >
                                    <Typography style={{color: 'green', fontSize: 'large', fontWeight: 'bold',  }}>Skip</Typography>
                                  </Button>
                                      <Button
                                    component={RouterLink}
                                    variant="contained"
                                    color="primary"
                                    onClick={this.configureAccount}
                                    style={{ borderRadius: 25, width: 100, height: 30, float: "right" }}
                                  >
                                    <Typography style={{color: 'white', fontSize: 'large', fontWeight: 'bold' }}>Next</Typography>
                                  </Button>

                                 </Container>
                                  <Box mt={5}>
                                    <Copyright />
                                  </Box>
                                  </form>
                            </Container>
                              </Grid>
                            </Grid>
                          </Grid>
                    </Grid>

                )
           }

           // If profile picture is true
           else if(this.props.uploadProfilePicture){

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
                              <Typography
                              component="h2"
                              variant="h4"
                              align="center"
                              color="textPrimary"
                              gutterBottom
                            >
                            Your account has been activated successfully!
                            </Typography>
                              <br/>

                            <Typography
                                  variant="h5"
                                  align="center"
                                  color="textSecondary"
                                  paragraph
                                >
                              Let's do a quick profile setup

                            </Typography>
                              <br/><br/>

                            <Container  maxWidth="xl" justify="center" alignItems="center">
                              <Typography
                                  variant="h5"
                                  color="textPrimary"
                                  paragraph
                                >
                              Upload a profile picture
                              </Typography>

                              <CardContent>
                                  <Grid container justify="center" alignItems="center">
                                    {this.state.profilePicturePreview && (

                                  <div style={{paddingRight: '15px'}}>
                                    <img  height="100px" width="130px"  style={{borderRadius: "45%"}} src={this.state.profilePicturePreview} alt="" />
                                  </div>
                                     )}
                                      <input
                                      accept="image/*"
                                      style={{display: "none"}}
                                      id="contained-button-file"
                                      multiple
                                      type="file"
                                      onChange={this.onChange}
                                    />

                                    <label htmlFor="contained-button-file">
                                      <Fab component="span" className={classes.button}>
                                        <CloudUploadIcon style={{color: "green"}}/>
                                      </Fab>
                                    </label>
                                  </Grid>
                               </CardContent>

                                  <br/><br/>
                              <List style={flexContainer}>
                                  <ListItem>
                                      <Button
                                        component={RouterLink}
                                        variant="contained"
                                        color="primary"
                                        onClick={this.configureState}
                                        style={{ borderRadius: 25, width: 100, height: 30}}
                                      >
                                        <Typography style={{color: 'white', fontSize: 'large', fontWeight: 'bold' }}>Previous</Typography>
                                      </Button>
                                  </ListItem>

                                  <ListItem>
                                      <Button
                                        color="secondary"
                                        component={RouterLink}
                                        variant="outlined"
                                        onClick= {this.skipAccountSetup}
                                        style={{ borderRadius: 25, width: 100, height: 32, borderColor: "green"
                                          }}
                                        >
                                        <Typography style={{color: 'green', fontSize: 'large', fontWeight: 'bold'}}>Skip</Typography>
                                      </Button>
                                  </ListItem>

                                  <ListItem>
                                      <Button
                                        component={RouterLink}
                                        variant="contained"
                                        color="primary"
                                        onClick= {this.submitAccountDetails}
                                        style={{ borderRadius: 25, width: 100, height: 30}}
                                      >
                                        <Typography style={{color: 'white', fontSize: 'large', fontWeight: 'bold' }}>Finish</Typography>
                                     </Button>

                                  </ListItem>

                              </List>

                              <Box mt={5}>
                                <Copyright />
                              </Box>

                            </Container>
                          </Grid>
                        </Grid>
                      </Grid>
                </Grid>
            )

           }
           else {
                return (
                    <div>

                    </div>
                );
           }
        }
        else{
            return (
            <div>

            </div>
        );
        }
    }
}

Activate.propTypes = {
    activateAction: PropTypes.func.isRequired,
    isAccountActivated: PropTypes.bool.isRequired,
    configureAccountType: PropTypes.bool.isRequired,
    uploadProfilePicture: PropTypes.bool.isRequired,
    is_moderator : PropTypes.bool.isRequired,
    is_reporter : PropTypes.bool.isRequired,
};

const mapStateToProps = state =>{
    return{
        isAccountActivated: state.activateUser.isAccountActivated,
        configureAccountType: state.activateUser.configureAccountType,
        uploadProfilePicture: state.activateUser.uploadProfilePicture,
        is_moderator : state.activateUser.is_moderator,
        is_reporter : state.activateUser.is_reporter,

    }
}

export default connect(mapStateToProps, {activateAction})(withRouter(UpdatedComponent(Activate)));
