class FloatingPlatform extends MovableObject {

    constructor(paht, x, y) {
        super().loadImage(paht);
        this.x = x;
        this.y = y;
        this.width = 120;
        this.height = 50;
        this.frameX = 0;
        this.frameY = 0;
        this.frameWidth = 120;
        this.frameHeight = 50;

        this.direction = true;
    }
}

class MovablePlatform extends MovableObject {
    world;
    direction = true; 

    constructor(path, x, y, time) {
        super().loadImage(path);
        this.x = x;
        this.y = y;
        this.time = time;
        this.width = 150;
        this.height = 50;
        this.animate();
    }
    
/**
 * Animates the object's horizontal movement and periodically reverses its direction.
 * 
 * This method sets up two intervals:
 * 1. The first interval updates the object's `x` position by moving it either left or right
 *    at 60 frames per second, depending on the current `direction`.
 * 2. The second interval toggles the `direction` after a specified amount of time (`this.time`),
 *    causing the object to reverse its movement direction.
 */
    animate() {
        setInterval(() => {
            if (this.direction) {
                this.x += 1;
            } else {
                this.x -= 1;
            }
        }, 1000 / 60);

        setInterval(() => {
            this.direction = !this.direction;
        }, this.time);
    }
}

class MovablePlatformTopButtom extends MovableObject {
    world;
    direction = true; 

    constructor(path, x, y, time) {
        super().loadImage(path);
        this.x = x;
        this.y = y;
        this.time = time;
        this.width = 150;
        this.height = 50;

        this.frameX = 0;
        this.frameY = 0;
        this.frameWidth = this.width;
        this.frameHeight = this.height;
        this.animate();
    }
    
    animate() {
        setInterval(() => {
            if (this.direction) {
                this.y += 1;
            } else {
                this.y -= 1;
            }
        }, 1000 / 60);

        setInterval(() => {
            this.direction = !this.direction;
        }, this.time);
    }
}

class FallingPlatforms extends MovableObject {
    
    constructor(path, x, y, id) {
        super().loadImage(path);
        this.id = id;
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 60;

        this.frameX = 0;
        this.frameY = 0;
        this.frameWidth = this.width;
        this.frameHeight = this.height;
    }
}