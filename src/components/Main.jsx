import React, { Component } from 'react';
import Projects from './Projects';
import About from './About';

class Main extends Component {
  render() {

    // Destructure this.props
    const { IconAWS, IconBootstrap, IconDjango, IconFlask, IconHeroku, IconPostgres } = this.props;

    return (
      <main className="container-fluid main">
        <h6>Main</h6>
        <Projects IconAWS={ IconAWS } IconBootstrap={ IconBootstrap } IconDjango={ IconDjango } IconFlask={ IconFlask } IconHeroku={ IconHeroku} IconPostgres={ IconPostgres }/>
        <About />
      </main>
    )
  }
}

export default Main;