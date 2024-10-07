class Projectile extends MovableObject {

    constructor(x, y, otherDirection) {
        super().loadImage('img/Projectile/3.png');
        this.width = 80;
        this.height = 17;
        this.x = x;
        this.y = y;
        this.frameX = 50;
        this.frameY = 0;
        this.frameWidth = 30;
        this.frameHeight = 15;
        this.otherDirection = otherDirection;
        this.animate();
    }
/**
 * Animates the object's horizontal movement at 60 frames per second.
 * 
 * This method sets up an interval that continuously updates the object's `x` position.
 * The object moves left if `otherDirection` is true, and right if `otherDirection` is false.
 */
    animate() {
        setInterval(() => {
            if (this.otherDirection) {
                this.x -= 10;
            } else {
                this.x += 10;
            }
        }, 1000 / 60);
    }


}