// Navbar Net
import React, { Component } from 'react'

import IconResume from '../img/svg-components/icon-resume'

class NavbarNet extends Component {
  render() {
    return (
      <nav className="nav-net scraps-collected">
        <div className="scrap-collected net brand display-none">
          Mustachio the Pistachio
          <span className="brand-sub">Web Developer</span>
        </div>
        <div className="scrap-collected net links display-none">
          <button className="scrap-collected net link-projects">Projects</button>
          <button className="scrap-collected net link-contact">Contact</button>
          <button className="scrap-collected net link-resume"><IconResume /></button>
        </div>
      </nav>
    )
  }
}

export default NavbarNet