import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import styles from './SideMenu.scss'

export default class SideMenu extends Component{
  constructor(props) {
    super(props)
  }


  render() {

    return (
     <div className={this.props.menuOpened ? styles.menuOpened : styles.menuClosed}>

     </div>
     );
    }
  }
