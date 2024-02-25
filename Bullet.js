export default class Bullet {
    constructor(canvas, x, y, velocity, bulletColor) {
      this.canvas = canvas;
      this.x = x;
      this.y = y;
      this.velocity = velocity;
      this.bulletColor = bulletColor;
      this.image = new Image();
      this.image.src = "https://i.postimg.cc/pr3ZSYwc/Ninja-Star.png";
      this.width = 20;
      this.height = 20;
    }
  
    draw(ctx) {
      this.y -= this.velocity;
      ctx.fillStyle = this.bulletColor;
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      
    }
  
    collideWith(sprite) {
      if (
        this.x + this.width > sprite.x &&
        this.x < sprite.x + sprite.width &&
        this.y + this.height > sprite.y &&
        this.y < sprite.y + sprite.height
      ) {
        return true;
      } else {
        return false;
      }
    }
  }