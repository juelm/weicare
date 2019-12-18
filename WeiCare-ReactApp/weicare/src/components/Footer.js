import React from "react";
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 75,
    width: 450,
  },
  control: {
    padding: theme.spacing(2),
  },
  typography: {
    color: 'grey',
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="button" className={classes.typography}>
          <p>&copy; 2019 Copyright: WeiCare</p>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="button" className={classes.typography}>
          <p>Little school of big discoveries<br />
            2140 Lucien-Thimens, St Laurent, H4R 1L1<br />
            Tel: 514-303-8949</p>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="button" className={classes.typography}>
          <p>Open hours:<br />
            Monday to Friday 7:00-18:00<br />
            We close on Saturdays and Sundays</p>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
