// Navbar Deconstructed
import React, { Component } from 'react'

class NavbarDeconstructed extends Component {
  render() {
    const { IconGitHub, IconLinkedIn, IconResume } = this.props
    return (
      <div className="scraps">
        <div className="scrap free links">
          <button className="scrap free link-projects">Projects</button>
          <button className="scrap free link-contact">Contact</button>
          <button className="scrap free link-resume"><IconResume /></button>
          <button className="scrap free link-github"><IconGitHub /></button>
          <button className="scrap free link-linkedin"><IconLinkedIn /></button>
        </div>
      </div>
    )
  }
}

export default NavbarDeconstructed