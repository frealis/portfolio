// Get the starting location of the navbar net & scraps in pixels, return that
// info as an object to later be used to set the state of App.jsx
export function getNavNetScrapsLocations() {

  const scraps = {
    nav_net: {
      free_class_name: '.nav-net',
      location: '',
    },
    nav_tripwire: {
      free_class_name: '.nav-tripwire',
      location: '',
    },
    scrap_brand: {
      free_class_name: '.scrap.free.brand',
      collected_class_name: '.scrap-collected.net.brand',
      location: '',
    },
    scrap_link_contact: {
      free_class_name: '.scrap.free.link-contact',
      location: '',
    },
    scrap_link_projects: {
      free_class_name: '.scrap.free.link-projects',
      location: '',
    },
    scrap_link_resume: {
      free_class_name: '.scrap.free.link-resume',
      location: '',
    },
    scrap_link_github: {
      free_class_name: '.scrap.free.link-github',
      location: '',
    },
    scrap_link_linkedin: {
      free_class_name: '.scrap.free.link-linkedin',
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
    // console.log(scrap)
    const DOM_element = document.querySelector(`${scraps[scrap].free_class_name}`)
    scraps[scrap].location = DOM_element.offsetTop + DOM_element.offsetHeight / 2
  })

  return {
    scraps
  }
}