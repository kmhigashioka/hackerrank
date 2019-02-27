/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
  const pp = p & 1 ? p-1 : p
  const nn = n & 1 ? n-1 : n

  return pp / n > 0.5
    ? ((nn - pp) / 2)
    : pp / 2
}
