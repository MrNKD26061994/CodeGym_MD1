class Score {
    x;
    y;
    color;
    point;
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.point = 0;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = this.color;
        this.ctx.fillText(`Điểm: ${this.point}`,this.x,this.y);
    }
    addPoint(){
        this.point += 1;
    }
}