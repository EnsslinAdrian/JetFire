function Level1() {
    LEVEL = new Level(
        [
            new Background('img/Backgrounds/03/Layer01.png', -998),
            new Background('img/Backgrounds/03/Layer02.png', -998),
            new Background('img/Backgrounds/03/Layer03.png', -998),

            new Background('img/Backgrounds/03/Layer01.png', 1),
            new Background('img/Backgrounds/03/Layer02.png', 1),
            new Background('img/Backgrounds/03/Layer03.png', 1),

            new Background('img/Backgrounds/03/Layer01.png', 1000),
            new Background('img/Backgrounds/03/Layer02.png', 1000),
            new Background('img/Backgrounds/03/Layer03.png', 1000),

            new Background('img/Backgrounds/03/Layer01.png', 1999),
            new Background('img/Backgrounds/03/Layer02.png', 1999),
            new Background('img/Backgrounds/03/Layer03.png', 1999),

            new Background('img/Backgrounds/03/Layer01.png', 2998),
            new Background('img/Backgrounds/03/Layer02.png', 2998),
            new Background('img/Backgrounds/03/Layer03.png', 2998),

            new Background('img/Backgrounds/03/Layer01.png', 3997),
            new Background('img/Backgrounds/03/Layer02.png', 3997),
            new Background('img/Backgrounds/03/Layer03.png', 3997),

            new Background('img/Backgrounds/03/Layer01.png', 4996),
            new Background('img/Backgrounds/03/Layer02.png', 4996),
            new Background('img/Backgrounds/03/Layer03.png', 4996),

            new Background('img/Backgrounds/03/Layer01.png', 5996),
            new Background('img/Backgrounds/03/Layer02.png', 5996),
            new Background('img/Backgrounds/03/Layer03.png', 5996),
        ],

        [
            new Platforms('img/Platform/Terain/3.png', 1000, 100, -1000, 500),
            new Platforms('img/Platform/Terain/3.png', 1000, 100, 0, 500),
            new Platforms('img/Platform/Terain/1.png', 1000, 300, 999, 299),
            new Platforms('img/Platform/Terain/3.png', 1000, 100, 999 * 2, 500),
            new Platforms('img/Platform/Terain/1.png', 800, 300, 3700, 299),
            new Platforms('img/Platform/Terain/1.png', 800, 300, 2400, 299),
            new Platforms('img/Platform/Terain/3.png', 1000, 100, 4500, 500),
            new Platforms('img/Platform/Terain/4.png', 600, 100, 5400, 500),
            new Platforms('img/Platform/Terain/3.png', 1000, 100, 6000, 500),
        ],

        [
            new Tree('img/Platform/Tree And Tile set/1.png', 200, 300),
            new Tree('img/Platform/Tree And Tile set/2.png', 900, 300),
            new Tree('img/Platform/Tree And Tile set/3.png', 1340, 180),
            new Tree('img/Platform/Tree And Tile set/1.png', 1800, 300),
            new Tree('img/Platform/Tree And Tile set/2.png', 2300, 300),
            new Tree('img/Platform/Tree And Tile set/3.png', 2650, 180),
            new Tree('img/Platform/Tree And Tile set/1.png', 3060, 300),
            new Tree('img/Platform/Tree And Tile set/1.png', 4000, 160),
            new Tree('img/Platform/Tree And Tile set/3.png', 3700, 300),
            new Tree('img/Platform/Tree And Tile set/2.png', 4300, 300),
            new Tree('img/Platform/Tree And Tile set/3.png', 4800, 300),
            new Tree('img/Platform/Tree And Tile set/1.png', 5200, 300),
            new Tree('img/Platform/Tree And Tile set/1.png', 5800, 300),
            new Tree('img/Platform/Tree And Tile set/1.png', 6900, 300),
        ],

        [
            new FloatingPlatform('img/Platform/Terain/8.png', 1800, 200),
            new FloatingPlatform('img/Platform/Terain/8.png', 2150, 200),
            new FloatingPlatform('img/Platform/Terain/8.png', 3050, 200),
            new FloatingPlatform('img/Platform/Terain/8.png', 3700, 200),
            new FloatingPlatform('img/Platform/Terain/8.png', 4350, 200),
            new FloatingPlatform('img/Platform/Terain/8.png', 4700, 170),
        ],

        [
            new Coins(1644, 160),
            new Coins(1835, 140),
            new Coins(2180, 140),
            new Coins(2920, 160),
            new Coins(3085, 140),
            new Coins(3270, 140),
            new Coins(3570, 140),
            new Coins(4380, 140),
            new Coins(4735, 110),

        ],

        [
            new Fuel(750, 320),
            new Fuel(1995, 60),
            new Fuel(4535, 70),
        ],

        [
            new Heals(3410, 225),
            new Heals(4950, 215),
        ],

        [
            new Ammo(450, 320),
            new Ammo(2550, 60),
            new Ammo(3730, 135),
        ],

        [
            new FlyEnemy(1000, 100),
            new FlyEnemy(2350, 100),
            new FlyEnemy(3200, 100),
            new FlyEnemy(3650, 60),
            new FlyEnemy(4400, 60),
        ],

        [
            new ShootEnemy(920),
            new ShootEnemy(2000),
            new ShootEnemy(2400),
            new ShootEnemy(4500),
            new ShootEnemy(5000),
        ],

        [
            new Water(501, 135, 3200, 490),
        ],

        [
            new Star(1000, 100),
            new Star(3410, 30),
            new Star(5100, 70),
        ],

        [
            //Endboss (x, y, width, height, frameX, frameY, frameWidth, frameHeight, swordX, swordY, swordWidht, swordHEight, life)
            new Endboss(6400, 236, 300, 300, 140, 153, 60, 110, 65, 150, 40, 40, 500),
        ],

        [
            new MovablePlatform('img/Platform/Terain/8.png', 900, 200, 2000),
            new MovablePlatform('img/Platform/Terain/8.png', 3300, 300, 2200),
        ],

        [
            // new MovablePlatformTopButtom('img/Platform/Terain/8.png', 300, 150, 3000),

        ],

        [
            // new Wall('img/Platform/Terain/7.png', 300, 209, 100, 340),
        ],

        [
            // new Spikes('img/Platform/Terain/10.png', 1500, 470)
        ],

        [
            //  new FallingPlatforms('img/Platform/Tree And Tile set/8.png', 2100, 200, 1), 

        ],

    );

}

