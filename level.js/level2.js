function Level2() {
    LEVEL = new Level(
        [
            // Background (path, x)
            new Background('img/Backgrounds/01/Repeated.png', -998),

            new Background('img/Backgrounds/01/Repeated.png', 1),

            new Background('img/Backgrounds/01/Repeated.png', 1000),

            new Background('img/Backgrounds/01/Repeated.png', 1999),

            new Background('img/Backgrounds/01/Repeated.png', 2998),

            new Background('img/Backgrounds/01/Repeated.png', 3997),

            new Background('img/Backgrounds/01/Repeated.png', 4996),

            new Background('img/Backgrounds/01/Repeated.png', 5995),
        ],

        [
            // Platforms (path, width, height, x, y)
            new Platforms('img/Platform/Terain/3.png', 1000, 100, -999, 500), // 
            new Platforms('img/Platform/Terain/3.png', 1180, 100, 0, 500),
            new Platforms('img/Platform/Terain/3.png', 1000, 100, 1000, 200),
            new Platforms('img/Platform/Terain/3.png', 1000, 100, 2000, 500),
            new Platforms('img/Platform/Terain/3.png', 50, 100, 2400, 480),
            new Platforms('img/Platform/Terain/3.png', 50, 100, 3000, 480),
            new Platforms('img/Platform/Terain/3.png', 1000, 100, 3000, 500),
            new Platforms('img/Platform/Terain/3.png', 800, 100, 4110, 500),
            new Platforms('img/Platform/Terain/3.png', 120, 500, 3990, 200),
            new Platforms('img/Platform/Terain/3.png', 3000, 100, 4000, 500),
            // new Platforms('img/Platform/Terain/1.png', 1000, 300, 999, 299),
        ],

        [
            // Tree (path, x, y)
            new Tree('img/Platform/Tree And Tile set/1.png', 1000, 300),
            new Tree('img/Platform/Tree And Tile set/1.png', 1023, 300),
            new Tree('img/Platform/Tree And Tile set/1.png', 1070, 300),
            new Tree('img/Platform/Tree And Tile set/1.png', 2130, 300),
            new Tree('img/Platform/Tree And Tile set/1.png', 2270, 300),
            new Tree('img/Platform/Tree And Tile set/1.png', 1800, 5),
            new Tree('img/Platform/Tree And Tile set/1.png', 1000, 5),
            new Tree('img/Platform/Tree And Tile set/1.png', 1000, 5),
            new Tree('img/Platform/Tree And Tile set/1.png', 3710, 300),
            new Tree('img/Platform/Tree And Tile set/1.png', 4210, 300),
            new Tree('img/Platform/Tree And Tile set/1.png', 4560, 300),
            new Tree('img/Platform/Tree And Tile set/1.png', 5020, 300),
            new Tree('img/Platform/Tree And Tile set/1.png', 5350, 300),
            new Tree('img/Platform/Tree And Tile set/1.png', 5620, 300),
            // new Tree('img/Platform/Tree And Tile set/2.png', 900, 300),
            // new Tree('img/Platform/Tree And Tile set/3.png', 1340, 180),
        ],

        [
            // FloatingPlatform (paht, x, y)
            new FloatingPlatform('img/Platform/Terain/8.png', 3300, 200),
            new FloatingPlatform('img/Platform/Terain/8.png', 3500, 300),
            new FloatingPlatform('img/Platform/Terain/8.png', 3700, 200),

        ],

        [
            // Coins (x, y)
            new Coins(1200, 160),
            new Coins(1644, 160),
            new Coins(3340, 120),
            new Coins(3740, 120),
            // new Coins(1644, 160),
            // new Coins(1644, 160),
            // new Coins(1644, 160),
            // new Coins(1644, 160),
            // new Coins(1644, 160),
            // new Coins(1644, 160),
            // new Coins(1644, 160),

        ],

        [
            // Fuel (x, y)
            new Fuel(900, 320),
            new Fuel(3520, 240),
            new Fuel(4920, 100),

        ],

        [
            // Heals (x, y)
            new Heals(2800, 225),
            new Heals(3520, 20),

        ],

        [
            // Ammo (x, y)
            new Ammo(1950, 160),
            new Ammo(4440, 100),
            new Ammo(5230, 100),

        ],

        [
            // FlyEnemy (x, y)
            // new FlyEnemy(2600, 200),
            // new FlyEnemy(2400, 200),
            // new FlyEnemy(2500, 200),
            // new FlyEnemy(5500, 200),
            // new FlyEnemy(5600, 200),

        ],

        [
            // ShootEnemy (x)
            // new ShootEnemy(2500),
            // new ShootEnemy(2550),
            // new ShootEnemy(2600),
            // new ShootEnemy(2650),
            // new ShootEnemy(4350),
            // new ShootEnemy(4450),
            // new ShootEnemy(4650),

        ],

        [
            // Water (width, height, x, y)
            new Water(821, 135, 1180, 490),
            // new Water(501, 135, 3200, 490),
            // new Water(501, 135, 3200, 490),
        ],

        [
            // Star (x, y)
            new Star(2600, 100),
            new Star(3000, 100),
            new Star(5820, 80),

        ],

        [
            //Endboss (x, y, width, height, frameX, frameY, frameWidth, frameHeight, swordX, swordY, swordWidht, swordHEight, life)
            new Endboss(6400, 236, 300, 300, 140, 153, 60, 110, 65, 150, 40, 40, 500),
        ],

        [
            // new MovablePlatform('img/Platform/Terain/8.png', 300, 200, 1000),
        ],

        [
            // new MovablePlatformTopButtom('img/Platform/Terain/8.png', 300, 150, 3000),
        ],

        [
            new Wall('img/Platform/Terain/7.png', 3990, 190, 120, 500),
            new Wall('img/Platform/Terain/7.png', 4900, 190, 120, 500),
            new Wall('img/Platform/Terain/7.png', 5200, 250, 120, 500),
            new Wall('img/Platform/Terain/7.png', 5500, 310, 120, 500),
            new Wall('img/Platform/Terain/7.png', 5800, 370, 120, 500),
        ],

        [
            // new Spikes('img/Platform/Terain/10.png', 1500, 470)
        ],

        [
            // new FallingPlatforms('img/Platform/Tree And Tile set/8.png', 2100, 200, 1),
        ],

    );

}

