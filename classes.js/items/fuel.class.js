class Fuel extends MovableObject {

    IMAGES_FUEL = [
        'img/Items Sprite/Flash/1.png',
        'img/Items Sprite/Flash/2.png',
        'img/Items Sprite/Flash/3.png',
        'img/Items Sprite/Flash/4.png',
    ];

    constructor(x, y) {
        super().loadImage(this.IMAGES_FUEL[0]);
        this.loadImagesArray(this.IMAGES_FUEL);
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 70;
        this.frameX = 24;
        this.frameY = 21;
        this.frameWidth = 25;
        this.frameHeight = 25;
        this.animate();
    }

    /**
     * Animates the fuel images by cycling through the IMAGES_FUEL array at a fixed interval.
     */
    animate() {
        setInterval(() => {
            this.animateImage(this.IMAGES_FUEL)
        }, 200);
    }
}