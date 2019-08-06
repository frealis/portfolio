import React, { Component } from 'react'

class Html extends Component {
  render() {
    return (
      <div>

        <div className="scraps">
          <div className="scrap free brand">
            Mustachio the Pistachio
            <span className="brand-sub">Web Developer</span>
          </div>
          <div className="scrap free links">
            <a className="scrap free link-projects">Projects</a>
            <a className="scrap free link-contact">Contact</a>
          </div>
        </div>

        <nav className="nav-fixed scraps-collected nav-fixed-vanish">
        {/* <nav class="nav-fixed scraps-collected"> */}
          <div className="scrap-collected fixed brand">      
            Mustachio the Pistachio
            <span className="brand-sub">Web Developer</span>
          </div>
          <div className="scrap-collected fixed links">
            <a className="scrap-collected fixed link-projects">Projects</a>
            <a className="scrap-collected fixed link-contact">Contact</a>
          </div>
        </nav>

        <div className="main">
          <div className="page-landing"></div>
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
          <div className="nav-tripwire page-spacer"></div>
          <a id="anchor-projects"></a>
          <div className="page">
            <h1 className="page-header">Projects</h1>
          </div>
          <div className="page-spacer"></div>
          <a id="anchor-contact"></a>
          <div className="page">
            <h1 className="page-header">Contact</h1>
          </div>
          <footer className="footer"></footer>
        </div>

      </div>
    )
  }
}

export default Html