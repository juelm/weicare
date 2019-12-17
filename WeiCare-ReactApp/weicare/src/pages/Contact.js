import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/paper'; 
import Grid from '@material-ui/core/Grid';
import { positions } from "@material-ui/system";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import apiKey from "../mapApiKey";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: "20%", 
    marginTop:"5%",
    marginBottom:"5%"
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: "350px",
    width: "400px"
  }
}));

function Contact(props) {
  const classes = useStyles();
  const mapStyle = {
    height: "350px",
    width: "400px"
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={20}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Map
              google={props.google}
              zoom={12}
              style={mapStyle}
              initialCenter={{ lat: 45.50921, lng: -73.69464 }}
            >
              <Marker position={{ lat: 45.50921, lng: -73.69464 }} />
            </Map>
          </Paper>
        </Grid> 
        <Grid item xs>
          <Paper className={classes.paper}>
            <div>
              <h2>Little School of Big Discoveries</h2>
              <h4>Our Location</h4>
              <p>2140 Lucien-Thimens, St Laurent, H4R 1L1</p>
              <br />
              <p>Tel: 514-303-8949</p>
              <p>Email:pegdgarderie2140@gmail.com</p>
              <p>Facebook Page: www.facebook.com/ptitecolemtl</p>
            </div>
          </Paper>
        </Grid> 
      </Grid>
      <Grid container>  
      
      </Grid>
    </div>
  );
}


export default GoogleApiWrapper({
  apiKey: apiKey
}) (Contact) ;

