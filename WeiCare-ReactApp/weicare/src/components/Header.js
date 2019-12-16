import React from "react";
import {AppBar, Toolbar, Grid, Typography, Button} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth"


export default function Header() {
 
  const { authTokens } = useAuth();

  return (
 
      <AppBar>
        <Toolbar>
          <Grid container justify="space-between" spacing={24}>
            <Grid item>
              <Typography variant="h4">WeiCare</Typography>
            </Grid>
            <Grid item>
              <Link to="/">
                <Button color="inherit">Home</Button>
              </Link>
              <Link to="/about">
                <Button color="inherit">About</Button>
              </Link>
              <Link to="/contact">
                <Button color="inherit">Contact</Button>
              </Link>
                {console.log("authTokens in header : " + authTokens)}
                {authTokens ? (
                  <Link to="/logout">
                    <Button color="inherit">Logout</Button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <Button color="inherit">Login</Button>
                  </Link>
                )}
 
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
  );
}

