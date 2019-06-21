import React, { Component } from 'react';
import { ReactComponent as IconEmail } from '../img/custom-email-043546.svg';
import { ReactComponent as IconGitHub } from '../img/GitHub-043546.svg';
import { ReactComponent as IconLinkedIn } from '../img/LinkedIn-043546.svg';

class Contact extends Component {
  render() {

    // Destructure this.props
    // const { IconEmail, IconGitHub, IconLinkedIn } = this.props;

    return (
      <div className="contact">
        <div id="anchor-contact" className="anchor"></div>
        <h1>Contact</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form action="" method="POST">
                <div className="contact-input">
                  <input name="contact_name" id="contact-name" className="contact-input-field" type="text" required />
                  <label htmlFor="contact-name" className="floating-placeholder">Name</label>
                </div>
                <div className="contact-input">
                  <input name="contact_email" id="contact-email" className="contact-input-field" type="text" required />
                  <label htmlFor="contact-email" className="floating-placeholder">Email</label>
                </div>
                <div className="contact-input">
                  <textarea name="contact_message" id="contact-message" className="contact-input-field" cols="30" rows="5" required></textarea>
                  <label htmlFor="contact-message" className="floating-placeholder">Message</label>
                </div>
              </form>
              <button id="contact-button-send" className="btn btn-sm">Send</button>
            </div>

            <div className="col-md-1"></div>

            <div className="col-md-5">
              <div className="d-flex align-items-center contact-link contact-link-email">
                <IconEmail className="contact-icon" /> matt@matthigg.com
                {/* <img className="contact-icon" src={ IconEmail } /> matt@matthigg.com */}
              </div>
              <div className="d-flex align-items-center contact-link contact-link-github">
                <IconGitHub className="contact-icon" /> GitHub
                {/* <img className="contact-icon" src={ IconGitHub } /> GitHub */}
              </div>
              <div className="d-flex align-items-center contact-link contact-link-linkedin">
                <IconLinkedIn className="contact-icon" /> LinkedIn
                {/* <img className="contact-icon" src={ IconLinkedIn } /> LinkedIn */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;