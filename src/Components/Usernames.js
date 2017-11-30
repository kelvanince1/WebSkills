import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import Header from './Header';
import { skillsData } from '../Actions/Skills';
import {skillsProfile} from '../Reducers/index';

// This is the users own skills page. They can view their exisiting
// skills as well as create new ones.
class Usernames extends Component {
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
         <li className='list-group-item' key={skill}>
          <Link to='/skills'>{this.props.payload.username}</Link>
         </li>
       )
     })
   }


  render() {
    return (
      <div className="text-xs-right">
        <Header />
        <h3>Which user would you like to see</h3>
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

export default connect(mapStateToProps, {skillsData})(Usernames);
