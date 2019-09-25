import React, { Component } from 'react'
import ThumbnailTMWTE from '../img/thumbnail-tmwte.svg'

class ProjectsTMWTE extends Component {
  render() {
    // const { IconExternalLink, LogoBootstrap, LogoNetlify, LogoReact } = this.props;
    const { IconExternalLink, LogoBootstrap, LogoNetlify, LogoReact } = this.props;
    return (
      <div className="row projects-row">

        <div className="col-lg-5">
          <figure className="ext-link-tmwte">
            <img className="projects-thumbnail" alt="Tell Me Where To Eat" src={ ThumbnailTMWTE } />
          </figure>
        </div>

        <div className="col-lg-7 projects-col">
          <div className="projects-col-top">
            <h2 className="projects-thumbnail-header ext-link-tmwte">Tell Me Where To Eat</h2>
            <p className="projects-thumbnail-description">
              This is (literally) a single-page application that allows users to
              enter their address or use their device's geolocation service/gps
              to search for a restaurant using randomly selected food- and beverage-
              related terms. Specifically, this app uses the JavaScript Maps API, 
              Places API, and optionally the Geolocation API to find places to eat. 
              If the daily quota limit for any of the APIs has been reached, then the 
              app defaults to creating a Google Maps query that uses random search
              terms to find restaurants.
            </p>
            <p className="projects-thumbnail-description">
              The location of the restaurant is typically local, but it's subject
              to the results of a Google Maps query. For instance if you're in
              New York City but have recently been to Phoenix, AZ, it may return
              information on a restaurant local to Phoenix.
            </p>
          </div>
          <div className="projects-col-bottom">
            <button className="btn btn-view ext-link-tmwte">
              <IconExternalLink />
              View Site
            </button>
            <button className="btn btn-source ext-link-tmwte-github">
              <IconExternalLink />
              Source Code
            </button>
            <div className="projects-tech">
              <button className="btn ext-link-bootstrap"><LogoBootstrap /></button>
              <button className="btn ext-link-react"><LogoReact /></button>
              <button className="btn ext-link-netlify"><LogoNetlify /></button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default ProjectsTMWTE