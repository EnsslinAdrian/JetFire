class Coins extends MovableObject {

    IMAGES_COINS = [
        'img/Items Sprite/Coins/1.png',
        'img/Items Sprite/Coins/2.png',
        'img/Items Sprite/Coins/3.png',
        'img/Items Sprite/Coins/4.png',
        'img/Items Sprite/Coins/5.png',
        'img/Items Sprite/Coins/6.png',
        'img/Items Sprite/Coins/7.png',
        'img/Items Sprite/Coins/8.png',
    ];

    constructor(x, y) {
        super().loadImage(this.IMAGES_COINS[0]);
        this.loadImagesArray(this.IMAGES_COINS);
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.frameX = 11;
        this.frameY = 12;
        this.frameWidth = 25;
        this.frameHeight = 25;
        this.animate();
    }
    
    /**
     * Animates the coin images by cycling through the IMAGES_COINS array at a fixed interval.
     */
    animate() {
        setInterval(() => {
            this.animateImage(this.IMAGES_COINS)
        }, 200);
    }
}