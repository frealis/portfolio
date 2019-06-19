import React, { Component } from 'react';
import IconGitHub from '../img/GitHub.svg';
import IconView from '../img/custom-view.svg';
import IconDjango from '../img/django.svg';
import IconPostgres from '../img/postgresql-horizontal.svg';
import IconAWS from '../img/aws.svg';
import IconBootstrap from '../img/bootstrap.svg';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <h1 className="projects-header">Projects</h1>
        <div className="container thumbnails">
          <div className="row no-gutters">

            {/* River City Pro Wash */}
            <div className="col-md-6">
              <figure>
                <svg className="bd-placeholder-img" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/></svg>
                <figcaption className="d-flex flex-column justify-content-between">
                  <p className="projects-project-description">Residential and commercial pressure washing services</p>
                  <div className="d-flex btn-group justify-content-center">
                    <button className="btn btn-sm">View</button> &nbsp;
                    <button className="btn btn-sm">Source</button>
                  </div>
                  <div className="d-flex projects-project-icons justify-content-around">
                    <img className="projects-project-icon" src={ IconBootstrap } />
                    <img className="projects-project-icon" src={ IconDjango } />
                    <img className="projects-project-icon" src={ IconPostgres } />
                    <img className="projects-project-icon" src={ IconAWS } />
                  </div>
                </figcaption>
              </figure>
            </div>

            {/* Pinocchio's Pizza */}
            <div className="col-md-6">
              
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Projects;