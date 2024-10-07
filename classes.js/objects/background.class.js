class Background extends MovableObject {

    constructor(path, x) {
        super().loadImage(path);
        this.x = x;
        this.y = 0;
        this.width = 1000;
        this.height = 600;
    }
}