// Complete the fairRations function below.
function fairRations(b) {
  let dist = 0

  for(var i=0; i<b.length; i++) {
    if (i+1 >= b.length) break

    if (b[i] & 1) {
      b[i]++
      b[i+1]++
      dist += 2
    }
  }

  return b.some(t => t & 1) ? 'NO' : dist
}
