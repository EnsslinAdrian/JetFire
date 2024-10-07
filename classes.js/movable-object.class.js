class MovableObject extends DrawableObject{
    speedFlyEnemy = 2;
    direction = 1;
    otherDirection = false;
    speedY = 0;
    accelartion = 2.5;
    enemyTime = 5000 + Math.random() * 5000
    enemyTimeUpAndDown = 3000 + Math.random() * 5000;

    checkSmoke = false;
    checkProjectile = false;
    cooldown;

    moveIntervalRight;
    moveIntervalLeft;

    swordX;
    swordY;
    swordWidht;
    swordHEight;

/**
 * Animates an image by cycling through a series of images in a loop.
 * @param {Array} images - An array of image paths or keys representing the animation frames.
 */
    animateImage(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imgCache[path];
        this.currentImage++;
    }

/**
 * Plays a death animation by cycling through a series of images.
 * @param {Array} images - An array of image paths or keys representing the death animation frames.
 */
    playDeathAnimation(images) {
        let i = 0;
        const interval = setInterval(() => {
            this.img = this.imgCache[images[i]];
            i++;
            if (i >= images.length) {
                clearInterval(interval);
            }
        }, 200);
    }

/**
 * Applies gravity to the object, adjusting its vertical position and speed.
 * 
 * This method sets up an interval that continuously updates the object's position (`y`) and 
 * vertical speed (`speedY`) to simulate gravity. If the object is above the ground or still 
 * moving upwards, it moves downwards with decreasing speed. If the object reaches the ground, 
 * its speed is set to zero and its position is adjusted to rest on the ground.
 */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.accelartion;
            } else {
                this.speedY = 0;
                this.y = this.world.getGroundHeight(this.x + this.frameX) - this.frameHeight;
            }
        }, 1000 / 25);
    }

/**
 * Checks if the object is above the ground based on the ground height at its current position.
 * @returns {boolean} True if the object is above the ground, otherwise false.
 */
    isAboveGround() {
        const groundHeight = this.world.getGroundHeight(this.x + this.frameX);
        return this.y + this.frameHeight < groundHeight;
    }

/**
 * Applies gravity to the object when it is above the straight floor or moving upwards.
 * 
 * This method sets up an interval that continuously adjusts the object's vertical position (`y`) 
 * and vertical speed (`speedY`) to simulate gravity. The object's `y` position decreases (moving down) 
 * and `speedY` is reduced by `accelartion` until the object is on the ground.
 */
    applyGravityStraightFloor() {
        setInterval(() => {
            if (this.isAboveGroundStraightFloor() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.accelartion; 
            }
        }, 1000 / 25);
    }

 /**
 * Checks if the object is above a straight floor level.
 * @returns {boolean} True if the object is above the ground, otherwise false.
 */   
    isAboveGroundStraightFloor() {
        return this.y < 239;
    }

    /**
 * Applies gravity to the object when it is above the straight floor or moving upwards.
 * 
 * This method sets up an interval that continuously adjusts the object's vertical position (`y`) 
 * and vertical speed (`speedY`) to simulate gravity. The object's `y` position decreases (moving down) 
 * and `speedY` is reduced by `accelartion` until the object is on the ground.
 */
    applyGravityStraightFloorPlaforms() {
        setInterval(() => {
            if (this.isAboveGroundStraightFloorPlaforms() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.accelartion; 
            }
        }, 1000 / 25);
    }

 /**
 * Checks if the object is above a straight floor level.
 * @returns {boolean} True if the object is above the ground, otherwise false.
 */   
 isAboveGroundStraightFloorPlaforms() {
        return this.y < 600;
    }
/**
 * Initiates the movement of the object in both right and alternating directions.
 * @param {number} time - The interval duration in milliseconds for toggling the direction.
 */
    moveObjectsDirection(time) {
        this.moveObjectsRight();
        this.moveObjectsLeft(time);
    }

/**
 * Moves the object to the right at a specified speed.
 */
    moveObjectsRight() {
      this.moveIntervalRight =  setInterval(() => {
            this.x += this.speedFlyEnemy * this.direction;
        }, 1000 / 60);
    }
/**
 * Periodically changes the direction of the object's movement to the left.
 * @param {number} time - The interval duration in milliseconds for toggling the direction.
 */
    moveObjectsLeft(time) {
      this.moveIntervalLeft = setInterval(() => {
            this.direction *= -1;
            this.otherDirection = !this.otherDirection;
        }, time);
    }

/**
 * Periodically checks and toggles the moving direction of the object.
 */
    checkMovingDirection() {
        setInterval(() => {
            if (this.movingUp) {
                this.moveUp();
            } else {
                this.moveDown();
            }
            this.movingUp = !this.movingUp;
        }, this.enemyTimeUpAndDown);
    }
