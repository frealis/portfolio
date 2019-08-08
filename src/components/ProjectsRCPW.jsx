import React, { Component } from 'react'
import ThumbnailRCPW from '../img/thumbnail-rcpw.svg'

class ProjectsRCPW extends Component {
  render() {
    const { IconAWS, LogoBootstrap, LogoDjango, IconExternalLink, LogoPostgreSQL } = this.props;
    return (
      <div className="row">

        <div className="col-md-5">
          <figure>
            <img className="projects-thumbnail" alt="River City Pro Wash" src={ ThumbnailRCPW } />
          </figure>
        </div>

        <div className="col-md-7">
          <div>
            <h2 className="projects-thumbnail-header">River City Pro Wash</h2>
            <p className="projects-thumbnail-description">Residential and commercial pressure washing company</p>
          </div>
          <button className="btn btn-view ext-link-rcpw">
            <IconExternalLink />
            View
          </button>
          <button className="btn btn-source ext-link-rcpw-github">
            <IconExternalLink />
            Source
          </button>
          <div className="projects-tech">
            <button className="btn btn-bootstrap ext-link-bootstrap"><LogoBootstrap /></button>
            <button className="btn btn-django ext-link-django"><LogoDjango /></button>
            <button className="btn btn-postgresql ext-link-postgres"><LogoPostgreSQL /></button>
            <button className="btn btn-aws ext-link-aws"><IconAWS /></button>
          </div>
        </div>

      </div>
    )
  }
}

export default ProjectsRCPW