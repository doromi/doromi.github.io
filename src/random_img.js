

const IMG_NUMBER = 3;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `src/images/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    document.body.appendChild(image);
}

function getRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER + 1);
    return number;
}

function init(){
    const randomeNumber = getRandom();
    paintImage(randomeNumber);
}

paintImage(getRandom());