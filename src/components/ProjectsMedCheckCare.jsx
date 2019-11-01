import React, { Component } from 'react'
import ThumbnailMedCheckCare from '../img/thumbnail-medcheck-care.svg'

class ProjectsMedCheckCare extends Component {
  render() {
    const { IconExternalLink, LogoAngular, LogoNetlify } = this.props;
    return (
      <div className="row projects-row">

        <div className="col-lg-5">
          <figure className="ext-link-medcheck-care">
            <img className="projects-thumbnail" alt="MedCheck.care" src={ ThumbnailMedCheckCare } />
          </figure>
        </div>

        <div className="col-lg-7 projects-col">
          <div className="projects-col-top">
            <h2 className="projects-thumbnail-header ext-link-medcheck-care">MedCheck.care</h2>
            <p className="projects-thumbnail-description">
              This is a drug interaction search tool that allows visitors to
              search for drug interactions between prescription medications, 
              over-the-counter (OTC) medications, and/or herbal supplements.
            </p>
            <p className="projects-thumbnail-description">
              It basically acts an a UI interface that retrieves and displays 
              publicly available data via free access APIs offered by the National
              Library of Medicine (NLM), the National Institutes of Health (NIH),
              and the Department of Health and Human Services.
            </p>
          </div>
          <div className="projects-col-bottom">
            <button className="btn btn-view ext-link-medcheck-care">
              <IconExternalLink />
              View Site
            </button>
            <button className="btn btn-source ext-link-medcheck-care-github">
              <IconExternalLink />
              Source Code
            </button>
            <div className="projects-tech">
            <button className="btn ext-link-angular"><LogoAngular /></button>
            <button className="btn ext-link-netlify"><LogoNetlify /></button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default ProjectsMedCheckCare