function Level3() {
    LEVEL = new Level(
        [
            // Background (path, x)
            new Background('img/Backgrounds/02/Repeated.png', -998),

            new Background('img/Backgrounds/02/Repeated.png', 1),

            new Background('img/Backgrounds/02/Repeated.png', 1000),

            new Background('img/Backgrounds/02/Repeated.png', 1999),

            new Background('img/Backgrounds/02/Repeated.png', 2998),

            new Background('img/Backgrounds/02/Repeated.png', 3997),

            new Background('img/Backgrounds/02/Repeated.png', 4996),

            new Background('img/Backgrounds/02/Repeated.png', 5995),
        ],

    [
        // Platforms (path, width, height, x, y)
        new Platforms('img/Platform/Terain/3.png', 1000, 100, -999, 500), // 
        new Platforms('img/Platform/Terain/3.png', 1180, 100, 0,  500), 
        new Platforms('img/Platform/Terain/3.png', 2180, 100, 0,  500), 
        new Platforms('img/Platform/Terain/3.png', 3180, 100, 0,  500), 
        new Platforms('img/Platform/Terain/3.png', 4180, 100, 0,  500), 

    ],

    [
        // Tree (path, x, y)
        // new Tree('img/Platform/Tree And Tile set/1.png', 1000, 300),
    ],

    [
        // FloatingPlatform (paht, x, y)
        // new FloatingPlatform('img/Platform/Terain/8.png', 3300, 200),
    ],

    [
        // Coins (x, y)
        // new Coins(1200, 160),
    ],

    [
        // Fuel (x, y)
        // new Fuel(900, 320),
    ],

    [
        // Heals (x, y)
        // new Heals(2800, 225),
    ],

    [
        // Ammo (x, y)
        // new Ammo(1950, 160),
    ],

    [
        // FlyEnemy (x, y)
        // new FlyEnemy(2600, 200),
        // new FlyEnemy(2400, 200),
        // new FlyEnemy(2500, 200),

    ],

    [
        // ShootEnemy (x)
        // new ShootEnemy(2500),
        // new ShootEnemy(2550),
        // new ShootEnemy(2600),
        // new ShootEnemy(2650),

    ],

    [
        // Water (width, height, x, y)
        // new Water(821, 135, 1180, 490),
    ],

    [
        // Star (x, y)
        // new Star(2600, 100),
    ],

    [
        //Endboss (x, y, width, height, frameX, frameY, frameWidth, frameHeight, swordX, swordY, swordWidht, swordHEight, life)
        // new Endboss(1400, 236, 300, 300, 140, 153, 60, 110, 65, 150, 40, 40, 100),
    ],

    [
        new MovablePlatform('img/Platform/Terain/8.png', 1400, 200, 2000),
        new MovablePlatform('img/Platform/Terain/8.png', 1800, 200, 2000),
    ],

    [
       new MovablePlatformTopButtom('img/Platform/Terain/8.png', 300, 150, 3000),
       new MovablePlatformTopButtom('img/Platform/Terain/8.png', 700, 150, 2000),
       new MovablePlatformTopButtom('img/Platform/Terain/8.png', 1100, 150, 1000),
    ],

    [ // Wall (img, x, y, width, height)
        // new Wall('img/Platform/Terain/7.png', 300, 209, 100, 340),
    ],

    [ // Spikes (img, x, y, id)
       new Spikes('img/Platform/Terain/10.png', 1500, 470)
    ],

    [ // FallingPlatforms (img, x, y, id)
        new FallingPlatforms('img/Platform/Tree And Tile set/8.png', 2100, 200, 1), 
        new FallingPlatforms('img/Platform/Tree And Tile set/8.png', 2350, 200, 2),
        new FallingPlatforms('img/Platform/Tree And Tile set/8.png', 2600, 200, 3),
    ],

);

}

function groundPointsLevel3() {
    groundPoints = {
        groundPointsLevel: [
            { x: -1000, y: 510 },
            { x: 1000, y: 510 },   
        ]
    }
}

function platformsLevel3() {
    platformsLevel = {
        platformsLevel: [
            // { xStart: 985, xEnd: 2000, height: 195, yLimit: 215 },
        ]
    }
}

function movablePlatformsLevel3() {
    movablePlatformsLevel = {
        movablePlatformsLevel: [
            { xStart: 1400, xEnd: 1550, height: 195, yLimit: 220, time: 2000},      
            { xStart: 1800, xEnd: 1950, height: 195, yLimit: 215, time: 2000},      
        ]
    };
}

function movablePlatformsTopButtomLevel3() {
    movablePlatformsTopButtomLevel = {
        movablePlatformsTopButtomLevel: [
            { xStart: 290, xEnd: 450, height: 145, yLimit: 160, time: 3000},      
            { xStart: 690, xEnd: 850, height: 145, yLimit: 160, time: 2000},      
            { xStart: 1090, xEnd: 1250, height: 145, yLimit: 160, time: 1000},      
        ]
    };
}

function movablefallingPlatformsLevel3() {
    movablefallingPlatformsLevel = {
        movablefallingPlatformsLevel: [
            { id: 1, xStart: 2090, xEnd: 2160, height: 195, yLimit: 215, time: 3000},         
            { id: 2, xStart: 2340, xEnd: 2410, height: 195, yLimit: 215, time: 3000},         
            { id: 3, xStart: 2590, xEnd: 2660, height: 195, yLimit: 215, time: 3000},         
        ]
    };
}

function straightGroundPointsLevel3() {
    straightGroundPointsLevel = {
        straightGroundPointsLevel: [
            // { xStart: -1000, xEnd: 2400, yLimit: 490 },
        ]
    }
}

function endbossWeaponLevel3() {
    ENDBOSS_WEAPON_POINTS = {
        ENDBOSS_KEULE: [
            { swordX: 70, swordY: 148 },
            { swordX: 80, swordY: 130 },
            { swordX: 95, swordY: 116 },
            { swordX: 114, swordY: 107 },
            { swordX: 134, swordY: 102 },
            { swordX: 154, swordY: 102 },
            { swordX: 171, swordY: 107 },
            { swordX: 188, swordY: 117 },
            { swordX: 200, swordY: 131 },
            { swordX: 208, swordY: 145 },
            { swordX: 208, swordY: 158 },
            { swordX: 189, swordY: 116 },
            { swordX: 138, swordY: 90 },
            { swordX: 77, swordY: 103 },
            { swordX: 37, swordY: 152 },
            { swordX: 37, swordY: 215 },
            { swordX: 31, swordY: 172 },
            { swordX: 46, swordY: 132 },
            { swordX: 77, swordY: 101 },
            { swordX: 117, swordY: 89 },
            { swordX: 156, swordY: 95 },
            { swordX: 135, swordY: 93 },
            { swordX: 114, swordY: 98 },
            { swordX: 94, swordY: 109 },
            { swordX: 78, swordY: 127 },
        ]
    }
}
