import React, { Component } from 'react'

// Import components
import Main from './Main'
// import NavbarConstructedFixed from './NavbarConstructedFixed'
import NavbarDeconstructed from './NavbarDeconstructed'
import Resume from '../img/resume.pdf'

// Import <svg> components
import IconGitHub from '../img/svg-components/icon-github'
import IconLinkedIn from '../img/svg-components/icon-linkedin'
import IconResume from '../img/svg-components/icon-resume'

// Import custom JavaScript functions
import { addLinks } from '../js/add-links'
// import { getNavNetScrapsLocations } from '../js/get-nav-net-scraps-locations'
// import { handleScroll } from '../js/handle-scroll'
import { colorsShuffled } from '../js/colors-shuffled'
import { fibSequence } from '../js/fib-sequence'
import { fibBlocks } from '../js/fib-blocks'
import { fibAsteroidBlocks } from '../js/fib-asteroid-blocks'
import { fibAsteroidZoom } from '../js/fib-asteroid-zoom'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

      scraps_locations: {},

      // Fibonacci blocks
      colors: [],
      fibSeq: [],
      n: 14,
      unit: 'px',
    }

    // this.handleScroll = handleScroll.bind(this)
    this.fibBlocks = fibBlocks.bind(this)
  }

  componentDidMount() {

    // Add functionality & animations to links
    addLinks()

    this.setState({ 

      // Fibonacci blocks
      colors: colorsShuffled(),
      fibSeq: fibSequence(this.state.n),
    }, () => {

      // Fibonacci blocks
      let {n, fibSeq, unit, colors} = this.state
      this.fibBlocks(n, fibSeq, unit, colors)
      fibAsteroidBlocks()
      fibAsteroidZoom()
    })
  }

  componentWillUnmount() {
    const main = document.querySelector('.main')
    document.querySelector('.main').removeEventListener('scroll', () => {
      this.handleScroll(main)
    })  
  }

  render() {
    return (
      <div className="App">
        <NavbarDeconstructed IconGitHub={ IconGitHub } IconLinkedIn={ IconLinkedIn } IconResume={ IconResume} Resume={ Resume } />
        {/* <NavbarConstructedFixed IconGitHub={ IconGitHub } IconLinkedIn={ IconLinkedIn } IconResume={ IconResume} /> */}
        <Main IconGitHub={ IconGitHub } IconLinkedIn={ IconLinkedIn } IconResume={ IconResume} />

        {/* <Footer IconEmail={ IconEmail } IconGitHub={ IconGitHub } IconHackerRank={ IconHackerRank } IconLinkedIn={ IconLinkedIn } IconResume={ IconResume } /> */}
      </div>
    )
  }
}

export default App