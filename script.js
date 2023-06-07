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
  brickCountEle.innerHTML = "Loading..."

  const stats = await fetchEnPassantStats(username)
  const bricks = stats["legal_en_passants"] - stats["en_passants_taken"]
  brickCountEle.innerText = bricks
}
