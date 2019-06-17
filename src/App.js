import React, { Component } from 'react';
import Navbar from './components/Navbar';

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
      </div>
    );
  }
}

export default App;