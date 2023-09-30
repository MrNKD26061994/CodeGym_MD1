// Bài 1
function alertMessage() {
    alert("Xin chào");
}
alertMessage();

// Bài 2
function alertNumber(num) {
    alert(`Số liền sau của ${num} là số ${++num}`)
}
let num = +prompt("Nhập số: ");
alertNumber(num);

// Bài 3
function compareOrSum(num1, num2) {
    if (num1 > num2) {
        alert(`${num1} lớn hơn ${num2}`);
    } else {
        document.write(`Tổng của ${num1} với ${num2} là: ${num1 + num2}`);
    }
}
let num1 = +prompt("Nhập số thứ nhất: ");
let num2 = +prompt("Nhập số thứ hai: ");
compareOrSum(num1,num2);
// Bài 4
function addNumbers() {
    let firstNum = 4;
    let secondNum = 8;
    result = firstNum + secondNum;
    return result;
}
let result = 0;
alert("Giá trị trước khi gọi hàm là: " + result);
result = addNumbers();
alert("Giá trị sau khi gọi hàm là: " + result);

// Bài 5
let str = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
let str1 = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];

let star = prompt("Nhập ngôi sao:")
document.write(displayStar(star));
function displayStar(star) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if(str[i] === star) {
            for (let j = 0; j < str1.length; j++) {
                if(i === j) {
                    result = str1[j];
                    break;
                } else {
                    result = "Không tìm thấy chòm sao";
                }
            }
            return result;
        } else {
            result = "Không tìm thấy chòm sao";
        }
    }
    return  result;
}


