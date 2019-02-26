// Complete the birthday function below.
function birthday(s, d, m) {
  return s.filter((t, i) => {
    let total = 0

    for (var j=0, k=i; j<m; j++,k++) {
      total += s[k]
    }

    return total == d
  }).length
}
