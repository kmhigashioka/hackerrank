// Complete the serviceLane function below.
function serviceLane(n, cases) {
  let ans = []

  cases.forEach(t => {
    const i = t[0]
    const j = t[1]
    let min = Number.MAX_VALUE

    for(var k=i; k<=j; k++) {
      min = Math.min(n[k], min)
    }

    ans.push(min)
  })

  return ans
}
