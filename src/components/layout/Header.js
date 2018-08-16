import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
      const { name } = this.props
    return (
        <nav>
        <div className="nav-wrapper">
          <span><a href="/" className="brand-logo">{name}</a></span>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
           
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