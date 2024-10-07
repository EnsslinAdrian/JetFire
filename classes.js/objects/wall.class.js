class Wall extends MovableObject {

    constructor(path, x, y, width, heigth) {
      super().loadImage(path);
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = heigth;
      this.frameX = 0;
      this.frameY = 25;
      this.frameWidth = width;
      this.frameHeight = heigth;
    }

}