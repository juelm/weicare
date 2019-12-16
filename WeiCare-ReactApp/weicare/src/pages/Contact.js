import React from 'react';
import Box from "@material-ui/core/Box";
import { positions } from "@material-ui/system";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import apiKey from "../mapApiKey";

function Contact(props) {

  const mapStyle = {
    height: "400px",
    width: "400px"
  }

  return (
    <Box  bgcolor="background.paper" ml={'10%'} mt={'10%'} pb={'40%'} style={{postion:'center'}}>
      <div style={{ float: "left", display:"inline-block" }}>
        <h2>
          Petite Ecole des Grandes Découvertes <br />
          Little school of big discoveries
        </h2>
        <p>2140 Lucien-Thimens, St Laurent, H4R 1L1</p>
        <p>Tel: 514-303-8949</p>
        <p>Email:pegdgarderie2140@gmail.com</p>
        <p>Facebook Page: www.facebook.com/ptitecolemtl</p>
      </div>
      <div style={{display:'inline-block'}}>
        <Map
          google={props.google}
          zoom={12}
          style={mapStyle}
          initialCenter={{ lat: 45.50921, lng: -73.69464 }}
        >
          <Marker position={{ lat: 45.50921, lng: -73.69464 }} />
        </Map>
      </div>
    </Box>
  );
}

export default GoogleApiWrapper({
  apiKey: apiKey
}) (Contact) ;

