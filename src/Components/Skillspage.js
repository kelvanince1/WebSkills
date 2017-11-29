import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';

import Header from './Header';
import { skillsData } from '../Actions/Skills';
import {skillsProfile} from '../Reducers/index';

// This is the users own skills page. They can view their exisiting
// skills as well as create new ones.
class SkillsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skill: {}
    }
  }

  componentWillReceiveProps(nextProps) {
      this.props.skillsData();
      this.props.payload;
   };

   componentWillMount() {
     this.props.skillsData();
   };

   renderSkills() {
     return _.map(this.props.payload, skill => {
       return (
         <li className='list-group-item' key={skill.username}>
          {skill.username}
         </li>
       )
     })
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
        <ul className='list-group'>
          {this.renderSkills()}
        </ul>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  ...state.skillsProfile,
  ...state.skillsData,
  payload: state.skillsProfile.payload
});

export default connect(mapStateToProps, {skillsData})(SkillsPage);
