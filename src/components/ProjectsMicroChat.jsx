import React, { Component } from 'react';
import ThumbnailMicroChat from '../img/thumbnail-microchat.svg';

class ProjectsMicroChat extends Component {
  render() {
    const { IconExternalLink, LogoBootstrap, LogoFlask, LogoHeroku } = this.props;
    return (
      <div className="row projects-row">

        <div className="col-lg-5">
          <figure className="ext-link-microchat">
            <img className="projects-thumbnail" alt="microChat" src={ ThumbnailMicroChat } />
          </figure>
        </div>

        <div className="col-lg-7 projects-col">
          <div className="projects-col-top">
            <h2 className="projects-thumbnail-header ext-link-microchat">microChat</h2>
            <p className="projects-thumbnail-description">This is a chatroom application built using Flask SocketIO. Visitors can create a display name and then either join or create new chatroom channels. No passwords are necessary. A random avatar is assigned to each display name through the <a className="projects-reference-link" href="http://avatars.adorable.io/">Adorable Avatars!</a> API.</p>
          </div>
          <div className="projects-col-bottom">
            <button className="btn btn-view ext-link-microchat">
              <IconExternalLink />
              View Site
            </button>
            <button className="btn btn-source ext-link-microchat-github">
              <IconExternalLink />
              Source Code
            </button>
            <div className="projects-tech">
              <button className="btn ext-link-bootstrap"><LogoBootstrap /></button>
              <button className="btn ext-link-flask"><LogoFlask /></button>
              <button className="btn ext-link-heroku"><LogoHeroku /></button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default ProjectsMicroChat;