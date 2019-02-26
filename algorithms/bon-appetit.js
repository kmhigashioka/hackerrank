// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
  var totalBill = bill.filter((t, index) => index != k).reduce((ac, cv) => ac + cv)
  var shared = totalBill / 2
  var change = b - shared
  console.log(shared == b ? 'Bon Appetit' : change)
}
