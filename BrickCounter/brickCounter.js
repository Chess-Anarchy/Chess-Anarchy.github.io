window.onload = () => {}

const fetchEnPassantStats = async (username) => {
  const response = await fetch(`https://brick.fly.dev/api/bricks/${username}`)
  const data = await response.json()
  return data
}

const calculateBricks = async () => {
  const username = document.getElementById("username").value

  if (username === "") {
    alert("enter username first idiot")
  }

  const brickCountEle = document.getElementById("brickCount")
  const brickStatsEle = document.getElementById("brickStats")

  brickCountEle.innerHTML = "Loading...."
  brickStatsEle.innerHTML = ""

  try {
    const stats = await fetchEnPassantStats(username)
    const bricks = stats["legal_en_passants"] - stats["en_passants_taken"]

    if (stats["games_analyzed"] === 0) {
      brickCountEle.innerText = "no games found"
    } else {
      brickCountEle.innerText = bricks
    }
    brickStatsEle.innerText = `
    Games Analysed: ${stats["games_analyzed"]}
    Total Chances to Capture En Passant: ${stats["legal_en_passants"]}
    En Passants Captured: ${stats["en_passants_taken"]}
    Errors Analyzing Games: ${stats["errors"]}`
  } catch (e) {
    console.error(e)
    brickCountEle.innerHTML = "Error!!!"
  }
}
