// Complete the breakingRecords function below.
function breakingRecords(scores) {
  var best = 0
  var worst = 0
  var highest = []
  var lowest = []
  var max = 0
  var min = Number.MAX_SAFE_INTEGER
  scores.forEach(t => {
      max = Math.max(max, t)
      min = Math.min(min, t)
      highest = [...highest, max]
      lowest = [...lowest, min]
  })
  for (var i = 0; i < scores.length - 1; i++) {
      if (highest[i] < highest[i + 1]) best++
      if (lowest[i] > lowest[i + 1]) worst++
  }
  return [best, worst]
}
