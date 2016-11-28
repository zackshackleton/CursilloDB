import React, { Component } from 'react';
import TextInput from './TextInput';
import ButtonRow from './ButtonRow';

class Login extends Component {
  constructor () {
    super ();

    this.submitClickHandler = this.submitClickHandler.bind(this);
    this.cancelClickHandler = this.cancelClickHandler.bind(this);
  }

  submitClickHandler () {
    this.props.updateCurrentPage('Main')
  }

  cancelClickHandler () {
    this.refs.username.setState({value: ''});
    this.refs.password.setState({value: ''});
  }

  render () {
    return (
      <div className="Login">
        <h3>Welcome to Cursillo DB Manager</h3>

        <div className="Login-cross" />

        <div className="container">
          <TextInput title="Username" ref="username" />
          <TextInput title="Password" ref="password" />
        </div>

        <ButtonRow onSubmit={this.submitClickHandler} onCancel={this.cancelClickHandler} />
      </div>
    );
  }
}

export default Login;
