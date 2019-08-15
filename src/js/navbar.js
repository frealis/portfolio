export function navbar() {
  
  // Collapse NavbarSidePanel.jsx if window width is > 768px, otherwise expand it
  window.innerWidth >= 768
    ? document.querySelector('.navbar').classList.add('display-none')
    : document.querySelector('.navbar').classList.remove('display-none')

  window.onresize = () => {
    window.innerWidth > 768
      ? document.querySelector('.navbar').classList.add('display-none')
      : document.querySelector('.navbar').classList.remove('display-none')
  }

  const toggle = document.querySelector('.nav-btn-toggle-sidepanel').dataset.toggle
  const target = document.querySelector('.nav-btn-toggle-sidepanel').dataset.target

  // Add hamburger icon toggle functionality
  document.querySelector('.nav-btn-toggle-sidepanel').addEventListener('click', () => {
    let token_exists = false
    document.querySelector(target).classList.forEach(token => {
      if (token === toggle) {
        token_exists = true
      }
    })
    token_exists
      ? document.querySelector(target).classList.remove(toggle)
      : document.querySelector(target).classList.add(toggle)
  })

  // Collapse NavbarSidePanel.jsx if a navbar link is clicked
  const nav_links = document.querySelectorAll('.nav-link')
  nav_links.forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector(target).classList.add(toggle)
    })
  }) 
}  

