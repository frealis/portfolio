export function navbar() {
  
  // Hide NavbarSidePanel.jsx if window width is > 768px, otherwise show it
  window.innerWidth > 768
    ? document.querySelector('.navbar').classList.add('display-none')
    : document.querySelector('.navbar').classList.remove('display-none')

  window.onresize = () => {
    window.innerWidth > 768
      ? document.querySelector('.navbar').classList.add('display-none')
      : document.querySelector('.navbar').classList.remove('display-none')
  }

  // Add hamburger icon toggle functionality
  document.querySelector('.nav-btn-toggle-sidepanel').addEventListener('click', (e) => {
    let toggle = ''
    let target = ''
    if (e.target.dataset.toggle) {
      toggle = e.target.dataset.toggle
      target = e.target.dataset.target
    } else {
      let currentNode = e.target    
      while (currentNode.parentNode) {
        if (currentNode.dataset.toggle) {
          toggle = currentNode.dataset.toggle
          target = currentNode.dataset.target
        }
        currentNode = currentNode.parentNode
      }
    }
    let token_exists = false
    document.querySelector(`${target}`).classList.forEach(token => {
      if (token === toggle) {
        token_exists = true
      }
    })
    token_exists
      ? document.querySelector(`${target}`).classList.remove(toggle)
      : document.querySelector(`${target}`).classList.add(toggle)
  })
}  

