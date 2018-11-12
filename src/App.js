import React, { Component } from 'react';


import Layout from './components/Layout/Layout';
import Pages from './containers/Pages'

class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <Pages />
        </Layout>
      </div>
    );
  }
}

export default App;
