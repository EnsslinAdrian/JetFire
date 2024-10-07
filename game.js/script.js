let world;
let ctx;
let canvas;
let keyboard = new Keyboard();
let chacheCoins = 0;
let currentIndex = 0;
let currentSoundIndex = 0;

let currentMusic = 7;
let currentSound = 7;
let menuOption = true;

loadGame();

/**
 * Updates the UI with the number of coins saved in local storage and calls `levelCompleted`.
 * If no coins are saved, it defaults to 0.
 */
function information() {
    levelCompleted();
    let savedCoins = localStorage.getItem('chacheCoins');
    if (savedCoins === null) {
        savedCoins = 0;
    }
    document.getElementById('coins').innerHTML = savedCoins;
    // initLevel2();
}

/**
 * Initializes the canvas and its context, creates a new `World` instance, and loads the progress bar.
 */
function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    world = new World(canvas, keyboard);
    // loadBar();
}

/**
 * Displays the game over screen by removing the 'd-none' class from the game over element.
 */
function gameOver() {
    menuOption = false;
    document.getElementById('gameOver').classList.remove('d-none');
}

/**
 * Displays the win game screen by removing the 'd-none' class from the win game element,
 * checks items required for winning, and stops the game.
 */
function winGame() {
    menuOption = false;
    document.getElementById('winGame').classList.remove('d-none');
    checkItemsWin();
    world.stoppGame();
}

/**
 * Updates the displayed number of collected coins and stars upon winning the game.
 * It adds the collected coins to a cached total, updates the level status with the number of stars,
 * and saves the game state.
 */
function checkItemsWin() {
    let coins = document.getElementById('coinsCrowd');
    let stars = document.getElementById('starsCrowd');
    let checkCoins = world.character.coins;
    let checkStars = world.character.star;
    coins.innerHTML = checkCoins;
    stars.innerHTML = checkStars;

    if (chacheCoins === null) {
        chacheCoins = 0;
    } else {
        chacheCoins = parseInt(chacheCoins);
    }
    chacheCoins += checkCoins;

    if (currentLevelIndex !== null) {
        updateLevelStatus(currentLevelIndex, checkStars);
    }

    saveGame();
}

window.addEventListener(('keydown'), (event) => {
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (event.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (event.keyCode == 70) {
        keyboard.F = true;
    }

    if (event.keyCode == 38) {
        keyboard.UP = true;
    }
})

window.addEventListener(('keyup'), (event) => {
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (event.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (event.keyCode == 70) {
        keyboard.F = false;
    }

    if (event.keyCode == 38) {
        keyboard.UP = false;
    }
})

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btLeft').addEventListener('touchstart', () => {
        keyboard.LEFT = true;
    });

    document.getElementById('btLeft').addEventListener('touchend', () => {
        keyboard.LEFT = false;
    });

    document.getElementById('btRight').addEventListener('touchstart', () => {
        keyboard.RIGHT = true;
    });

    document.getElementById('btRight').addEventListener('touchend', () => {
        keyboard.RIGHT = false;
    });

    document.getElementById('btFly').addEventListener('touchstart', () => {
        keyboard.UP = true;
    });

    document.getElementById('btFly').addEventListener('touchend', () => {
        keyboard.UP = false;
    });

    document.getElementById('btJump').addEventListener('touchstart', () => {
        keyboard.SPACE = true;
    });

    document.getElementById('btJump').addEventListener('touchend', () => {
        keyboard.SPACE = false;
    });

    document.getElementById('btShoot').addEventListener('touchstart', () => {
        keyboard.F = true;
    });

    document.getElementById('btShoot').addEventListener('touchend', () => {
        keyboard.F = false;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.mobileSteeringButton');
    const activeTouches = {};

    buttons.forEach(button => {
        // Touchstart Event
        button.addEventListener('touchstart', (event) => {
            event.preventDefault(); // Verhindert das Standardverhalten
            const key = event.target.id.replace('bt', '').toUpperCase();
            activeTouches[event.changedTouches[0].identifier] = key;
            keyboard[key] = true;
            button.classList.add('active'); // Optional: Visuelles Feedback
        });

        // Touchend Event
        button.addEventListener('touchend', (event) => {
            event.preventDefault(); // Verhindert das Standardverhalten
            const key = activeTouches[event.changedTouches[0].identifier];
            if (key) {
                keyboard[key] = false;
                delete activeTouches[event.changedTouches[0].identifier];
            }
            button.classList.remove('active'); // Entfernt das visuelle Feedback
            button.blur(); // Entfernt den Fokus vom Button
        });

        // Touchcancel Event: Wird aufgerufen, wenn ein Touch-Ereignis unerwartet beendet wird (z.B. durch Systeminterruptionen)
        button.addEventListener('touchcancel', (event) => {
            event.preventDefault(); // Verhindert das Standardverhalten
            const key = activeTouches[event.changedTouches[0].identifier];
            if (key) {
                keyboard[key] = false;
                delete activeTouches[event.changedTouches[0].identifier];
            }
            button.classList.remove('active');
            button.blur();
        });

        // Optional: Verhindert das Kontextmenü bei langem Drücken
        button.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    });
});

