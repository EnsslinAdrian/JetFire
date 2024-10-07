class World {
    canvas;
    ctx;
    keyboard;
    level = LEVEL;
    camera_x = 0;
    camera_y = 0;
    groundPoints = groundPoints.groundPointsLevel;
    platformsLevel = platformsLevel.platformsLevel;
    movablePlatformsLevel = movablePlatformsLevel.movablePlatformsLevel;
    movablePlatformsTopButtomLevel = movablePlatformsTopButtomLevel.movablePlatformsTopButtomLevel;
    movablefallingPlatformsLevel = movablefallingPlatformsLevel.movablefallingPlatformsLevel;
    straightGroundPoints = straightGroundPointsLevel.straightGroundPointsLevel;
    character = new Character();
    statusbar = [
        new StatusBar('img/Items Sprite/Heals/2.png', -14, -10, 80, 80),
        new StatusBar('img/Items Sprite/item1/1.png', -4, 41, 67, 67),
        new StatusBar('img/Items Sprite/Flash/1.png', -12, 85, 75, 75),
        new StatusBar('img/Items Sprite/Coins/1.png', 0, 136, 58, 58),
    ];
    yOffset = 15;
    chacheCoins = 9;
    hasCollided = false;
    allSetIntervalls = [];
    direction = true;

    projectilWithEnemyIntervall;
    projectilShootEnemyWithCharacterIntervall;
    projectilFlyEnemyWithCharacterIntervall;
    enbossWithCharacterIntervall;
    weaponWithCharacterIntervall;
    haracterWithWaterIntervall;
    characterWithItemIntervall;
    characterWalkAgainstWall;
    characterSpikesIntervall;

    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.checkCollisions();
        this.character.movePlatformsLine(this.movablePlatformsLevel);
        this.character.movePlatformsLineTopBottom(this.movablePlatformsTopButtomLevel);
    }

    /**
     * Draws the entire game scene.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, this.camera_y)

        this.drawBackgroundObjects();
        this.drawItems();
        this.drawEnemies();
        this.drawEndboss();
        this.drawCharacter();
        this.drawObjectToMap(this.level.water);
        this.drawObjectToMap(this.level.spikes);

        this.drawStatusbar();

        this.ctx.translate(-this.camera_x, -this.camera_y)
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     * Draws the status bar on the screen.
     */
    drawStatusbar() {
        this.ctx.translate(-this.camera_x, 0);
        this.drawObjectToMap(this.statusbar)

        ctx.font = "35px serif";
        ctx.fillStyle = "white";
        ctx.fillText(this.character.life, 50, 42);
        ctx.fillText(this.character.ammo, 50, 87);
        ctx.fillText(this.character.fuel, 50, 132);
        ctx.fillText(this.character.coins, 50, 176);

        this.ctx.translate(this.camera_x, 0);
    }

    /**
     * Draws all background objects of the level onto the map.
     */
    drawBackgroundObjects() {
        this.drawObjectToMap(this.level.background)
        this.drawObjectToMap(this.level.trees)
        this.drawObjectToMap(this.level.platforms)
        this.drawObjectToMap(this.level.floatingPlatform)
        this.drawObjectToMap(this.level.movableplatform)
        this.drawObjectToMap(this.level.movablePlatformTopButtom)
        this.drawObjectToMap(this.level.wall);
        this.drawObjectToMap(this.level.fallingPlatforms);
    }

    /**
     * Draws all enemies and their projectiles onto the map.
     */
    drawEnemies() {
        this.level.flyEnemy.forEach(enemy => {
            this.drawToMap(enemy);
            enemy.projectileEnemy.forEach(projectile => {
                this.drawToMap(projectile);
            });
        });

        this.level.shootEnemy.forEach(enemy => {
            enemy.projectileEnemy.forEach(projectile => {
                this.drawToMap(projectile);
            });
            this.updateEnemyPosition(enemy);
            this.drawToMap(enemy);
        });
    }

    /**
     * Draws the end boss onto the map.
     */
    drawEndboss() {
        this.drawObjectToMap(this.level.endboss)
    }

    /**
     * Updates the character's position, handles related effects, and draws the character and its projectiles onto the map.
     */
    drawCharacter() {
        // this.character.drawGroundPointsLine(this.ctx, this.groundPoints);
        // this.character.drawPlatforms(this.ctx, this.platformsLevel);
        // this.character.drawMovablePlatforms(this.ctx, this.movablePlatformsLevel);
        // this.character.drawMovablePlatforms(this.ctx, this.movablePlatformsTopButtomLevel);
        // this.character.drawMovablePlatforms(this.ctx, this.movablefallingPlatformsLevel);
        this.updateCharacterPosition(this.character);
        this.checkSmoke();
        this.drawObjectToMap(this.character.projectile);
        this.drawToMap(this.character);
        if (this.character.x > 2500) {
            this.chacheCoins += this.character.coins;
        }
    }

    /**
     * Draws all collectible items in the level onto the map.
     */
    drawItems() {
        this.drawObjectToMap(this.level.coins);
        this.drawObjectToMap(this.level.fuel);
        this.drawObjectToMap(this.level.heals);
        this.drawObjectToMap(this.level.ammo);
        this.drawObjectToMap(this.level.star);
    }

    /**
     * Checks if the character should emit smoke and draws it onto the map if necessary.
     */
    checkSmoke() {
        if (this.character.checkSmoke) {
            this.drawToMap(this.character.smoke);
        }
    }

    /**
     * Sets the world reference for the character, end boss, and enemies, and initiates platform movement.
     */
    setWorld() {
        this.character.world = this;
        this.level.endboss.forEach(endboss => {
            endboss.world = this;
        });
        this.level.shootEnemy.forEach(enemy => {
            enemy.world = this;
            enemy.applyGravity();
        });
        this.level.flyEnemy.forEach(flyEnemy => {
            flyEnemy.world = this;
        });
    }

    /**
     * Draws each element of the provided array onto the map.
     * @param {Array} array - The array of objects to be drawn on the map.
     */
    drawObjectToMap(array) {
        array.forEach(element => {
            this.drawToMap(element);
        });
    }

    /**
     * Draws a single map object onto the canvas, applying reflection if necessary.
     * @param {Object} map - The map object to be drawn, containing properties like image, position, and size.
     */
    drawToMap(map) {
        map.reflectLeft(this.ctx);
        map.draw(this.ctx);
        // map.drawBorderExactly(this.ctx)
        // map.drawBorderSword(this.ctx)
        map.reflectBack(this.ctx);
    }

    /**
     * Sets up intervals to continuously check for various collisions in the game.
     * This method initializes multiple intervals that regularly check for collisions between 
     * different game elements, such as projectiles, enemies, the end boss, weapons, water, 
     * and collectible items.
     */
    checkCollisions() {
        this.projectilWithEnemyIntervall = setInterval(() => { this.character.collsionProjectilWithEnemy(this.level.shootEnemy, this.level.flyEnemy, this.level.endboss) }, 50);
        this.projectilShootEnemyWithCharacterIntervall = setInterval(() => { this.character.collisionProjectilShootEnemyWithCharacter(this.level.shootEnemy) }, 20);
        this.projectilFlyEnemyWithCharacterIntervall = setInterval(() => { this.character.collisionProjectilFlyEnemyWithCharacter(this.level.flyEnemy) }, 50);
        this.enbossWithCharacterIntervall = setInterval(() => { this.character.collisionEnbossWithCharacter(this.level.endboss) }, 250);
        this.weaponWithCharacterIntervall = setInterval(() => { this.character.collisionWeaponWithCharacter(this.level.endboss) }, 150);
        this.haracterWithWaterIntervall = setInterval(() => { this.character.collisonCharacterWithWater(this.level.water) }, 80);
        this.characterWithItemIntervall = setInterval(() => { this.collisionCharacterWithItem() }, 80);
        this.characterWalkAgainstWall = setInterval(() => {this.character.collisonCharacterWithWall(this.level.wall, this.level.endboss)}, 50);
        this.characterSpikesIntervall = setInterval(() => {this.character.collisionCharacterWithSpikes(this.level.spikes)}, 100);
        this.characterMovablePlatformTopButtomIntervall = setInterval(() => {this.character.collisionCharacterWithMovablePlatformTopButtom(this.level.movablePlatformTopButtom)}, 50);
        this.characterfallingPlatformsIntervall = setInterval(() => {this.character.collisionCharacterWithfallingPlatforms(this.level.fallingPlatforms, this.movablefallingPlatformsLevel)}, 100);
    }

    /**
     * Checks for collisions between the character and various collectible items.
     */
    collisionCharacterWithItem() {
        this.character.checkCollisionCoin(this.level.coins)
        this.character.checkCollisionCoiFuels(this.level.fuel)
        this.character.checkCollisionHeal(this.level.heals)
        this.character.checkCollisionAmmo(this.level.ammo)
        this.character.checkCollisionStar(this.level.star)
    }

    /**
     * Updates the character's vertical position based on the ground height.
     * @param {Object} character - The character whose position is being updated.
     */
    updateCharacterPosition(character) {
        const groundHeight = this.getGroundHeight(character.x + character.frameX, character.y + character.frameY);
        if (!character.isAboveGround()) {
            character.y = groundHeight - character.frameHeight;
        }
    }

    /**
     * Updates the enemy's vertical position based on the ground height.
     * @param {Object} character - The enemy character whose position is being updated.
     */
    updateEnemyPosition(character) {
        const groundHeight = this.getGroundHeightEnemy(character.x + character.frameX, character.y + character.frameY);
        if (!character.isAboveGround()) {
            character.y = groundHeight - character.frameHeight;
        }
    }

    /**
     * Determines the ground height at a given x-coordinate based on the level's platforms and ground points.
     * 
     * This method checks various platform and ground point arrays to find the appropriate ground height
     * for the character at the specified x-coordinate. It returns the height of the platform or ground point
     * if the character is above it. If no specific height is found, it calculates the height using a Catmull-Rom spline.
     * 
     * @param {number} x - The x-coordinate for which to determine the ground height.
     * @returns {number} The height of the ground at the given x-coordinate.
     */
    getGroundHeight(x) {
        for (let mo of this.platformsLevel) {
            if (x >= mo.xStart && x <= mo.xEnd && this.character.y + this.character.frameHeight < mo.yLimit) { return mo.height; }
        }
        for (let mo of this.movablePlatformsLevel) {
            if (x >= mo.xStart && x <= mo.xEnd && this.character.y + this.character.frameHeight < mo.yLimit) { return mo.height; }
        }
        for (let mo of this.movablePlatformsTopButtomLevel) {
            if (x >= mo.xStart && x <= mo.xEnd && this.character.y + this.character.frameHeight < mo.yLimit) { return mo.height; }
        }
        for (let mo of this.movablefallingPlatformsLevel) {
            if (x >= mo.xStart && x <= mo.xEnd && this.character.y + this.character.frameHeight < mo.yLimit) { return mo.height; }
        }
        for (let points of this.straightGroundPoints) {
            if (x >= points.xStart && x <= points.xEnd) { return points.yLimit; }
        }
        for (let i = 0; i < this.groundPoints.length - 1; i++) {
            const p0 = this.groundPoints[i - 1] || this.groundPoints[i];
            const p1 = this.groundPoints[i];
            const p2 = this.groundPoints[i + 1];
            const p3 = this.groundPoints[i + 2] || this.groundPoints[i + 1];
            if (x >= p1.x && x <= p2.x) {
                const t = (x - p1.x) / (p2.x - p1.x);
                return this.catmullRomSpline(t, p0, p1, p2, p3) - this.yOffset;
            }
        }
        return this.groundPoints[this.groundPoints.length - 1].y - this.yOffset;
    }

    /**
     * Determines the ground height at a given x-coordinate specifically for enemies.
     * 
     * This method checks the straight ground points and ground point arrays to find the appropriate ground height
     * for an enemy at the specified x-coordinate. If no specific height is found, it calculates the height using
     * a Catmull-Rom spline interpolation.
     * 
     * @param {number} x - The x-coordinate for which to determine the ground height for an enemy.
     * @returns {number} The height of the ground at the given x-coordinate.
     */
    getGroundHeightEnemy(x) {
        for (let points of this.straightGroundPoints) {
            if (x >= points.xStart && x <= points.xEnd) { return points.yLimit; }
        }
        for (let i = 0; i < this.groundPoints.length - 1; i++) {
            const p0 = this.groundPoints[i - 1] || this.groundPoints[i];
            const p1 = this.groundPoints[i];
            const p2 = this.groundPoints[i + 1];
            const p3 = this.groundPoints[i + 2] || this.groundPoints[i + 1];
            if (x >= p1.x && x <= p2.x) {
                const t = (x - p1.x) / (p2.x - p1.x);
                return this.catmullRomSpline(t, p0, p1, p2, p3) - this.yOffset;
            }
        }       
        return this.groundPoints[this.groundPoints.length - 1].y - this.yOffset;
    }

    /**
     * Calculates a point on a Catmull-Rom spline curve.
     * 
     * This method computes the x and y coordinates of a point on the spline based on four control points 
     * and a parameter t, which represents the position between p1 and p2.
     * 
     * @param {number} t - The interpolation parameter, typically between 0 and 1.
     * @param {Object} p0 - The first control point.
     * @param {Object} p1 - The second control point (the point before the point of interest).
     * @param {Object} p2 - The third control point (the point after the point of interest).
     * @param {Object} p3 - The fourth control point.
     * @returns {number} The y-coordinate of the point on the Catmull-Rom spline at the given t.
     */
    catmullRomSpline(t, p0, p1, p2, p3) {
        const t2 = t * t;
        const t3 = t2 * t;
        const x = 0.5 * (2 * p1.x + (-p0.x + p2.x) * t + (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 + (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3);
        const y = 0.5 * (2 * p1.y + (-p0.y + p2.y) * t + (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 + (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3);
        return y;
    }

     /**
     * Stops all game-related intervals.
     */
     stoppGame() {
        clearInterval(this.characterWithItemIntervall);
        clearInterval(this.projectilShootEnemyWithCharacterIntervall);
        clearInterval(this.projectilFlyEnemyWithCharacterIntervall);
        clearInterval(this.enbossWithCharacterIntervall);
        clearInterval(this.weaponWithCharacterIntervall);
        clearInterval(this.haracterWithWaterIntervall);
        clearInterval(this.characterWithItemIntervall);
        clearInterval(this.characterSpikesIntervall);
    }

}