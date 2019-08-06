// Change translateZ property of blocks for an 'asteroid zoom' effect
export function asteroidBlocks() {
  for (let i = 0; i < blockIDList.length; i++) {
    const block = document.getElementById(blockIDList[i])
    window.setTimeout(() => {
      block.classList.add('animation-asteroid-blocks')
    }, i * 100)
  }
}