export default class Bullet { 
    constructor(canvas, x, y, velocity, bulletColor) {  //constructor for bullet object
      this.canvas = canvas;  //object has canvas plane, xy coordinates, velocity, and bullet color (unused as we used a sprite instead)
      this.x = x;
      this.y = y;
      this.velocity = velocity;
      this.bulletColor = bulletColor;
      this.image = new Image();
      this.image.src = "https://i.postimg.cc/pr3ZSYwc/Ninja-Star.png";
      this.width = 20;
      this.height = 20;
    }
  
    draw(ctx) { //drawing function
      this.y -= this.velocity;
      ctx.fillStyle = this.bulletColor; //unused as we know use drawimage
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height); //was originally drawRect,
      
    }
  
    collideWith(sprite) { //collision method
      if ( //basically check positions and width
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