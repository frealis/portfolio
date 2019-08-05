// Navbar Constructed Fixed
import React, { Component } from 'react'

class NavbarConstructedFixed extends Component {
  render() {
    return (
      <nav class="nav-fixed scraps-collected nav-fixed-vanish">
        <div class="scrap-collected fixed brand">      
          Mustachio the Pistachio
          <span class="brand-sub">Web Developer</span>
        </div>
        <div class="scrap-collected fixed links">
          <a class="scrap-collected fixed link-projects">Projects</a>
          <a class="scrap-collected fixed link-contact">Contact</a>
        </div>
      </nav>
    )
  }
}

export default NavbarConstructedFixed