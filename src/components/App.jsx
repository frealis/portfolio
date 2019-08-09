import React, { Component } from 'react'

import NavbarDeconstructed from './NavbarDeconstructed'
import NavbarConstructedFixed from './NavbarConstructedFixed'
import Main from './Main'

// import IconAWS from '../img/aws.svg'
// import IconBootstrap from '../img/bootstrap-symbol.svg'
// import IconCopy from '../img/custom-copy.svg'
// import IconCSS from '../img/custom-css.svg'
// import IconDjango from '../img/djangoproject-icon2.svg'
// import IconEmail from '../img/custom-email-043546.svg'
// import IconFlask from '../img/flask-icon.svg'
// import IconGitHub from '../img/GitHub-043546.svg'
// import IconHackerRank from '../img/HackerRank_logo.svg'
// import IconHeroku from '../img/heroku-icon.svg'
// import IconHTML from '../img/custom-html5.svg'
// import IconJavaScript from '../img/javascript-icon2.svg'
// import IconLinkedIn from '../img/LinkedIn-043546.svg'
// import IconPostgres from '../img/postgresql-icon.svg'
// import IconPython from '../img/custom-python.svg'
// import IconReact from '../img/React-icon2.svg'
// import IconResume from '../img/custom-resume-043546.svg'
// import IconSass from '../img/Sass_Logo_Color.svg'

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
        <NavbarDeconstructed />
        <NavbarConstructedFixed />
        <Main />

        {/* <Footer IconEmail={ IconEmail } IconGitHub={ IconGitHub } IconHackerRank={ IconHackerRank } IconLinkedIn={ IconLinkedIn } IconResume={ IconResume } /> */}
      </div>
    )
  }
}

export default App