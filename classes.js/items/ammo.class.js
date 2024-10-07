class Ammo extends MovableObject {

    IMAGES_AMMO = [
        'img/Items Sprite/item1/1.png',
        'img/Items Sprite/item1/2.png',
        'img/Items Sprite/item1/3.png',
        'img/Items Sprite/item1/4.png',
        'img/Items Sprite/item1/5.png',
        'img/Items Sprite/item1/6.png',
        'img/Items Sprite/item1/7.png',
        'img/Items Sprite/item1/8.png',

    ];

    constructor(x, y) {
        super().loadImage(this.IMAGES_AMMO[0]);
        this.loadImagesArray(this.IMAGES_AMMO);
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 60;
        this.frameX = 15.7;
        this.frameY = 17;
        this.frameWidth = 25;
        this.frameHeight = 25;
        this.animate();
    }

    /**
     * Animates the ammo images by cycling through the IMAGES_AMMO array at a fixed interval.
     */
    animate() {
        setInterval(() => {
            this.animateImage(this.IMAGES_AMMO)
        }, 200);
    }
}