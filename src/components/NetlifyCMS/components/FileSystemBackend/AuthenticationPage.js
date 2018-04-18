import PropTypes from 'prop-types';
import React from 'react';
// eslint-disable-next-line
import styles from "./AuthenticationPage.css";

export default class AuthenticationPage extends React.Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
    inProgress: PropTypes.bool,
  };

  state = { email: '' };

  handleLogin = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state);
  };

  handleEmailChange = (value) => {
    this.setState({ email: value });
  };

  render() {
    const { inProgress } = this.props;

    return (<section className="fs-auth-page-root">
      <section className="fs-auth-page-card">
        <div><img src="/assets/media/netlify_logo.svg" alt="Netlify" /></div>
        <button
        className="nc-githubAuthenticationPage-button"
        disabled={inProgress}
        onClick={this.handleLogin}
        >
        {inProgress ? "Logging in..." : "Login Local"}
        </button>
      </section>
    </section>);
  }
}
