// Complete the timeInWords function below.
function timeInWords(h, m) {
  let map = {
    0: 'twelve',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'quarter',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
  }
  let str = ''

  if (m == 0) {
    str = `${map[h]} o' clock `
  } else if (m == 15) {
    str = `${map[m]} past ${map[h]}`
  } else if (m == 45) {
    h = h+1
    if (h > 12) h = h-12
    str = `quarter to ${map[h]}`
  } else if (1 <= m && m < 30) {
    let min = m == 1 ? 'minute' : 'minutes'
    str = `${map[m]} ${min} past ${map[h]}`
  } else if (m == 30) {
    str = `half past ${map[h]}`
  } else if (m < 60) {
    h = h+1
    if (h > 12) h = h-12
    str = `${map[60-m]} minutes to ${map[h]}`
  } else {
    str = `${map[h+1]} o' clock`
  }

  return str
}
