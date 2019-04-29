// Complete the pangrams function below.
function pangrams(s = '') {
  let map = {}

  for (var i=0; i<s.length; i++) {
    if (s[i] == ' ') continue

    map[s[i].toLowerCase()] = 1
  }

  return Object.keys(map).length == 26 ? 'pangram' : 'not pangram'
}
