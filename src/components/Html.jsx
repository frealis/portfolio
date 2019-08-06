import React, { Component } from 'react'

class Html extends Component {
  render() {
    return (
      <div>

        <div class="scraps">
          <div class="scrap free brand">
            Mustachio the Pistachio
            <span class="brand-sub">Web Developer</span>
          </div>
          <div class="scrap free links">
            <a class="scrap free link-projects">Projects</a>
            <a class="scrap free link-contact">Contact</a>
          </div>
        </div>

        <nav class="nav-fixed scraps-collected nav-fixed-vanish">
        {/* <nav class="nav-fixed scraps-collected"> */}
          <div class="scrap-collected fixed brand">      
            Mustachio the Pistachio
            <span class="brand-sub">Web Developer</span>
          </div>
          <div class="scrap-collected fixed links">
            <a class="scrap-collected fixed link-projects">Projects</a>
            <a class="scrap-collected fixed link-contact">Contact</a>
          </div>
        </nav>

        <div class="main">
          <div class="page-landing"></div>
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
          <div class="nav-tripwire page-spacer"></div>
          <a id="anchor-projects"></a>
          <div class="page">
            <h1 class="page-header">Projects</h1>
          </div>
          <div class="page-spacer"></div>
          <a id="anchor-contact"></a>
          <div class="page">
            <h1 class="page-header">Contact</h1>
          </div>
          <footer class="footer"></footer>
        </div>

      </div>
    )
  }
}

export default Html