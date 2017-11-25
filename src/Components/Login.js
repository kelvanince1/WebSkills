import React, { Component } from 'react';
import { reduxForm }from 'redux-form';

class Login extends Component {
  render() {
    return (
      <form>
        <fieldset className='form-group'>
          <label>Username:</label>
          <input className='form-control' />
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <input className='form-control' />
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
