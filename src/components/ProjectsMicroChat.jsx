import React, { Component } from 'react';
import ThumbnailMicroChat from '../img/thumbnail-microchat.svg';

class ProjectsMicroChat extends Component {
  render() {
    return (
      <div className="col-md-6">
        <figure>
          <img className="projects-thumbnail" alt="microChat" src={ ThumbnailMicroChat } />
          <figcaption className="d-flex flex-column justify-content-between">
            <div>
              <h2 className="projects-thumbnail-header">microChat</h2>
              <p className="projects-thumbnail-description">Lightweight chat application</p>
            </div>
            <div className="d-flex btn-group justify-content-center">
              <button className="btn btn-sm btn-view ext-link-microchat">View</button>
              <button className="btn btn-sm btn-source ext-link-microchat-github">Source</button>
            </div>
            <div className="d-flex projects-thumbnail-icons justify-content-around">
              <img className="projects-thumbnail-icon ext-link-bootstrap" alt="Bootstrap" src={ this.props.IconBootstrap } />
              <img className="projects-thumbnail-icon ext-link-flask" alt="Flask" src={ this.props.IconFlask } />
              <img className="projects-thumbnail-icon ext-link-heroku" alt="Heroku" src={ this.props.IconHeroku } />
            </div>
          </figcaption>
        </figure>
      </div>
    )
  }
}

export default ProjectsMicroChat;