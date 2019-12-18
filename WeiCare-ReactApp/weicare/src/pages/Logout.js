import React from "react";
import { useAuth } from "../context/auth";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        marginLeft: "45%",
        marginTop: "10%",
    },
  }));

function Logout() {
    const { setAuthTokens } = useAuth();
    const classes = useStyles();

    function handleLogOut() {
        setAuthTokens(null);
    }

    return (
            <Button className={classes.root} variant="contained" color="primary" onClick={handleLogOut}>
                Logout
            </Button>
    );
}

export default Logout;