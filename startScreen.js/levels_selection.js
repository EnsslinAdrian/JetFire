let LEVEL;
let groundPoints;
let platformsLevel;
let straightGroundPointsLevel;
let ENDBOSS_WEAPON_POINTS;
let currentLevelIndex = null;

let currentLevel;

let checkLevels = [
    {
      level: 'level1',
      stars: 0,
      available: true
    },
    {
      level: 'level2',
      stars: 0,
      available: false
    },
    {
      level: 'level3',
      stars: 0,
      available: false
    },
    {
      level: 'level4',
      stars: 0,
      available: false
    },
    {
      level: 'level5',
      stars: 0,
      available: false
    },
    {
      level: 'level6',
      stars: 0,
      available: false
    },
];

/**
 * Marks the current level as completed and updates its status.
 * @param {number} earnedStars - The number of stars earned in the level.
 */
function levelCompleted(earnedStars) {
    if (currentLevelIndex !== null) {
        updateLevelStatus(currentLevelIndex, earnedStars);
    } 
}

/**
 * Updates the status of a level with the number of stars earned and unlocks the next level.
 *
 * @param {number} levelIndex - The index of the level being updated.
 * @param {number} earnedStars - The number of stars earned in the level.
 */
function updateLevelStatus(levelIndex, earnedStars) {
    if (checkLevels[levelIndex].stars < earnedStars) {
        checkLevels[levelIndex].stars = earnedStars;
    }
    if (levelIndex + 1 < checkLevels.length) {
        checkLevels[levelIndex + 1].available = true;
    }
    updateLevelImages();
}

/**
 * Updates level icons based on their availability and star ratings.
 * - Available levels show their star rating.
 * - Unavailable levels show a lock icon.
 */
function updateLevelImages() {
    checkLevels.forEach((level, index) => {
        let content = document.getElementById(`levelIcon${index + 1}`);
        if (content) {
            if (level.available) {
                if (level.stars === 1) {
                    content.src = 'img/User Interface/1star.png';
                } else if (level.stars === 2) {
                    content.src = 'img/User Interface/2star.png';
                } else if (level.stars === 3) {
                    content.src = 'img/User Interface/3star.png';
                } else {
                    content.src = 'img/User Interface/0Star.png';
                }
            } else {
                content.src = 'img/User Interface/LockStage.png';
            }
        }
    });
}

/**
 * Opens the levels menu by showing the level screen and hiding other elements.
 */
function openLevelsMenu() {
    document.getElementById('titleImage').classList.add('moveScreenLeft');
    document.getElementById('startButtonContainer').classList.add('moveScreenLeft');
    document.getElementById('levelScreen').classList.add('showLevelScreen');
}

/**
 * Closes the levels menu by hiding the level screen and restoring other elements to their original state.
 */
function closeLevelsMenu() {
    document.getElementById('titleImage').classList.remove('moveScreenLeft');
    document.getElementById('startButtonContainer').classList.remove('moveScreenLeft');
    document.getElementById('levelScreen').classList.remove('showLevelScreen');
}

/**
 * Hides the start screen and shows the canvas container.
 */
function closeStartscreen() {
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('canvasContainer').classList.remove('d-none');
}

function startLevel(index, current, level) {
    currentLevel = level;
    currentLevelIndex = current;
    closeStartscreen();
    checkActivePlayer();
    window[`straightGroundPointsLevel${index}`]();
    window[`platformsLevel${index}`]();
    window[`movablePlatformsLevel${index}`]();
    window[`movablePlatformsTopButtomLevel${index}`]();
    window[`movablefallingPlatformsLevel${index}`]();
    window[`groundPointsLevel${index}`]();
    window[`endbossWeaponLevel${index}`]();
    window[`endbossLevel${index}`]();
    window[`Level${index}`]();
    init();
}

/**
 * Initializes the game for Level 1.
 * Sets the current level and index, hides the start screen, 
 * activates the current player, and sets up level-specific elements 
 * such as platforms, ground points, and the end boss.
 */
function initLevel1() {
    startLevel(1, 0, initLevel1); 
}

function initLevel2() {
    if (checkLevels[1]['available']) {
        startLevel(2, 1, initLevel2); 
    }
}

function initLevel3() {
    if (checkLevels[2]['available']) {
        startLevel(3, 2, initLevel3); 
    }
}

function initLevel4() {
    if (checkLevels[3]['available']) {
        startLevel(4, 3, initLevel4); 
    }
}

function initLevel5() {
    if (checkLevels[4]['available']) {
        startLevel(5, 4, initLevel5); 
    }
}

function initLevel6() {
    if (checkLevels[5]['available']) {
        startLevel(6, 5, initLevel6); 
    }
}
