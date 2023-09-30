class Ball {
    x;
    y;
    r;
    color;
    speed;
    flag;
    canvas;
    ctx;

    number;

    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.speed = 3;
        this.flag = 'down';
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');

        this.number = 0;
    }
    checkVarBrick(brick) {

        if (brick.status === 1) {
            if(this.x >= brick.x && brick.x + brick.width >= this.x
                && this.y - this.r <= brick.y + brick.height) {
                if(this.flag === 'upLeft'){
                    this.flag = 'downLeft';
                } else {
                    this.flag = 'downRight';
                }
                return true;
            }
            return false;
        }

    }
    checkVarListBrick(listBrick, score) {
        for (let i = 0; i < listBrick.length; i++) {
            if(this.checkVarBrick(listBrick[i]) === true){
                listBrick[i].status = 0;
                score.addPoint();
            }
        }
    }

    checkVarBar(bar) {
        if(this.y + this.r >= bar.y && this.x >= bar.x - this.r && this.x <= bar.x + bar.width + this.r) {
            if(bar.flag === 'left') {
                this.flag = 'upLeft';
            } else {
                this.flag = 'upRight';
            }
            this.number = Math.ceil(Math.random() * 9);
        }
    }

    checkVarBorder() {
        if(this.y - this.r <= 0) {
            if(this.flag === 'upRight') {
                this.flag = 'downRight';
            } else {
                    this.flag = 'downLeft';
            }
        } else if(this.x - this. r <= 0){
            if(this.flag === 'upLeft') {
                this.flag = 'upRight'
            } else {
                this.flag = 'downRight'
            }
        } else if(this.x + this.r >= this.canvas.width) {
            if(this.flag === 'upRight') {
                this.flag = 'upLeft';
            } else {
                this.flag = 'downLeft';
            }
        } else if(this.y - this.r >= this.canvas.height){
            this.y = this.canvas.height;
            this.flag = 'up'
        }
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    move() {
        this.clear();
        switch (this.flag) {
            case 'down':
                this.moveDown();
                break;
            case 'downLeft':
                this.moveDownLeft();
                break;
            case 'downRight':
                this.moveDownRight();
                break;
            case 'upLeft':
                this.moveUpLeft();
                break;
            case 'upRight':
                this.moveUpRight();
                break;
            case 'up':
                this.moveUp();
                break;

        }
        this.draw();
    }
    moveDown() {
        this.y += this.speed;
    }
    moveDownLeft() {
        this.x -= this.speed;
        this.y += this.number;
    }
    moveDownRight() {
        this.x += this.speed;
        this.y += this.number;
    }
    moveUp() {
        this.y -= this.speed;
    }
    moveUpLeft() {
        this.x -= this.speed;
        this.y -= this.number;
    }
    moveUpRight() {
        this.x += this.speed;
        this.y -= this.number;
    }
    moveRight() {
        this.x += this.speed;
    }
}