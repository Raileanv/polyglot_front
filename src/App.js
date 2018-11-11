import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Pages from './containers/Pages'

class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <BrowserRouter>
            <Pages />
          </BrowserRouter>
        </Layout>
      </div>
    );
  }
}

export default App;
