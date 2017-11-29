import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import {connect} from 'react-redux';

import Header from './Header';

// This is the users own skills page. They can view their exisiting
// skills as well as create new ones.
class SkillsPage extends Component {

   renderTable = (payload) => {
     if(payload) {
       <ul>
        <li>this.filterSkills()</li>
       </ul>
     }
   }


  render() {
    return (
      <div className="text-xs-right">
        <Header />
        <div style={{ float: 'right' }}>
          <Link to="/newskill" className="btn btn-primary">
            Add a skill
          </Link>
        </div>
        <h3>SkillsPage</h3>
      </div>
    )
  }
};

export default SkillsPage;
