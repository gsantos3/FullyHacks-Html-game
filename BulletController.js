import Bullet from "./Bullet.js";

export default class BulletController { //more logic for controller
  bullets = []; //array
  timeTillNextBulletAllowed = 0; //var caps bullet shooting

  constructor(canvas, maxBulletsAtATime, bulletColor) { // constructor for bullet shooting behavior
    this.canvas = canvas;
    this.maxBulletsAtATime = maxBulletsAtATime;
    this.bulletColor = bulletColor;
    
    
  }

  draw(ctx) { //bullet drawing 
    this.bullets = this.bullets.filter(
      (bullet) => bullet.y + bullet.width > 0 && bullet.y <= this.canvas.height
    );

    this.bullets.forEach((bullet) => bullet.draw(ctx)); //for each bullet, draw....
    if (this.timeTillNextBulletAllowed > 0) { //fire cap for bullet shooting
      this.timeTillNextBulletAllowed--;  ///reduce this counter
    }
  }

  collideWith(sprite) { //collision method
    const bulletThatHitSpriteIndex = this.bullets.findIndex((bullet) =>
      bullet.collideWith(sprite)
    );

    if (bulletThatHitSpriteIndex >= 0) {
      this.bullets.splice(bulletThatHitSpriteIndex, 1);
      return true;
    }

    return false;
  }

  shoot(x, y, velocity, timeTillNextBulletAllowed = 0) { //shooting 
    if (
      this.timeTillNextBulletAllowed <= 0 && //fire cap behavior, 
      this.bullets.length < this.maxBulletsAtATime //if maxbullet cap is allowed,  you can fire
    ) {
      const bullet = new Bullet(this.canvas, x, y, velocity, this.bulletColor);
      this.bullets.push(bullet);
      
      this.timeTillNextBulletAllowed = timeTillNextBulletAllowed;
    }
  }
}