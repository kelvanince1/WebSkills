import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="jumbotron">
        <Link to="/" fontSize='40px'>Home</Link>
        <Link to="/skills" fontSize='40px'>Skills</Link>
        <Link to="/othersskills" fontSize='40px'>Other Users Skills</Link>
      </nav>
    )
  }
}

export default Header;
