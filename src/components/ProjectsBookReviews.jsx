import React, { Component } from 'react';
import ThumbnailBookReviews from '../img/thumbnail-book-reviews.svg';


class BookReviews extends Component {
  render() {
    const { IconExternalLink, LogoBootstrap, LogoFlask, LogoHeroku, LogoPostgreSQL } = this.props;
    return (
      <div className="row projects-row">

        <div className="col-md-5">
          <figure>
            <img className="projects-thumbnail ext-link-bookreviews" alt="Book Reviews" src={ ThumbnailBookReviews } />
          </figure>
        </div>

        <div className="col-md-7 projects-col">
          <div className="projects-col-top">
            <h2 className="projects-thumbnail-header ext-link-bookreviews">Book Reviews w/Goodreads</h2>
            <p className="projects-thumbnail-description">This is a book reviews website that allows user account creation, login & authentication using Flask Sessions, and database search utility that interfaces with a Heroku Postgres database containing data on 5,000 books. The site also allows visitors to read and write reviews for those books, rate the books, and provides instructions on how to access the site's API which serves book reviews and details data in JSON format.</p>
            <p className="projects-thumbnail-description">Additionally, this site also retrieves book ratings on the same books from <a className="projects-reference-link" href="https://www.goodreads.com">Goodreads</a> through the <a className="projects-reference-link" href="https://www.goodreads.com/api">Goodreads API</a>.</p>
          </div>
          <div className="projects-col-bottom">
            <button className="btn btn-view ext-link-bookreviews">
              <IconExternalLink />
              View Site
            </button>
            <button className="btn btn-source ext-link-bookreviews-github">
              <IconExternalLink />
              Source Code
            </button>
            <div className="projects-tech">
              <button className="btn ext-link-bootstrap"><LogoBootstrap /></button>
              <button className="btn ext-link-flask"><LogoFlask /></button>
              <button className="btn ext-link-postgresql"><LogoPostgreSQL /></button>
              <button className="btn ext-link-heroku"><LogoHeroku /></button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default BookReviews;