// Complete the happyLadybugs function below.
function happyLadybugs(b) {
  const hash = {}
  let hasu = false
  let consec

  for (var i in b) {
    if (b[i] == '_') {
      hasu = true
      continue
    }
    if (hash[b[i]]) hash[b[i]]++
    else hash[b[i]] = 1
  }

  if (hasu) {
    return Object.keys(hash).every(t => hash[t] > 1)
      ? 'YES'
      : 'NO'
  }

  let ishappy = true
  let lastchar = ''
  if (b.length == 2) {
    ishappy = b[0] == b[1]
  } else {
    for (var i=0; i<b.length; i++) {
      if (i == b.length-1) {
        ishappy = b[i-1] == b[i]
        continue
      }
      if (i <= 0 || i+1 >= b.length) continue
      if (b[i] == b[i-1] || b[i] == b[i+1]) continue
      ishappy = false
      break
    }
  }

  return ishappy ? 'YES' : 'NO'
}
