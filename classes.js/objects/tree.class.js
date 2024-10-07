class Tree extends MovableObject {

    constructor(path, x, y) {
        super().loadImage(path);
        this.x = x;
        this.y = y;
        this.height = 200;
        this.width = 150;
    }
}