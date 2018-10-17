import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import classes from './Header.scss'

import HamburgerButton from '../HamburgerButton/HamburgerButton'
import SideMenu from '../SideMenu/SideMenu'



export default class Header extends Component{
  constructor(props) {
    super(props)

    this.state = {
      menuOpened: false
    };
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({menuOpened: !this.state.menuOpened})
  }
  render() {
    return (
     <div className={classes.heder_wrapper}>
      <HamburgerButton menuOpened={this.state.menuOpened} handleClick={this.handleClick}/>
      <span>Logo</span>
      <SideMenu menuOpened={this.state.menuOpened} />
     </div>
     );
    }
  }
