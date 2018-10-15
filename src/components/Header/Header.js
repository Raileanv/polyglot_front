import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import classes from './Header.scss'

import HamburgerButton from '../HamburgerButton/HamburgerButton'


export default class Header extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
     <div className={classes.heder_wrapper}>
      <HamburgerButton />
      <span>Logo</span>
     </div>
     );
    }
  }
