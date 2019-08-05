// Navbar Deconstructed
import React, { Component } from 'react'

class NavbarDeconstructed extends Component {
  render() {
    return (
      <div className="scraps">
        <div className="scrap free brand">
          Mustachio the Pistachio
          <span className="brand-sub">Web Developer</span>
        </div>
        <div className="scrap free links">
          <a className="scrap free link-projects">Projects</a>
          <a className="scrap free link-contact">Contact</a>
        </div>
      </div>
    )
  }
}

export default NavbarDeconstructed