import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div id="anchor-contact" className="anchor"></div>
        <h1>Contact</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form action="" method="POST">
                <div className="contact-input">
                  <input name="contact_name" id="contact-name" class="contact-input-field" type="text" required />
                  <label for="contact-name" class="floating-placeholder">Name</label>
                </div>

                <div className="contact-input">
                  <input name="contact_email" id="contact-email" class="contact-input-field" type="text" required />
                  <label for="contact-email" class="floating-placeholder">Email</label>
                </div>

                <div className="contact-input">
                  <textarea name="contact_message" id="contact-message" class="contact-input-field" cols="30" rows="5" required></textarea>
                  <label for="contact-message" class="floating-placeholder">Message</label>
                </div>
              </form>

              <button id="contact-button-send" className="btn btn-sm">Send</button>
            </div>
            <div className="col-md-6">
              matt@matthigg.com
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;