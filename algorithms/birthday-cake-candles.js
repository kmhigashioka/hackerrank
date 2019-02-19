function birthdayCakeCandles(n, ar) {
  // Complete this function
  var hash = {}
  var max = 0
  ar.forEach(t => {
      max = Math.max(t, max)
      if (!hash[t]) {
          hash[t]=1
          return
      }
      hash[t]++
  })

  return hash[max]
}
