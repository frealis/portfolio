import React, { Component } from 'react';

// import IconGitHub from '../img/GitHub.svg';
// import IconView from '../img/custom-view.svg';
import IconAWS from '../img/aws.svg';
import IconBootstrap from '../img/bootstrap - symbol.svg';
import IconDjango from '../img/django.svg';
import IconFlask from '../img/flask.svg';
import IconHeroku from '../img/heroku-icon.svg';
import IconPostgres from '../img/postgresql-icon.svg';

import ProjectsRCPW from './ProjectsRCPW.jsx';
import ProjectsPinocchios from './ProjectsPinocchios.jsx';
import ProjectsMicroChat from './ProjectsMicroChat.jsx';
import ProjectsBookReviews from './ProjectsBookReviews.jsx';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div id="projects-anchor"></div>
        <h1 className="projects-header">Projects</h1>
        <div className="container thumbnails">

          {/* River City Pro Wash, Pinocchio's Pizza & Subs */}
          <div className="row">
            <ProjectsRCPW IconBootstrap={ IconBootstrap } IconDjango={ IconDjango } IconPostgres={ IconPostgres} IconAWS={ IconAWS} />
            <ProjectsPinocchios IconBootstrap={ IconBootstrap } IconDjango={ IconDjango } IconPostgres={ IconPostgres} IconHeroku={ IconHeroku} />
          </div>

          {/* microChat, Book Reviews w/Goodreads */}
          <div className="row">
            <ProjectsMicroChat IconBootstrap={ IconBootstrap } IconFlask={ IconFlask } IconHeroku={ IconHeroku} />
            <ProjectsBookReviews IconBootstrap={ IconBootstrap } IconFlask={ IconFlask } IconPostgres={ IconPostgres} IconHeroku={ IconHeroku} />
          </div>

        </div>
      </div>
    )
  }
}

export default Projects;