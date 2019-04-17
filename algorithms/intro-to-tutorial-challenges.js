// Complete the introTutorial function below.
function introTutorial(V, arr) {
  let index = -1
  arr.some((t,i) => {
    if (t == V) {
      index = i
      return true
    }
    return false
  })

  return index
}
