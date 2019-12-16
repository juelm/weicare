import React from "react";
import { Tabs, Tab, Paper } from "@material-ui/core";

function Footer() {
  return (
    <Paper>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        centered
      >
        <Tab label=" &copy; 2019 Copyright: WeiCare " />
        <Tab
          label='Little school of big discoveries 
                2140 Lucien-Thimens, St Laurent, H4R 1L1 
                Tel: 514-303-8949'
        />
        <Tab
          label="
                Open hours:
                Monday to Friday 7:00-18:00
                We close on Saturdays and Sundays"
        />
      </Tabs>
    </Paper>
  );
}

export default Footer;
