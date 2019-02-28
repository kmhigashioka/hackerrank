// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
  let caught = false

  do {
    if (x < z)
      x++
    else if (x > z)
      x--
    if (y < z)
      y++
    else if (y > z)
      y--
    
    if (x == z || y == z)
      caught = true

    if (x == z && y == z)
      return 'Mouse C'
    else if (x == z)
      return 'Cat A'
    else if (y == z)
      return 'Cat B'
  } while (!caught)
}
