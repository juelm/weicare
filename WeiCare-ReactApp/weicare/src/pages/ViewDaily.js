import React, { useEffect, useState } from "react";
import fetchAllDailies from "../modules/fetchAllDailiesMod";
import { useAuth } from "../context/auth";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';
import deleteDaily from '../modules/deleteDailyMod'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    width: '90%',
    marginLeft: "5%",
    marginTop: "5%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: 165,
  }
}));

function ViewDaily() {
  const [daylies, setDailies] = useState([]);
  const [current, setCurrent] = useState(0);
  const { authTokens } = useAuth();
  const [currentUser] = useState(localStorage.getItem("username"));
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [dailyID, setDailyID] = useState(0)

  useEffect(() => {
    fetchAllDailies(setDailies, setCurrent, currentUser, authTokens);
  }, []);

  function buildTab(index) {
    let date = new Date(daylies[index].DailyDate)

    return (
      <Tab key={index} label={date.toDateString()} {...a11yProps(index)} />
    );
  }

  function createTabList() {
    let tabContainer = [];
    for (let i = 0; i < daylies.length; i++) {
      tabContainer.push(buildTab(i));
    }
    return tabContainer.reverse();
  }

  function buildTabPanel(index) {
    return (
      <TabPanel value={value} index={index}>
        <h1>{daylies[index].Title}</h1>
        <p dangerouslySetInnerHTML = {{__html: daylies[index].DailyText}} />
      </TabPanel>
    );
  }

  function createTabPanelList() {
    let tabContainer = [];
    for (let i = 0; i < daylies.length; i++) {
      tabContainer.push(buildTabPanel(i));
    }
    return tabContainer.reverse();
  }

  function deleteDailyClick(event) {
    deleteDaily(daylies[value].DailyID);
    console.log(daylies[value].DailyID);
  }
  
  let garbageIcon;
  if(authTokens === 'Teacher') {
    garbageIcon = <DeleteForeverIcon onClick = {deleteDailyClick} style = {{alignSelf: 'stretch'}}/>;
  }


  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {createTabList()}
      </Tabs>
      {garbageIcon}
      {createTabPanelList()}
    </div>
  );
}

export default ViewDaily;