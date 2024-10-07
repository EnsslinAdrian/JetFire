class Spikes extends MovableObject {

    constructor(path, x, y) {
        super().loadImage(path);
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 40; 

        this.frameX = 15;
        this.frameY = 5;
        this.frameWidth = 170;
        this.frameHeight = 35;
    }

}