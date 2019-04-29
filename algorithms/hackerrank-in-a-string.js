// Complete the hackerrankInString function below.
function hackerrankInString(s='') {
  const str = 'hackerrank'
  let match = 0

  for (var i=0, j=0; i<str.length; i++) {
    for (; j<s.length; j++) {
      if (str[i] == s[j]) {
        match++
        j++
        break
      }
    }
  }

  return match == str.length ? 'YES' : 'NO'
}
