// Assign event handlers to links
export function addLinkHrefs() {

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
  document.querySelector('.ext-link-rcpw').addEventListener('click', () => {
    window.open('https://www.rivercityprowash.com', '_blank')
  })
  document.querySelector('.ext-link-rcpw-github').addEventListener('click', () => {
    window.open('https://github.com/matthigg/River-City-Pro-Wash', '_blank')
  })

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

  // ========== CONTACT LINKS ===================================================

  const email = {
    class_ctc: '.contact-ctc-email',
    class_link: '.contact-link-email',
    class_text: '.contact-text-email',
    text: 'mhh129@gmail.com',
    url: 'mailto:mhh129@gmail.com',
  }

  const github = {
    class_ctc: '.contact-ctc-github',
    class_link: '.contact-link-github',
    class_text: '.contact-text-github',
    text: 'https://github.com/matthigg',
    url: 'https://github.com/matthigg',
  }

  const linkedin = {
    class_ctc: '.contact-ctc-linkedin',
    class_link: '.contact-link-linkedin',
    class_text: '.contact-text-linkedin',
    text: 'https://www.linkedin.com/in/matt-higg/',
    url: 'https://www.linkedin.com/in/matt-higg/',
  }

  // Create contact link
  function createContactLink(contact_link) {
    document.querySelector(`${contact_link.class_link}`).addEventListener('click', () => {
      window.open(`${contact_link.url}`)
    })
    document.querySelector(`${contact_link.class_text}`).innerHTML = contact_link.text
  }

  createContactLink(email)
  createContactLink(github)
  createContactLink(linkedin)

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
    url: 'https://aws.amazon.com/',
    window_feature: '_blank',
  }

  const bootstrap = {
    nodelist: document.querySelectorAll('.ext-link-bootstrap'),
    url: 'https://getbootstrap.com/',
    window_feature: '_blank',
  }

  const django = {
    nodelist: document.querySelectorAll('.ext-link-django'),
    url: 'https://www.djangoproject.com/',
    window_feature: '_blank',
  }

  const flask = {
    nodelist: document.querySelectorAll('.ext-link-flask'),
    url: 'https://palletsprojects.com/p/flask/',
    window_feature: '_blank',
  }

  const heroku = {
    nodelist: document.querySelectorAll('.ext-link-heroku'),
    url: 'https://www.heroku.com/',
    window_feature: '_blank',
  }

  const postgresql = {
    nodelist: document.querySelectorAll('.ext-link-postgresql'),
    url: 'https://www.postgresql.org/',
    window_feature: '_blank',
  }

  // Add tech icon links
  function addTechIconLinks(tech_icon) {
    tech_icon.nodelist.forEach(icon => {
      icon.addEventListener('click', () => {
        window.open(`${tech_icon.url}`, `${tech_icon.window_feature}`)
      })
    })
  }
 
  addTechIconLinks(aws)
  addTechIconLinks(bootstrap)
  addTechIconLinks(django)
  addTechIconLinks(flask)
  addTechIconLinks(heroku)
  addTechIconLinks(postgresql)

}