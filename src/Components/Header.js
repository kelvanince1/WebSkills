import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className='jumbotron'>
        <ul className='nav navbar-nav'>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="/othersskills">Other Users</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header;
