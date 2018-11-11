import React from "react";
import classes from "./Toolbar.css"
import Logo from "../../Logo/Logo"
import NavigationItems from '../NavigationItems/NavigationItems'
import DrowerToggle from '../SideDrawer/DrowerToggle/DrowerToggle'

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrowerToggle clicked={props.drawerToggleClicked} />


  </header>
);
export default toolbar;
