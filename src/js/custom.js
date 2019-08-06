// document.addEventListener('DOMContentLoaded', () => {

// ========== LINKS ==========================================================

// Assign event handlers to links
export function addLinkHrefs() {
  const link_contact_nodelist = document.querySelectorAll('.link-contact')
  link_contact_nodelist.forEach((link_contact) => {
    link_contact.addEventListener('click', () => {
      window.location.href = '#anchor-contact'
    })
  })
  const link_projects_nodelist = document.querySelectorAll('.link-projects')
  link_projects_nodelist.forEach((link_projects) => {
    link_projects.addEventListener('click', () => {
      window.location.href = '#anchor-projects'
    })
  })
}

// ========== NAVBAR NET & SCRAPS ============================================

// Global variables used to manipulate navbar elements
const main                = document.querySelector('.main')
const nav_net             = document.querySelector('.nav-net')
const scrap_brand         = document.querySelector('.scrap.free.brand')
const scrap_links         = document.querySelector('.scrap.free.links')
const nav_net_loc         = nav_net.offsetTop + nav_net.offsetHeight / 2
const scrap_brand_loc     = scrap_brand.offsetTop + scrap_brand.offsetHeight / 2
const scrap_links_loc     = scrap_links.offsetTop + scrap_links.offsetHeight / 2