/**
 * Restarts the current level by stopping the game, closing various interfaces, 
 * hiding the game over and win screens, and resetting the level state.
 * Also sets the `menuOption` to true to enable menu interactions.
 */
function restartLevel() {
    world.stoppGame();
    closeSound();
    closeSteering();
    closeInGameMenu();
    document.getElementById('gameOver').classList.add('d-none');
    document.getElementById('winGame').classList.add('d-none');
    currentLevel();
    menuOption = true;
}

/**
 * Reloads the current page, effectively resetting the game and returning to the main menu.
 */
function mainMenu() {
    location.reload()
}

/**
 * Animates the loading bar by increasing its width from 0% to 100%,
 * updating the text content to show progress, and hides the loading screen when complete.
 */
function loadBar() {
    let bar = document.getElementById('loadBar');
    let text = document.getElementById('loadBarText');
    let width = parseInt(bar.style.width);
    let content = document.getElementById('loadScreen');

    let interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            content.classList.add('d-none');
        } else {
            width += 1;
            bar.style.width = width + '%';
            text.textContent = width + '%';
        }
    }, 30);
}

/**
 * Saves game state to localStorage.
 * - Saves the current character data as a JSON string under the 'character' key.
 * - Saves the level progress as a JSON string under the 'levels' key.
 * - Saves the current amount of coins under the 'chacheCoins' key.
 * - Saves the index of the current level under the 'currentLevelIndex' key.
 */
function saveGame() {
    let saveCharacterAsText = JSON.stringify(buyCharacters);
    let saveLevelsAsText = JSON.stringify(checkLevels);
    localStorage.setItem('character', saveCharacterAsText);
    localStorage.setItem('levels', saveLevelsAsText);
    localStorage.setItem('chacheCoins', chacheCoins);
    localStorage.setItem('currentLevelIndex', currentLevelIndex);
}

/**
 * Loads game data from local storage, including characters, coins, levels, and current level index.
 * Updates global variables with the loaded data.
 */
function loadGame() {
    let saveCharacterAsText = localStorage.getItem('character');
    if (saveCharacterAsText) {
        buyCharacters = JSON.parse(saveCharacterAsText);
    }

    let savedCoins = localStorage.getItem('chacheCoins');
    if (savedCoins !== null) {
        chacheCoins = parseInt(savedCoins);
    }

    let saveLevelsAsText = localStorage.getItem('levels');
    if (saveLevelsAsText) {
        checkLevels = JSON.parse(saveLevelsAsText);
    }

    let savedLevelIndex = localStorage.getItem('currentLevelIndex');
    if (savedLevelIndex !== null) {
        currentLevelIndex = parseInt(savedLevelIndex);
    }
}
