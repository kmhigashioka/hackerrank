function countApplesAndOranges(s, t, a, b, apples, oranges) {
  console.log(apples.filter(u => a + u >= s && a + u <= t).length)
  console.log(oranges.filter(u => b + u >= s && b + u <= t).length)
}
