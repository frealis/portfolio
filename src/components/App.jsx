import React, { Component } from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

import IconAWS from '../img/aws.svg';
import IconBootstrap from '../img/bootstrap - symbol.svg';
import IconDjango from '../img/django.svg';
import IconFlask from '../img/flask.svg';
import IconHeroku from '../img/heroku-icon.svg';
import IconPostgres from '../img/postgresql-icon.svg';

import '../js/external_links';

class App extends Component {
  state = {

  }

  toggleHamburger = () => {
    let navbar_toggler = document.querySelector('.navbar-toggler');
    if (navbar_toggler.classList.contains('close-navbar-toggler')) {
      navbar_toggler.classList.remove('close-navbar-toggler');
    } else {
      navbar_toggler.classList.add('close-navbar-toggler');
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar toggleHamburger={ this.toggleHamburger } />
        <Main IconAWS={ IconAWS } IconBootstrap={ IconBootstrap } IconDjango={ IconDjango } IconFlask={ IconFlask } IconHeroku={ IconHeroku } IconPostgres={ IconPostgres } />
        <Footer />
      </div>
    );
  }
}

export default App;