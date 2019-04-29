// Complete the funnyString function below.
function funnyString(s = '') {
  let rarr = []
  let sarr = []

  for (var i=0; i<s.length; i++) {
    sarr.push(s.charCodeAt(i))
    rarr.push(s.charCodeAt(s.length-1-i))
  }

  for (var i=0; i<s.length-1; i++) {
    if (Math.abs(sarr[i] - sarr[i+1]) != Math.abs(rarr[i] - rarr[i+1]))
      return 'Not Funny'
  }

  return 'Funny'
}
