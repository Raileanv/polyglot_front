import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state = {
    showSideDrawer: false
  }
  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }
  drawerToggleHandler = () => {
    this.setState((prevState) => {
      return{ showSideDrawer: !prevState.showSideDrawer }
    });
  }
  render(){
    return(
      <HashRouter basename={'/polyglot_ui'}>
        <Aux>
          <Toolbar drawerToggleClicked={this.drawerToggleHandler}/>
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}/>
          <main className={classes.Content}>
              {this.props.children}
          </main>
        </Aux>
      </HashRouter>
    )
  }
}

export default Layout;
