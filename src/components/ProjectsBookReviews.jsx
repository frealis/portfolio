import React, { Component } from 'react';
import ThumbnailBookReviews from '../img/thumbnail-book-reviews.svg';


class BookReviews extends Component {
  render() {

    // Destructure this.props
    const { IconBootstrap, IconFlask, IconHeroku, IconPostgres } = this.props;

    return (
      <div className="col-md-6 projects-col">
        <figure>
          <img className="projects-thumbnail" alt="Book Reviews" src={ ThumbnailBookReviews } />
          <figcaption className="d-flex flex-column justify-content-between">
            <div>
              <h2 className="projects-thumbnail-header">Book Reviews w/Goodreads</h2>
              <p className="projects-thumbnail-description">Book database and reviews website</p>
            </div>
            <div className="d-flex btn-group justify-content-center">
              <button className="btn btn-sm btn-view ext-link-bookreviews">View</button>
              <button className="btn btn-sm btn-source ext-link-bookreviews-github">Source</button>
            </div>
            <div className="d-flex projects-thumbnail-icons justify-content-around">
              <img className="projects-thumbnail-icon ext-link-bootstrap" alt="Bootstrap" src={ IconBootstrap } />
              <img className="projects-thumbnail-icon ext-link-flask" alt="Flask" src={ IconFlask } />
              <img className="projects-thumbnail-icon ext-link-postgres" alt="Postgres" src={ IconPostgres } />
              <img className="projects-thumbnail-icon ext-link-heroku" alt="Heroku" src={ IconHeroku } />
            </div>
          </figcaption>
        </figure>
      </div>
    )
  }
}

export default BookReviews;