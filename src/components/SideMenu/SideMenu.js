import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MaterialIcon from 'material-icons-react';

import styles from './SideMenu.css';
import MenuLinks from './menu_links';

export default class SideMenu extends Component{
  constructor(props) {
    super(props)
    this.state = {
      menu_links: MenuLinks
    }
  }


  render() {

    return (
     <div className={this.props.menuOpened ? styles.menuOpened : styles.menuClosed}>
       <div className={styles.linksWrapper}>
       { this.state.menu_links.map(link => {
         return(
           <a href={link.link} key={link.name} className={styles.menuLine}>
           <MaterialIcon icon={link.icon} size={40} />
           <h4>{link.name}</h4>
           </a>
         )
       }) }
       </div>
     </div>

     );
    }
  }
