import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Button } from 'react-bootstrap';

import Header from './Header';
import { skillsData } from '../Actions/Skills';
import {skillsProfile} from '../Reducers/index'
// I am using React-Bootstrap for some styling.
// Url: https://react-bootstrap.github.io/components.html

//Homepage component. Acts as a kind of splash page for the users.
class Homepage extends Component {

  componentWillReceiveProps(nextProps) {
      let userObj = nextProps.payload;
      this.props.skillsData;
      console.log(nextProps.payload);
   };

   componentWillMount() {
     this.props.skillsData;

   }

  render() {
    return (
      <div>
        <Header />
        <h3>Hello Username</h3>
        <h4>See your skills or endorse someone elses</h4>
        <Button><Link to="/skills">Skills</Link></Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.skillsProfile,
  ...state.skillsData,
  payload: state.skillsProfile.payload
});

export default connect(mapStateToProps, {skillsData})(Homepage);
