import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import * as Actions from '../common/actions';
import * as Strings from '../common/strings';
import { connect } from 'react-redux';

class AuthLoginForm extends React.Component {
  state = {
    username: '',
    password: '',
  };

  _handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  _handleSubmit = e => {
    this.props.dispatch(Actions.requestLogin(this.state));
  };

  render() {
    return (
      <div>
        <Input
          label="Username"
          autoFocus
          value={this.state.username}
          name="username"
          onChange={this._handleChange}
        />
        <hr />
        <Input
          label="Password"
          value={this.state.password}
          type="password"
          name="password"
          onChange={this._handleChange}
          onSubmit={this._handleSubmit}
        />
        <hr />
        <Button onClick={this._handleSubmit}>Log in</Button>
      </div>
    );
  }
}

export default connect(state => state)(AuthLoginForm);
