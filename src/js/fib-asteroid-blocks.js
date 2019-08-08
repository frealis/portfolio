// Change translateZ property of blocks for an 'asteroid zoom' effect
export function fibAsteroidBlocks() {
  const blocks = document.querySelectorAll('.background-fibonacci-block')
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i]
    window.setTimeout(() => {
      block.classList.add('animation-asteroid-blocks')
    }, i * 100)
  }
}