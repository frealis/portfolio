// Handle scroll events that deal with the navbar net & scraps
export function handleScroll(main) {

  // Nav Brand Name
  if (main.scrollTop > this.state.nav_net_loc - this.state.scrap_brand_loc) {
    document.querySelector('.scrap.free.brand').classList.add('display-none')
    document.querySelector('.scrap-collected.net.brand').classList.remove('display-none')
    document.querySelector('.scrap-collected.net.brand').classList.add('animation-chromatophore')
  } else {
    document.querySelector('.scrap.free.brand').classList.remove('display-none')
    document.querySelector('.scrap-collected.net.brand').classList.add('display-none')
    document.querySelector('.scrap-collected.net.brand').classList.remove('animation-chromatophore')
  }

  // Nav Links
  if (main.scrollTop > this.state.nav_net_loc - this.state.scrap_links_loc) {
    document.querySelector('.scrap.free.links').classList.add('display-none')
    document.querySelector('.scrap-collected.net.links').classList.remove('display-none')
    document.querySelector('.scrap-collected.net.link-projects').classList.add('animation-chromatophore')
    document.querySelector('.scrap-collected.net.link-contact').classList.add('animation-chromatophore')
  } else {
    document.querySelector('.scrap.free.links').classList.remove('display-none')
    document.querySelector('.scrap-collected.net.links').classList.add('display-none')
    document.querySelector('.scrap-collected.net.link-projects').classList.remove('animation-chromatophore')
    document.querySelector('.scrap-collected.net.link-contact').classList.remove('animation-chromatophore')
  }

  // Hide the net navbar, reveal the fixed navbar
  if (main.scrollTop > this.state.nav_tripwire_loc) {
    document.querySelector('.nav-net').classList.add('nav-net-vanish')
    document.querySelector('.nav-fixed').classList.remove('nav-fixed-vanish')
  } else {
    document.querySelector('.nav-net').classList.remove('nav-net-vanish')
    document.querySelector('.nav-fixed').classList.add('nav-fixed-vanish')
  }
}
