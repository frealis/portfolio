// Get the starting location of the navbar net & scraps in pixels, return that
// info as an object to later be used to set the state of App.jsx
export function getNavNetScrapsLocations() {
  const nav_net             = document.querySelector('.nav-net')
  const nav_tripwire        = document.querySelector('.nav-tripwire')
  const scrap_brand         = document.querySelector('.scrap.free.brand')
  const scrap_links         = document.querySelector('.scrap.free.links')
  const nav_net_loc         = nav_net.offsetTop + nav_net.offsetHeight / 2
  const nav_tripwire_loc    = nav_tripwire.offsetTop - nav_net.offsetHeight  
  const scrap_brand_loc     = scrap_brand.offsetTop + scrap_brand.offsetHeight / 2
  const scrap_links_loc     = scrap_links.offsetTop + scrap_links.offsetHeight / 2
  return {
    nav_net_loc: nav_net_loc,
    nav_tripwire_loc: nav_tripwire_loc,
    scrap_brand_loc: scrap_brand_loc,
    scrap_links_loc: scrap_links_loc,
  }
}