function groundPointsLevel2() {
    groundPoints = {
        groundPointsLevel: [
            { x: -1000, y: 510 },
            { x: 1180, y: 510 },
            { x: 1180, y: 610 },
            { x: 2000, y: 610 },
            { x: 2000, y: 510 },
            { x: 2400, y: 510 },
            { x: 2400, y: 480 },
            { x: 2450, y: 480 },
            { x: 2450, y: 510 },
            { x: 3000, y: 510 },
            { x: 3000, y: 480 },
            { x: 3050, y: 480 },
            { x: 3050, y: 510 },
            { x: 3050, y: 510 },
            { x: 3990, y: 510 },
            { x: 6900, y: 510 },
        ]
    }
}

function platformsLevel2() {
    platformsLevel = {
        platformsLevel: [
            { xStart: 985, xEnd: 2000, height: 195, yLimit: 215 },
            { xStart: 3280, xEnd: 3430, height: 195, yLimit: 220 },
            { xStart: 3470, xEnd: 3650, height: 290, yLimit: 330 },
            { xStart: 3680, xEnd: 3825, height: 190, yLimit: 330 },
            { xStart: 3970, xEnd: 4120, height: 180, yLimit: 330 },
            { xStart: 4880, xEnd: 5030, height: 180, yLimit: 215 },
            { xStart: 5170, xEnd: 5320, height: 250, yLimit: 2870 },
            { xStart: 5480, xEnd: 5620, height: 300, yLimit: 330 },
            { xStart: 5790, xEnd: 5920, height: 365, yLimit: 395 },
            // { xStart: 4680, xEnd: 4820, height: 165, yLimit: 185 },
        ]
    }
}

function movablePlatformsLevel2() {
    movablePlatformsLevel = {
        movablePlatformsLevel: [
            // { xStart: 300, xEnd: 500, height: 195, yLimit: 215, time: 1000},      
            // { xStart: 700, xEnd: 900, height: 195, yLimit: 215, time: 2000},      
        ]
    }
}

function movablePlatformsTopButtomLevel2() {
    movablePlatformsTopButtomLevel = {
        movablePlatformsTopButtomLevel: [
            // { xStart: 290, xEnd: 450, height: 145, yLimit: 165, time: 3000},         
        ]
    };
}

function movablefallingPlatformsLevel2() {
    movablefallingPlatformsLevel = {
        movablefallingPlatformsLevel: [
            // { id: 1, xStart: 2090, xEnd: 2160, height: 195, yLimit: 215, time: 3000},            
        ]
    };
}

function straightGroundPointsLevel2() {
    straightGroundPointsLevel = {
        straightGroundPointsLevel: [
            { xStart: -1000, xEnd: 1180, yLimit: 490 },
            { xStart: 2000, xEnd: 2380, yLimit: 490 },
            { xStart: 2380, xEnd: 2440, yLimit: 460 },
            { xStart: 2440, xEnd: 2950, yLimit: 490 },
            { xStart: 2980, xEnd: 3010, yLimit: 460 },
            { xStart: 3010, xEnd: 6800, yLimit: 490 },
        ]
    }
}

function endbossWeaponLevel2() {
    ENDBOSS_WEAPON_POINTS = {
        ENDBOSS_KEULE: [
            { swordX: 165, swordY: 135 },
            { swordX: 170, swordY: 135 },
            { swordX: 175, swordY: 135 },
        ]
    }
}