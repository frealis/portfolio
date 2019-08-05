// Navbar Constructed Fixed
import React, { Component } from 'react'

class NavbarConstructedFixed extends Component {
  render() {
    return (
      <nav className="nav-fixed scraps-collected nav-fixed-vanish">
        <div className="scrap-collected fixed brand">      
          Mustachio the Pistachio
          <span className="brand-sub">Web Developer</span>
        </div>
        <div className="scrap-collected fixed links">
          <a className="scrap-collected fixed link-projects">Projects</a>
          <a className="scrap-collected fixed link-contact">Contact</a>
        </div>
      </nav>
    )
  }
}

export default NavbarConstructedFixed