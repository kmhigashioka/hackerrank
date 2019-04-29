// Complete the strangeCounter function below.
function strangeCounter(t) {
  let rem = 3

  while(t > rem) {
    t = t-rem
    rem *= 2
  }

  return rem-t+1
}
