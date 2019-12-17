import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import {AppBar, Toolbar, Grid, Typography} from "@material-ui/core";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SettingsIcon from "@material-ui/icons/Settings";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import DashboardIcon from "@material-ui/icons/Dashboard";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import Button from "@material-ui/core/Button";
import {linkStyle, subLinkStyle} from "../pages/styles";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

function setRouteForNavButtons(text, handleDrawerClose) {
  // console.log("Set Route in PNav: " + text);
  let listItem = (
    <ListItem button key={text} onClick={handleDrawerClose}>
      <ListItemIcon>{icons(text)}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )

  if (text === "Dashboard") {
    return (
      <Link to="/parent" key={text} style={subLinkStyle()}>
        {listItem}
      </Link>
    );
  } else if (text === "View Daily") {
    return (
      <Link to="/parent/view-daily" key={text} style={subLinkStyle()}>
        {listItem}
      </Link>
    );
  } else if (text === "View Photo") {
    return (
      <Link to="/view-pictures" key={text} style={subLinkStyle()}>
        {listItem}
      </Link>
    );
  } else {
    return listItem;
  }
}

function icons(text) {
  if (text === "Dashboard") return <DashboardIcon />;
  if (text === "View Daily" || text === "View Photo") return <VisibilityIcon />;
  if (text === "Add Daily" || text === "Add Photo") return <EditIcon />;
}

export default function ParentNavBar() {
  const { authTokens } = useAuth();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Grid container justify="space-between">
            <Grid item>

              <Typography variant="h6" noWrap>
                WeiCare
              </Typography>
            </Grid>
            <Grid item>
              <Link to="/" style={linkStyle()}>
                <Button color="inherit">Home</Button>
              </Link>
              <Link to="/about" style={linkStyle()}>
                <Button color="inherit">About</Button>
              </Link>
              <Link to="/contact" style={linkStyle()}>
                <Button color="inherit">Contact</Button>
              </Link>
              {console.log("authTokens in header : " + authTokens)}
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

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant="h6" noWrap style={{padding: "15px"}}>
            Parent's Page
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Dashboard", "View Daily", "View Photo"].map((text, index) =>
            setRouteForNavButtons(text, handleDrawerClose)
          )}
        </List>
        <Divider />
        <List>
          {["Contact Us", "Setting"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <ContactSupportIcon /> : <SettingsIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}