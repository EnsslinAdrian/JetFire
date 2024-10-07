class DrawableObject extends Collision{
    x = 200;
    y = 400;
    frameX;
    frameY;
    frameWidth;
    frameHeight;
    speed = 7;
    width = 100;
    height = 100;
    id;

    img;
    imgCache = [];
    currentImage = 0;

    life = 100;
    isDead = true;
    heal = 100;
    ammo = 0;
    coins = 0;
    fuel = 0;
    star = 0;

    /**
     * Loads an image from the specified path and assigns it to the object's `img` property.
     * @param {string} path - The path to the image file to be loaded.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Loads multiple images from an array of paths and stores them in the image cache.
     * @param {Array<string>} array - An array of image paths to be loaded and cached.
     */
    loadImagesArray(array) {
        array.forEach(element => {
            let img = new Image();
            img.src = element;
            this.imgCache[element] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Draws an exact green border around certain map objects for debugging purposes.
     */
    drawBorderExactly(ctx) {
        if (this instanceof Character || this instanceof ShootEnemy || this instanceof FlyEnemy || this instanceof Coins || this instanceof Ammo || this instanceof Fuel || this instanceof Heals || this instanceof FloatingPlatform || this instanceof Water || this instanceof Star || this instanceof Endboss || this instanceof Wall || this instanceof Spikes) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'green';
            ctx.rect(this.x + this.frameX, this.y + this.frameY, this.frameWidth, this.frameHeight);
            ctx.stroke();
        }
    }

    /**
     * Draws an exact green border around projectile objects for debugging purposes.
     */
    drawBorderExactlyProjectil(ctx) {
        if (this instanceof Projectile || this instanceof ProjectileEnemy) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'green';
            ctx.rect(this.x + map.frameX, this.y + this.frameY, this.frameWidth, this.frameHeight);
            ctx.stroke();
        }
    }

    /**
     * Draws a red border around the sword area of the end boss for debugging purposes.
     */
    drawBorderSword(ctx) {
        if (this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.swordX, this.y + this.swordY, this.swordWidht, this.swordHEight);
            ctx.stroke();
        }
    }

    /**
     * Reflects the map object horizontally if it is facing the other direction.
     * This method flips the canvas horizontally and adjusts the map object's position 
     * if the `otherDirection` property is true.
     * @param {Object} map - The map object to be reflected, containing properties like width and position.
     */
    reflectLeft(ctx) {
        if (this.otherDirection) {
            ctx.save();
            ctx.translate(this.width, 0);
            ctx.scale(-1, 1);
            this.x = this.x * -1;
        }
    }

    /**
     * Restores the map object's position and the canvas state after horizontal reflection.
     * This method reverses the position adjustment made during the reflection and 
     * restores the canvas state if the `otherDirection` property is true.
     */
    reflectBack(ctx) {
        if (this.otherDirection) {
            this.x = this.x * -1;
            ctx.restore();
        }
    }

        /**
     * Draws a red line connecting all ground points for visualization purposes.
     */
        drawGroundPointsLine(ctx, groundPoints) {
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(groundPoints[0].x, groundPoints[0].y);
            for (let i = 1; i < groundPoints.length; i++) {
                ctx.lineTo(groundPoints[i].x, groundPoints[i].y);
            }
            ctx.stroke();
        }
    
        /**
         * Draws blue lines representing the platforms in the level for visualization purposes.
         */
        drawPlatforms(ctx, platformsLevel) {
            ctx.strokeStyle = 'blue';
            ctx.lineWidth = 2;
            platformsLevel.forEach(platform => {
                ctx.beginPath();
                ctx.moveTo(platform.xStart, platform.height);
                ctx.lineTo(platform.xEnd, platform.height);
                ctx.stroke();
            });
        }
        
        /**
         * Draws blue lines representing the movable platforms in the level for visualization purposes.
         */
        drawMovablePlatforms(ctx, movablePlatformsLevel) {
            ctx.strokeStyle = 'blue';
            ctx.lineWidth = 2;
            movablePlatformsLevel.forEach(platform => {
                ctx.beginPath();
                ctx.moveTo(platform.xStart, platform.height);
                ctx.lineTo(platform.xEnd, platform.height);
                ctx.stroke();
            });
        }

            /**
     * Moves the movable platforms in a back-and-forth linear motion based on a set interval.
     * The direction of each platform's movement is toggled at a specified interval.
     */
    movePlatformsLine(movablePlatformsLevel) {
        movablePlatformsLevel.forEach((platform) => {
            let platformDirection = true;
            setInterval(() => {
                if (platformDirection) {
                    platform.xStart += 1;
                    platform.xEnd += 1;
                } else {
                    platform.xStart -= 1;
                    platform.xEnd -= 1;
                }
            }, 1000 / 60);
            setInterval(() => {
                platformDirection = !platformDirection;
            }, platform.time);
        });
    }

    movePlatformsLineTopBottom(movablePlatformsLevel) {
        movablePlatformsLevel.forEach((platform) => {
            let platformDirection = true;
            setInterval(() => {
                if (platformDirection) {
                    platform.height += 1;
                    platform.yLimit += 1;
                } else {
                    platform.height -= 1;
                    platform.yLimit -= 1;
                }
            }, 1000 / 60);
            setInterval(() => {
                platformDirection = !platformDirection;
            }, platform.time);
        });
    }

}