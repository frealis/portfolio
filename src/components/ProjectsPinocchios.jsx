import React, { Component } from 'react';

class ProjectsPinocchios extends Component {
  render() {
    return (
      <div className="col-md-6">
        <figure>
          <svg className="projects-thumbnail" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/></svg>
          <figcaption className="d-flex flex-column justify-content-between">
            <div>
              <h2 className="projects-thumbnail-header">Pinocchio's Pizza & Subs</h2>
              <p className="projects-thumbnail-description">Italian restaurant</p>
            </div>
            <div className="d-flex btn-group justify-content-center">
              <button className="btn btn-sm btn-view ext-link-pinocchios">View</button>
              <button className="btn btn-sm btn-source ext-link-pinocchios-github">Source</button>
            </div>
            <div className="d-flex projects-thumbnail-icons justify-content-around">
              <img className="projects-thumbnail-icon ext-link-bootstrap" alt="Bootstrap" src={ this.props.IconBootstrap } />
              <img className="projects-thumbnail-icon ext-link-django" alt="Django" src={ this.props.IconDjango } />
              <img className="projects-thumbnail-icon ext-link-postgres" alt="Postgres" src={ this.props.IconPostgres } />
              <img className="projects-thumbnail-icon ext-link-heroku" alt="Heroku" src={ this.props.IconHeroku } />
            </div>
          </figcaption>
        </figure>
      </div>
    )
  }
}

export default ProjectsPinocchios;