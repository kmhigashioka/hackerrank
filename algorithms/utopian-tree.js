// Complete the utopianTree function below.
function utopianTree(n) {
  let h = 1

  for (var i=0; i<n; i++) {
    h = (i & 1 == 1)
      ? h+1
      : h*2
  }

  return h
}
