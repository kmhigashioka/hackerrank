// Complete the findDigits function below.
function findDigits(n) {
  const strN = n+''
  let validd = 0
  for (var i in strN) {
    if (Number.isInteger(n / Number.parseInt(strN[i])))
      validd++
  }
  return validd
}
