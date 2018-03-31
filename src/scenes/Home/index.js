import React from "react";
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/admin/" replace>Admin (whole)</Link>
        <br />
        <Link to="/admin/settings/" replace>Settings</Link>
        <br />
        <Link to="/admin/writings/" replace>Writings</Link>
        <br />
      </div>
    );
  }
}

export default Home;
