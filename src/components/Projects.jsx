import React, { Component } from 'react';

import ProjectsRCPW from './ProjectsRCPW.jsx';
// import ProjectsPinocchios from './ProjectsPinocchios.jsx';
// import ProjectsMicroChat from './ProjectsMicroChat.jsx';
// import ProjectsBookReviews from './ProjectsBookReviews.jsx';

import IconAWS from '../img/aws.svg'
import IconBootstrap from '../img/bootstrap-symbol.svg'
import IconDjango from '../img/djangoproject-icon2.svg'
import IconPostgres from '../img/postgresql-icon.svg'


class Projects extends Component {
  render() {
    return (
      <div>
        <span id="anchor-projects"></span>
        <div className="page">
          <h1 className="page-header">Projects</h1>
          <ProjectsRCPW IconBootstrap={ IconBootstrap } IconDjango={ IconDjango } IconPostgres={ IconPostgres} IconAWS={ IconAWS} />
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