import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import style from './Word.scss'

export default class Word extends Component{
  constructor(props) {
    super(props)
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay() {
    console.log(this.url)
    this.audio = new Audio(this.props.link_to_audio);
    this.audio.play()
  }

  render() {
    return (
     <span className="word-wrapper">
       <h2>{this.props.word} </h2>
       <i className="material-icons" onClick={this.togglePlay}>play_circle_outline</i>
     </span>
     );
    }
  }
