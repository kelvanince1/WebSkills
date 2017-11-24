import React, { Component } from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

class Homepage extends Component {
  render() {
    return (
      <Navbar>
        <Nav>
          <NavItem>Home</NavItem>
          <NavItem>Skills</NavItem>
        </Nav>
      </Navbar>,
      <div>
        <h3>Hello Username</h3>
        <h4>See your skills or endorse someone elses</h4>
      </div>
    )
  }
}

export default Homepage;
