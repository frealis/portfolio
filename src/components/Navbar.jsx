import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md">
          <span className="navbar-brand" href="#">MH</span>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbar-portfolio" 
            aria-controls="navbar-portfolio" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            onClick={ this.props.toggleHamburger }
          >
            <span className="nav-line-hamburger"></span>
            <span className="nav-line-hamburger"></span>
            <span className="nav-line-hamburger"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar-portfolio">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default Navbar;