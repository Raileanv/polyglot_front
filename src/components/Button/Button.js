import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import style from './Button.scss'

export default class Button extends Component{
  constructor(props) {
    super(props)
  }
  clickAction(){
    this.props.click(this.props.value)

  }

  render() {
    return (
      <span onClick={() => this.props.click(this.props.value)} className='button_wrapper'>
        {this.props.text}
      </span>
     );
    }
  }
