import React, { Component } from 'react';

class NewSkills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skill: ''
    }
  };

  handleSubmit = () => {
    var payload = {
      username: '',
      skill: ''
    }
  };

  render() {
    return (
      <h3>Create skill</h3>
    )
  }
}

export default NewSkills;
