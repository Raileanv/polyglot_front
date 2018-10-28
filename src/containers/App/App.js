import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from '../../components/Header/Header'
import Pages from '../Pages'


export default class App extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
     <div>
      <Header />
      <Pages />
     </div>
     );
    }
  }
