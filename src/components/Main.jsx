import React, { Component } from 'react';
import Projects from './Projects';

class Main extends Component {
  render() {
    return (
      <main className="container-fluid main">
        <h6>Main</h6>
        <Projects />
      </main>
    )
  }
}

export default Main;