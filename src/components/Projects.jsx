import React, { Component } from 'react';

import ProjectsMedCheckCare from './ProjectsMedCheckCare.jsx';
import ProjectsRNS from './ProjectsRNS.jsx'
import ProjectsTMWTE from './ProjectsTMWTE.jsx'
import ProjectsRCPW from './ProjectsRCPW.jsx';
import ProjectsPinocchios from './ProjectsPinocchios.jsx';
import ProjectsMicroChat from './ProjectsMicroChat.jsx';
import ProjectsBookReviews from './ProjectsBookReviews.jsx';

// Import <svg> components
import IconAWS from '../img/svg-components/icon-aws'
import IconExternalLink from '../img/svg-components/icon-external-link'
import LogoBootstrap from '../img/svg-components/logo-bootstrap'
import LogoDjango from '../img/svg-components/logo-django'
import LogoFlask from '../img/svg-components/logo-flask-02'
import LogoHeroku from '../img/svg-components/logo-heroku'
import LogoNetlify from '../img/svg-components/logo-netlify'
import LogoReact from '../img/svg-components/logo-react'
import LogoPostgreSQL from '../img/svg-components/logo-postgresql'

class Projects extends Component {
  render() {
    return (
      <div>
        <span id="anchor-projects"></span>
        <div className="page page-projects">
          <h1 className="page-header">Projects</h1>
          <ProjectsMedCheckCare IconExternalLink={ IconExternalLink } LogoNetlify = { LogoNetlify } />          
          <ProjectsRCPW IconAWS={ IconAWS } IconExternalLink={ IconExternalLink } LogoBootstrap={ LogoBootstrap } LogoDjango={ LogoDjango } LogoPostgreSQL={ LogoPostgreSQL } />
          <ProjectsTMWTE IconExternalLink={ IconExternalLink } LogoNetlify = { LogoNetlify } LogoReact={ LogoReact } />          
          <ProjectsRNS IconAWS={ IconAWS } IconExternalLink={ IconExternalLink } LogoBootstrap={ LogoBootstrap } LogoDjango={ LogoDjango } LogoPostgreSQL={ LogoPostgreSQL } />
          <ProjectsPinocchios IconExternalLink={ IconExternalLink } LogoBootstrap={ LogoBootstrap } LogoDjango={ LogoDjango } LogoHeroku={ LogoHeroku } LogoPostgreSQL={ LogoPostgreSQL } />
          <ProjectsMicroChat IconExternalLink={ IconExternalLink } LogoBootstrap={ LogoBootstrap } LogoFlask={ LogoFlask } LogoHeroku={ LogoHeroku } />
          <ProjectsBookReviews IconExternalLink={ IconExternalLink } LogoBootstrap={ LogoBootstrap } LogoFlask={ LogoFlask } LogoHeroku={ LogoHeroku } LogoPostgreSQL={ LogoPostgreSQL } />
        </div>
      </div>
    )
  }
}

export default Projects;