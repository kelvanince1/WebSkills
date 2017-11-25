import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className='jumbotron'>
        <ul className='nav navbar-nav'>
          <li className="nav-item">
            Sign In
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header;
