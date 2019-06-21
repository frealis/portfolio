import React, { Component } from 'react';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

class Main extends Component {
  render() {

    // Destructure this.props
    const { IconAWS, IconBootstrap, IconCopy, IconCSS, IconDjango, IconEmail, IconFlask, IconGitHub, IconHackerRank, IconHeroku, IconHTML, IconJavaScript, IconLinkedIn, IconPostgres, IconPython, IconReact, IconResume, IconSass } = this.props;

    return (
      <main className="container-fluid main">
        <Projects IconAWS={ IconAWS } IconBootstrap={ IconBootstrap } IconDjango={ IconDjango } IconFlask={ IconFlask } IconHeroku={ IconHeroku} IconPostgres={ IconPostgres } />
        <About IconAWS={ IconAWS } IconBootstrap={ IconBootstrap } IconCSS={ IconCSS } IconDjango={ IconDjango } IconFlask={ IconFlask } IconGitHub={ IconGitHub } IconHackerRank={ IconHackerRank } IconHeroku={ IconHeroku } IconHTML={ IconHTML } IconJavaScript={ IconJavaScript} IconPostgres={ IconPostgres } IconPython={ IconPython } IconReact={ IconReact } IconSass={ IconSass } />
        <Contact IconCopy={ IconCopy } />
      </main>
    )
  }
}

export default Main;