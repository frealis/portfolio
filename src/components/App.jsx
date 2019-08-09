import React, { Component } from 'react'

// Import components
import NavbarDeconstructed from './NavbarDeconstructed'
import NavbarConstructedFixed from './NavbarConstructedFixed'
import Main from './Main'
import Resume from '../img/resume.pdf'

// Import <svg> components
import IconGitHub from '../img/svg-components/icon-github'
import IconLinkedIn from '../img/svg-components/icon-linkedin'
import IconResume from '../img/svg-components/icon-resume'

// Import custom JavaScript functions
import { addLinkHrefs } from '../js/add-link-hrefs'
import { getNavNetScrapsLocations } from '../js/get-nav-net-scraps-locations'
import { handleScroll } from '../js/handle-scroll'
import { colorsShuffled } from '../js/colors-shuffled'
import { fibSequence } from '../js/fib-sequence'
import { fibBlocks } from '../js/fib-blocks'
import { fibAsteroidBlocks } from '../js/fib-asteroid-blocks'
import { fibAsteroidZoom } from '../js/fib-asteroid-zoom'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

      // Nav net & scraps
      nav_net_loc: 0,
      nav_tripwire_loc: 0,
      scrap_brand_loc: 0,
      scrap_links_loc: 0,

      // Fibonacci blocks
      colors: [],
      fibSeq: [],
      n: 14,
      unit: 'px',
    }

    this.handleScroll = handleScroll.bind(this)
    this.fibBlocks = fibBlocks.bind(this)
  }

  componentDidMount() {

    // Add link locations to 'Projects' and 'Contact' navbar links
    addLinkHrefs()

    this.setState({ 

      // Navbar net & scraps
      nav_net_loc: getNavNetScrapsLocations().nav_net_loc,
      nav_tripwire_loc: getNavNetScrapsLocations().nav_tripwire_loc,
      scrap_brand_loc: getNavNetScrapsLocations().scrap_brand_loc,
      scrap_links_loc: getNavNetScrapsLocations().scrap_links_loc,

      // Fibonacci blocks
      colors: colorsShuffled(),
      fibSeq: fibSequence(this.state.n),
    }, () => {

      // Navbar net & scraps
      const main = document.querySelector('.main')
      document.querySelector('.main').addEventListener('scroll', () => {
        this.handleScroll(main)
      })

      // Fibonacci blocks
      let {n, fibSeq, unit, colors} = this.state
      this.fibBlocks(n, fibSeq, unit, colors)
      // fibAsteroidBlocks()
      // fibAsteroidZoom()
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
        <NavbarConstructedFixed IconGitHub={ IconGitHub } IconLinkedIn={ IconLinkedIn } IconResume={ IconResume} />
        <Main IconGitHub={ IconGitHub } IconLinkedIn={ IconLinkedIn } IconResume={ IconResume} />

        {/* <Footer IconEmail={ IconEmail } IconGitHub={ IconGitHub } IconHackerRank={ IconHackerRank } IconLinkedIn={ IconLinkedIn } IconResume={ IconResume } /> */}
      </div>
    )
  }
}

export default App