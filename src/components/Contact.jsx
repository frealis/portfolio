import React, { Component } from 'react';
import { ReactComponent as IconCopy } from '../img/custom-copy.svg';
import { ReactComponent as IconEmail } from '../img/custom-email-043546.svg';
import { ReactComponent as IconGitHub } from '../img/GitHub-043546.svg';
import { ReactComponent as IconLinkedIn } from '../img/LinkedIn-043546.svg';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div id="anchor-contact" className="anchor"></div>
        <h1>Contact</h1>
        <div className="container">

          {/* Contact Form */}
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <form action="https://formspree.io/email@domain.tld" method="POST">
                <div className="contact-input">
                  <input name="contact_name" id="contact-name-input" className="contact-input-field" type="text" required />
                  <label htmlFor="contact-name" className="floating-placeholder">Name</label>
                </div>
                <div className="contact-input">
                  <input name="contact_email" id="contact-email-input" className="contact-input-field" type="text" required />
                  <label htmlFor="contact-email" className="floating-placeholder">Email</label>
                </div>
                <div className="contact-input">
                  <textarea name="contact_message" id="contact-message-input" className="contact-input-field" cols="30" rows="5" required></textarea>
                  <label htmlFor="contact-message" className="floating-placeholder">Message</label>
                </div>
              </form>

              <div className="d-flex justify-content-around">
                <button id="contact-button-send" className="btn btn-sm">Send Message</button>
                <div className="contact-button-and-email-links">
                  <div className="d-flex align-items-center contact-link contact-link-email">
                    <IconEmail className="contact-icon" /> <span className="contact-email-address">mhh129@gmail.com</span>
                  </div>
                  <div className="clecm-reference-point">
                    <button className="clecm-button">
                      <IconCopy className="contact-link-email-copy" />
                    </button>
                    <span className="clecm-message clecm-info">Click to copy</span>
                    <span className="clecm-message clecm-success">Copied!</span>
                  </div>
                </div>
              </div>

            
            
            </div>
            <div className="col-md-1"></div>
          </div>

          {/* Contact Links */}
          <div className="row">
            <div className="col-md-5">
              {/* <div className="d-flex align-items-center contact-link contact-link-email">
                <IconEmail className="contact-icon" /> <span className="contact-email-address">mhh129@gmail.com</span>
              </div>
              <div className="clecm-reference-point">
                <button className="clecm-button">
                  <IconCopy className="contact-link-email-copy" />
                </button>
                <span className="clecm-message clecm-info">Click to copy</span>
                <span className="clecm-message clecm-success">Copied!</span>
              </div> */}
              <div className="d-flex align-items-center contact-link contact-link-github">
                <IconGitHub className="contact-icon" /> GitHub
              </div>
              <div className="d-flex align-items-center contact-link contact-link-linkedin">
                <IconLinkedIn className="contact-icon" /> LinkedIn
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;