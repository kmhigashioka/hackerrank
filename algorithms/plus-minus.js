function plusMinus(arr) {
  var n = arr.length
  var positive = arr.filter(t => t > 0).length
  var zero = arr.filter(t => t == 0).length
  var negative = arr.filter(t => t < 0).length
  console.log((positive / n).toFixed(6))
  console.log((negative / n).toFixed(6))
  console.log((zero / n).toFixed(6))
}
