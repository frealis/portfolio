export function brand() {
  const main = document.querySelector('.main')
  main.onscroll = () => {
    main.scrollTop > 0
      ? document.querySelector('.brand').classList.add('miniaturized')
      : document.querySelector('.brand').classList.remove('miniaturized')
  }
}