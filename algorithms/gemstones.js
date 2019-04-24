// Complete the gemstones function below.
function gemstones(arr) {
  let maps = []
  let longest = ''

  for (var i=0; i<arr.length; i++) {
    let map = {}

    if (longest.length < arr[i].length) {
      longest = arr[i]
    }

    for (var j=0; j<arr[i].length; j++) {
      map[arr[i][j]] = !map[arr[i][j]] ? 1 : map[arr[i][j]] + 1
    }

    maps.push(map)
  }

  let count = 0
  longest = longest.split('')
    .filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join('');
  for (var i=0; i<longest.length; i++) {
    let countexists = 0
    for (var j=0; j<maps.length; j++) {
      if (maps[j][longest[i]]) countexists++
    }
    if (countexists == maps.length) count++
  }

  return count
}
