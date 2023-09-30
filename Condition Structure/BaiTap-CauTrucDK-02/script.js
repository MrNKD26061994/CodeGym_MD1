function result() {
    let a = document.getElementById('a');
    let result01 = document.getElementById('result01');
    let valueA = +a.value;
    result01.innerHTML = valueA + " độ C = " + (valueA * 9/5 + 32) + " độ F";


    let b = document.getElementById('b');
    let result02 = document.getElementById('result02');
    let valueB = +b.value;
    result02.innerHTML = valueB + " m = " + (valueB * 3.2808) + " ft";

    let c = document.getElementById('c');
    let result03 = document.getElementById('result03');
    let valueC = +c.value;
    result03.innerHTML = "Diện tích hình vuông có cạnh là: " + valueC + " là: " + valueC*4;

    let d = document.getElementById('d');
    let r = document.getElementById('r');
    let result04 = document.getElementById('result04');
    let valueD = +d.value;
    let valueR = +r.value;
    result04.innerHTML = "Diện tích hình CN có CD là: " + valueD + " và R: " + valueR + " là: " + valueD*valueR;

    let canhK1 = document.getElementById('canhK1');
    let canhK2 = document.getElementById('canhK2');
    let result05 = document.getElementById('result05');
    let valueCanhK1 = +canhK1.value;
    let valueCanhK2 = +canhK2.value;
    result05.innerHTML = "Diện tích hình tam giác có cạnh là: " + valueCanhK1 + " và cạnh: " + valueCanhK2 + " là: " + valueCanhK1*valueCanhK2/2;

    let soA = document.getElementById('soA');
    let soB = document.getElementById('soB');
    let result06 = document.getElementById('result06');
    let valueSoA = +soA.value;
    let valueSoB = +soB.value;
    if(valueSoA === 0) {
        if(valueSoB === 0){
            result06.innerHTML = "Phương trình vô số nghiệm";
        } else {
            result06.innerHTML = "Phương trình vô nghiệm";
        }
    } else {
        result06.innerHTML = "Phương trình có nghiệm duy nhất: " + (-valueSoB/valueSoA);
    }


    let so1 = document.getElementById('so1');
    let so2 = document.getElementById('so2');
    let so3 = document.getElementById('so3');
    let result07 = document.getElementById('result07');
    let valueSo1 = +so1.value;
    let valueSo2 = +so2.value;
    let valueSo3 = +so3.value;

    if(valueSo1 === 0) {
        if(valueSo2 === 0) {
            if(valueSo3 === 0){
                result07.innerHTML = "Phương trình vô số nghiệm";
            } else {
                result07.innerHTML = "Phương trình vô nghiệm";
            }
        } else {
            result07.innerHTML = "Phương trình có nghiệm kép nhất: " + (-valueSo3/valueSo2);
        }
    } else {
        let delta = valueSo2*valueSo2 - 4*valueSo1*valueSo3;
        if(delta === 0){
            result07.innerHTML = "Phương trình có nghiệm kép nhất: " + (-valueSo2/(2*valueSo1));
        } else if (delta > 0) {
            result07.innerHTML = "Phương trình có hai nghiệm: x1 = " + (-valueSo2 + Math.sqrt(delta)/(2*valueSo1)) + " x2 = " + (-valueSo2 - Math.sqrt(delta)/(2*valueSo1));
        } else {
            result07.innerHTML = "Phương trình vô nghiệm";
        }
    }

    let age = document.getElementById('age');
    let result08 = document.getElementById('result08');
    let valueAge = +age.value;
    if(valueAge > 0 && valueAge < 120) {
        result08.innerHTML = "Là tuổi: ";
    } else {
        result08.innerHTML = "Không là tuổi: ";
    }


    let canh1 = document.getElementById('canh1');
    let canh2 = document.getElementById('canh2');
    let canh3 = document.getElementById('canh3');
    let result09 = document.getElementById('result09');
    let valueCanh1 = +canh1.value;
    let valueCanh2 = +canh2.value;
    let valueCanh3 = +canh3.value;
    if((valueCanh1 + valueCanh2 > valueCanh3) && (valueCanh1 + valueCanh3 > valueCanh2) && (valueCanh2 + valueCanh3 > valueCanh1)) {
        result09.innerHTML = "Là 3 cạnh của tam giác";
    } else {
        result09.innerHTML = "Không là 3 cạnh của tam giác";
    }

    let number = document.getElementById('number');
    let valueNumber = +number.value;
    let result10 = document.getElementById('result10');
    result10.innerHTML = "Giá của " + valueNumber + ' là: ' + electricityPriceCalculation(valueNumber);


    let income = document.getElementById('income');
    let valueIncome = +income.value;
    let result11 = document.getElementById('result11');
    result11.innerHTML = "Tiền thuế của " + valueIncome + ' là: ' + incomeTaxCalculation(valueIncome);

    let money = document.getElementById('money');
    let month = document.getElementById('month');
    let profit = document.getElementById('profit');
    let result12 = document.getElementById('result12');
    let valueMoney = +money.value;
    let valueMonth = +month.value;
    let valueProfit = +profit.value;
    result12.innerHTML = "Tiền lãi của " + valueMoney + ' là: ' + valueMoney*((1+valueProfit)**valueMonth);
}

function incomeTaxCalculation(income) {
    let result = 0;
    if(income < 60) {
        result = (income / 12 * 0.05) * 12;
    } else if(income < 120) {
        result = (income / 12 * 0.1 - 0.25) * 12;
    } else if(income < 216) {
        result = (income / 12 * 0.15 - 0.75) * 12;
    } else if(income < 384) {
        result = (income / 12 * 0.2 - 1.65) * 12;
    } else if(income < 624) {
        result = (income / 12 * 0.25 - 3.25) * 12;
    } else if(income < 960) {
        result = (income / 12 * 0.3 - 5.85) * 12;
    } else {
        result = (income / 12 * 0.35 - 9.85) * 12;
    }
    return result;
}
function electricityPriceCalculation (number) {
    let price = 0;
    if(number <= 50) {
        price = number * 1.728;
    } else if(number <= 100) {
        price = 50 * 1.728 + (number - 50) * 1.786;
    } else if(number <= 200) {
        price = 50 * 1.728 + 50 * 1.786 + (number - 100) * 2.074;
    } else if(number <= 300) {
        price = 50 * 1.728 + 50 * 1.786 + 100 * 2.074 + (number - 200) * 2.612;
    } else if(number <= 400) {
        price = 50 * 1.728 + 50 * 1.786 + 100 * 2.074 + 100 * 2.612 + (number - 300) * 2.919;
    } else {
        price = 50 * 1.728 + 50 * 1.786 + 100 * 2.074 + 100 * 2.612 + 100 * 2.919 + (number - 400) * 3.015;
    }
    return price
}