import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from '../../components/Header/Header'


export default class App extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
     <div>
      <Header />
     </div>
     );
    }
  }
