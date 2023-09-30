let blue = document.getElementById('blue');
let green = document.getElementById('green');
let red = document.getElementById('red');
let checkbox = document.getElementsByName('checkbox');


function countChecked (checkbox) {
    let count = 0;
    for(let i = 0; i < checkbox.length; i++) {
        if(checkbox[i].checked === true){
            count += 1;
        }
    }
    return count;
}

function main() {
    red.addEventListener("click", function (){
        if (red.checked === true && countChecked(checkbox) === checkbox.length) {
            blue.checked = false;
        }
    });
    blue.addEventListener("click", function (){
        if (blue.checked === true && countChecked(checkbox) === checkbox.length) {
            green.checked = false;
        }
    });
    green.addEventListener("click", function (){
        if (green.checked === true && countChecked(checkbox) === checkbox.length) {
            red.checked = false;
        }
    });

}