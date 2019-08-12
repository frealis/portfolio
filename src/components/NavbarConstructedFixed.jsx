// Navbar Constructed Fixed
import React, { Component } from 'react'

class NavbarConstructedFixed extends Component {
  render() {
    const { IconGitHub, IconLinkedIn, IconResume } = this.props
    return (
      <nav className="nav-fixed scraps-collected nav-fixed-vanish">
        <div className="scrap-collected fixed brand">      
          Mustachio the Pistachio
          <span className="brand-sub">Web Developer</span>
        </div>
      </nav>
    )
  }
}

export default NavbarConstructedFixed

{/* <div className="scrap-collected fixed links">
  <button className="scrap-collected fixed link-projects">Projects</button>
  <button className="scrap-collected fixed link-contact">Contact</button>
  <button className="scrap-collected fixed link-resume"><IconResume /></button>
  <button className="scrap-collected fixed link-github"><IconGitHub /></button>
  <button className="scrap-collected fixed link-linkedin"><IconLinkedIn /></button>
</div> */}