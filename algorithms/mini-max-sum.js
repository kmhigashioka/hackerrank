function miniMaxSum(arr) {
  var min = Number.MAX_VALUE
  var max = 0
  arr.forEach((x, i) => {
      var z = arr.filter((y, j) => i != j).reduce((t, u) => t + u, 0)
      min = Math.min(z, min)
      max = Math.max(z, max)
  })
  console.log(min + ' ' + max) 
}
