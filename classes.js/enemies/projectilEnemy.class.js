class ProjectileEnemy extends MovableObject {

    constructor(x, y, otherDirection) {
        super().loadImage('img/Projectile/2.png');
        this.width = 80;
        this.height = 17;
        this.x = x;
        this.y = y;
        this.frameX = 50;
        this.frameY = 0;
        this.frameWidth = 30;
        this.frameHeight = 15;
        this.otherDirection = !otherDirection;
        this.animate();
    }
/**
 * Animates the object's horizontal movement based on its direction.
 * 
 * This method sets up an interval that updates the object's `x` position every frame (at 60 frames per second).
 * If `otherDirection` is true, the object moves left; otherwise, it moves right.
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