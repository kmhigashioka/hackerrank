// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  var hash = {}
  ar.forEach(t => {
    if (!hash[t]) hash[t] = 0
    hash[t]++
  })

  return Object.keys(hash).reduce((acc, cv) => parseInt(acc) + parseInt(hash[cv]/2), 0)
}
