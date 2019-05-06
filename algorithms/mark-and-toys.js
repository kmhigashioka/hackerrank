// Complete the maximumToys function below.
function maximumToys(prices, k) {
  let start = 0
  let i = 0
  let count = 0
  prices.sort((x,y) => x-y)

  while (start + prices[i] <= k) {
    start += prices[i++]
    count++
  }

  return count
}
