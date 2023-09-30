let convertButton = document.getElementById("convert");
let tien = document.getElementById("tien");
let befor = document.getElementById("befor");
let after = document.getElementById("after");
convertButton.addEventListener('click', convert);
function convert() {
    let result = document.getElementById("result");

    if(befor.value === 'vietnam' && after.value === 'usd') {
        result.innerText ="Result: $" + (parseInt(tien.value) / 23000);
    }

    if(befor.value === 'usd' && after.value === 'vietnam') {
        result.innerText ="Result: " + (parseInt(tien.value) * 23000) + " VND";
    }
}