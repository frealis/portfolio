import Resume from '../img/resume.pdf'

import { fibAsteroidBlocks } from '../js/fib-asteroid-blocks'
import { fibAsteroidZoom } from '../js/fib-asteroid-zoom'
import { fibDestroyBlocks } from '../js/fib-destroy-blocks'

// Assign event handlers to links
export function addLinks() {

  // Used for scrolling-to-anchor links
  const main = document.querySelector('.main')

  // ========== BRAND LINK ======================================================

  const brand = document.querySelector('.brand')
  brand.addEventListener('click', (e) => {
    main.scrollTo(0, 0)
    fibDestroyBlocks()
    window.setTimeout(() => {
      const {n, fibSeq, unit, colors} = this.state
      this.fibCreateBlocks(n, fibSeq, unit, colors, 0)

      const blocks = document.querySelectorAll('.background-fibonacci-block')
      for (let i = 0; i < blocks.length; i++) {
        window.setTimeout(() => {
          blocks[i].classList.remove('fib-block-opacity-0')
          blocks[i].classList.add('animation-flicker-in')
        }, i * 100)
      }
    }, 2700)
    window.setTimeout(() => {
      fibAsteroidBlocks()
      fibAsteroidZoom()
    }, 5400)
  })

  brand.classList.add('animation-chromatophore-pulse')

  // ========== NAVBAR LINKS ====================================================
 
  // Contact
  document.querySelectorAll('.link-contact').forEach(link => {
    link.addEventListener('click', () => {
      const anchor_contact = document.querySelector('#anchor-contact').offsetTop
      main.scrollTo(0, anchor_contact)
    })
    link.classList.add('animation-chromatophore-pulse')
  })

  // Projects
  document.querySelectorAll('.link-projects').forEach(link => {
    link.addEventListener('click', () => {
      const anchor_projects = document.querySelector('#anchor-projects').offsetTop
      main.scrollTo(0, anchor_projects)
    })
    link.classList.add('animation-chromatophore-pulse')
  })

  // Resume
  document.querySelectorAll('.link-resume').forEach(link => {
    link.addEventListener('click', () => {
      window.open(Resume, '_blank')
    })
    link.setAttribute('rel', 'noopener noreferrer')
    link.classList.forEach(class_name => {
      if (class_name === 'nav-link' || class_name === 'footer-link') {
        link.classList.add('animation-chromatophore-pulse')
      } else if (class_name === 'scrap') {
        link.firstChild.classList.add('animation-chromatophore-icon')
      }
    })
  })

  // GitHub and LinkedIn links are handled in CONTACT LINKS

  // ========== PROJECT LINKS ==================================================

  // River City Pro Wash
  const rcpw = {
    nodelist: document.querySelectorAll('.ext-link-rcpw'),
    nodelist_github: document.querySelectorAll('.ext-link-rcpw-github'),
    url: 'https://www.rivercityprowash.com',
    url_github: 'https://github.com/matthigg/River-City-Pro-Wash',
    window_feature: '_blank',
  }

  // Pinocchio's Pizza & Subs
  const pinocchios = {
    nodelist: document.querySelectorAll('.ext-link-pinocchios'),
    nodelist_github: document.querySelectorAll('.ext-link-pinocchios-github'),
    url: 'https://cs50-pinocchios-pizza.herokuapp.com/',
    url_github: 'https://github.com/matthigg/Pinocchios-Pizza-And-Subs',
    window_feature: '_blank',
  }

  // microChat
  const microchat = {
    nodelist: document.querySelectorAll('.ext-link-microchat'),
    nodelist_github: document.querySelectorAll('.ext-link-microchat-github'),
    url: 'https://cs50-microchat.herokuapp.com/',
    url_github: 'https://github.com/matthigg/micro-Chat',
    window_feature: '_blank',
  }

  // Book Reviews w/Goodreads
  const bookreviews = {
    nodelist: document.querySelectorAll('.ext-link-bookreviews'),
    nodelist_github: document.querySelectorAll('.ext-link-bookreviews-github'),
    url: 'https://cs50-book-review-w-goodreads.herokuapp.com/',
    url_github: 'https://github.com/matthigg/Book-Reviews-with-Goodreads',
    window_feature: '_blank',
  }

  // Create Project link
  function createProjectLink(project_link) {
    project_link.nodelist.forEach(link => {
      link.addEventListener('click', () => {
        window.open(`${project_link.url}`, `${project_link.window_feature}`)
      })
      link.setAttribute('rel', 'noopener noreferrer')
      if (link.innerHTML !== '') {
        link.classList.add('animation-chromatophore-reel')
      }
    })
    project_link.nodelist_github.forEach(link => {
      link.addEventListener('click', () => {
        window.open(`${project_link.url_github}`, `${project_link.window_feature}`)
      })
      link.setAttribute('rel', 'noopener noreferrer')
      link.classList.add('animation-chromatophore-reel')
    })
  }

  createProjectLink(rcpw)
  createProjectLink(pinocchios)
  createProjectLink(microchat)
  createProjectLink(bookreviews)

  // Add animations to <a> tags, View, and Source links in Projects.jsx
  document.querySelectorAll('.projects-reference-link').forEach(link => {
    link.classList.add('animation-chromatophore-reel')
  })

  // ========== CONTACT LINKS ===================================================

  // Email
  const email = {
    class_ctc: '.ctc-email',
    class_link: '.link-email',
    class_text: '.text-email',
    text: 'mhh129@gmail.com',
    url: 'mailto:mhh129@gmail.com',
  }

  // GitHub
  const github = {
    class_link: '.link-github',
    class_text: '.text-github',
    text: 'https://github.com/matthigg',
    window_feature: '_blank',
    url: 'https://github.com/matthigg',
  }

  // LinkedIn
  const linkedin = {
    class_link: '.link-linkedin',
    class_text: '.text-linkedin',
    text: 'https://www.linkedin.com/in/matt-higg/',
    window_feature: '_blank',
    url: 'https://www.linkedin.com/in/matt-higg/',
  }

  // Create external link
  function createExternalLink(ext_link) {
    document.querySelectorAll(`${ext_link.class_link}`).forEach(link => {
      link.addEventListener('click', () => {
        window.open(`${ext_link.url}`, `${ext_link.window_feature}`)
      })
      link.setAttribute('rel', 'noopener noreferrer')
      link.classList.forEach(class_name => {
        if (class_name === 'nav-link' || class_name === 'footer-link') {
          link.classList.add('animation-chromatophore-pulse')
        } else if (class_name === 'scrap') {
          link.firstChild.classList.add('animation-chromatophore-icon')
        }
      })
    })

    // After checking 'ext_link' for a 'text' property, this portion of code 
    // assumes that there is only one HTML element with the appropriate 
    // .class_text class in Contact.jsx that is used to display an email address
    // or GitHub/LinkedIn address.
    if (ext_link.text) {
      document.querySelector(`${ext_link.class_text}`).innerHTML = ext_link.text
    }
  }

  createExternalLink(email)
  createExternalLink(github)
  createExternalLink(linkedin)

  // Create contact click-to-copy (ctc) link
  function createCTCLink(ctc_link) {
    document.querySelector(`${ctc_link.class_ctc}`).addEventListener('click', () => {
      const input = document.createElement('input')
      input.value = `${ctc_link.text}`
      document.querySelector(`${ctc_link.class_ctc}`).appendChild(input)
      input.select()
      document.execCommand('copy')
      input.remove()
      document.querySelector(`${ctc_link.class_ctc}`).focus()
    })
  }

  createCTCLink(email)

  // ========== TECHNOLOGY ICONS ===============================================

  // AWS
  const aws = {
    nodelist: document.querySelectorAll('.ext-link-aws'),
    window_feature: '_blank',
    url: 'https://aws.amazon.com/',
  }

  // Bootstrap
  const bootstrap = {
    nodelist: document.querySelectorAll('.ext-link-bootstrap'),
    window_feature: '_blank',
    url: 'https://getbootstrap.com/',
  }

  // Django
  const django = {
    nodelist: document.querySelectorAll('.ext-link-django'),
    window_feature: '_blank',
    url: 'https://www.djangoproject.com/',
  }

  // Flask
  const flask = {
    nodelist: document.querySelectorAll('.ext-link-flask'),
    window_feature: '_blank',
    url: 'https://palletsprojects.com/p/flask/',
  }

  // GitHub Pages
  const githubpages = {
    nodelist: document.querySelectorAll('.ext-link-github-pages'),
    window_feature: '_blank',
    url: 'https://pages.github.com/',
  }

  // Heroku
  const heroku = {
    nodelist: document.querySelectorAll('.ext-link-heroku'),
    window_feature: '_blank',
    url: 'https://www.heroku.com/',
  }

  // PostgreSQL
  const postgresql = {
    nodelist: document.querySelectorAll('.ext-link-postgresql'),
    window_feature: '_blank',
    url: 'https://www.postgresql.org/',
  }

  // React
  const react = {
    nodelist: document.querySelectorAll('.ext-link-react'),
    window_feature: '_blank',
    url: 'https://www.reactjs.org',
  }

  // Add tech icon link
  function createTechIconLink(tech_link) {
    tech_link.nodelist.forEach(link => {
      link.addEventListener('click', () => {
        window.open(`${tech_link.url}`, `${tech_link.window_feature}`)
      })
      link.setAttribute('rel', 'noopener noreferrer')
    })
  }
 
  createTechIconLink(aws)
  createTechIconLink(bootstrap)
  createTechIconLink(django)
  createTechIconLink(flask)
  createTechIconLink(githubpages)
  createTechIconLink(heroku)
  createTechIconLink(postgresql)
  createTechIconLink(react)
}