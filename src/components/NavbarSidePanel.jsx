import React, { Component } from 'react'

import IconHamburger from '../img/svg-components/icon-hamburger'

class NavbarSidePanel extends Component {
  render() {
    return (
      <nav className="navbar">
        
        <button className="nav-btn-toggle-sidepanel" type="button" data-toggle="collapse-sidepanel" data-target="#nav-sidepanel" aria-controls="nav-sidepanel" aria-expanded="false" aria-label="Toggle navigation">
          <IconHamburger />
        </button>

        <div id="nav-sidepanel" className="collapse-sidepanel">
          <button className="nav-link link-projects">Projects</button>
          <button className="nav-link link-contact">Contact</button>
          <button className="nav-link link-resume">Resume</button>
          <button className="nav-link link-github">GitHub</button>
          <button className="nav-link link-linkedin">LinkedIn</button>
        </div>

      </nav>
    )
  }
}

export default NavbarSidePanel