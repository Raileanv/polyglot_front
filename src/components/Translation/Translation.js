import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import style from './Translation.scss'

export default class Translation extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
     <div>
       <h3>{this.props.translation}</h3>
     </div>
     );
    }
  }