/**
 * Moves the object upward at a specified speed until it reaches a certain y-coordinate.
 */
    moveUp() {
        const moveInterval = setInterval(() => {
            this.y -= this.speedFlyEnemy;
            if (this.y <= 40) {
                clearInterval(moveInterval);
            }
        }, 1000 / 60);
    }

/**
 * Moves the object downward at a specified speed until it reaches a certain y-coordinate.
 */
    moveDown() {
        const moveInterval = setInterval(() => {
            this.y += this.speedFlyEnemy;
            if (this.y >= 200) {
                clearInterval(moveInterval);
            }
        }, 1000 / 60);
    }

/**
 * Checks if the character is colliding with another object.
 * 
 * This method calculates the bounding box of the given object and the character,
 * and checks if they intersect, indicating a collision.
 * 
 * @param {Object} obj - The object to check for a collision with the character.
 * @returns {boolean} Returns true if the character is colliding with the object, otherwise false.
 */    
    isColliding(obj) {
        let enemyLeft = obj.x + obj.frameX;
        let enemyRight = enemyLeft + obj.frameWidth;
        let enemyTop = obj.y + obj.frameY;
        let enemyBottom = enemyTop + obj.frameHeight;
    
        let characterLeft = this.x + this.frameX;
        let characterRight = characterLeft + this.frameWidth;
        let characterTop = this.y + this.frameY;
        let characterBottom = characterTop + this.frameHeight;
    
        if (characterRight > enemyLeft && 
            characterLeft < enemyRight && 
            characterBottom > enemyTop && 
            characterTop < enemyBottom) {
            return true; 
        } 
    }

/**
 * Checks if the character is colliding with the weapon of an enemy.
 * 
 * This method calculates the bounding box of the enemy's weapon and the character, 
 * and checks if they intersect, indicating a collision.
 * 
 * @param {Object} obj - The enemy object with the weapon to check for a collision.
 * @returns {boolean} Returns true if the character is colliding with the enemy's weapon, otherwise false.
 */
    isCollidingWeapon(obj) {
        let enemyLeft = obj.x + obj.swordX;
        let enemyRight = enemyLeft + obj.swordWidht;
        let enemyTop = obj.y + obj.swordY;
        let enemyBottom = enemyTop + obj.swordHEight;
    
        let characterLeft = this.x + this.frameX;
        let characterRight = characterLeft + this.frameWidth;
        let characterTop = this.y + this.frameY;
        let characterBottom = characterTop + this.frameHeight;
    
        if (characterRight > enemyLeft && 
            characterLeft < enemyRight && 
            characterBottom > enemyTop && 
            characterTop < enemyBottom) {
            return true; 
        } 
    }

    isCollidingLeft(obj) {
        let enemyLeft = obj.x + obj.frameX;
        let characterRight = this.x + this.frameX + this.frameWidth;
    
        // Prüft, ob die rechte Seite des Charakters die linke Seite des Objekts berührt
        if (characterRight > enemyLeft && this.x + this.frameX < enemyLeft) {
            // Zusätzliche Überprüfung auf vertikale Überlappung
            if (this.y + this.frameY < obj.y + obj.frameY + obj.frameHeight &&
                this.y + this.frameY + this.frameHeight > obj.y + obj.frameY) {
                return true;
            }
        }
        return false;
    }

    isCollidingRight(obj) {
        let enemyRight = obj.x + obj.frameX + obj.frameWidth;
        let characterLeft = this.x + this.frameX;
    
        // Prüft, ob die linke Seite des Charakters die rechte Seite des Objekts berührt
        if (characterLeft < enemyRight && characterLeft > obj.x + obj.frameX) {
            // Zusätzliche Überprüfung auf vertikale Überlappung
            if (this.y + this.frameY < obj.y + obj.frameY + obj.frameHeight &&
                this.y + this.frameY + this.frameHeight > obj.y + obj.frameY) {
                return true;
            }
        }
        return false;
    }

    isCollidingBottom(obj) {
        let characterBottom = this.y + this.frameY + this.frameHeight;
        let enemyTop = obj.y + obj.frameY;
    
        // Prüft, ob die untere Seite des Charakters die obere Seite des Objekts berührt
        if (characterBottom > enemyTop && characterBottom < obj.y + obj.frameY + obj.frameHeight) {
            // Zusätzliche Überprüfung auf horizontale Überlappung
            if (this.x + this.frameX < obj.x + obj.frameX + obj.frameWidth &&
                this.x + this.frameX + this.frameWidth > obj.x + obj.frameX) {
                return true;
            }
        }
        return false;
    }

}