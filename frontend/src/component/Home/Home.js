import {makeStyles, withStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Content from "../../Dashboard/Content";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import TextField from "@material-ui/core/TextField";
import {ListItem} from "@material-ui/core";
import List from "@material-ui/core/List";
import PhotoIcon from '@material-ui/icons/Photo';
import MicIcon from '@material-ui/icons/Mic';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideocamIcon from '@material-ui/icons/Videocam';
import Button from "@material-ui/core/Button";
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import reportAction from "../../redux/report/reportAction";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Fab from "@material-ui/core/Fab";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Report from "../Report/Report";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';




const styles = theme => ({
    root: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  paper: {
    maxWidth: "50%",
    padding: theme.spacing(2),
    variant: 'outlined',
    outlined: 'none'
  },
  formControl: {
        marginTop: theme.spacing(2),

  },
  selectEmpty: {
  },
  MenuItem: {
        color: "textSecondary",
        fontSize: "80%"
  }
});

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headline: '',
            body: '',
            reportDialog: false,
            report_type: "UNKNOWN",
            reporters: localStorage.getItem("signupEmail"),
            updated_by: localStorage.getItem("signupEmail"),
            image: null,
            imagePreview: null,
            audio: null,
            audioPreview: null,
            video: null,
            videoPreview: null,
        }

    }

     openDialog = e => {
        this.setState({
            reportDialog: true
        })
     }

     closeDialog = e => {
        this.setState({
            reportDialog: false
        })
     }

     setFiles = (id, file) => {


        switch (id) {
            case "contained-button-photo": {
                this.setState({
                    image: file,
                    imagePreview: URL.createObjectURL(file),

                });

            }

            case "contained-button-video": {
                this.setState({
                    video: file,
                    videoPreview: URL.createObjectURL(file),

                });
            }

            case "contained-button-audio": {
                this.setState({
                    audio: file,
                    audioPreview: URL.createObjectURL(file),

                });
            }

            default:{

            }

        }
    }

     onChange = e => {

        e.preventDefault();

        this.setState({
            [e.target.name]:e.target.value
        })

        // Set image
       if(e.target.files != null){

        // Get the file Id
        let id = e.target.id;

        // Get the actual file itself
        let file = e.target.files[0];

           this.setFiles(id, file)
        }
    }


    onSubmit = e => {

        const userInput = {
            body: this.state.body,
            headline: this.state.headline,
            report_type: this.state.report_type,
            updated_by: this.state.updated_by,
            image: this.state.image,
            video: this.state.video,
            reporters: this.state.reporters
        }

        this.props.reportAction(userInput, "submitReport");
    }

    render() {

        const { classes } = this.props;
       function Copyright() {
          return (
            <Typography variant="body2" color="textSecondary" align="center">
              {"Copyright © "}
              <Link color="inherit" href="https://klar.zekariashirpo.com/">
                Klar Inc
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          );
        }
            return (
            <div>
                <Content>
                   <Typography
                                component="h5"
                                variant="h5"
                                color="textPrimary"
                              >
                                Home
                              </Typography>
                    <br/>
                    <div className={classes.root}>

                          <Paper className={classes.paper}  elevation={0}>

                              <Grid container wrap="nowrap" spacing={2} >
                                  <Grid item>
                                    <Avatar>K</Avatar>
                                  </Grid>
                                  <Grid item xs zeroMinWidth>
                                        <TextareaAutosize
                                                             // variant="standard"
                                                            placeholder={this.state.body !== "" ? this.state.body: "Want to report something..."}
                                                            size="small"
                                                             onChange={this.onChange}
                                                             onClick={this.openDialog}
                                                             minRows={3}
                                                             maxRows={8}
                                                            style={{backgroundColor: "white",
                                                            borderRadius: "10%",
                                                            width: "100%",
                                                            outline: "none",
                                                            border: "none"
                                                            }}
                                                            InputProps={{

                                                            disableUnderline: true,
                                                          }}
                                                          />

                                        <Dialog open={this.state.reportDialog} onClose={this.closeDialog}
                                                aria-labelledby="form-dialog-title">
                                            <DialogTitle id={"form-dialog-title"}>Report Detail</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText/>
                                                <TextField
                                                            value={this.state.headline}
                                                            autoFocus
                                                            margin="dense"
                                                            id="headline"
                                                            name="headline"
                                                            label="Headline"
                                                            onChange={this.onChange}
                                                            fullWidth
                                                          />
                                                <TextareaAutosize
                                                            value={this.state.body}
                                                             variant="standard"
                                                            id="body"
                                                            name="body"
                                                            autoComplete="body"
                                                            label={"Body"}
                                                            fullWidth
                                                             onChange={this.onChange}
                                                            minRows={3}
                                                            maxRows={8}
                                                            placeholder={"Body"}
                                                            style={{backgroundColor: "white",
                                                            borderRadius: "10%",
                                                            width: "100%",
                                                            border: "none",
                                                                outlineColor: "green"

                                                            }}
                                                            InputProps={{

                                                            disableUnderline: true,
                                                          }}
                                                          />
                                                <FormControl className={classes.formControl}>
                                                    <Typography
                                                            color={"textSecondary"}
                                                            margin="dense"
                                                            id="Category"
                                                            name="Category"
                                                            label="Category"
                                                            // onChange={this.onChange}
                                                            fullWidth
                                                    >Category</Typography>
                                                    <Select
                                                      labelId="demo-simple-select-label"
                                                      id="report_type"
                                                      name="report_type"
                                                      value={this.state.report_type}
                                                      onChange={this.onChange}
                                                      className={classes.MenuItem}
                                                    >
                                                      <MenuItem className={classes.MenuItem} value={"BREAKING"}>BREAKING</MenuItem>
                                                      <MenuItem className={classes.MenuItem} value={"SPORT"}>SPORT</MenuItem>
                                                      <MenuItem className={classes.MenuItem} value={"ENTERTAINMENT"}>ENTERTAINMENT</MenuItem>
                                                      <MenuItem className={classes.MenuItem} value={"ELECTION"}>ELECTION</MenuItem>
                                                      <MenuItem className={classes.MenuItem} value={"ENVIRONMENT"}>ENVIRONMENT</MenuItem>
                                                      <MenuItem className={classes.MenuItem} value={"TECHNOLOGY"}>TECHNOLOGY</MenuItem>
                                                      <MenuItem className={classes.MenuItem} value={"BUSINESS"}>BUSINESS</MenuItem>
                                                      <MenuItem className={classes.MenuItem} value={"UNKNOWN"}>UNKNOWN</MenuItem>
                                                    </Select>
                                                  </FormControl>
                                            </DialogContent>

                                            <DialogActions>
                                                  <Button onClick={this.closeDialog} color="primary">
                                                    Submit
                                                  </Button>
                                                </DialogActions>
                                        </Dialog>
                                  </Grid>
                                </Grid>
                              <br/>
                              <Grid container wrap="nowrap" spacing={2} style={{paddingLeft: '5.5%'}}>

                                  <Grid    item   >
                                      <input
                                      accept="image/*"
                                      style={{display: "none"}}
                                      id="contained-button-photo"
                                      multiple
                                      type="file"
                                      onChange={this.onChange}
                                    />

                                      <Tooltip title="Upload photo">
                                            <IconButton aria-label="photo">
                                            <label htmlFor="contained-button-photo">
                                                <PhotoIcon color={"primary"}/>
                                            </label>
                                            </IconButton>
                                      </Tooltip>


                                  </Grid>

                                   <Grid item >

                                       <input
                                      accept=".video/mp4, .video/mkv"
                                      style={{display: "none"}}
                                      id="contained-button-video"
                                      multiple
                                      type="file"
                                      onChange={this.onChange}
                                    />

                                       <Tooltip title="Upload video">
                                            <IconButton aria-label="video">
                                                <label htmlFor="contained-button-video">
                                                <VideocamIcon color={"primary"}/>
                                                </label>
                                            </IconButton>
                                       </Tooltip>
                                  </Grid>

                                  <Grid   item >
                                      <input
                                      accept="image/*"
                                      style={{display: "none"}}
                                      id="contained-button-audio"
                                      multiple
                                      type="file"
                                      onChange={this.onChange}
                                    />


                                      <Tooltip title="Upload audio">
                                            <IconButton aria-label="audio">
                                                <label htmlFor="contained-button-audio">
                                                    <MicIcon color={"primary"}/>
                                                </label>
                                            </IconButton>
                                      </Tooltip>

                                  </Grid>

                                  <Grid  item xs>

                                        <Tooltip title="Live stream">
                                            <IconButton aria-label="live">
                                                <LiveTvIcon color={"primary"}/>
                                            </IconButton>
                                        </Tooltip>
                                  </Grid>

                                  <Grid  item >
                                        <Button
                                          style={{ borderRadius: "10%", backgroundColor: '#00CC00', border: "none",
                                              fontWeight: 'bold',height: '80%',
                                              fontSize: 'large',}}>
                                            <Typography style={{color: 'white', }} onClick={this.onSubmit}>Report</Typography>
                                        </Button>
                                  </Grid>

                              </Grid>
                          </Paper>
                        <br/>
                        <Report/>
                    </div>

                     <Box pt={4}>
                      <Copyright />
                    </Box>
                  </Content>

            </div>
        );

    }
}

Home.propTypes = {
  reportAction: PropTypes.func.isRequired,
  loginUser: PropTypes.object.isRequired,
    isNewReportSubmitted: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    return {
        loginUser: state.loginUser,
        isNewReportSubmitted: state.report.isNewReportSubmitted
    }
}

export default connect(mapStateToProps, {reportAction})((withStyles(styles) (withRouter(Home))));



