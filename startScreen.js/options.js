function openOptionMenu() {
    document.getElementById('titleImage').classList.add('moveScreenLeft');
    document.getElementById('startButtonContainer').classList.add('moveScreenLeft');
    document.getElementById('optionsSection').classList.add('showOptionScreen');
}

function closeOptionMenu() {
    document.getElementById('titleImage').classList.remove('moveScreenLeft');
    document.getElementById('startButtonContainer').classList.remove('moveScreenLeft');
    document.getElementById('optionsSection').classList.remove('showOptionScreen');
}

function openSteering() {
    document.getElementById('openOptionsSteeringScreen').classList.add('showSteering');
}

function closeSteering() {
    document.getElementById('openOptionsSteeringScreen').classList.remove('showSteering');
}

function openSound() {
    document.getElementById('openOptionsSoundScreen').classList.add('showSteering');
}

function closeSound() {
    document.getElementById('openOptionsSoundScreen').classList.remove('showSteering');
}

function openLegalNotice() {
    document.getElementById('openOptionsImpressumScreen').classList.add('showSteering');
}

function closeLegalNotice() {
    document.getElementById('openOptionsImpressumScreen').classList.remove('showSteering');
}


SOUND_OPTIONS_IMAGES = [
    'img/Gui/47.png',
    'img/Gui/46.png',
    'img/Gui/45.png',
    'img/Gui/44.png',
    'img/Gui/43.png',
    'img/Gui/42.png',
    'img/Gui/41.png',
    'img/Gui/40.png',
];

function musicQuieter() {
    if (currentMusic >= 1) {
        currentMusic--;
    }
    document.getElementById('musicVolumeImages').src = SOUND_OPTIONS_IMAGES[currentMusic];
    sounds[currentSoundIndex].volume = currentMusic / 10;
}

function musicLouder() {
    if (currentMusic < 7) {
        currentMusic++;
        sounds[currentSoundIndex].volume = currentMusic / 10;
    }
    document.getElementById('musicVolumeImages').src = SOUND_OPTIONS_IMAGES[currentMusic];
}






