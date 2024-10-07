class Collision {

    /**
     * Checks for collisions between the character and coins.
     */
    checkCollisionCoin(co) {
        co.forEach((coin, index) => {
            if (this.isColliding(coin)) {
                this.coins += 1;
                co.splice(index, 1);
            }
        });
    }

    /**
* Checks for collisions between the character and fuel items.
*/
    checkCollisionCoiFuels(fuel) {
        fuel.forEach((fuels, index) => {
            if (this.isColliding(fuels)) {
                this.fuel = 100;
                fuel.splice(index, 1);
            }
        });
    }

    /**
     * Checks for collisions between the character and healing items.
     */
    checkCollisionHeal(heals) {
        heals.forEach((heal, index) => {
            if (this.isColliding(heal)) {
                this.life = 100;
                heals.splice(index, 1);
            }
        });
    }

    /**
     * Checks for collisions between the character and ammo items.
     */
    checkCollisionAmmo(ammo) {
        ammo.forEach((ammos, index) => {
            if (this.isColliding(ammos)) {
                this.ammo += 10;
                ammo.splice(index, 1);
            }
        });
    }

    /**
     * Checks for collisions between the character and star items.
     */
    checkCollisionStar(stars) {
        stars.forEach((star, index) => {
            if (this.isColliding(star)) {
                this.star += 1;
                stars.splice(index, 1);
            }
        });
    }

    /**
 * Checks for collisions between the character and water bodies.
 * If the character collides with water, it plays a water jump sound, reduces the character's speed and acceleration,
 * and disables jumping out of water. If the character is no longer colliding with water, it restores the character's
 * normal speed, acceleration, and jumping ability.
 */
    collisonCharacterWithWater(water) {
        water.forEach((waters) => {
            if (this.isColliding(waters)) {
                if (!this.hasCollided) {
                    this.SOUND_WATER_JUMP.play();
                    this.hasCollided = true;
                    this.speed = 1;
                    this.accelartion = 0.1;
                    this.jump_water = false;
                    this.life = 0;
                }
            } else {
                this.hasCollided = false;
                this.speed = 7;
                this.jump_water = true;
                this.accelartion = 2.5;
            }
        });
    }

    /**
* Checks for collisions between the character and the end boss.
* If a collision is detected and the character has remaining life, the character's life 
* is reduced, a hurt sound is played, and the character takes damage.
*/
    collisionEnbossWithCharacter(endboss) {
        endboss.forEach((enemy) => {
            if (this.isColliding(enemy)) {
                if (this.life > 0) {
                    this.life -= 20;
                    this.SOUND_HURT.play();
                }
            }
        });
    }

    /**
     * Checks for collisions between the character and the end boss's weapon.
     * If a collision is detected and the character has remaining life, the character's life 
     * is reduced, a hurt sound is played, and the character takes damage.
     */
    collisionWeaponWithCharacter(endboss) {
        endboss.forEach((enemy) => {
            if (this.isCollidingWeapon(enemy)) {
                if (this.life > 0) {
                    this.life -= 10;
                    this.SOUND_HURT.play();
                }
            }
        });
    }

    /**
 * Checks for collisions between the character and projectiles from shooting enemies.
 */
    collisionProjectilShootEnemyWithCharacter(shootEnemys) {
        shootEnemys.forEach((shootEnemy) => {
            shootEnemy.projectileEnemy.forEach((projectil, projIndex) => {
                if (this.isColliding(projectil)) {
                    if (this.life > 0) {
                        this.life -= 10;
                        this.SOUND_HURT.play();
                        shootEnemy.projectileEnemy.splice(projIndex, 1);
                    }
                }
            });
        });
    }

    /**
     * Checks for collisions between the character and projectiles from flying enemies.
     * If a collision is detected and the character has remaining life, the character's life 
     * is reduced, a hurt sound is played, and the projectile is removed.
     */
    collisionProjectilFlyEnemyWithCharacter(flyEnemys) {
        flyEnemys.forEach((flyEnemy) => {
            flyEnemy.projectileEnemy.forEach((projectil, projIndex) => {
                if (this.isColliding(projectil)) {
                    if (this.life > 0) {
                        this.life -= 10;
                        this.SOUND_HURT.play();
                        flyEnemy.projectileEnemy.splice(projIndex, 1);
                    }
                }
            });
        });
    }

    /**
    * Checks for collisions between the character's projectiles and various enemies.
    * This method iterates through all shooting enemies, flying enemies, and the end boss,
    * checking for collisions with the character's projectiles. It calls specific methods
    * to handle collisions with each type of enemy.
    */
    collsionProjectilWithEnemy(shootEnemys, flyEnemys, endbosse) {
        this.projectile.forEach((projectil, projIndex) => {
            shootEnemys.forEach((shootEnemy) => {
                this.checkProjectilShootEnemy(shootEnemy, projectil, projIndex, shootEnemys);
            });
            flyEnemys.forEach((flyEnemy) => {
                this.checkProjectilFlyEnemy(flyEnemy, projectil, projIndex, flyEnemys);
            });
            endbosse.forEach((endboss) => {
                this.checkProjectilEnboss(endboss, projectil, projIndex, endbosse);
            });
        });
    }

    /**
 * Checks if a projectile collides with a shooting enemy and handles the collision.
 * @param {Object} shootEnemy - The shooting enemy to check for collisions.
 * @param {Object} projectil - The projectile being checked for a collision.
 * @param {number} projIndex - The index of the projectile in the projectile array.
 */
    checkProjectilShootEnemy(shootEnemy, projectil, projIndex, shootEnemys) {
        if (projectil.isColliding(shootEnemy)) {
            this.checkLife(shootEnemy, shootEnemys, 50);
            this.projectile.splice(projIndex, 1);
        }
    }

    /**
     * Checks if a projectile collides with a flying enemy and handles the collision.
     * @param {Object} flyEnemy - The flying enemy to check for collisions.
     * @param {Object} projectil - The projectile being checked for a collision.
     * @param {number} projIndex - The index of the projectile in the projectile array.
     */
    checkProjectilFlyEnemy(flyEnemy, projectil, projIndex, flyEnemys) {
        if (projectil.isColliding(flyEnemy)) {
            this.checkLife(flyEnemy, flyEnemys, 100);
            this.projectile.splice(projIndex, 1);
        }
    }

    /**
     * Checks if a projectile collides with the end boss and handles the collision.
     * @param {Object} endboss - The end boss to check for collisions.
     * @param {Object} projectil - The projectile being checked for a collision.
     * @param {number} projIndex - The index of the projectile in the projectile array.
     */
    checkProjectilEnboss(endboss, projectil, projIndex, endbosse) {
        if (projectil.isColliding(endboss)) {
            this.checkLife(endboss, endbosse, 100);
            this.projectile.splice(projIndex, 1);
        }
    }

    /**
     * Checks and updates the life of a given game entity.
     * @param {Object} name - The game entity whose life is being checked.
     * @param {Array} array - The array containing the entity, used to manage the death process.
     * @param {number} damage - The amount of damage to apply to the entity.
     */
    checkLife(name, array, damage) {
        if (name.life > 0) {
            name.life -= damage;
        } else if (name.life <= 0 && !name.isDying) {
            name.isDying = true;
            name.startDeathProcess(array);
        }
    }

    collisonCharacterWithWall(walls, endboss) {
        this.wallLeft = true;
        this.wallRight = true;

        endboss.forEach(endbosse => {
            endbosse.endbossWall = true
            walls.forEach(wall => {
                if (endbosse.isCollidingLeft(wall)) {
                    console.log('left')
                }
                if (endbosse.isCollidingRight(wall)) {
                    console.log('yes')
                    endbosse.endbossWall = false
                } 
            });
        });

        for (let i = 0; i < walls.length; i++) {
            let wall = walls[i];

            if (this.isCollidingLeft(wall)) {
                this.wallLeft = false;
                break; // Stop further checks once a left collision is found
            }

            if (this.isCollidingRight(wall)) {
                this.wallRight = false;
                break; // Stop further checks once a right collision is found
            }
        }
    }

    collisionCharacterWithSpikes(spikes) {
        spikes.forEach((spike) => {
            if (this.isColliding(spike)) {
                if (this.life > 0) {
                    this.speedY = 25;
                    this.life -= 10;
                    this.SOUND_HURT.play();
                } else {
                    this.speedY = 0
                }
            }
        })
    }

    collisionCharacterWithMovablePlatformTopButtom(platforms) {
        let isColliding = false;

        platforms.forEach((platform) => {
            if (this.isColliding(platform)) {
                isColliding = true;
                this.y = platform.y - this.frameHeight;
                this.speedY = 0;
            }
        });

        if (isColliding) {
            this.acceleration = 0.1;
        } else {
            this.acceleration = 2.5;
        }
    }

    collisionCharacterWithfallingPlatforms(platform, line) {
        platform.forEach((platforms, platformIndex) => {
            line.forEach((lines, lineIndex) => {
                if (this.isCollidingBottom(platforms) && platforms.id === lines.id) {
                    setTimeout(() => {
                        const currentLineIndex = line.findIndex(l => l.id === platforms.id);
                        if (currentLineIndex !== -1) { line.splice(currentLineIndex, 1); }
                        platforms.applyGravityStraightFloorPlaforms();
                        this.deletePlatform(platforms, platform);
                    }, 500);
                }
            });
        });
    }

    deletePlatform(platforms, platform) {
        setTimeout(() => {
            const currentPlatformIndex = platform.findIndex(p => p.id === platforms.id);
            if (currentPlatformIndex !== -1) {
                platform.splice(currentPlatformIndex, 1);
            }
        }, 3000);
    }

}