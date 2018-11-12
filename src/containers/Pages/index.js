import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard'
import Statistics from './Statistics'
import Cources from './Cources'
import Instructions from './Instructions'
import TrainingRoom from './TrainingRoom'
import Aux from '../../hoc/Aux'

const pages = () =>  {


    return (
      <Aux>
        <Route path="/" exact component={Dashboard} />
        <Route path="/statistics"  component={Statistics} />
        <Route path="/cources"  component={Cources} />
        <Route path="/instructions"  component={Instructions} />
        <Route path="/training_room"  component={TrainingRoom} />
      </Aux>
     );

  }
export default pages;
