function solve(grades){
  // Complete this function
  return grades.map(t => {
    if (t < 35)
      return t
    var multiple = (t/5)
    if ((multiple%1)!=0)
      multiple++
    multiple = Math.floor(multiple)
    if (multiple*5-t<3)
      return multiple*5
    return t
  })
}
