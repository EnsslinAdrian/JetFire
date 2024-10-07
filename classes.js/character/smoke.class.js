class Smoke extends MovableObject {

IMAGES_SMOKE = [
    'img/Characters/Jetpack Smoke/1.png',
    'img/Characters/Jetpack Smoke/2.png',
    'img/Characters/Jetpack Smoke/3.png',
    'img/Characters/Jetpack Smoke/4.png',
];

constructor(x, y) {
    super().loadImage(this.IMAGES_SMOKE[0]);
    this.loadImagesArray(this.IMAGES_SMOKE);
    
    this.animate();
    this.width = 60;
    this.height = 100;
    this.x = x;
    this.y = y;
}
/**
 * Periodically animates the smoke images in the game.
 * 
 * This method sets up an interval that triggers the `animateImage` method every 200 milliseconds,
 * specifically to animate the smoke images.
 */
animate() {
    setInterval(() => {
        this.animateImage(this.IMAGES_SMOKE);
    }, 200);
}

}