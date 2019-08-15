
// Destroy all of the fibonacci blocks
export function fibDestroyBlocks() {
  const blocks = document.querySelectorAll('.background-fibonacci-block')
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i]
    window.setTimeout(() => {
      block.classList.add('animation-destroy-block')
      window.setTimeout(() => {
        block.parentNode.removeChild(block)
      }, 1000)
    }, i * 100)
    // window.setTimeout(() => {
    //   block.parentNode.removeChild(block)
    // }, i * 400)
  }
}