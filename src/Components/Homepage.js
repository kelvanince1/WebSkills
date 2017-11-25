import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Loginpage from './Loginpage';
import SkillsPage from './Skillspage';

class Homepage extends Component {
  render() {
    return (
      <div>
        <h3>Hello Username</h3>
        <h4>See your skills or endorse someone elses</h4>
      </div>
    )
  }
}

export default Homepage;
