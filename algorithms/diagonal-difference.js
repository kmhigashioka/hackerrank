function diagonalDifference(arr) {
  let isum = 0
  let jsum = 0

  for (let i = 0; i < arr.length; i++) {
    isum += arr[i][i]
    jsum += arr[i][arr[i].length - i - 1]
  }

  const diff = isum - jsum
  return diff > 0 ? diff : diff * - 1
}
