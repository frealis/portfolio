export function brand() {

  // Minimize brand when user scrolls down
  const brand = document.querySelector('.brand')
  const main = document.querySelector('.main')
  main.onscroll = () => {
    if (main.scrollTop === 0 && window.innerWidth >= 768) {
      brand.classList.remove('miniaturized')
    } else {
      brand.classList.add('miniaturized')
    }
  }

  // Minimize brand when screen size is < 768px wide
  if (window.innerWidth < 768) {
    brand.classList.add('miniaturized')
  } else {
    brand.classList.add('animation-chromatophore-pulse')
    brand.classList.remove('miniaturized')
  }

  window.onresize = () => {
    if (window.innerWidth < 768) {
      brand.classList.add('miniaturized')
    } else {
      brand.classList.add('animation-chromatophore-pulse')
      brand.classList.remove('miniaturized')
    }
  }
}