import React, { Component } from 'react'

import Contact from './Contact'
import LandingPage from './LandingPage'
import NavbarNet from './NavbarNet'
import NavbarTripwire from './NavbarTripwire'
import PageSpacer from './PageSpacer'
import Projects from './Projects'

class Main extends Component {
  render() {

    // Destructure this.props
    // const { IconAWS, IconBootstrap, IconCopy, IconCSS } = this.props;

    return (
      <main className="main">
        <LandingPage />
        <NavbarNet />
        <NavbarTripwire />
        <PageSpacer />
        <Projects />
        <Contact />
      </main>
    )
  }
}

export default Main;