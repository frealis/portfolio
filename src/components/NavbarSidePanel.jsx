import React, { Component } from 'react'

import IconHamburger from '../img/svg-components/icon-hamburger'

class NavbarSidePanel extends Component {
  render() {
    return (
      <nav className="navbar">
        
        <button className="nav-btn-toggle-sidepanel" type="button" data-toggle="collapse-sidepanel" data-target="#nav-sidepanel" aria-controls="nav-sidepanel" aria-expanded="false" aria-label="Toggle navigation">
          <IconHamburger />
        </button>

        <div id="nav-sidepanel">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#anchor-projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#anchor-contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.matthigg.com">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.matthigg.com">GitHub</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.matthigg.com">LinkedIn</a>
            </li>
          </ul>
        </div>

      </nav>
    )
  }
}

export default NavbarSidePanel