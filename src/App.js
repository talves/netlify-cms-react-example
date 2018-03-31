import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './scenes/Home';
import Admin from './scenes/Admin';
import Writings from './scenes/Writings';
import Settings from './scenes/Settings';

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ marginTop: '100px' }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin/" exact component={Admin} />
          <Route path="/admin/writings/" exact component={Writings} />
          <Route path="/admin/settings/" exact component={Settings} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App
