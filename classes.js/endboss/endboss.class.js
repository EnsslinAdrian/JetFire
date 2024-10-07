class Endboss extends MovableObject {
    world;
    ENDBOSS_IDLE = ENDBOSS_IMAGES.ENDBOSS_IDLE;
    ENDBOSS_WALK = ENDBOSS_IMAGES.ENDBOSS_WALK;
    ENDBOSS_ATTACK = ENDBOSS_IMAGES.ENDBOSS_ATTACK;
    ENDBOSS_HURT = ENDBOSS_IMAGES.ENDBOSS_HURT;
    ENDBOSS_DEAD = ENDBOSS_IMAGES.ENDBOSS_DEAD;

    ENDBOSS_KEULE = ENDBOSS_WEAPON_POINTS.ENDBOSS_KEULE;

    walk = false;
    attack = false;
    startEndbos = false;
    swordPositionCurrent = 0;
    endbossWall = true

    endbossAnimationInterval;
    endbossJumpAnimation;
    endbossMoveAnimation;
    endbossSwordAnimation;

    constructor(x, y, width, height, frameX, frameY, frameWidth, frameHeight, swordX, swordY, swordWidht, swordHEight, life) {
        super().loadImage(this.ENDBOSS_IDLE[0]);
        this.loadImagesArray(this.ENDBOSS_IDLE);
        this.loadImagesArray(this.ENDBOSS_ATTACK);
        this.loadImagesArray(this.ENDBOSS_HURT);
        this.loadImagesArray(this.ENDBOSS_WALK);
        this.loadImagesArray(this.ENDBOSS_DEAD);

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.frameX = frameX;
        this.frameY = frameY;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;

        this.swordX = swordX;
        this.swordY = swordY;
        this.swordWidht = swordWidht;
        this.swordHEight = swordHEight;

        this.life = life;

        this.applyGravityStraightFloor();
        this.checkCharcaterPosition();
        this.animate();
        this.checkSwordPosition();
    }
/**
 * Periodically updates the sword's position based on the attack state.
 * @param {Array} ENDBOSS_KEULE - An array of objects representing the sword's animation frames and positions.
 */
    checkSwordPosition() {
        this.endbossSwordAnimation = setInterval(() => {
            if (this.attack) {
                const sword = this.ENDBOSS_KEULE[this.swordPositionCurrent];
                this.swordX = sword['swordX'];
                this.swordY = sword['swordY'];

                this.swordPositionCurrent++;
                if (this.swordPositionCurrent >= this.ENDBOSS_KEULE.length) {
                    this.swordPositionCurrent = 0;
                }
            } else {
                this.swordX = 175;
                this.swordY = 135;
            }
        }, 40);
    }
/**
 * Periodically checks the character's position to trigger the start of the end boss sequence.
 */
    checkCharcaterPosition() {
        setInterval(() => {
            if (this.world.character.x > 5700) {
                this.startEndbos = true;
            }
        }, 130);
    }
/**
 * Initiates the end boss's animations, including regular, jump, and movement animations.
 */
    animate() {
        this.endbossAnimationInterval = setInterval(() => { this.endbossAnimation(); }, 40);
        this.endbossJumpAnimation = setInterval(() => { this.endbossJump(); }, 1000 / 60);
        this.endbossMoveAnimation = setInterval(() => { this.endbossMove(); }, 1000 / 60);
    }

/**
 * Controls the end boss's animation state based on its current condition.
 */
    endbossAnimation() {
        if (this.life <= 0 && !this.isDying) {
            this.isDying = true;
            this.startDeathProcess(this.world.level.endboss);
            this.clearIntervalEndboss();
            winGame();
        } else if (this.walk) {
            this.animateImage(this.ENDBOSS_WALK);
        } else if (this.attack) {
            this.animateImage(this.ENDBOSS_ATTACK);
        } else {
            this.animateImage(this.ENDBOSS_IDLE)
        }
    }
/**
 * Clears all intervals related to the end boss's animations.
 */
    clearIntervalEndboss() {
        clearInterval(this.endbossAnimationInterval);
        clearInterval(this.endbossJumpAnimation);
        clearInterval(this.endbossMoveAnimation);
        clearInterval(this.endbossSwordAnimation);
    }
/**
 * Triggers a jump for the end boss based on a random chance.
 */
    endbossJump() {
        let randomChance = Math.random();
        if (randomChance < 0.01 && !this.isAboveGroundStraightFloor()) {
            this.speedY = 20;
        }
    }
    
/**
 * Controls the movement and actions of the end boss based on the character's position.
 * 
 * This method checks the relative positions of the character and the end boss to determine the end boss's actions:
 * - If the character is far left and the end boss hasn't reached its starting position, the end boss moves right.
 * - If the character is to the left of the end boss and within a certain distance, the end boss moves left.
 * - If the character is within a certain tolerance range, the end boss initiates an attack.
 * - If the character is to the right of the end boss, the end boss moves right.
 * 
 * The movement is conditional on whether the end boss encounter has started (`startEndbos`).
 */
    endbossMove() {
        let character = Math.floor(this.world.character.x) + Math.floor(this.world.character.frameX);
        let endboss = Math.floor(this.x) + Math.floor(this.frameX);
        let tolerance = 100;
        if (this.world.character.x < 4500 && this.x < 6500 && this.startEndbos) {
            this.endbossMoveRigtht();
        } else {
            if (character + 100 < endboss && this.startEndbos && this.endbossWall) {
                this.enbossMoveLeft();
            } else if (Math.abs(character - endboss) <= tolerance) {
                this.endbossAttact();
            } else if (endboss < character) {
                this.endbossMoveRigtht();
            }
        }
    }
/**
 * Initiates the end boss's attack.
 */
    endbossAttact() {
        this.walk = false;
        this.attack = true;
    }

/**
 * Moves the end boss to the right.
 */
    endbossMoveRigtht() {
        this.attack = false;
        this.walk = true;
        this.x += 5;
        this.otherDirection = true;
    }

/**
 * Moves the end boss to the left.
 */
    enbossMoveLeft() {
        this.x -= 5;
        this.otherDirection = false;
        this.walk = true;
        this.attack = false;
    }

/**
 * Initiates the death process for the end boss or enemy.
 * @param {Array} array - The array containing the enemy to be removed after the death process.
 */
    startDeathProcess(array) {
        this.playDeathAnimationEnemy();
        setTimeout(() => {
            const index = array.indexOf(this);
            if (index > -1) {
                array.splice(index, 1);
            }
        }, 3000);
    }
/**
 * Plays the death animation for the enemy or end boss.
 */
    playDeathAnimationEnemy() {
        let animationIndex = 0;
        const animationInterval = setInterval(() => {
            if (animationIndex < this.ENDBOSS_DEAD.length) {
                this.loadImage(this.ENDBOSS_DEAD[animationIndex]);
                animationIndex++;
            } else {
                clearInterval(animationInterval);
            }
        }, 40);
    }

    /**
 * Stops all ongoing animations related to the end boss.
 */
    stoppAllEnbossAnimations() {
        clearInterval(this.endbossAnimationInterval);
        clearInterval(this.endbossJumpAnimation);
        clearInterval(this.endbossMoveAnimation);
        clearInterval(this.endbossSwordAnimation);
    }
}