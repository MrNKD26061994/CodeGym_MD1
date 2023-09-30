class GameBroad {
    bar;
    ball;
    score;
    count;
    listBrick;

    constructor(bar, ball, score, count) {
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.bar = bar;
        this.ball = ball;
        this.score = score;
        this.count = count;
        this.listBrick = this.creatListBrick();
    }

    play() {
        this.ball.move();
        this.bar.draw();
        ball.checkVarListBrick(this.listBrick, this.score);
        this.drawListBrick();

        this.ball.checkVarBar(this.bar);
        this.ball.checkVarBorder();
        this.score.draw();
    }
    drawListBrick() {
        for (let i = 0; i < this.listBrick.length; i++) {
            if(this.listBrick[i].status === 1) {
                this.listBrick[i].draw();
            }
        }
    }
    creatListBrick() {
        let x = 10;
        let y = 10;
        let space = 20;
        let listBrick = [];
        for (let i = 0; i < this.count; i++) {
            let brick = new Brick();
            brick.setColor(this.getRandomColor());
            // if(x < brick.canvas.width - brick.width + 10) {
            if(x < this.canvas.width - brick.width - 10) {
                brick.setX(x);
                brick.setY(y)
                listBrick.push(brick);
                x = x + brick.width + space;
            } else {
                x = 10;
                y = y + brick.height + 10;
                --i;
            }
        }
        return listBrick;
    }

    getRandomHex() {
        return Math.floor(Math.random() * 255);
    }

    getRandomColor() {
        let red = this.getRandomHex();
        let green = this.getRandomHex();
        let blue = this.getRandomHex();
        // return `rbg(${red},${blue},${green})`;
        return "rgb(" + red + "," + blue + "," + green +")";
    }
}