
// Change translateZ property of blocks for an 'asteroid zoom' effect
export function fibAsteroidBlocks() {
  console.log('fib-asteroid-blocks')
  const blocks = document.querySelectorAll('.background-fibonacci-block')
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i]
    window.setTimeout(() => {
      block.classList.remove('animation-flicker-in')
      window.setTimeout(() => {
        block.classList.add('animation-asteroid-blocks')        
      }, 100)
    }, i * 100)
  }
}