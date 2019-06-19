import React, { Component } from 'react';
import ThumbnailRCPW from '../img/thumbnail-rcpw.svg';

class ProjectsRCPW extends Component {
  render() {
    return (
      <div className="col-md-6 projects-col">
        <figure>
          <img className="projects-thumbnail" alt="River City Pro Wash" src={ ThumbnailRCPW } />
          <figcaption className="d-flex flex-column justify-content-between">
            <div>
              <h2 className="projects-thumbnail-header">River City Pro Wash</h2>
              <p className="projects-thumbnail-description">Residential and commercial pressure washing services</p>
            </div>
            <div className="d-flex btn-group justify-content-center">
              <button className="btn btn-sm btn-view ext-link-rcpw">View</button>
              <button className="btn btn-sm btn-source ext-link-rcpw-github">Source</button>
            </div>
            <div className="d-flex projects-thumbnail-icons justify-content-around">
              <img className="projects-thumbnail-icon ext-link-bootstrap" alt="Bootstrap" src={ this.props.IconBootstrap } />
              <img className="projects-thumbnail-icon ext-link-django" alt="Django" src={ this.props.IconDjango } />
              <img className="projects-thumbnail-icon ext-link-postgres" alt="Postgres" src={ this.props.IconPostgres } />
              <img className="projects-thumbnail-icon ext-link-aws" alt="AWS" src={ this.props.IconAWS } />
            </div>
          </figcaption>
        </figure>
      </div>
    )
  }
}

export default ProjectsRCPW;