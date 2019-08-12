// Navbar Deconstructed
import React, { Component } from 'react'

class NavbarDeconstructed extends Component {
  render() {
    const { IconGitHub, IconLinkedIn, IconResume, Resume } = this.props
    return (
      <div className="scraps">
        <div className="scrap free brand">
          Mustachio the Pistachio
          <span className="brand-sub">Web Developer</span>
        </div>
        <div className="scrap free links">
          <button className="scrap free link-projects">Projects</button>
          <button className="scrap free link-contact">Contact</button>
          <button className="scrap free link-resume">
            {/* <a href={ Resume } target="_blank" rel="noopener noreferrer"> */}
              <IconResume />
            {/* </a> */}
          </button>
          <button className="scrap free link-github"><IconGitHub /></button>
          <button className="scrap free link-linkedin"><IconLinkedIn /></button>
        </div>
      </div>
    )
  }
}

export default NavbarDeconstructed