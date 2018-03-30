import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './scenes/Home';
import Admin from './scenes/Admin';
import Writings from './scenes/Writings';
import Settings from './scenes/Settings';

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ marginTop: '100px' }}>
        <Link to="/admin/">Admin</Link><br />
        <Link to="/settings/">Settings</Link><br />
        <Link to="/writings/">Writings</Link><br />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin/" exact component={Admin} />
          <Route path="/writings/" exact component={Writings} />
          <Route path="/settings/" exact component={Settings} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App
