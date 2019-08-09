import React, { Component } from 'react';

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
import LogoPostgreSQL from '../img/svg-components/logo-postgresql'

class Projects extends Component {
  render() {
    return (
      <div>
        <span id="anchor-projects"></span>
        <div className="page">
          <h1 className="page-header">Projects</h1>
          <ProjectsRCPW IconAWS={ IconAWS} IconExternalLink={ IconExternalLink } LogoBootstrap={ LogoBootstrap } LogoDjango={ LogoDjango } LogoPostgreSQL={ LogoPostgreSQL } />
          <ProjectsPinocchios IconExternalLink={ IconExternalLink } LogoBootstrap={ LogoBootstrap } LogoDjango={ LogoDjango } LogoHeroku={ LogoHeroku } LogoPostgreSQL={ LogoPostgreSQL } />
          <ProjectsMicroChat IconExternalLink={ IconExternalLink } LogoBootstrap={ LogoBootstrap } LogoFlask={ LogoFlask } LogoHeroku={ LogoHeroku } />
          <ProjectsBookReviews IconExternalLink={ IconExternalLink } LogoBootstrap={ LogoBootstrap } LogoFlask={ LogoFlask } LogoHeroku={ LogoHeroku } LogoPostgreSQL={ LogoPostgreSQL } />
        </div>
      </div>
    )
  }
}

export default Projects;

// River City Pro Wash, Pinocchio's Pizza & Subs
// <div className="row">
//   <ProjectsRCPW IconBootstrap={ IconBootstrap } IconDjango={ IconDjango } IconPostgres={ IconPostgres} IconAWS={ IconAWS} />
//   <ProjectsPinocchios IconBootstrap={ IconBootstrap } IconDjango={ IconDjango } IconPostgres={ IconPostgres} IconHeroku={ IconHeroku} />
// </div>

// microChat, Book Reviews w/Goodreads
// <div className="row">
//   <ProjectsMicroChat IconBootstrap={ IconBootstrap } IconFlask={ IconFlask } IconHeroku={ IconHeroku} />
//   <ProjectsBookReviews IconBootstrap={ IconBootstrap } IconFlask={ IconFlask } IconPostgres={ IconPostgres} IconHeroku={ IconHeroku} />
// </div>