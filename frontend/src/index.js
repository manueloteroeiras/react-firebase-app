import ReactDOM from "react-dom";
import React, { Component } from 'react';
import { Router, Route } from  'react-router';
import { Provider } from 'react-redux';

import {store, history } from './redux/store';

import Landing from './containers/Landing'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
          <Router history={history}>
              <Route path="/" component={ Landing }/>
          </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));