import React, { Component } from 'react'

// Import components
import Brand from './Brand'
import Main from './Main'
import NavbarSidePanel from './NavbarSidePanel'
import NavbarDeconstructed from './NavbarDeconstructed'
import Resume from '../img/resume.pdf'

// Import <svg> components
import IconGitHub from '../img/svg-components/icon-github'
import IconLinkedIn from '../img/svg-components/icon-linkedin'
import IconResume from '../img/svg-components/icon-resume'

// Import custom JavaScript functions
import { brand } from '../js/brand'
import { addLinks } from '../js/add-links'
import { colorsShuffled } from '../js/colors-shuffled'
import { navbar } from '../js/navbar'
import { fibSequence } from '../js/fib-sequence'
import { fibCreateBlocks } from '../js/fib-create-blocks'
import { fibAsteroidBlocks } from '../js/fib-asteroid-blocks'
import { fibAsteroidZoom } from '../js/fib-asteroid-zoom'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

      // Fibonacci blocks
      colors: [],
      fibSeq: [],
      n: 16,
      unit: 'px',
    }

    this.fibCreateBlocks = fibCreateBlocks.bind(this)
    this.addLinks = addLinks.bind(this)
  }

  componentDidMount() {

    // Handle brand animations
    brand()

    // Add functionality to navbar side panel
    navbar()

    // Add functionality & animations to links
    this.addLinks()

    this.setState({ 

      // Fibonacci blocks
      colors: colorsShuffled(),
      fibSeq: fibSequence(this.state.n),
    }, () => {

      // Fibonacci blocks
      const {n, fibSeq, unit, colors} = this.state
      this.fibCreateBlocks(n, fibSeq, unit, colors)
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
        <Brand />
        <NavbarDeconstructed IconGitHub={ IconGitHub } IconLinkedIn={ IconLinkedIn } IconResume={ IconResume} Resume={ Resume } />
        <NavbarSidePanel />
        <Main IconGitHub={ IconGitHub } IconLinkedIn={ IconLinkedIn } IconResume={ IconResume} />
      </div>
    )
  }
}

export default App