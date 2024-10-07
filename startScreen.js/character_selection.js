/**
 * Checks which character is marked as the active player and executes their associated function.
 */
function checkActivePlayer() {
    buyCharacters.forEach(character => {
        if (character['activePlayer'] === true) {
            const characterFunction = characterFunctions[character.image];
            if (typeof characterFunction === 'function') {
                characterFunction();
            }
        }
    });
}

/**
 * Opens the character menu by animating the screen elements and updating the character display.
 */
function openCharacterMenu() {
    document.getElementById('titleImage').classList.add('moveScreenLeft');
    document.getElementById('startButtonContainer').classList.add('moveScreenLeft');
    document.getElementById('characterScreen').classList.add('showCharacterScreen');
    updateCharacterImage();
    ckeckCharacterBuy();
}

/**
 * Closes the character menu by reversing the screen animations and hiding the character screen.
 */
function closeCharacterMenu() {
    document.getElementById('titleImage').classList.remove('moveScreenLeft');
    document.getElementById('startButtonContainer').classList.remove('moveScreenLeft');
    document.getElementById('characterScreen').classList.remove('showCharacterScreen');
    document.getElementById('checkMoneyForBuy').classList.add('d-none');
}

/**
 * Updates the character image and price displayed on the screen based on the currently selected character.
 */

function updateCharacterImage() {
    let character = buyCharacters[currentIndex];
    document.getElementById('characterImages').innerHTML = `<img src="${character['image']}">`;
    document.getElementById('characterCoinsPrice').innerHTML = `${character['price']} Coins`;
}

/**
 * Selects the previous character and updates the display.
 */
function arrowLeft() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : buyCharacters.length - 1;
    updateCharacterImage();
    ckeckCharacterBuy();
    document.getElementById('checkMoneyForBuy').classList.add('d-none');
}

/**
 * Selects the next character and updates the display.
 */
function arrowRight() {
    currentIndex = (currentIndex < buyCharacters.length - 1) ? currentIndex + 1 : 0;
    updateCharacterImage();
    ckeckCharacterBuy();
    document.getElementById('checkMoneyForBuy').classList.add('d-none');
}

/**
 * Handles the purchase of a character.
 * @param {number} index - The index of the character to buy.
 */
function buyCharacter(Index) {
    let character = buyCharacters[Index];
    if (chacheCoins >= character.price) {
        character.buy = true;
        chacheCoins -= character.price;
    } else {
        document.getElementById('checkMoneyForBuy').classList.remove('d-none');
    }
    ckeckCharacterBuy();
    saveGame();
    loadGame();
    information();
}

/**
 * Updates the character buy/activate interface based on the current character's status.
 */
function ckeckCharacterBuy() {
    let price = buyCharacters[currentIndex];
    let content = document.getElementById('aktivateOrBuy');
    if (price['buy'] == true) {
        if (price['activePlayer'] == true) {
            content.innerHTML = `<div onclick="activateCharacter(${currentIndex})" class="aktivCharacterButton"><h6>Active</h6></div>`;
        } else {
            content.innerHTML = `<div onclick="activateCharacter(${currentIndex})" class="aktivateCharacterButton"><h6>Activate</h6></div>`; 
        }
    } else {
        content.innerHTML = `<div onclick="buyCharacter(currentIndex)" class="buyCharacterButton"><h6>Buy</h6></div>`;
    }
}

/**
 * Activates the character at the given index.
 * @param {number} currentIndex - The index of the character to activate.
 */
function activateCharacter(currentIndex) {
    buyCharacters.forEach(character => {
        character['activePlayer'] = false;
    });
    let changePlayer = buyCharacters[currentIndex];
    changePlayer['activePlayer'] = true;
    ckeckCharacterBuy();
    saveGame();
}