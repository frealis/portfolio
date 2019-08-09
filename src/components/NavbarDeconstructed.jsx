// Navbar Deconstructed
import React, { Component } from 'react'

import IconResume from '../img/svg-components/icon-resume'

class NavbarDeconstructed extends Component {
  render() {
    return (
      <div className="scraps">
        <div className="scrap free brand">
          Mustachio the Pistachio
          <span className="brand-sub">Web Developer</span>
        </div>
        <div className="scrap free links">
          <button className="scrap free link-projects">Projects</button>
          <button className="scrap free link-contact">Contact</button>
          <button className="scrap free link-resume"><IconResume /></button>
          {/* <button className="scrap free link-github">GitHub</button> */}
          {/* <button className="scrap free link-linkedin">LinkedIn</button> */}
        </div>
      </div>
    )
  }
}

export default NavbarDeconstructed