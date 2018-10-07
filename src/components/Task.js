import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class Task extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
     <div>
       <h3>{this.props.task_title}</h3>

     </div>
     );
    }
  }
