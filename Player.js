export default class Player { //input checking
    rightPressed = false;
    leftPressed = false;
    shootPressed = false;
  
    constructor(canvas, velocity, bulletController) {// constructor for player game object
      this.canvas = canvas; //needs target canvas, speeed, and bullet controller
      this.velocity = velocity;
      this.bulletController = bulletController;
  
      this.x = this.canvas.width / 2; //to make player img scale
      this.y = this.canvas.height - 75;
      this.width = 50;
      this.height = 48;
      this.image = new Image();
      this.image.src = "/images/Good-Ninja.png";
  
      document.addEventListener("keydown", this.keydown);
      document.addEventListener("keyup", this.keyup); //input reading
    }
  
    draw(ctx) {
      if (this.shootPressed) { //drwaing method, for bullet shooting
        this.bulletController.shoot(this.x + this.width / 2, this.y, 4, 10);
      }
      this.move();
      this.collideWithWalls(); //
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  
    collideWithWalls() {
      //left
      if (this.x < 0) {
        this.x = 0;
      }
  
      //right
      if (this.x > this.canvas.width - this.width) {
        this.x = this.canvas.width - this.width;
      }
    }
  
    move() {
      if (this.rightPressed) {
        this.x += this.velocity;
      } else if (this.leftPressed) {
        this.x += -this.velocity;
      }
    }
  
    keydown = (event) => {
      if (event.code == "ArrowRight") {
        this.rightPressed = true;
      }
      if (event.code == "ArrowLeft") {
        this.leftPressed = true;
      }
      if (event.code == "Space") {
        this.shootPressed = true;
      }
    };
  
    keyup = (event) => {
      if (event.code == "ArrowRight") {
        this.rightPressed = false;
      }
      if (event.code == "ArrowLeft") {
        this.leftPressed = false;
      }
      if (event.code == "Space") {
        this.shootPressed = false;
      }
    }
}