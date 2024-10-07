function openInGameOptionMenu() {
    if (menuOption) {
        document.getElementById('optionsInGameScreen').classList.add('showOptionsInGameScreen');
    }
}

function closeInGameMenu() {
    document.getElementById('optionsInGameScreen').classList.remove('showOptionsInGameScreen');
}

function openInGameSteering() {
    document.getElementById('openOptionsSteeringInGameScreen').classList.add('showSteering');
}

function closeInGameSteering() {
    document.getElementById('openOptionsSteeringInGameScreen').classList.remove('showSteering');
}

function openInGameSound() {
    document.getElementById('openOptionsSoundInGameScreen').classList.add('showSteering');
}

function closeInGameSound() {
    document.getElementById('openOptionsSoundInGameScreen').classList.remove('showSteering');
}

function soundQuieter() {
    if (currentSound >= 1) {
        currentSound--;
    }
    document.getElementById('soundVolumeImages').src = SOUND_OPTIONS_IMAGES[currentSound];
    soundsVolume();
}

function soundLouder() {
    if (currentSound < 7) {
        currentSound++;
    }
    document.getElementById('soundVolumeImages').src = SOUND_OPTIONS_IMAGES[currentSound];
    soundsVolume();
}

function soundsVolume() {
    world.character.SOUND_WALK.volume = currentSound / 10 ;
    world.character.SOUND_HURT.volume = currentSound / 10 ;
    world.character.SOUND_JETPACK.volume = currentSound / 10 ;
    world.character.SOUND_SHOT.volume = currentSound / 10 ;
}

function musicQuieterInGame() {
    if (currentMusic >= 1) {
        currentMusic--;
    }
    document.getElementById('musicVolumeImagesInGame').src = SOUND_OPTIONS_IMAGES[currentMusic];
    sounds[currentSoundIndex].volume = currentMusic / 10;
}

function musicLouderInGame() {
    if (currentMusic < 7) {
        currentMusic++;
        sounds[currentSoundIndex].volume = currentMusic / 10;
    }
    document.getElementById('musicVolumeImagesInGame').src = SOUND_OPTIONS_IMAGES[currentMusic];
}