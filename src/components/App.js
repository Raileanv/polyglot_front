import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import quality_of_recall from './quality_of_recall'

import Task from './Task'
import Blackboard from './Blackboard/Blackboard'

export default class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      word: {},
      quality_of_recall: quality_of_recall
    };

    this.handlerClick = this.handlerClick.bind(this)
  }
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/training_room/next_sentence')
    .then(resp => resp.json() )
    .then(word =>  this.setState({ word: word }))
    .catch(error => console.error(error))
  }

  handlerClick(value){
    let url = 'http://localhost:3000/api/v1/training_room/users_response'
    let id = this.state.word.id
    fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({
        'id': id,
        'quality_of_recall': value
      }),
      headers: {
        "Content-Type": "application/json"
      } 
    } )
    .then(resp => resp.json() )
    .then(word =>  this.setState({ word: word }))
    .catch(error => console.error(error))
  }

  render() {
    return (
     <div>
      <Blackboard quality_of_recall={this.state.quality_of_recall} word={this.state.word} click={this.handlerClick}/>
     </div>
     );
    }
  }
