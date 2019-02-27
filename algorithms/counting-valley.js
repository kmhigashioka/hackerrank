// Complete the countingValleys function below.
function countingValleys(n, s) {
  var val = 0
  var lvl = 0

  for(var i in s) {
    if (s[i] == 'U') lvl++
    else lvl--

    if (lvl == 0 && s[i] == 'U') val++
  }

  return val
}
