// Assign event handlers to links
export function addLinks() {

  // ========== NAVBAR LINKS ===================================================
 
  // Contact
  const link_contact_nodelist = document.querySelectorAll('.link-contact')
  link_contact_nodelist.forEach((link_contact) => {
    link_contact.addEventListener('click', () => {
      window.location.href = '#anchor-contact'
    })
  })

  // Projects
  const link_projects_nodelist = document.querySelectorAll('.link-projects')
  link_projects_nodelist.forEach((link_projects) => {
    link_projects.addEventListener('click', () => {
      window.location.href = '#anchor-projects'
    })
  })

  // ========== PROJECT LINKS ==================================================

  // River City Pro Wash
  const rcpw = {
    nodelist: document.querySelectorAll('.ext-link-rcpw'),
    nodelist_github: document.querySelectorAll('.ext-link-rcpw-github'),
    url: 'https://www.rivercityprowash.com',
    url_github: 'https://github.com/matthigg/River-City-Pro-Wash',
    window_feature: '_blank',
  }

  const pinocchios = {
    nodelist: document.querySelectorAll('.ext-link-pinocchios'),
    nodelist_github: document.querySelectorAll('.ext-link-pinocchios-github'),
    url: 'https://cs50-pinocchios-pizza.herokuapp.com/',
    url_github: 'https://github.com/matthigg/Pinocchios-Pizza-And-Subs',
    window_feature: '_blank',
  }

  function createProjectLink(project_link) {
    project_link.nodelist.forEach(link => {
      link.addEventListener('click', () => {
        window.open(`${project_link.url}`, `${project_link.window_feature}`)
      })
      link.setAttribute('rel', 'noopener noreferrer')
    })
    project_link.nodelist_github.forEach(link => {
      link.addEventListener('click', () => {
        window.open(`${project_link.url_github}`, `${project_link.window_feature}`)
      })
      link.setAttribute('rel', 'noopener noreferrer')
    })
  }

  createProjectLink(rcpw)

  // Pinocchio's Pizza & Subs
  document.querySelector('.ext-link-pinocchios').addEventListener('click', () => {
    window.open('https://cs50-pinocchios-pizza.herokuapp.com/', '_blank')
  })
  document.querySelector('.ext-link-pinocchios-github').addEventListener('click', () => {
    window.open('https://github.com/matthigg/Pinocchios-Pizza-And-Subs', '_blank')
  })

  // microChat
  document.querySelector('.ext-link-microchat').addEventListener('click', () => {
    window.open('https://cs50-microchat.herokuapp.com/', '_blank')
  })
  document.querySelector('.ext-link-microchat-github').addEventListener('click', () => {
    window.open('https://github.com/matthigg/micro-Chat', '_blank')
  })

  // Book Reviews w/Goodreads
  document.querySelector('.ext-link-bookreviews').addEventListener('click', () => {
    window.open('https://cs50-book-review-w-goodreads.herokuapp.com/', '_blank')
  })
  document.querySelector('.ext-link-bookreviews-github').addEventListener('click', () => {
    window.open('https://github.com/matthigg/Book-Reviews-with-Goodreads', '_blank')
  })

  // ========== EXTERNAL LINKS ===================================================

  const email = {
    class_ctc: '.ctc-email',
    class_link: '.link-email',
    class_text: '.text-email',
    text: 'mhh129@gmail.com',
    url: 'mailto:mhh129@gmail.com',
  }

  const github = {
    class_link: '.link-github',
    class_text: '.text-github',
    text: 'https://github.com/matthigg',
    window_feature: '_blank',
    url: 'https://github.com/matthigg',
  }

  const linkedin = {
    class_link: '.link-linkedin',
    class_text: '.text-linkedin',
    text: 'https://www.linkedin.com/in/matt-higg/',
    window_feature: '_blank',
    url: 'https://www.linkedin.com/in/matt-higg/',
  }

  // const resume = {
  //   class_link: '.link-resume',
  //   url: '',
  // }

  // Create external link
  function createExternalLink(ext_link) {
    document.querySelectorAll(`${ext_link.class_link}`).forEach(link => {
      link.addEventListener('click', () => {
        window.open(`${ext_link.url}`, `${ext_link.window_feature}`)
      })
      link.setAttribute('rel', 'noopener noreferrer')
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

  const aws = {
    nodelist: document.querySelectorAll('.ext-link-aws'),
    window_feature: '_blank',
    url: 'https://aws.amazon.com/',
  }

  const bootstrap = {
    nodelist: document.querySelectorAll('.ext-link-bootstrap'),
    window_feature: '_blank',
    url: 'https://getbootstrap.com/',
  }

  const django = {
    nodelist: document.querySelectorAll('.ext-link-django'),
    window_feature: '_blank',
    url: 'https://www.djangoproject.com/',
  }

  const flask = {
    nodelist: document.querySelectorAll('.ext-link-flask'),
    window_feature: '_blank',
    url: 'https://palletsprojects.com/p/flask/',
  }

  const heroku = {
    nodelist: document.querySelectorAll('.ext-link-heroku'),
    window_feature: '_blank',
    url: 'https://www.heroku.com/',
  }

  const postgresql = {
    nodelist: document.querySelectorAll('.ext-link-postgresql'),
    window_feature: '_blank',
    url: 'https://www.postgresql.org/',
  }

  // Add tech icon links
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
  createTechIconLink(heroku)
  createTechIconLink(postgresql)

}