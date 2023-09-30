let result = document.getElementById("result")
let elements = document.getElementsByTagName('td');

for(let i = 0; i <= elements.length; i++) {
    if (elements[i] != null) {
        elements[i].addEventListener('click', function(){
            switch (elements[i].innerText) {
                case 'C':
                    result.innerHTML = '';
                    break;
                case '=':
                    result.innerHTML = eval(result.innerText);
                    break;
                case '+':
                case '-':
                case '*':
                case '/':
                    let temp = result.innerText;
                    if (temp.length == 0 ||temp.charAt(temp.length - 1) == '+' || temp.charAt(temp.length -1) == '-' || temp.charAt(temp.length -1) == '*' || temp.charAt(temp.length - 1) == '/') {
                        break;
                    }
                default:
                    result.innerText += elements[i].innerText;
                    result.innerHTML = result.innerText;
                    break;
            }
        });
    }
}