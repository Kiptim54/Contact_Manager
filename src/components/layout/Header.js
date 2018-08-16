import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
      const { name } = this.props
    return (
        <nav>
        <div className="nav-wrapper">
          <span><Link to="/" className="brand-logo">{name}</Link></span>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="contact/add">Add Contact</Link></li>
            <li><Link to="/test">CRE Papaer</Link></li>
            
            
            
           
          </ul>
        </div>
      </nav>
            
    )
  }
}
Header.propTypes={
    name:PropTypes.string
}

export default Header