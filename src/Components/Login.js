import React, { Component } from 'react';
import { reduxForm }from 'redux-form';

class Login extends Component {
  handleLoginSubmit({username, password}) {
    console.log(username, password);
  }
  render() {
    const { handleSubmit, fields: { username, password }} = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleLoginSubmit.bind(this))}>
        <fieldset className='form-group'>
          <label>Username:</label>
          <input {...username} className='form-control' />
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <input {...password} className='form-control' />
        </fieldset>
        <button action='submit' className='btn btn-primary'>Login</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'login',
  fields: ['username', 'password']
})(Login);
