let ball = new Ball(240, 200, 10, "red");
let bar = new Bar(210, 500, 60, 10, "blue")
let score = new Score(100, 100, "Black")
let gameBroad = new GameBroad(bar, ball, score, 14);
// let listBrick = creatBrick();
// ball.draw();
// console.log(listBrick)

// function getRandomHex() {
//     return Math.floor(Math.random() * 255);
// }
//
// function  getRandomColor() {
//     let red = getRandomHex();
//     let green = getRandomHex();
//     let blue = getRandomHex();
//     // return `rbg(${red},${blue},${green})`;
//     return "rgb(" + red + "," + blue + "," + green +")";
// }
//
// function drawListBrick() {
//     for (let i = 0; i < listBrick.length; i++) {
//         if(listBrick[i].status === 1) {
//             listBrick[i].draw();
//         }
//     }
// }
// function creatBrick() {
//     let x = 10;
//     let y = 10;
//     let count = 28;
//     let space = 20;
//     let listBrick = [];
//     for (let i = 0; i < count; i++) {
//         let brick = new Brick();
//         brick.setColor(getRandomColor());
//         if(x < brick.canvas.width - brick.width + 10) {
//             brick.setX(x);
//             brick.setY(y)
//             listBrick.push(brick);
//             x = x + brick.width + space;
//         } else {
//             x = 10;
//             y = y + brick.height + 10;
//             --i;
//         }
//     }
//     return listBrick;
// }

function start() {
    gameBroad.play()
    requestAnimationFrame(start)
}
start()

// function play() {
//     ball.move();
//     bar.draw();
//     ball.checkVarListBrick();
//     drawListBrick()
//     ball.checkVarBar(bar);
//     ball.checkVarBorder();
//     requestAnimationFrame(play)
// }
// play();



window.addEventListener("keydown", function (evt){
    if(evt.key === 'ArrowRight') {
        bar.moveRight();
    } else if(evt.key === 'ArrowLeft') {
        bar.moveLeft();
    }
})