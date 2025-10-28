// 🎵 Automatically play music on first click anywhere
document.addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  music.volume = 1.0;
  music.currentTime = 0;
  music.play().then(() => {
    console.log("Spooky song started!");
  }).catch((err) => {
    console.error("Playback failed:", err);
  });
}, { once: true });

// 🎃 Tic-Tac-Toe Game
const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetButton = document.getElementById("reset");
let currentPlayer = "🎃";
let gameActive = true;
let boardState = ["", "", "", "", "", "", "", "", ""];

function handleClick(e) {
  const index = [...cells].indexOf(e.target);
  if (boardState[index] || !gameActive) return;
  boardState[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  if (checkWin()) {
    statusText.textContent = `${currentPlayer === "🎃" ? "Pumpkins" : "Ghosts"} win!`;
    gameActive = false;
  } else if (!boardState.includes("")) {
    statusText.textContent = "It’s a draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "🎃" ? "👻" : "🎃";
  }
}

function checkWin() {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  return winPatterns.some(pattern =>
    pattern.every(i => boardState[i] === currentPlayer)
  );
}

function resetGame() {
  boardState = ["","","","","","","","",""];
  gameActive = true;
  currentPlayer = "🎃";
  statusText.textContent = "";
  cells.forEach(cell => (cell.textContent = ""));
}

cells.forEach(cell => cell.addEventListener("click", handleClick));
resetButton.addEventListener("click", resetGame);

// 👻 Door click reveals the game ONLY (no music)
const door = document.getElementById("door");
const gameSection = document.getElementById("game");

door.addEventListener("click", () => {
  gameSection.style.display = "block";
  window.scrollTo({ top: gameSection.offsetTop, behavior: "smooth" });
});

// ✨ Twinkles
function createTwinkles(count = 25) {
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.classList.add("twinkle");
    if (Math.random() > 0.5) star.classList.add("orange"); // mix of white & orange
    star.style.left = Math.random() * 100 + "vw";
    star.style.bottom = Math.random() * 30 + "vh";
    star.style.animationDelay = (Math.random() * 5) + "s";
    star.style.animationDuration = (3 + Math.random() * 4) + "s";
    document.body.appendChild(star);
  }
}

createTwinkles();
