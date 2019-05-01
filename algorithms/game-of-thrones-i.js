// Complete the gameOfThrones function below.
function gameOfThrones(s) {
  let hash = {}

  for (var i=0; i<s.length; i++) {
    hash[s[i]] = !hash[s[i]] ? 1 : hash[s[i]]+1
  }

  return Object.keys(hash).filter(t => (hash[t] & 1)).length == 0
    ? 'YES'
    : Object.keys(hash).filter(t => (hash[t] & 1) != 0).length == 1
      ? 'YES'
      : 'NO'
}
