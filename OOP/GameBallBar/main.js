let ball = new Ball(240, 200, 10, "red");
let bar = new Bar(190, 500, 100, 10, "blue")
let score = new Score(10, 570, "Black")
let gameBroad = new GameBroad(bar, ball, score, 21);

function start() {
    gameBroad.play()
    if(gameBroad.ball.res === 0){
        alert('You lose')
        location.reload()
    } else if (gameBroad.ball.res === 1){
        alert('You win')
        location.reload()
    } else {
        requestAnimationFrame(start)
    }
}

function btn() {
    document.getElementById('btn').style.display = 'none'
    start()
}

window.addEventListener("keydown", function (evt){
    if(evt.key === 'ArrowRight') {
        bar.moveRight();
    } else if(evt.key === 'ArrowLeft') {
        bar.moveLeft();
    }
})