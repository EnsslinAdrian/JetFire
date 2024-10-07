class Star extends MovableObject {


    constructor(x, y) {
        super().loadImage('img/Items Sprite/star_1.png');
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 70;
        this.frameX = 15;
        this.frameY = 18;
        this.frameWidth = 40;
        this.frameHeight = 40;
    }

}