import React from 'react';
import PhonePane from './PhontoPane';
import { pageStyle } from "./styles.js";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <div style={pageStyle()}>
        <PhonePane />
      </div>

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <h1>About Us</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <h1>Contact Us</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

