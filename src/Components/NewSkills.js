import React, { Component } from 'react';
import AWS from 'aws-sdk';
import {Button } from 'react-bootstrap';

var ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

class NewSkills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skill: ''
    }
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
    return (
      <h2>Hello</h2>
    );
  }
}

export default NewSkills;
