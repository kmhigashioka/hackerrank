// Complete the circularArrayRotation function below.
function circularArrayRotation(a, k, queries) {
  let newa = []
  const j = k % a.length

  for (var i=0; i<queries.length; i++) {
    if (queries[i] - j >= 0)
      newa.push(a[queries[i] - j])
    else
      newa.push(a[queries[i] - j + a.length])
  }

  return newa
}