// Scroll events determine whether brand & link elements get attached to navbar
main.onscroll = () => {
      
  // Nav Brand Name
  if (main.scrollTop > nav_net_loc - scrap_brand_loc) {
    document.querySelector('.scrap.free.brand').classList.add('display-none')
    document.querySelector('.scrap-collected.net.brand').classList.remove('display-none')
    document.querySelector('.scrap-collected.net.brand').classList.add('animation-chromatophore')
  } else {
    document.querySelector('.scrap.free.brand').classList.remove('display-none')
    document.querySelector('.scrap-collected.net.brand').classList.add('display-none')
    document.querySelector('.scrap-collected.net.brand').classList.remove('animation-chromatophore')
  }
  
  // Nav Links
  if (main.scrollTop > nav_net_loc - scrap_links_loc) {
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
  const nav_tripwire  = document.querySelector('.nav-tripwire')
  if (main.scrollTop > nav_tripwire.offsetTop - nav_net.offsetHeight) {
    document.querySelector('.nav-net').classList.add('nav-net-vanish')
    document.querySelector('.nav-fixed').classList.remove('nav-fixed-vanish')
  } else {
    document.querySelector('.nav-net').classList.remove('nav-net-vanish')
    document.querySelector('.nav-fixed').classList.add('nav-fixed-vanish')
  }
}

// ========== FIBONACCI BACKGROUND =======================================

// Colors - shuffle the array in place
const colors = [
  '#0A2425',
  '#FCFAED',
  '#043546',
  '#ECD4B0',
  '#1B969E',
]
function shuffle(arr) {
  arr.forEach((arr_element) => {
    let random_1 = Math.floor(Math.random() * arr.length);
    let random_2 = Math.floor(Math.random() * arr.length);
    [arr[random_1], arr[random_2]] = [arr[random_2], arr[random_1]]
  })
}
shuffle(colors)

// Specify 'n' number of blocks that will eventually be created, 
// specify unit of measurement, create list to store block ID values
const n = 16
const unit = 'px'
const blockIDList = []

// Create a fibonacci sequence that starts with 1
let fibSeq = []
for (let i = 0; i < n; i++) {
  if (i === 0 || i === 1) {
    fibSeq.push(1)
  } else {
    fibSeq.push(fibSeq[i - 2] + fibSeq[i - 1])
  }
}

// 'trbl' is a counter
let trbl = 0

// Create 'n' number of blocks
for (let i = 0; i < n; i++) {
  const block = document.createElement('block')
  const factor = 40
  const block_size = factor * fibSeq[i] + unit
  
  // Pick a starting point on the page's (x, y) axis
  let position_x = window.innerWidth * 3 / 4
  let position_y = window.innerHeight / 4
  
  // Create positioning coordinates for each block (need to figure 
  // out a compact function for this someday)
  if (trbl === 0) {                   // fibSeq = 1
    position_x += unit
    position_y += unit
  } else if (trbl === 1) {            // fibSeq = 1
    position_x = position_x + factor * 1 + unit
    position_y += unit
  } else if (trbl === 2) {            // fibSeq = 2
    position_x += unit
    position_y = position_y + factor * 1 + unit
  } else if (trbl === 3) {            // fibSeq = 3
    position_x = position_x - factor * 3 + unit
    position_y += unit
  } else if (trbl === 4) {            // fibSeq = 5
    position_x = position_x - factor * 3 + unit
    position_y = position_y - factor * 5 + unit
  } else if (trbl === 5) {            // fibSeq = 8
    position_x = position_x + factor * 2 + unit
    position_y = position_y - factor * 5 + unit
  } else if (trbl === 6) {            // fibSeq = 13
    position_x = position_x - factor * 3 + unit
    position_y = position_y + factor * 3 + unit
  } else if (trbl === 7) {            // fibSeq = 21
    position_x = position_x - factor * 24 + unit
    position_y = position_y - factor * 5 + unit
  } else if (trbl === 8) {            // fibSeq = 34
    position_x = position_x - factor * 24 + unit
    position_y = position_y - factor * 39 + unit
  } else if (trbl === 9) {            // fibSeq = 55
    position_x = position_x + factor * 10 + unit
    position_y = position_y - factor * 39 + unit
  } else if (trbl === 10) {           // fibSeq = 89
    position_x = position_x - factor * 24 + unit
    position_y = position_y + factor * 16 + unit
  } else if (trbl === 11) {           // fibSeq = 144
    position_x = position_x - factor * 168 + unit
    position_y = position_y - factor * 39 + unit
  } else if (trbl === 12) {           // fibSeq = 233
    position_x = position_x - factor * 168 + unit
    position_y = position_y - factor * 272 + unit
  } else if (trbl === 13) {           // fibSeq = 377
    position_x = position_x + factor * 65 + unit
    position_y = position_y - factor * 272 + unit
  } else if (trbl === 14) {           // fibSeq = 610
    position_x = position_x - factor * 168 + unit
    position_y = position_y + factor * 105 + unit
  } else if (trbl === 15) {           // fibSeq = 987
    position_x = position_x - factor * 1154 + unit
    position_y = position_y - factor * 272 + unit
  } else if (trbl === 16) {           // fibSeq = 1597
    position_x = position_x - factor * 1154 + unit
    position_y = position_y - factor * 1868 + unit
  }
  
  // Update block count
  trbl++
  
  // Create a unique ID value for each block
  const blockID = 'blockID' + i
  blockIDList.push(blockID)
  
  // Set block properties
  block.classList.add('background-fibonacci-block')
  block.id                = blockID
  block.style.background  = colors[i % colors.length]
  block.style.display     = 'block'
  block.style.left        = position_x
  block.style.position    = 'fixed'
  block.style.top         = position_y
  block.style.transform   = 'translateZ(-1px)'
  block.style.zIndex      = '-1'
  
  // Create two sets of sizes for each block, scattered and regular sizes
  block.style.height      = block_size
  block.style.width       = block_size
  block.dataset.height    = block_size
  block.dataset.width     = block_size
  
  // Place the fibonacci background block into the DOM
  document.querySelector('.main').appendChild(block)
}

// ========== ANIMATIONS ==================================================

// Change translateZ property of blocks for an 'asteroid zoom' effect
function asteroidBlocks() {
  for (let i = 0; i < blockIDList.length; i++) {
    const block = document.getElementById(blockIDList[i])
    window.setTimeout(() => {
      block.classList.add('animation-asteroid-blocks')
    }, i * 100)
  }
}
asteroidBlocks()

// Change perspective of fibonacci blocks <div> (ie. 'main') to create a zoom effect
document.querySelector('.main').classList.add('animation-main-zoom')

// Change scale to animate brand text and links
// function asteroidText() {
//   scrap_brand.classList.add('animation-asteroid-text')
//   window.setTimeout(() => {
//     scrap_projects.classList.add('animation-asteroid-text')
//   }, 200)
//   window.setTimeout(() => {
//     scrap_contact.classList.add('animation-asteroid-text')
//   }, 400)
// }
// asteroidText()

// })