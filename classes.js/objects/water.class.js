class Water extends MovableObject {

    IMAGE_WATER = [
        'img/Platform/Water Sprite/1.png',
        'img/Platform/Water Sprite/2.png',
        'img/Platform/Water Sprite/3.png',
        'img/Platform/Water Sprite/4.png',
        'img/Platform/Water Sprite/5.png',
        'img/Platform/Water Sprite/6.png',
    ];

    constructor(width, height, x, y) {
        super().loadImage(this.IMAGE_WATER[0]);
        this.loadImagesArray(this.IMAGE_WATER);
        this.animate();
        this.width = width;
        this.x = x;
        this.y = y;
        this.height = height;
        this.frameX = 0;
        this.frameY = 24;
        this.frameWidth = 501;
        this.frameHeight = 400;
    }
/**
 * Periodically animates the water image in the game.
 * 
 * This method sets up an interval that triggers the `animateImage` method every 200 milliseconds,
 * specifically to animate the water image.
 */
    animate() {
        setInterval(() => {
            this.animateImage(this.IMAGE_WATER);
        }, 200);
    }
}