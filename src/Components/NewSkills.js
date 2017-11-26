import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import AWS from 'aws-sdk';
// import { Link } from 'react-router-dom';
//
import Header from './Header';

AWS.config.update({
  region: 'us-west-1'
});

AWS.config.credentials = new AWS.Credentials({accessKey: process.env.ACCESS_KEY, secretKey: process.env.SECRET_KEY});

var ddb = new AWS.DynamoDB.DocumentClient();

class NewSkills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      skill: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit = () => {
    var params = {
      TableName: 'Skills',
      Item: {
        'UserId' : this.state.username,
        'Skill': this.state.skill
      }
    };

    ddb.putItem(params, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data);
      }
    });
  };

  render() {
    const { fields: { username, skill }, handleSubmit } = this.props;
    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <h3>New Skill</h3>
          <div className='form-group'>
            <label>Username</label>
            <input type='text' className='form-control' {...this.state.username} />
          </div>

          <div className='form-group'>
            <label>Skill</label>
            <input type='text' className='form-control' {...this.state.skill} />
          </div>
          <button onSubmit={this.handleSubmit} type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'SkillsNewForm',
  fields: ['username', 'skill']
})(NewSkills);
