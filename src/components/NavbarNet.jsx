// Navbar Net
import React, { Component } from 'react'

class NavbarNet extends Component {
  render() {
    const { IconGitHub, IconLinkedIn, IconResume } = this.props
    return (
      <nav className="nav-net scraps-collected">
        <div className="scrap-collected net brand display-none">
          Mustachio the Pistachio
          <span className="brand-sub">Web Developer</span>
        </div>
      </nav>
    )
  }
}

export default NavbarNet

{/* <div className="scrap-collected net links">
  <button className="scrap-collected net link-projects display-none">Projects</button>
  <button className="scrap-collected net link-contact display-none">Contact</button>
  <button className="scrap-collected net link-resume display-none"><IconResume /></button>
  <button className="scrap-collected net link-github display-none"><IconGitHub /></button>
  <button className="scrap-collected net link-linkedin display-none"><IconLinkedIn /></button>
</div> */}