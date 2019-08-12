// Get the starting location of the navbar net & scraps in pixels, return that
// info as an object to later be used to set the state of App.jsx
export function getNavNetScrapsLocations() {

  const scraps = {
    nav_net: {
      class_name: '.nav-net',
      location: '',
    },
    nav_tripwire: {
      class_name: '.nav-tripwire',
      location: '',
    },
    scrap_brand: {
      class_name: '.scrap.free.brand',
      class_name_collected: '.scrap-collected.net.brand',
      location: '',
    },
    scrap_link_contact: {
      class_name: '.scrap.free.link-contact',
      class_name_collected: '.scrap-collected.net.link-contact',
      location: '',
    },
    scrap_link_projects: {
      class_name: '.scrap.free.link-projects',
      class_name_collected: '.scrap-collected.net.link-projects',
      location: '',
    },
    scrap_link_resume: {
      class_name: '.scrap.free.link-resume',
      class_name_collected: '.scrap-collected.net.link-resume',
      location: '',
    },
    scrap_link_github: {
      class_name: '.scrap.free.link-github',
      class_name_collected: '.scrap-collected.net.link-github',
      location: '',
    },
    scrap_link_linkedin: {
      class_name: '.scrap.free.link-linkedin',
      class_name_collected: '.scrap-collected.net.link-linkedin',
      location: '',
    },
  }

  // Use FOR/IN loop to iterate over the scraps{} object
  // for (let scrap in scraps) {
  //   if (scraps[scrap].hasOwnProperty('class_name')) {
  //     const DOM_element = document.querySelector(`${scraps[scrap].class_name}`)
  //     scraps[scrap].location = DOM_element.offsetTop + DOM_element.offsetHeight / 2
  //   }
  // }

  // Use Object.keys() to turn the scraps{} object into an array before iterating
  // over it
  Object.keys(scraps).forEach(scrap => {
    const DOM_element = document.querySelector(`${scraps[scrap].class_name}`)
    scraps[scrap].location = DOM_element.offsetTop + DOM_element.offsetHeight / 2
  })

  return {
    scraps
  }
}