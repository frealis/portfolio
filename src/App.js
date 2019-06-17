import React, { Component } from 'react';
import Navbar from './components/Navbar';

class App extends Component {
  state = {

  }

  toggleHamburger = () => {
    console.log('toggleHamburger');
    
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