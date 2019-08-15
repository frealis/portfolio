import React, { Component } from 'react'

// Import components
import Contact from './Contact'
import Footer from './Footer'
import LandingPage from './LandingPage'
import PageSpacer from './PageSpacer'
import Projects from './Projects'

class Main extends Component {
  render() {
    return (
      <main className="main">
        <LandingPage />
        <PageSpacer />
        <Projects />
        <PageSpacer />
        <Contact IconGitHub={ this.props.IconGitHub } IconLinkedIn={ this.props.IconLinkedIn } IconResume={ this.props.IconResume } />
        <PageSpacer />
        <Footer />
      </main>
    )
  }
}

export default Main;