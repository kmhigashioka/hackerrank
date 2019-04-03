// Complete the minimumDistances function below.
function minimumDistances(a) {
  const distance = {}
  let min = Number.MAX_VALUE

  a.forEach((t, i) => {
    if (distance[t] && !distance[t].paired)
      distance[t] = { val: i - distance[t].val, paired: true }

    if (!distance[t])
      distance[t] = { val: i, paired: false }
  })

  Object
    .keys(distance)
    .forEach(t => min = distance[t].paired ? Math.min(min, distance[t].val) : min)

  return min == Number.MAX_VALUE ? -1 : min
}
