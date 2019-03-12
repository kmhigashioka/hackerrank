// Complete the cutTheSticks function below.
function cutTheSticks(arr) {
  arr.sort((x, y) => x-y)
  let out = []

  do {
    let sticksout = 0

    arr = arr.map(t => {
      if (t - arr[0] >= 0)
        sticksout++
      return t - arr[0]
    }).filter(t => t > 0)

    out.push(sticksout)

  } while (arr.length > 0)

  return out
}
