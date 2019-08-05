// Navbar Net
import React, { Component } from 'react'

class NavbarNet extends Component {
  render() {
    return (
      <nav class="nav-net scraps-collected">
        <div class="scrap-collected net brand display-none">
          Mustachio the Pistachio
          <span class="brand-sub">Web Developer</span>
        </div>
        <div class="scrap-collected net links display-none">
          <a class="scrap-collected net link-projects">Projects</a>
          <a class="scrap-collected net link-contact">Contact</a>
        </div>
      </nav>
    )
  }
}

export default NavbarNet