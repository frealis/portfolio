import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div id="anchor-contact"></div>
        <h1>Contact</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form action="" method="POST">
                Name:<br />
                <input type="text"/><br />
                Email:<br />
                <input type="text"/><br />
                Message:<br />
                <textarea name="contact_message" id="contact-message" cols="30" rows="5"></textarea>
              </form>
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