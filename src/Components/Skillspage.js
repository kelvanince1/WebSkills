import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import Header from './Header';

// This is the users own skills page. They can view their exisiting
// skills as well as create new ones.
class SkillsPage extends Component {
  render() {
    return (
      <div className="text-xs-right">
        <Header />
        <div>
          <Button bsStyle="primary">Add Skill</Button>
        </div>
        <h3>SkillsPage</h3>
      </div>
    )
  }
}

export default SkillsPage;
