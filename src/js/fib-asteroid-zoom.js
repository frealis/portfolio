
// Change perspective of fibonacci blocks <div> (ie. 'main') to create a zoom effect
export function fibAsteroidZoom() {
  document.querySelector('.main').classList.remove('animation-asteroid-zoom')
  window.setTimeout(() => {
    document.querySelector('.main').classList.add('animation-asteroid-zoom')
  }, 100)
}