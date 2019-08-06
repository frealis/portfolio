// Create 'n' number of blocks

export function fibBlocks(n, fibSeq, unit, colors) {
  for (let i = 0; i < n; i++) {
    const block = document.createElement('block')
    const factor = 40
    const block_size = factor * fibSeq[i] + unit
    
    // Pick a starting point on the page's (x, y) axis
    let position_x = window.innerWidth * 3 / 4
    let position_y = window.innerHeight / 4
    
    // Create positioning coordinates for each block (need to figure 
    // out a compact function for this someday)
    if (i === 0) {                   // fibSeq = 1
      position_x += unit
      position_y += unit
    } else if (i === 1) {            // fibSeq = 1
      position_x = position_x + factor * 1 + unit
      position_y += unit
    } else if (i === 2) {            // fibSeq = 2
      position_x += unit
      position_y = position_y + factor * 1 + unit
    } else if (i === 3) {            // fibSeq = 3
      position_x = position_x - factor * 3 + unit
      position_y += unit
    } else if (i === 4) {            // fibSeq = 5
      position_x = position_x - factor * 3 + unit
      position_y = position_y - factor * 5 + unit
    } else if (i === 5) {            // fibSeq = 8
      position_x = position_x + factor * 2 + unit
      position_y = position_y - factor * 5 + unit
    } else if (i === 6) {            // fibSeq = 13
      position_x = position_x - factor * 3 + unit
      position_y = position_y + factor * 3 + unit
    } else if (i === 7) {            // fibSeq = 21
      position_x = position_x - factor * 24 + unit
      position_y = position_y - factor * 5 + unit
    } else if (i === 8) {            // fibSeq = 34
      position_x = position_x - factor * 24 + unit
      position_y = position_y - factor * 39 + unit
    } else if (i === 9) {            // fibSeq = 55
      position_x = position_x + factor * 10 + unit
      position_y = position_y - factor * 39 + unit
    } else if (i === 10) {           // fibSeq = 89
      position_x = position_x - factor * 24 + unit
      position_y = position_y + factor * 16 + unit
    } else if (i === 11) {           // fibSeq = 144
      position_x = position_x - factor * 168 + unit
      position_y = position_y - factor * 39 + unit
    } else if (i === 12) {           // fibSeq = 233
      position_x = position_x - factor * 168 + unit
      position_y = position_y - factor * 272 + unit
    } else if (i === 13) {           // fibSeq = 377
      position_x = position_x + factor * 65 + unit
      position_y = position_y - factor * 272 + unit
    } else if (i === 14) {           // fibSeq = 610
      position_x = position_x - factor * 168 + unit
      position_y = position_y + factor * 105 + unit
    } else if (i === 15) {           // fibSeq = 987
      position_x = position_x - factor * 1154 + unit
      position_y = position_y - factor * 272 + unit
    } else if (i === 16) {           // fibSeq = 1597
      position_x = position_x - factor * 1154 + unit
      position_y = position_y - factor * 1868 + unit
    }
    
    // Create a unique ID value for each block
    const blockID = 'blockID' + i
    
    // Set block properties
    block.classList.add('background-fibonacci-block')
    block.id                = blockID
    block.style.background  = colors[i % colors.length]
    block.style.display     = 'block'
    block.style.left        = position_x
    block.style.position    = 'fixed'
    block.style.top         = position_y
    block.style.transform   = 'translateZ(-1px)'
    block.style.zIndex      = '-1'
    
    // Create two sets of sizes for each block, scattered and regular sizes
    block.style.height      = block_size
    block.style.width       = block_size
    
    // Place the fibonacci background block into the DOM
    document.querySelector('.main').appendChild(block)
  }
}