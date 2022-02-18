

//play buttons

const booBtn = document.getElementById('booBtn');
// console.log(booBtn);

const sound = document.getElementById('sound');

const image = document.getElementById('image');

booBtn.onclick = function(){
    sound.src = "./sounds/boo.mp3";
    image.src = "./images/booing.gif"
    document.body.style.backgroundColor = "Chocolate";
    sound.play();
}

const applauseBtn = document.getElementById('applauseBtn');

applauseBtn.onclick = function(){
    sound.src = "./sounds/applause.mp3";
    image.src = "./images/applause.gif"
    document.body.style.backgroundColor = "Chocolate";
    sound.play();
}

const gaspBtn = document.getElementById('gaspBtn');

gaspBtn.onclick = function(){
    sound.src = "./sounds/gasp.mp3";
    image.src = "./images/gasping.gif"
    document.body.style.backgroundColor = "Chocolate";
    sound.play();
}

const tadaBtn = document.getElementById('tadaBtn');

tadaBtn.onclick = function(){
    sound.src = "./sounds/tada.mp3";
    image.src = "./images/tada.gif"
    document.body.style.backgroundColor = "Chocolate";
    sound.play();
}

const victoryBtn = document.getElementById('victoryBtn');

victoryBtn.onclick = function(){
    sound.src = "./sounds/victory.mp3";
    image.src = "./images/victory.gif"
    document.body.style.backgroundColor = "Chocolate";
    sound.play();
}

const wrongBtn = document.getElementById('wrongBtn');

wrongBtn.onclick = function(){
    sound.src = "./sounds/wrong.mp3";
    image.src = "./images/wrong.gif"
    document.body.style.backgroundColor = "Chocolate";
    sound.play();
}

sound.onended = function(){
    image.src = "./images/sound.png";
    document.body.style.backgroundColor = "blueviolet";
}










