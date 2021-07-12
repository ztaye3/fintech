import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import {Copyright} from "../../utils/StyleUtil";
import List from "@material-ui/core/List";
import {ListItem} from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export function Home() {
  const classes = useStyles();
  const flexContainer = {
          display: 'flex',
          flexDirection: 'row',
          padding: 0,
        };

  return (
    <React.Fragment>
      <main>

        <Container className={classes.cardGrid} maxWidth="xl" >
          <Grid container spacing={1}>

            <List style={flexContainer}>
              <ListItem>

                <Grid container spacing={4}>

                  <Card className={classes.card}>
                    <CardMedia
                      component='iframe'
                      image="https://www.youtube.com/embed/Z79N1EWXx3E"
                      title="Image title"
                      style={{height: 400}}
                    />

                    <CardContent className={classes.cardContent}>
                      <Container  style={{float:"left", width:140}}>
                      <CardMedia
                      className={classes.cardGrid}
                      image="img/dashboard/cto.jpg"
                      title="Image title"/>
                      </Container>
                      <Typography variant="h5" component="h1"  color="textPrimary" gutterBottom>
                        Zekarias Taye Hirpo, C.T.O of Klar
                      </Typography>
                      <Typography>  Forward-thinking Software Engineer with background working
                      effectively in dynamic environments. Fluent in Python and Java
                      programming languages used to develop software within various
                      industry. Proud team player focused on achieving project objectives
                      with speed and accuracy
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

              </ListItem>

              <ListItem>

                <List>
                  <ListItem>
                     <Container maxWidth={"xs"}>
                       <CardMedia
                    className={classes.cardMedia}
                    image={`img/klarLogoBig.jpg`}
                    title="Image title"
                      />
                     </Container>
                  </ListItem>

                  <ListItem>
                    <Container maxWidth="sm">
                      <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                      >
                        Klar News Dashboard
                      </Typography>

                      <Typography
                        variant="h5"
                        align="center"
                        color="textSecondary"
                        paragraph
                      >
                        Explore our Platform and get started building your own
                        news stories.
                      </Typography>

                      <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                          <Grid item>
                            <Button
                              component={RouterLink}
                              to={"/signup"}
                              variant="contained"
                              color="primary"
                              style={{ borderRadius: 50, width: 400, height: 60 }}
                            >
                            <Typography style={{color: 'white', fontSize: 'large', fontWeight: 'bold' }}>Sign UP</Typography>
                            </Button>
                            </Grid>
                          </Grid>

                          <br/>

                          <Grid container spacing={2} justify="center">
                            <Grid item>
                              <Button
                                color="secondary"
                                component={RouterLink}
                                to={"/login"}
                                variant="outlined"
                                style={{ borderRadius: 50, width: 400, borderColor: "green",
                                    height: 60}}
                              >
                                <Typography style={{color: 'green', fontSize: 'large', fontWeight: 'bold',  }}>Sign In</Typography>
                              </Button>
                            </Grid>
                          </Grid>
                        </div>


                    </Container>
                  </ListItem>
                </List>

              </ListItem>

            </List>

          </Grid>
        </Container>
      </main>

      <footer className={classes.footer}>

        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Terms of Service | Security | Privacy
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}
