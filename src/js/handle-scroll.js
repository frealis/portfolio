// Handle scroll events that deal with the navbar net & scraps
export function handleScroll(main) {

  // const { nav_net, nav_tripwire, scrap_brand, scrap_link_contact, scrap_link_github, scrap_link_linkedin, scrap_link_projects, scrap_link_resume } = this.state.scraps_locations.scraps
  const { nav_net, nav_tripwire, ...scraps } = this.state.scraps_locations.scraps

  // Handle scraps
  Object.keys(scraps).forEach(scrap => {
    if (main.scrollTop > nav_net.location - `${scraps[scrap].location}`) {
      document.querySelector(`${scraps[scrap].class_name}`).classList.add('display-none')
      document.querySelector(`${scraps[scrap].class_name_collected}`).classList.remove('display-none')
      document.querySelector(`${scraps[scrap].class_name_collected}`).classList.add('animation-chromatophore')
    } else {
      document.querySelector(`${scraps[scrap].class_name}`).classList.remove('display-none')
      document.querySelector(`${scraps[scrap].class_name_collected}`).classList.add('display-none')
      document.querySelector(`${scraps[scrap].class_name_collected}`).classList.remove('animation-chromatophore')
    }
  })

  // Hide the net navbar, reveal the fixed navbar
  if (main.scrollTop > nav_tripwire.location - nav_net.offsetHeight) {
    document.querySelector('.nav-net').classList.add('nav-net-vanish')
    document.querySelector('.nav-fixed').classList.remove('nav-fixed-vanish')
  } else {
    document.querySelector('.nav-net').classList.remove('nav-net-vanish')
    document.querySelector('.nav-fixed').classList.add('nav-fixed-vanish')
  }
}
