import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className='container-fluid footer'>
        <div className="container">
          <div className="row my-5">
            <div className="col-md-2"></div>
            <div className="col-md-8 d-flex flex-row justify-content-center">
              <a href="#anchor-projects" className="footer-back-to-top">Back to top</a>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;