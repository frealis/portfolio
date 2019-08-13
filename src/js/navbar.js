import React from 'react'

export function navbar() {
  
  window.innerWidth < 768
    ? document.querySelector('.navbar').classList.add('display-none')
    : document.querySelector('.navbar').classList.remove('display-none')

  window.onresize = () => {
    window.innerWidth < 768
      ? document.querySelector('.navbar').classList.add('display-none')
      : document.querySelector('.navbar').classList.remove('display-none')
  }
}  

