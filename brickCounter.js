window.onload = () => {}

class BadRequestError extends Error {
  constructor(message) {
    super(message)
  }
}

const fetchEnPassantStats = async (username) => {
  const response = await fetch(`https://brick.fly.dev/api/bricks/${username}`)
  const data = await response.json()
  if (response.status == 400) {
    throw new BadRequestError(data.message)
  }
  return data
}

const calculateBricks = async () => {
  const username = document.getElementById("username").value

  if (username === "") {
    alert("enter username first idiot")
  }

  const brickCountEle = document.getElementById("brickCount")
  const brickStatsEle = document.getElementById("brickStats")

  brickCountEle.innerHTML = "Loading..."
  brickStatsEle.innerHTML = ""

  try {
    const stats = await fetchEnPassantStats(username)
    const bricks = stats["legal_en_passants"] - stats["en_passants_taken"]

    brickCountEle.innerText = bricks
    brickStatsEle.innerText = `
    Games Analysed: ${stats["games_analyzed_successfully"]}
    Total Chances to Capture En Passant: ${stats["legal_en_passants"]}
    En Passants Captured: ${stats["en_passants_taken"]}`
  } catch (e) {
    console.error(e)
    if (e instanceof BadRequestError) {
      brickCountEle.innerHTML = "Username not found"
    } else {
      brickCountEle.innerHTML = "Error!!!"
    }
  }
}
