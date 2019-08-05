// Navbar Net
import React, { Component } from 'react'

class NavbarNet extends Component {
  render() {
    return (
      <nav className="nav-net scraps-collected">
        <div className="scrap-collected net brand display-none">
          Mustachio the Pistachio
          <span className="brand-sub">Web Developer</span>
        </div>
        <div className="scrap-collected net links display-none">
          <a className="scrap-collected net link-projects">Projects</a>
          <a className="scrap-collected net link-contact">Contact</a>
        </div>
      </nav>
    )
  }
}

export default NavbarNet