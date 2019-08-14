// Colors - shuffle the array in place
export function colorsShuffled() {
  const colors = [
    '#0A2425',
    '#FCFAED',
    '#043546',
    '#ECD4B0',
    // '#1B969E',
    // '#0A8582',
    '#097471',
  ]
  colors.forEach(() => {
    let random_1 = Math.floor(Math.random() * colors.length);
    let random_2 = Math.floor(Math.random() * colors.length);
    [colors[random_1], colors[random_2]] = [colors[random_2], colors[random_1]]
  })
  return colors
}