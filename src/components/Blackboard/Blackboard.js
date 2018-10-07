import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import style from './Blackboard.scss'
import Word from '../Word/Word'
import Translation from '../Translation/Translation'
import Button from '../Button/Button'

export default class Blackboard extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
     <div className="blackboard-wrapper">
       <div className="blackboard">
        <Word word={this.props.word.word} link_to_audio={this.props.word.link_to_audio}/>
        <Translation translation={this.props.word.translation} />
        <div className="buttons_wrapper" >
          {this.props.quality_of_recall.map(quality =>
            <Button
            key={quality.value}
            value={quality.value}
            text={quality.text}
            click={this.props.click}
            />
          )}

           </div>
       </div>
     </div>
     );
    }
  }
