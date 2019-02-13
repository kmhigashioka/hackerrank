function compareTriplets(a, b) {
  let apts = 0
  let bpts = 0

  for (let i=0; i<a.length; i++) {
    if (a[i] > b[i]) apts++
    else if (b[i] > a[i]) bpts++
  }

  return [apts, bpts]
}
