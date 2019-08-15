export function brand() {

  // Minimize brand when user scrolls down
  const main = document.querySelector('.main')
  main.onscroll = () => {
    if (main.scrollTop === 0 && window.innerWidth >= 768) {
      document.querySelector('.brand').classList.remove('miniaturized')
    } else {
      document.querySelector('.brand').classList.add('miniaturized')
    }
  }

  // Minimize brand when screen size is < 768px wide
  window.innerWidth >= 768
    ? document.querySelector('.brand').classList.remove('miniaturized')
    : document.querySelector('.brand').classList.add('miniaturized')

  window.onresize = () => {
    window.innerWidth >= 768
      ? document.querySelector('.brand').classList.remove('miniaturized')
      : document.querySelector('.brand').classList.add('miniaturized')
  }
}