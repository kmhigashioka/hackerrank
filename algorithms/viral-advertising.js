// Complete the viralAdvertising function below.
function viralAdvertising(n) {
  let shared = 5
  let totalLikes = 0
  
  for(var i=0; i<n; i++) {
    const liked = Number.parseInt(shared / 2)
    totalLikes += liked
    shared = liked * 3
  }

  return totalLikes
}
