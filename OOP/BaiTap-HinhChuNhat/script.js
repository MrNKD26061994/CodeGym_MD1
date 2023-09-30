class Rectangle {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }

    getDienTich() {
        return this.x * this.y;
    }

    getChuVi() {
        return (this.x + this.y) * 2;
    }
}
let rec = new Rectangle(300, 200);
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.moveTo(20,20);

ctx.lineTo(rec.x,20);
ctx.lineTo(rec.x, rec.y);
ctx.lineTo(20, rec.y);
ctx.lineTo(20, 20);

ctx.stroke();
ctx.font = "10px Arial";
ctx.fillText(`${rec.x}`, rec.x/2, 10);
ctx.fillText(`${rec.y}`, rec.x + 10, rec.y/2 + 10);

rec.setX(400);
rec.setY(300);

document.write(`<h1>Diện tích hình tròn: ${rec.getDienTich()}</h1>`)
document.write(`<h1>Chu vi hình tròn: ${rec.getChuVi()}</h1>`)