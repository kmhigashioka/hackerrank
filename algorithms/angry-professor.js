// Complete the angryProfessor function below.
function angryProfessor(k, a) {
  return a.filter(t => t <= 0).length >= k
    ? 'NO'
    : 'YES'
}
