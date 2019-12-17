import React from "react";
import {AppBar, Toolbar, Grid, Typography, Button} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth"
import {linkStyle} from "../pages/styles";


export default function Header() {
 
  const { authTokens } = useAuth();

  return (

 
    <AppBar position="static" >
      <Toolbar>
        <Grid container justify="space-between" spacing={24}>
          <Grid item>
            <Typography variant="h4">WeiCare</Typography>
          </Grid>
          <Grid item>
            <Link to="/" style={linkStyle()}>
              <Button color="inherit">Home</Button>
            </Link>
            <Link to="/about" style={linkStyle()}>
              <Button color="inherit">About us</Button>
            </Link>
            <Link to="/contact" style={linkStyle()}>
              <Button color="inherit">Contact</Button>
            </Link>
            {authTokens ? (
              <Link to="/logout" style={linkStyle()}>
                <Button color="inherit">Logout</Button>

              </Link>
            ) : (
              <Link to="/login" style={linkStyle()}>
                <Button color="inherit">Login</Button>
              </Link>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

