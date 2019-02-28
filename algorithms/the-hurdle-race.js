// Complete the hurdleRace function below.
function hurdleRace(k, height) {
  var drink = 0
  height.forEach(t => {
    if (k >= t) return
    drink = Math.max(t - k, drink)
  })
  return drink
}
