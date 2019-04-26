// Complete the alternatingCharacters function below.
function alternatingCharacters(s = '') {
  let count = 0

  for (var i=0; i<s.length; i++) {
    if (s[i] == s[i+1]) {
      count++
    }
  }

  return count
}
