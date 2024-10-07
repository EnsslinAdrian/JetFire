class FlyEnemy extends MovableObject {
    world;
    color = 8 + Math.floor(Math.random() * 2);
    SOUND_EXPLOSION = new Audio('audio/explosion.mp3');

    IMAGES_FLYENEMY = [
        `img/Enemy Sprite/0${this.color}/1.png`,
        `img/Enemy Sprite/0${this.color}/2.png`,
        `img/Enemy Sprite/0${this.color}/3.png`,
        `img/Enemy Sprite/0${this.color}/4.png`,
    ];

    IMAGES_FLYENEMY_DEAD = [
        'img/Collision FX/03/1.png',
        'img/Collision FX/03/2.png',
        'img/Collision FX/03/3.png',
        'img/Collision FX/03/4.png',
        'img/Collision FX/03/5.png',
        'img/Collision FX/03/6.png',
        'img/Collision FX/03/7.png',
    ];

    flyEnemyInterval;
    shootAnimationInterval;


    constructor(x, y) {
        super().loadImage(this.IMAGES_FLYENEMY[0]);
        this.loadImagesArray(this.IMAGES_FLYENEMY);
        this.loadImagesArray(this.IMAGES_FLYENEMY_DEAD);
        this.x = x;
        this.y = y;
        this.width = 150;
        this.height = 100;

        this.frameX = 30;
        this.frameY = 35;
        this.frameWidth = 30;
        this.frameHeight = 30;

        this.otherDirection = true;
        this.projectileEnemy = [];
        this.shootCooldown = 0;
        this.animate();
    }

    /**
     * Stops all ongoing animations related to the flying enemy.
     * Clears intervals for fly enemy movement and shooting animations.
     */
    stoppAllFlyEnemyAnimations() {
        clearInterval(this.flyEnemyInterval);
        clearInterval(this.shootAnimationInterval);
    }

    /**
     * Controls all animation and movement updates for the game.
     * - Moves objects according to their direction and timing.
     * - Checks and updates the movement direction of enemies.
     * - Updates the character's animations based on current actions.
     * - Handles shooting animations and updates.
     */
    animate() {
        this.moveObjectsDirection(this.enemyTime);
        this.checkMovingDirection();
        this.characterAnimation();
        this.shootAnimation();
    }

    /**
     * Manages the animation and behavior of the character and fly enemies.
     * - Checks if the character's life is <= 0 and initiates the death process if so.
     * - Plays the explosion sound and stops all related intervals.
     * - If the character is not dying, updates the animation for the fly enemy.
     */
    characterAnimation() {
        this.flyEnemyInterval = setInterval(() => {
            if (this.life <= 0 && !this.isDying) {
                this.isDying = true;
                this.startDeathProcess(this.world.level.flyEnemy);
                this.SOUND_EXPLOSION.play();
                clearInterval(this.flyEnemyInterval);
                clearInterval(this.moveIntervalRight);
                clearInterval(this.moveIntervalLeft);

            } else {
                this.animateImage(this.IMAGES_FLYENEMY)
            }

        }, 100);
    }

    /**
     * Initiates the death process for the character or enemy.
     * - Plays the death animation.
     * - Removes the character or enemy from the specified array after a delay.
     *
     * @param {Array} array - The array from which the character or enemy should be removed.
     */
    startDeathProcess(array) {
        this.playDeathAnimationEnemy();
        setTimeout(() => {
            const index = array.indexOf(this);
            if (index > -1) {
                array.splice(index, 1);
            }
        }, 800);
    }

    /**
     * Plays the death animation for the enemy.
     * - Iterates through a series of death images to create an animation effect.
     */
    playDeathAnimationEnemy() {
        let animationIndex = 0;
        const animationInterval = setInterval(() => {
            if (animationIndex < this.IMAGES_FLYENEMY_DEAD.length) {
                this.loadImage(this.IMAGES_FLYENEMY_DEAD[animationIndex]);
                animationIndex++;
            } else {
                clearInterval(animationInterval);
            }
        }, 100);
    }

    /**
     * Handles the shooting animation logic for the enemy.
     * - Shoots if the character is within range and in the correct direction.
     */
    shootAnimation() {
        this.shootAnimationInterval = setInterval(() => {
            let charPos = this.world.character;
            const isInRange = Math.abs(charPos.x - this.x) < 500;
            const isFacingCharacter = (charPos.x < this.x && !this.otherDirection) || (charPos.x > this.x && this.otherDirection);
            if (charPos.y < this.y && isInRange && isFacingCharacter) {
                this.newShoot();
            }
        }, 700);
    }

    /**
     * Creates and launches a new projectile.
     */
    newShoot() {
        let newProjectileEnemy = new ProjectileEnemy(this.x + 50, this.y + 40, this.otherDirection);
        this.projectileEnemy.push(newProjectileEnemy);

        setTimeout(() => {
            const index = this.projectileEnemy.indexOf(newProjectileEnemy);
            if (index > -1) {
                this.projectileEnemy.splice(index, 1);
            }
        }, 2000);
    }

}