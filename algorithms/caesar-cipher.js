// Complete the caesarCipher function below.
function caesarCipher(s, k) {
  const alphaa = 'abcdefghijklmnopqrstuvwxyz'
  const alphab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  const turn = function (char = '', alpha = []) {
    let index = alpha.indexOf(char) + (k % alpha.length)

    return index > alpha.length-1
      ? Math.abs((alpha.length - 1) - (index - 1))
      : index
  }

  let decode = ''
  for (var i in s) {
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90)
      decode += alphab[turn(s[i], alphab)]
    else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122)
      decode += alphaa[turn(s[i], alphaa)]
    else
      decode += s[i]
  }

  return decode
}
