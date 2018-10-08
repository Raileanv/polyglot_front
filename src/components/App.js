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
      current_sentence: {},
      next_sentence: {},
      quality_of_recall: quality_of_recall
    };

    this.handlerClick = this.handlerClick.bind(this)
  }
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/training_room/next_sentence')
    .then(resp => resp.json() )
    .then(resp =>  this.setState({
      current_sentence: resp.current_sentence,
      next_sentence: resp.next_sentence
     }))
    .catch(error => console.error(error))
  }

  handlerClick(value){

    if (this.state.processig){
      return null
    }

    this.setState({ processig: true })

    let url = 'http://localhost:3000/api/v1/training_room/users_response'
    let id = this.state.current_sentence.id

    let current_sentence = {}
    let next_sentence = {}


    fetch(url,
          {
          method: 'PATCH',
          body: JSON.stringify({
            'id': id,
            'quality_of_recall': value
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
    .then(resp => resp.json())
    .then(resp => {
      current_sentence = resp.current_sentence,
      next_sentence = resp.next_sentence
    }
  )
    .catch(error => console.error(error))

    this.setState({ translated: true })

    setTimeout(()=>{
      this.setState({
        current_sentence: current_sentence,
        next_sentence: next_sentence,
        translated: false,
        processig: false 
       })
    },3000)

  }

  render() {
    return (
     <div>
      <Blackboard
        quality_of_recall={this.state.quality_of_recall}
        word={this.state.current_sentence}
        translated={this.state.translated}
        click={this.handlerClick}/>
     </div>
     );
    }
  }
