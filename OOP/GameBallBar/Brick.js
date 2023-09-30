class Brick {
    x;
    y;
    width;
    height;
    color;
    status;
    constructor() {
        this.width = 50;
        this.height = 30;
        this.status = 1;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
    setColor(color) {
        this.color = color;
    }
}