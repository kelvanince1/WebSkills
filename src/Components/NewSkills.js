import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
// import AWS from 'aws-sdk';
// import {Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
//
import Header from './Header';
//
// var ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});
//
// AWS.config.credentials = new AWS.Credentials({accessKey: process.env.ACCESS_KEY, secretKey: process.env.SECRET_KEY});

class NewSkills extends Component {
  // handleSubmit = () => {
  //   console.log()
  //   var params = {
  //     TableName: 'Skills',
  //     Item: {
  //       'UserId' : this.state.username,
  //       'Skill': this.state.skill
  //     }
  //   };
  //
  //   ddb.putItem(params, function(err, data) {
  //     if (err) {
  //       console.log("Error", err);
  //     } else {
  //       console.log("Success", data);
  //     }
  //   });
  // };

  // handleUsername = (event) => this.setState({username: event.target.value});
  // handleSkill = (event) => this.setState({skill: event.value});

  render() {
    return (
      <div>
        <Header />
        <form>
          <h3>New Skill</h3>
          <div className='form-group'>
            <label>Username</label>
            <input type='text' className='form-control' />
          </div>

          <div className='form-group'>
            <label>Skill</label>
            <input type='text' className='form-control' />
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'skillsNewForm',
  fields: ['username', 'skills']
})(NewSkills);
