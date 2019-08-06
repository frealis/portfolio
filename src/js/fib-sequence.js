// Create a fibonacci sequence that starts with 1
export function fibSequence(n) {
  let fibSeq = []
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      fibSeq.push(1)
    } else {
      fibSeq.push(fibSeq[i - 2] + fibSeq[i - 1])
    }
  }
  return fibSeq
}