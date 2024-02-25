import EnemyController from "./EnemyController.js";
import Player from "./Player.js";
import BulletController from "./BulletController.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = "https://th.bing.com/th/id/R.4482fb86e7be2fa2ac8fb33f0a4fc720?rik=0sNeL6n1H6VZLA&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fm%2fS%2fm%2fC%2fX%2fQ%2fblack-square-rounded-corners-hi.png&ehk=6c5VW4fW5PvLmCPo6j0F4UJ26Mijer6sXIfD8zlXGVM%3d&risl=&pid=ImgRaw&r=0";

const playerBulletController = new BulletController(canvas, 10, "red", true);
const enemyBulletController = new BulletController(canvas, 4, "white", false);
const enemyController = new EnemyController(
  canvas,
  enemyBulletController,
  playerBulletController
);
const player = new Player(canvas, 3, playerBulletController);

let isGameOver = false;
let didWin = false;

function game() {
  checkGameOver();
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  displayGameOver();
  if (!isGameOver) {
    enemyController.draw(ctx);
    player.draw(ctx);
    playerBulletController.draw(ctx);
    enemyBulletController.draw(ctx);
  }
}

function displayGameOver() {
  if (isGameOver) {
    let text = didWin ? "You Win" : "Game Over";
    let textOffset = didWin ? 3.5 : 5;

    ctx.fillStyle = "white";
    ctx.font = "70px Arial";
    ctx.fillText(text, canvas.width / textOffset, canvas.height / 2);
  }
}
var lives = 3;
var wavecount = 1;
function checkGameOver() {
  if (isGameOver) {
    return;
  }

  if (enemyBulletController.collideWith(player)) {
    lives -= 1;
    if (lives === 0) {
    isGameOver = true;
    }
  }

  if (enemyController.collideWith(player)) {
    isGameOver = true;
  }

  if (enemyController.enemyRows.length === 0) {
    didWin = true;
    isGameOver = true;
  }
  updateLivesCount()
}
function updateLivesCount() {
  const livesCountSpan = document.getElementById('lives-count');
  
  livesCountSpan.textContent = lives.toString();
}
function updatewaveCount() {
  const waveCountSpan = document.getElementById('wave-count');
  
  waveCountSpan.textContent = wavecount.toString();
}
setInterval(game, 1000/60);