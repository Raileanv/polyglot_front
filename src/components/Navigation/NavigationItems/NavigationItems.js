import React from "react";

import classes from './NavigationItems.css'
import NavigationItem from './NavigaionItem/NavigationItem'

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>Кабинет</NavigationItem>
    <NavigationItem link="/statistics">Статистика</NavigationItem>
    <NavigationItem link="/cources">Мои курсы</NavigationItem>
    <NavigationItem link="/instructions">Инструкции</NavigationItem>
    <NavigationItem link="/training_room">Заниматься</NavigationItem>
  </ul>
);
export default navigationItems;
