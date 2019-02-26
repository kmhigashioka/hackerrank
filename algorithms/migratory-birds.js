// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
  var x = {}
  for(var i in arr) {
    if (!x[arr[i]]) x[arr[i]] = 0
    x[arr[i]]++
  }

  var y = []
  var max = 0
  var min = Number.MAX_VALUE
  Object.keys(x).forEach(t => {
    max = Math.max(max, x[t])
  })

  Object.keys(x).filter(t => max <= x[t]).forEach(t => min = Math.min(t, min))

  return min
}
