import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import reportAction from "../../redux/report/reportAction";
import {withStyles} from "@material-ui/core/styles";
import {withRouter} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import {ListItem} from "@material-ui/core";
import List from "@material-ui/core/List";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import ShareIcon from '@material-ui/icons/Share';
import Moment from 'moment';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


const styles = theme => ({
    root: {
    maxWidth: "50%",
    marginTop: "1%"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});


class Report extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.reportAction(null, "getReports")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        // Reload if new report is added
        if(this.props.isNewReportSubmitted){
            this.props.reportAction(null, "getReports")
        }
    }


    render() {

        const {classes} = this.props;
        const flexContainer = {
          display: 'flex',
          flexDirection: 'row',
          padding: 0,
        };

        const reports = this.props.reports;

        let host = window.location.hostname;

        // Check dev and production host
        if(host === "localhost" || host === "0.0.0.0"){
            host = "http://" + host;
        }

        else {
            host = "https://" + host;
        }

        return (
            <div>

                {
                    reports.map((report) =>(


                                            <Card className={classes.root}>
                                                      <CardHeader
                                                        avatar={

                                                          report.reporters.map((reporter) => (
                                                              <Avatar aria-label="recipe" className={classes.avatar} src={host + reporter.profile_picture}/>
                                                          ))

                                                        }

                                                        title= {
                                                            report.reporters.map((reporter) => (
                                                                reporter.first_name + "  " + reporter.last_name
                                                          ))
                                                        }
                                                        action={

                                                              <List style={flexContainer}>
                                                                  <ListItem>
                                                                      <Typography color={"textSecondary"} >reported</Typography>
                                                                  </ListItem>
                                                                  <ListItem>
                                                                      <ViewWeekIcon color={"primary"}/>
                                                                  </ListItem>

                                                                  <ListItem>
                                                                      <IconButton aria-label="settings">
                                                                        <MoreHorizIcon />
                                                                      </IconButton>
                                                                  </ListItem>
                                                              </List>


                                                        }

                                                        subheader={Moment(report.created_date).calendar()}
                                                      />
                                                      <CardContent>

                                                        <Typography variant="body2" color="textPrimary" component="p">
                                                            {report.headline}
                                                        </Typography>
                                                          <br/>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            {report.body}
                                                        </Typography>
                                                      </CardContent>
                                                      <CardMedia
                                                        className={classes.media}
                                                        image={host + report.image}
                                                        title="report photo"
                                                      />

                                                      <CardActions >
                                                        <List style={flexContainer}>
                                                                  <ListItem>
                                                                        <IconButton aria-label="remove">
                                                                          <RemoveCircleIcon />
                                                                        </IconButton>
                                                                  </ListItem>

                                                                  <ListItem>
                                                                        <IconButton aria-label="comment">
                                                                                  <InsertCommentIcon />
                                                                        </IconButton>
                                                                  </ListItem>

                                                                  <ListItem>
                                                                      <IconButton aria-label="share">
                                                                         <ShareIcon />
                                                                      </IconButton>
                                                                  </ListItem>

                                                                  <ListItem>
                                                                       <IconButton aria-label="add">
                                                                          <AddCircleIcon />
                                                                        </IconButton>

                                                                  </ListItem>
                                                        </List>
                                                      </CardActions>
                                                <br/>
                                        </Card>
                    ))
                }
            </div>

        );
    }
}


Report.propTypes = {
  reportAction: PropTypes.func.isRequired,
  loginUser: PropTypes.object.isRequired,
    isNewReportSubmitted: PropTypes.bool.isRequired,
    reports: PropTypes.object.isRequired,
    images: PropTypes.object.isRequired

};

const mapStateToProps = state => {
    return {
        loginUser: state.loginUser,
        isNewReportSubmitted: state.report.isNewReportSubmitted,
        reports: state.report.reports,
        images: state.report.images
    }
}

export default connect(mapStateToProps, {reportAction})((withStyles(styles) (withRouter(Report))));
