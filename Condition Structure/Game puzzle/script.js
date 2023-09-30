let images = {
    imgsDB: [
        [
            'funny-cat1_part1x1.jpg',
            'funny-cat1_part2x1.jpg',
            'funny-cat1_part3x1.jpg',
            'funny-cat1_part4x1.jpg',
            'funny-cat1_part5x1.jpg'
        ],
        [
            'monkey_part1x1.jpg',
            'monkey_part2x1.jpg',
            'monkey_part3x1.jpg',
            'monkey_part4x1.jpg',
            'monkey_part5x1.jpg'
        ],
        [
            'panda_swap_part1x1.jpg',
            'panda_swap_part2x1.jpg',
            'panda_swap_part3x1.jpg',
            'panda_swap_part4x1.jpg',
            'panda_swap_part5x1.jpg'
        ]
    ],
    imgpos: [0,0,0,0,0]
}

function setImgRandom() {
    for (let i = 0; i < 5; i++) {
        let num = Math.floor(Math.random() * 3);

        placeImage(i, num);
    }
}

//imgpost: vi tri 1 - 5
//imgToggle: Loai anh
function placeImage(imgpos1,imgToggle) {
    images.imgpos[imgpos1] = imgToggle;
    let imgId = document.getElementById('img' + imgpos1.toString());
    imgId.src = 'imgs/' + images.imgsDB[imgToggle][imgpos1];
}

function imageClick(imgpos1) {
    let imgId = document.getElementById('img' + imgpos1.toString());
    let num = images.imgpos[imgpos1];
    do {
        num = Math.floor((Math.random()) * 3);
    } while (num == images.imgpos[imgpos1])
    placeImage(imgpos1, num);
}

function setCheck() {
    let setOK = true;
    for(let i = 0; i < 5; i++) {
        if(images.imgpos[0] != images.imgpos[i]) {
            setOK = false;
        }
    }

    let  element = document.getElementById('table');
    if (setOK) {
        element.style.boxShadow = '4px 4px 9px red';
    } else {
        element.style.boxShadow = 'none';
    }
}

let main = function () {
    setImgRandom();

    let elements = document.getElementsByTagName('img');
    for(let i = 0; i <= elements.length; i++) {
        if (elements[i] != null) {
            elements[i].addEventListener('click', function () {
                imageClick(i);
                setCheck();
            });
        }
    }
}