function groundPointsLevel1() {
    groundPoints = {
        groundPointsLevel: [
            { x: -1000, y: 510 },
            //Berg Nr. 1
            { x: 1160, y: 510 },
            { x: 1275, y: 425 },
            { x: 1576, y: 310 },
            { x: 1705, y: 470 },
            { x: 1950, y: 513 },
            // Berg Nr. 2
            { x: 2525, y: 510 },
            { x: 2620, y: 425 },
            { x: 2860, y: 310 },
            { x: 2965, y: 470 },
            { x: 3160, y: 513 },
            //Wasser
            { x: 3200, y: 513 },
            { x: 3200, y: 650 },
            { x: 3700, y: 650 },
            { x: 3700, y: 513 },
            { x: 3826, y: 513 },
            // Berg Nr. 3
            { x: 3828, y: 513 },
            { x: 3920, y: 425 },
            { x: 4162, y: 310 },
            { x: 4264, y: 470 },
            { x: 4450, y: 510 },
            //Gerade Fläche
            { x: 7000, y: 510 },

        ]
    }
}

function platformsLevel1() {
    platformsLevel = {
        platformsLevel: [
            { xStart: 1780, xEnd: 1920, height: 195, yLimit: 215 },
            { xStart: 2130, xEnd: 2270, height: 195, yLimit: 215 },
            { xStart: 3030, xEnd: 3170, height: 195, yLimit: 215 },
            { xStart: 3680, xEnd: 3820, height: 195, yLimit: 215 },
            { xStart: 4330, xEnd: 4470, height: 195, yLimit: 215 },
            { xStart: 4680, xEnd: 4820, height: 165, yLimit: 185 },
        ]
    }
}

function movablePlatformsLevel1() {
    movablePlatformsLevel = {
        movablePlatformsLevel: [
            { xStart: 890, xEnd: 1060, height: 195, yLimit: 215, time: 2000 },
            { xStart: 3280, xEnd: 3470, height: 295, yLimit: 325, time: 2200 },
        ]
    }
}

function movablePlatformsTopButtomLevel1() {
    movablePlatformsTopButtomLevel = {
        movablePlatformsTopButtomLevel: [
            // { xStart: 290, xEnd: 450, height: 145, yLimit: 165, time: 3000},         
        ]
    };
}

function movablefallingPlatformsLevel1() {
    movablefallingPlatformsLevel = {
        movablefallingPlatformsLevel: [
            // { id: 1, xStart: 2090, xEnd: 2160, height: 195, yLimit: 215, time: 3000},               
        ]
    };
}

function straightGroundPointsLevel1() {
    straightGroundPointsLevel = {
        straightGroundPointsLevel: [
            { xStart: -1000, xEnd: 1150, yLimit: 490 },
            { xStart: 1900, xEnd: 2510, yLimit: 490 },
            { xStart: 4400, xEnd: 7000, yLimit: 490 },
        ]
    }
}

function endbossWeaponLevel1() {
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
