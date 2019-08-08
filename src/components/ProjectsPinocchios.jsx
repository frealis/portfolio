import React, { Component } from 'react';
import ThumbnailPinocchios from '../img/thumbnail-pinocchios.svg';

class ProjectsPinocchios extends Component {
  render() {
    const { LogoBootstrap, LogoDjango, IconExternalLink, LogoHeroku, LogoPostgreSQL } = this.props;
    return (
      <div className="row projects-row">

        <div className="col-md-5">
          <figure>
            <img className="projects-thumbnail" alt="Pinocchio's Pizza & Subs" src={ ThumbnailPinocchios } />
          </figure>
        </div>

        <div className="col-md-7 projects-col">
          <div className="projects-col-top">
            <h2 className="projects-thumbnail-header">Pinocchio's Pizza & Subs</h2>
            <p className="projects-thumbnail-description">This website is a redesign project for <a href="https://www.pinocchiospizza.net/">Pinocchio's Pizza & Subs</a>, a local pizza shop in Cambridge, MA. It uses Django's built-in admin panel along with a Postgres database to manage menu items as well as store customer orders. It is integrated with Stripe's payment processing API for testing purposes.</p>
          </div>
          <div className="projects-col-bottom">
            <button className="btn btn-view ext-link-pinocchios">
              <IconExternalLink />
              View Site
            </button>
            <button className="btn btn-source ext-link-pinocchios-github">
              <IconExternalLink />
              Source Code
            </button>
            <div className="projects-tech">
              <button className="btn ext-link-bootstrap"><LogoBootstrap /></button>
              <button className="btn ext-link-django"><LogoDjango /></button>
              <button className="btn ext-link-postgresql"><LogoPostgreSQL /></button>
              <button className="btn ext-link-heroku"><LogoHeroku /></button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default ProjectsPinocchios;