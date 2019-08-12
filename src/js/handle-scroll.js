// Handle scroll events that deal with the navbar net & scraps
export function handleScroll(main) {

  // const { nav_net, nav_tripwire, scrap_brand, scrap_link_contact, scrap_link_github, scrap_link_linkedin, scrap_link_projects, scrap_link_resume } = this.state.scraps_locations.scraps
  
  // Nav Brand Name
  // if (main.scrollTop > nav_net.location - scrap_brand.location) {
    // document.querySelector(`${nav_net.class_name}`).classList.add('display-none')
    // document.querySelector(`${nav_net.collected_class_name}`).classList.remove('display-none')
    // document.querySelector(`${nav_net.collected_class_name}`).classList.add('animation-chromatophore')
  // } else {
    // document.querySelector(`${nav_net.class_name}`).classList.remove('display-none')
    // document.querySelector('.scrap-collected.net.brand').classList.add('display-none')
    // document.querySelector('.scrap-collected.net.brand').classList.remove('animation-chromatophore')
  // }

  // Nav Links
  // This conditional is associated with using the .links <div> when using a 
  // horizontal menu layout
  // if (main.scrollTop > this.state.nav_net_loc - this.state.scrap_links_loc) {
  //   document.querySelector('.scrap.free.links').classList.add('display-none')
  //   document.querySelector('.scrap-collected.net.links').classList.remove('display-none')
  //   document.querySelector('.scrap-collected.net.link-projects').classList.add('animation-chromatophore')
  //   document.querySelector('.scrap-collected.net.link-contact').classList.add('animation-chromatophore')
  // } else {
  //   document.querySelector('.scrap.free.links').classList.remove('display-none')
  //   document.querySelector('.scrap-collected.net.links').classList.add('display-none')
  //   document.querySelector('.scrap-collected.net.link-projects').classList.remove('animation-chromatophore')
  //   document.querySelector('.scrap-collected.net.link-contact').classList.remove('animation-chromatophore')
  // }

  // if (main.scrollTop > this.state.nav_net_loc - this.state.scrap_link_contact_loc) {
  //   document.querySelector('.scrap.free.link-contact').classList.add('display-none')
  //   document.querySelector('.scrap-collected.net.link-contact').classList.remove('display-none')
  //   document.querySelector('.scrap-collected.net.link-projects').classList.add('animation-chromatophore')
  //   document.querySelector('.scrap-collected.net.link-contact').classList.add('animation-chromatophore')
  // } else {
  //   document.querySelector('.scrap.free.link-contact').classList.remove('display-none')
  //   document.querySelector('.scrap-collected.net.link-contact').classList.add('display-none')
  //   document.querySelector('.scrap-collected.net.link-projects').classList.remove('animation-chromatophore')
  //   document.querySelector('.scrap-collected.net.link-contact').classList.remove('animation-chromatophore')
  // }

  // Hide the net navbar, reveal the fixed navbar
  // if (main.scrollTop > this.state.nav_tripwire_loc) {
  //   document.querySelector('.nav-net').classList.add('nav-net-vanish')
  //   document.querySelector('.nav-fixed').classList.remove('nav-fixed-vanish')
  // } else {
  //   document.querySelector('.nav-net').classList.remove('nav-net-vanish')
  //   document.querySelector('.nav-fixed').classList.add('nav-fixed-vanish')
  // }
}
