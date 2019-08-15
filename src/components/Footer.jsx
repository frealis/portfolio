import React, { Component } from 'react'

import IconReact from '../img/svg-components/icon-react'
import LogoGitHubPages from '../img/svg-components/logo-github-pages'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          This site was made with <span className="footer-link-wrapper footer-react"><IconReact /></span> and is hosted on <span className="footer-link-wrapper footer-github-pages"><LogoGitHubPages /></span>
        </div>
        <div>
          Projects | Contact | Resume | GitHub | LinkedIn
        </div>
      </div>
    )
  }
}

export default Footer