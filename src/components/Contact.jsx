import React, { Component } from 'react'

import IconCopy from '../img/svg-components/icon-copy'
import IconEmail from '../img/svg-components/icon-email'

class Contact extends Component {
  render() {
    const { IconGitHub, IconLinkedIn } = this.props
    return (
      <div>
        <span id="anchor-contact"></span>
        <div className="page page-contact">
          <h1 className="page-header">Contact</h1>
          <div className="row contact-row">

            <div className="col-12">
              <form action="https://formspree.io/mhh129@gmail.com" method="POST">
                <div className="contact-input">
                  <input name="contact_name" id="contact-name-input" className="contact-input-field" type="text" required placeholder="name" />
                  <label htmlFor="contact-name" className="floating-placeholder">Name</label>
                </div>
                <div className="contact-input">
                  <input name="contact_email" id="contact-email-input" className="contact-input-field" type="text" required placeholder="email" />
                  <label htmlFor="contact-email" className="floating-placeholder">Email</label>
                </div>
                <div className="contact-input">
                  <textarea name="contact_message" 
                            id="contact-message-input" 
                            className="contact-input-field" 
                            cols="10" rows="5"
                            required placeholder="message"></textarea>
                  <label htmlFor="contact-message" className="floating-placeholder">Message</label>
                </div>
              </form>
              <button id="contact-button-send" className="btn">Send Message</button>
            
              <div className="contact-link-wrapper">
                <button className="btn contact-icon-wrapper link-email">
                  <IconEmail /> 
                  <span className="text-email"></span>
                </button>
                <button className="contact-ctc ctc-email"><IconCopy /></button>
              </div>
              <div className="contact-link-wrapper">
                <button className="btn contact-icon-wrapper link-github">
                  <IconGitHub /> 
                  <span className="text-github"></span>
                </button>
              </div>
              <div className="contact-link-wrapper">
                <button className="btn contact-icon-wrapper link-linkedin">
                  <IconLinkedIn /> 
                  <span className="text-linkedin"></span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Contact