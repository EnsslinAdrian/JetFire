class Heals extends MovableObject {

    IMAGES_HEALS = [
        'img/Items Sprite/Heals/1.png',
        'img/Items Sprite/Heals/2.png',
        'img/Items Sprite/Heals/3.png',
        'img/Items Sprite/Heals/4.png',
    ];
    
        constructor(x, y) {
            super().loadImage(this.IMAGES_HEALS[0]);
            this.loadImagesArray(this.IMAGES_HEALS);
            this.x = x;
            this.y = y;
            this.width = 70;
            this.height = 70;
            this.frameX = 24;
            this.frameY = 24;
            this.frameWidth = 25;
            this.frameHeight = 25;
            this.animate();
        }

/**
 * Animates the fuel images by cycling through the IMAGES_HEALS array at a fixed interval.
 */
        animate() {
            setInterval(() => {
                this.animateImage(this.IMAGES_HEALS)
            }, 200);
        }
}