// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
  let bdays = 0
  for (; i<=j; i++) {
    const rev = Number.parseInt((i+'').split('').reverse().join(''))
    if (Math.abs(i - rev) / k % 1 == 0)
      bdays++
  }
  return bdays
}
