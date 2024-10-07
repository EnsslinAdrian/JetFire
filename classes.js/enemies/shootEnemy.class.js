class ShootEnemy extends MovableObject {
    world;
    color = 1 + Math.floor(Math.random() * 2);


    IMAGES_SHOOTENEMY = [
        `img/Enemy Sprite/0${this.color}/1.png`,
        `img/Enemy Sprite/0${this.color}/2.png`,
        `img/Enemy Sprite/0${this.color}/3.png`,
        `img/Enemy Sprite/0${this.color}/4.png`,
        `img/Enemy Sprite/0${this.color}/5.png`,
        `img/Enemy Sprite/0${this.color}/6.png`,
        `img/Enemy Sprite/0${this.color}/7.png`,
        `img/Enemy Sprite/0${this.color}/8.png`,
    ];

    IMAGES_SHOOTENEMY_DEAD = [
        'img/Collision FX/01/1.png',
        'img/Collision FX/01/2.png',
        'img/Collision FX/01/3.png',
        'img/Collision FX/01/4.png',
        'img/Collision FX/01/5.png',
        'img/Collision FX/01/6.png',
        'img/Collision FX/01/7.png',
        'img/Collision FX/01/8.png',
    ];

    constructor(x) {
        super().loadImage(this.IMAGES_SHOOTENEMY[0]);
        this.loadImagesArray(this.IMAGES_SHOOTENEMY);
        this.loadImagesArray(this.IMAGES_SHOOTENEMY_DEAD);
        this.x = x;
        this.y = 0;
        this.width = 100;
        this.height = 100;

        this.frameX = 40;
        this.frameY = 20;
        this.frameWidth = 30;
        this.frameHeight = 55;

        this.otherDirection = true;
        this.projectileEnemy = [];
        this.shootCooldown = 0;

        this.animate();
    }

    /**
     * Manages the enemy's animation and movement. 
     * Updates movement and shooting animations, handles death process.
     */
    animate() {
        this.moveObjectsDirection(this.enemyTime);
        this.shootAnimation();
        const shootEnemyInterval = setInterval(() => {
            if (this.life <= 0 && !this.isDying) {
                this.isDying = true;
                this.startDeathProcess(this.world.level.shootEnemy);
                clearInterval(shootEnemyInterval);
                clearInterval(this.moveIntervalRight);
                clearInterval(this.moveIntervalLeft);

            } else {
                this.animateImage(this.IMAGES_SHOOTENEMY);
            }
        }, 100);
    }

    /**
     * Starts the death animation and removes the enemy from the provided array after a delay.
     * @param {Array} array - The array from which the enemy should be removed.
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
     * Plays the death animation for the enemy by cycling through the images.
     * 
     * The method updates the image at regular intervals to show the death animation.
     * The animation stops when all frames have been shown.
     */
    playDeathAnimationEnemy() {
        let animationIndex = 0;
        const animationInterval = setInterval(() => {
            if (animationIndex < this.IMAGES_SHOOTENEMY_DEAD.length) {
                this.loadImage(this.IMAGES_SHOOTENEMY_DEAD[animationIndex]);
                animationIndex++;
            } else {
                clearInterval(animationInterval);
            }
        }, 100);
    }

    /**
     * Triggers shooting if the character is within range, facing the enemy, and at a similar height.
     */
    shootAnimation() {
        setInterval(() => {
            let charPos = this.world.character;
            const isInRange = Math.abs(charPos.x - this.x) < 500;
            const isFacingCharacter = (charPos.x < this.x && !this.otherDirection) || (charPos.x > this.x && this.otherDirection);


            const isAtSameHeight = Math.abs(charPos.y - this.y) <= 50;

            if (isInRange && isFacingCharacter && isAtSameHeight) {
                this.newShoot();
            }
        }, 700);
    }

    /**
     * Erzeugt ein neues Projektil für den Gegner und fügt es zur Liste der Projektile hinzu.
     * Das Projektil wird nach 2000 Millisekunden (2 Sekunden) aus der Liste entfernt.
     */
    newShoot() {
        let newProjectileEnemy = new ProjectileEnemy(this.x + 10, this.y + 38, this.otherDirection);
        this.projectileEnemy.push(newProjectileEnemy);

        setTimeout(() => {
            const index = this.projectileEnemy.indexOf(newProjectileEnemy);
            if (index > -1) {
                this.projectileEnemy.splice(index, 1);
            }
        }, 2000);
    }

}