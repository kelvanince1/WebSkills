import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import AWS from 'aws-sdk';
import { Link } from 'react-router-dom';
//
import Header from './Header';

AWS.config.update({
  region: 'us-east-1'
});

AWS.config.credentials = new AWS.Credentials({accessKeyId: process.env.ACCESS_KEY, secretAccessKey: process.env.SECRET_KEY});

var ddb = new AWS.DynamoDB.DocumentClient();

class NewSkills extends Component {
  renderField(field) {
    return (
      <div className='form-group'>
        <label>{field.label}</label>
        <input
          type='text'
          {...field.input}
        />
        {field.meta.error}
      </div>
    )
  };

  onSubmit(values) {
    console.log(values);
    var dynamoParams = {
      TableName: 'Skills',
      Item: {
        "username": values.Username,
        "skills": values.Skill
      }
    }
    ddb.put(dynamoParams, function(err, data) {
         if (err) {
           console.log("Error", err);
         } else {
           console.log("Success", data);
         }
       });

   ddb.update(dynamoParams, function(err, data) {
     if (err) {
       console.log("Error", err);
     } else {
       console.log("Success", data);
     }
   });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Header />
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label='Username'
            name='Username'
            component={this.renderField}
          />
          <Field
            label='Skill'
            name='Skill'
            component={this.renderField}
          />
          <button type='submit' className='btn btn-primary'>Save</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.Username) {
    errors.Username = "Enter your username";
  }
  if (!values.Skill) {
    errors.Skill = "Enter a new skill";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'SkillsNewForm'
})(NewSkills);
