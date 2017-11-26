import React, { Component } from 'react';
import AWS from 'aws-sdk';
import {Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

var ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

AWS.config.credentials = new AWS.Credentials({accessKey: process.env.ACCESS_KEY, secretKey: process.env.SECRET_KEY});

class NewSkills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skill: '',
      username: ''
    }
  };

  handleSubmit = () => {
    console.log()
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

  // handleUsername = (event) => this.setState({username: event.target.value});
  // handleSkill = (event) => this.setState({skill: event.value});

  render() {
    return (
      <form>

        <fieldset className="form-group">
          <label>Skill:</label>
          <input className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary" onClick={this.handleSubmit()}><Link to="/skills">Add Skill</Link></button>
      </form>
    );
  }
}

export default NewSkills;
