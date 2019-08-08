import React, { Component } from 'react'
import ThumbnailRCPW from '../img/thumbnail-rcpw.svg'
import IconExternalLink from '../img/svg-components/component-custom-external-link'

class ProjectsRCPW extends Component {
  render() {
    const { IconAWS, IconBootstrap, IconDjango, IconPostgres } = this.props;
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
          <div className="d-flex projects-thumbnail-icons justify-content-around">
            <img className="projects-thumbnail-icon ext-link-bootstrap" alt="Bootstrap" src={ IconBootstrap } />
            <img className="projects-thumbnail-icon ext-link-django" alt="Django" src={ IconDjango } />
            <img className="projects-thumbnail-icon ext-link-postgres" alt="Postgres" src={ IconPostgres } />
            <img className="projects-thumbnail-icon ext-link-aws" alt="AWS" src={ IconAWS } />
          </div>
        </div>

      </div>
    )
  }
}

export default ProjectsRCPW