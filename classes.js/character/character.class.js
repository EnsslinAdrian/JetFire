class Character extends MovableObject {
    world;
    SOUND_WALK = new Audio('audio/running.mp3');
    SOUND_HURT = new Audio('audio/hurt.mp3');
    SOUND_JETPACK = new Audio('audio/Jet_Pack_Sound.wav');
    SOUND_SHOT = new Audio('audio/shot_2.mp3');
    SOUND_WATER_JUMP = new Audio('audio/jump_water.mp3');


    IMAGES_IDLE = IMAGES_CHARACTER.IMAGES_IDLE;
    IMAGES_WALK = IMAGES_CHARACTER.IMAGES_WALK;
    IMAGES_JUMP = IMAGES_CHARACTER.IMAGES_JUMP;
    IMAGES_FLY = IMAGES_CHARACTER.IMAGES_FLY;
    IMAGES_DEAD = IMAGES_CHARACTER.IMAGES_DEAD;

    moveCharacter;
    setLifeCheck;
    setCharacterAnimation;

    jump_water = true;
    leftTrue = true;
    endAnimation = true;

    wallLeft = true;
    wallRight = true;

    constructor() {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImagesArray(this.IMAGES_IDLE);
        this.loadImagesArray(this.IMAGES_WALK);
        this.loadImagesArray(this.IMAGES_JUMP);
        this.loadImagesArray(this.IMAGES_FLY);
        this.loadImagesArray(this.IMAGES_DEAD);
        this.applyGravity();
        this.animate();
        this.x = 0;
        this.frameX = 32;
        this.frameY = 16;
        this.frameWidth = 30;
        this.frameHeight = 65;
        this.smoke = new Smoke(this.x - 5, this.y + 70);
        this.projectile = [];
        this.shootCooldown = 0;
        this.flyCooldown = 0;
    }

    /**
     * Stops all ongoing animations and checks related to the character.
     */
    stoppAllCharacterAnimations() {
        clearInterval(this.moveCharacter);
        clearInterval(this.setLifeCheck);
        clearInterval(this.setCharacterAnimation);
    }

    /**
     * Starts the character's animations and movement animations.
     */
    animate() {
        this.characterAnimations();
        this.moveCharacterAnimations();
    }

    /**
     * Checks the character's life status and handles death scenario.
     */
    lifeCheck() {
        if (this.life <= 0) {
            this.playDeathAnimation(this.IMAGES_DEAD);
            clearInterval(this.setCharacterAnimation);
            clearInterval(this.setLifeCheck);
            clearInterval(this.moveCharacter);
            gameOver();
        }
    }

    /**
     * Updates the character's animation based on the current keyboard inputs and character state.
     * 
     * This method checks the state of various keyboard inputs and character attributes to determine
     * which animation to display. It pauses certain sounds when appropriate and plays animations
     * for flying, jumping, walking, or idling based on the input and state of the character.
     */
    characterAnimationSet() {
        this.SOUND_WALK.pause();
        this.SOUND_JETPACK.pause();
        if (this.world.keyboard.UP && this.y > 20 && this.fuel > 0) {
            this.animateImage(this.IMAGES_FLY);
            this.SOUND_JETPACK.play();
        } else if (this.world.keyboard.SPACE) {
            this.animateImage(this.IMAGES_JUMP);
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.SOUND_WALK.play();
            console.log(this.x)
            this.animateImage(this.IMAGES_WALK);
        } else {
            this.animateImage(this.IMAGES_IDLE);
        }
    }

    /**
     * Initializes the character's animation and life check intervals.
     */
    characterAnimations() {
        this.setLifeCheck = setInterval(() => { this.lifeCheck(); }, 200);
        this.setCharacterAnimation = setInterval(() => { this.characterAnimationSet(); }, 80);
    }

    /**
     * Sets up the intervals for handling character movement and actions.
     */
    moveCharacterAnimations() {
        this.moveCharacter = setInterval(() => {
            this.moveRight();
            this.moveLeft();
            this.jump();
            this.shoot();
            this.fly();
            this.cooldownShoot();
            if (this.x > 5900) {
                this.world.camera_x = -5700;
            } else {
                this.world.camera_x = -this.x + 200;
            }
        }, 1000 / 60);
    }

    /**
     * Moves the character to the right if certain conditions are met.
     */
    moveRight() {
        if (this.world.keyboard.RIGHT && this.x < 6570 && this.endAnimation && this.wallLeft) {
            this.x += this.speed;
            this.otherDirection = false;
        }
    }

    /**
     * Moves the character to the left if certain conditions are met.
     */
    moveLeft() {
        if (this.world.keyboard.LEFT && this.x > 0 && this.endAnimation && this.wallRight) {
            this.x -= this.speed;
            this.otherDirection = true;
        }
    }

    /**
     * Handles the character's jump action.
     */
    jump() {
        if (this.world.keyboard.SPACE && !this.isAboveGround() && this.jump_water) {
            this.speedY = 25;
        }
    }

    /**
     * Handles the character's flying action.
     */
    fly() {
        if (this.world.keyboard.UP && this.y > 20 && this.fuel > 0) {
            this.speedY = 10;
            this.checkSmoke = true
            this.smokeDirection();
            this.fuel -= 1;
        } else {
            this.checkSmoke = false
        }
    }

    /**
     * Adjusts the smoke position based on the character's direction.
     */
    smokeDirection() {
        if (this.otherDirection) {
            this.smoke.x = this.x + 43;
            this.smoke.y = this.y + 70;
        } else {
            this.smoke.x = this.x - 5;
            this.smoke.y = this.y + 70;
        }
    }

    /**
     * Handles shooting when the F key is pressed, ammo is available, and cooldown has expired.
     */
    shoot() {
        if (this.world.keyboard.F && this.shootCooldown <= 0 && this.ammo > 0) {
            this.newShoot();
            this.shootCooldown = 700;
            this.ammo -= 1;
            this.SOUND_SHOT.play();
        }
    }

    /**
     * Creates and launches a new projectile in the direction the character is facing.
     * The projectile is added to the projectile array and removed after 1100 ms.
     */
    newShoot() {
        let newProjectile = new Projectile(this.x + 8, this.y + 45, this.otherDirection);
        this.projectile.push(newProjectile);

        setTimeout(() => {
            const index = this.projectile.indexOf(newProjectile);
            if (index > -1) {
                this.projectile.splice(index, 1);
            }
        }, 1100);
    }

    /**
     * Reduces the shoot cooldown by the amount of time passed since the last frame.
     * Ensures the cooldown timer decreases over time to allow shooting again.
     */
    cooldownShoot() {
        if (this.shootCooldown > 0) {
            this.shootCooldown -= 1000 / 60;
        }
    }

}