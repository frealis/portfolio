import React, { Component } from 'react';

class About extends Component {
  render() {

    // Destructure this.props
    const { IconAWS, IconBootstrap, IconCSS, IconDjango, IconFlask, IconHeroku, IconHTML, IconJavaScript, IconPostgres, IconPython, IconReact, IconSass } = this.props;

    return (
      <div className="about">
        <div id="anchor-about" className="anchor"></div>
        <h1>About</h1>
        <div className="container">

          <div className="row about-text">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              I'm a freelance web developer. Here are some of the technologies I've used:
            </div>
          </div>
          <div className="col-md-3"></div>

          <div className="row">
  
            {/* Languages */}
            <div className="col-md-4">
              <div className="d-flex flex-column flex-wrap justify-content-center">
                <h2 className="about-category">Languages</h2>
                <div className="about-tech">
                  <img className="about-icon" src={ IconHTML } alt="HTML5" /> HTML
                </div>
                <div className="about-tech">
                  <img className="about-icon" src={ IconCSS } alt="CSS3" /> CSS
                </div>
                <div className="about-tech">
                  <img className="about-icon" src={ IconJavaScript } alt="JavaScript" /> JavaScript
                </div>
                <div className="about-tech">
                  <img className="about-icon" src={ IconPython } alt="Python" /> Python
                </div>
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="col-md-4">
              <div className="d-flex flex-column flex-wrap justify-content-center">
                <h2 className="about-category">Frameworks & Libraries</h2>
                <div className="about-tech">
                  <img className="about-icon" src={ IconBootstrap } alt="Bootstrap" /> Bootstrap
                </div>
                <div className="about-tech">
                  <img className="about-icon" src={ IconSass } alt="Sass" /> Sass
                </div>
                <div className="about-tech">
                  <img className="about-icon" src={ IconReact } alt="React" /> React
                </div>
                <div className="about-tech">
                  <img className="about-icon" src={ IconDjango } alt="Django" /> Django
                </div>
                <div className="about-tech">
                  <img className="about-icon" src={ IconFlask } alt="Flask" /> Flask
                </div>
              </div>
            </div>

            {/* Database & DevOps */}
            <div className="col-md-4">
              <div className="d-flex flex-column flex-wrap justify-content-center">
                <h2 className="about-category">Database & DevOps</h2>
                <div className="about-tech">
                  <img className="about-icon" src={ IconPostgres } alt="Postgres" /> Postgres
                </div>
                <div className="about-tech">
                  <img className="about-icon" src={ IconAWS } alt="AWS" /> Amazon Web Services
                </div>
                <div className="about-tech">
                  <img className="about-icon" src={ IconHeroku } alt="Heroku" /> Heroku
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>
    )
  }
}

export default About;