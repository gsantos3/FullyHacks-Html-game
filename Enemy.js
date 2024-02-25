export default class Enemy { //enemy constructor
    constructor(x, y, imageNumber) {
      this.x = x;  //has xy position and image holder
      this.y = y;
      this.width = 44;
      this.height = 32;
  
      this.image = new Image();
      
      this.image.src = `/images/Bad-Ninja${imageNumber}.png`; //imagenumber for different sprite based on matrix
    }
  
    draw(ctx) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height); //draw method
    }
  
    move(xVelocity, yVelocity) { //moving
      this.x += xVelocity;
      this.y += yVelocity;
    }
  
    collideWith(sprite) { //collsion, most likely for bullet
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