import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './Header';
import { skillsAction } from '../Actions/Skills';

// This is the users own skills page. They can view their exisiting
// skills as well as create new ones.
class SkillsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: []
    }
  };

  componentWillMount() {
    skillsAction();
    console.log(this.props.skills);
  };

  // filterSkills = (payload) => {
  //     if (payload) {
  //        return payload
  //     }
  //  };

   // handleOnTouchTap = (skill) => {
   //    this.setState({
   //       selectedSkill: skill
   //    },
   //       this.props.toggleModal
   //     )
   // };

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
}

export default SkillsPage;
