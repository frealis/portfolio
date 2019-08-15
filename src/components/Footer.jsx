import React, { Component } from 'react'

import LogoReact from '../img/svg-components/logo-react'
import LogoGitHubPages from '../img/svg-components/logo-github-pages'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-created-with">
          This site was made with 
          <span className="footer-icon-wrapper ext-link-react footer-react">
            <LogoReact />
          </span> 
          and is hosted on 
          <span className="footer-icon-wrapper ext-link-github-pages footer-github-pages">
            <LogoGitHubPages />
          </span>
        </div>
        <div className="footer-navigation">
          <button className="footer-link link-projects">Projects</button> |
          <button className="footer-link link-contact">Contact</button> | 
          <button className="footer-link link-resume">Resume</button> | 
          <button className="footer-link link-github">GitHub</button>| 
          <button className="footer-link link-linkedin">LinkedIn</button>
        </div>
      </div>
    )
  }
}

export default Footer