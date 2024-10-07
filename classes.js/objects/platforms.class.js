class Platforms extends MovableObject {

    constructor(path, width, height, x, y) {
        super().loadImage(path);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
}