// Complete the equalizeArray function below.
function equalizeArray(arr) {
  const hash = {}
  let max = Number.MIN_VALUE
  arr.forEach(t => {
    hash[t] = !hash[t] ? 1 : hash[t] + 1
    max = Math.max(hash[t], max)
  })
  return arr.length - max
}
