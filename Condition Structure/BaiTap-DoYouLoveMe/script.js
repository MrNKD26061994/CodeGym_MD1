let btnYes = document.getElementById('btnYes');
btnYes.addEventListener('click', yesOK);

let btnNo = document.getElementById('btnNo');
btnNo.addEventListener('mouseover', noOver);

function noOver() {
    let height = window.innerHeight;
    let width =  window.innerWidth;

    let aHeight = Math.floor(Math.random() * height);
    console.log(aHeight)
    let aWidth = Math.floor(Math.random() * width);
    console.log(aWidth)

    btnNo.style.left = aHeight + 'px';
    btnNo.style.top = aWidth + 'px';
}

function yesOK() {
    alert('OhYeah');
}

