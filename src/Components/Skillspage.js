import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

// This is the users own skills page. They can view their exisiting
// skills as well as create new ones.
class SkillsPage extends Component {
  render() {
    return (
      <div>
        <h3>SkillsPage</h3>
        <Button bsStyle="primary">Add Skill</Button>
      </div>
    )
  }
}

export default SkillsPage;
