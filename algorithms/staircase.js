function staircase(n) {
  for (var i = 1; i <= n; i++) {
    var tree = ''
    for (var j = 1; j <= n; j++) {
        if (j > n - i) {
            tree += '#'
            continue
        }
        tree += ' '
    }
    console.log(tree)
  }
}
