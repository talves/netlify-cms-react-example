import React, { Component } from 'react';

import NetlifyCMS from '../../components/NetlifyCMS';
import config from './data/config.json';

class Settings extends Component {
  render() {
    return (
      <NetlifyCMS config={config}/>
    );
  }
}

export default Settings;
