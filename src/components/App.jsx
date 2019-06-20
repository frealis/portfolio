import React, { Component } from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

import IconAWS from '../img/aws.svg';
import IconBootstrap from '../img/bootstrap - symbol.svg';
import IconCSS from '../img/custom-css.svg';
import IconDjango from '../img/djangoproject-icon2.svg';
import IconFlask from '../img/flask-icon.svg';
import IconGitHub from '../img/GitHub-black.svg';
import IconHackerRank from '../img/HackerRank_logo.svg';
import IconHeroku from '../img/heroku-icon.svg';
import IconHTML from '../img/custom-html5.svg';
import IconJavaScript from '../img/custom-javascript.svg';
import IconPostgres from '../img/postgresql-icon.svg';
import IconPython from '../img/custom-python.svg';
import IconReact from '../img/React-icon2.svg';
import IconSass from '../img/Sass_Logo_Color.svg';

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
        <Main IconAWS={ IconAWS } IconBootstrap={ IconBootstrap } IconCSS={ IconCSS } IconDjango={ IconDjango } IconFlask={ IconFlask } IconGitHub={ IconGitHub } IconHackerRank={ IconHackerRank } IconHeroku={ IconHeroku } IconHTML={ IconHTML } IconJavaScript={ IconJavaScript} IconPostgres={ IconPostgres } IconPython={ IconPython } IconReact={ IconReact } IconSass={ IconSass } />
        <Footer />
      </div>
    );
  }
}

export default App;