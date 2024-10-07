class Level {
    background;
    platforms;
    trees;
    floatingPlatform;
    coins;
    fuel;
    heals;
    ammo;
    flyEnemy;
    shootEnemy;
    water;
    star;
    endboss;
    movableplatform;
    movablePlatformTopButtom;
    wall;
    spikes;
    fallingPlatforms;


    constructor(background, platforms, trees, floatingPlatform, coins, fuel, heals, ammo, flyEnemy, shootEnemy, water, star, endboss, movableplatform, movablePlatformTopButtom, wall, spikes, fallingPlatforms) {
        this.background = background;
        this.platforms = platforms;
        this.trees = trees;
        this.floatingPlatform = floatingPlatform;
        this.coins = coins;
        this.fuel = fuel;
        this.heals = heals;
        this.ammo = ammo;
        this.flyEnemy = flyEnemy;
        this.shootEnemy = shootEnemy;
        this.water = water;
        this.star = star;
        this.endboss = endboss;
        this.movableplatform = movableplatform;
        this.wall = wall;
        this.spikes = spikes;
        this.movablePlatformTopButtom = movablePlatformTopButtom;
        this.fallingPlatforms = fallingPlatforms;
    }
}