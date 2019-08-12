import React, { Component } from 'react'

// Import components
import Contact from './Contact'
import LandingPage from './LandingPage'
import NavbarNet from './NavbarNet'
import NavbarTripwire from './NavbarTripwire'
import PageSpacer from './PageSpacer'
import Projects from './Projects'

class Main extends Component {
  render() {
    return (
      <main className="main">
        <LandingPage />
        {/* <NavbarNet IconGitHub={ this.props.IconGitHub } IconLinkedIn={ this.props.IconLinkedIn } IconResume={ this.props.IconResume } /> */}
        {/* <NavbarTripwire /> */}
        <PageSpacer />
        <Projects />
        <PageSpacer />
        <Contact IconGitHub={ this.props.IconGitHub } IconLinkedIn={ this.props.IconLinkedIn } IconResume={ this.props.IconResume } />
        <PageSpacer />
      </main>
    )
  }
}

export default Main;