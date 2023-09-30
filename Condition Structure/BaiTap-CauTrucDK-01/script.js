function result() {
    let a = document.getElementById('a');
    let b = document.getElementById('b');
    let result01 = document.getElementById('result01');
    let valueA = +a.value;
    let valueB = +b.value;

    if(valueA % valueB == 0) {
        result01.innerHTML = "Số " + valueA + " chia hết cho số " + valueB;
    } else {
        result01.innerHTML = "Số " + valueA + " không chia hết cho số " + valueB;
    }

    let age = document.getElementById('age');
    let valueAge = +age.value;
    let result02 = document.getElementById('result02');
    let curDate = new Date();
    let curYear = curDate.getFullYear();
    if(curYear - valueAge >= 16) {
        result02.innerHTML = "Đủ điều kiện vào lớp 10";
    } else {
        result02.innerHTML = "Không đủ điều kiện vào lớp 10";
    }

    let number = document.getElementById('number');
    let valueNumber = +number.value;
    let result03 = document.getElementById('result03');
    if(valueNumber >= 0) {
        result03.innerHTML = "Số nguyên dương";
    } else {
        result03.innerHTML = "Số nguyên âm";
    }

    let numberA = document.getElementById('numberA');
    let numberB = document.getElementById('numberB');
    let numberC = document.getElementById('numberC');
    let valueNumberA = +numberA.value;
    let valueNumberB = +numberB.value;
    let valueNumberC = +numberC.value;
    let result04 = document.getElementById('result04');
    if(valueNumberA > valueNumberB) {
        if(valueNumberA > valueNumberc) {
            result04.innerHTML = "Số lớn nhất là: " + valueNumberA;
        }
    } else {
        if(valueNumberB > valueNumberC) {
            result04.innerHTML = "Số lớn nhất là: " + valueNumberB;
        } else {
            result04.innerHTML = "Số lớn nhất là: " + valueNumberC;
        }
    }

    let result05 = document.getElementById('result05');
    let diemTB = (valueNumberA + valueNumberB + valueNumberC) / 3;
    if(diemTB < 5) {
        result05.innerHTML = "Học lực Trung Bình";
    } else if(diemTB < 8) {
        result05.innerHTML = "Học lực Khá";
    } else {
        result05.innerHTML = "Học lực Giỏi";
    }

    let sales = document.getElementById('sales');
    let valueSales = +sales.value;
    let result06 = document.getElementById('result06');
    result06.innerHTML = "Tiền hoa hồng: " + valueSales*0.1

    let time = document.getElementById('time');
    let valueTime = +time.value;
    let result07 = document.getElementById('result07');
    result07.innerHTML = "Tiền điện thoại: " + valueTime*1000
}
