function timeConversion(s) {
  // Complete this function
  var time = s.split(':')

  if (s.toLowerCase().indexOf('pm') > -1 && parseInt(time[0]) < 12) {
      time[0] = parseInt(time[0]) + 12
      if (time[0] == 24) time[0] = '00'
  } else if (s.toLowerCase().indexOf('am') > -1 && parseInt(time[0]) == 12) {
    time[0] = '00'
  }

  time[2] = time[2].substring(0,2)

  return time.join(':')
}
