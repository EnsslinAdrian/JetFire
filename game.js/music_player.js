let startSound = new Audio('audio/cave-of-light-13566.mp3');
let startSound2 = new Audio('audio/action-techno-beat-121310.mp3');
let startSound3 = new Audio('audio/mystical-background-music-for-video-mysterious-background-for-vlog-168274.mp3');
let startSound4 = new Audio('audio/quirky-comedy-documentary-155583.mp3');

let sounds = [startSound, startSound2, startSound3, startSound4];
let soundsName = ['Cave-of-Light', 'Rhythmic Pulse', 'Mystic Echoes', 'Whimsical Tunes'];

/**
 * Updates the 'soundName' element with the current sound name.
 */
function updateSoundName() {
    document.getElementById('soundName').textContent = soundsName[currentSoundIndex];
}

/**
 * Plays the current sound and updates the sound name.
 * Sets up an event listener to loop the sound when it ends.
 */
function playSound() {
    sounds[currentSoundIndex].play();
    sounds[currentSoundIndex].addEventListener('ended', loopCurrentSound);
    updateSoundName();
}

/**
 * Loops the current sound by resetting its playback time to the start and replaying it.
 */
function loopCurrentSound() {
    sounds[currentSoundIndex].currentTime = 0;
    sounds[currentSoundIndex].play();
}

/**
 * Stops the current sound, advances to the next sound in the list, and plays it.
 */
function nextMusic() {
    sounds[currentSoundIndex].pause();
    sounds[currentSoundIndex].removeEventListener('ended', loopCurrentSound);
    currentSoundIndex = (currentSoundIndex + 1) % sounds.length;
    playSound();
}

// document.addEventListener("click", playSound, { once: true });

/**
 * Toggles the playback of the current sound. Updates the UI to reflect the play or pause state.
 */
function stopMusic() {
    if (sounds[currentSoundIndex].paused) {
        sounds[currentSoundIndex].play();
        document.getElementById('stopMusikImage').src = 'img/User Interface/SoundON.png';
        document.getElementById('stopMusicImageOption').src = 'img/Gui/33.png';
        document.getElementById('stopMusicImageOptionInGame').src = 'img/Gui/33.png';
    } else {
        sounds[currentSoundIndex].pause();
        document.getElementById('stopMusikImage').src = 'img/User Interface/SoundOff.png';
        document.getElementById('stopMusicImageOption').src = 'img/Gui/34.png';
        document.getElementById('stopMusicImageOptionInGame').src = 'img/Gui/34.png';
    }
}