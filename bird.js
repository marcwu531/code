window.jumpable = 0;
score = 0;
window.birdspd = 3;
window.birdupspd = -1;
window.falltime = 0.1;

document.getElementById('game').style.display = "none";
document.getElementById('balljump').style.display = "block";
if(type == "phone") {

    document.getElementById("balljump").style.right = (-600) + "px";

    } else /*if (type == "computer")*/{
        document.getElementById("balljump").style.right = (-575) + "px";
    }
document.getElementById('balljump').style.display = "none";

var background = document.getElementById('game');
console.log(background.style.bottom);
let blockspd = 2;

function bird() {
    if (isornotok != 0) {
    askspd();
    isornotok = 0;
    jumpable = 1;
    document.getElementById('game').style.display = "block";
    document.getElementById('balljump').style.display = "block";
    
    jumping = 0;
    jumpCount = 0;
    window.characterTop = 100 + "px";
    //isornotok = 0;

    var block = document.getElementById('block');
    var hole = document.getElementById('hole');
    var character = document.getElementById('character');
    var jumping = 0;

    character.style.top = `${500}px`;

    block.style.animation = "block " + blockspd + "s infinite linear";
    hole.style.animation = "block " + blockspd + "s infinite linear";

    hole.addEventListener('animationiteration', () => {
        var random = Math.random()*3;
        var top = (random*100)+150;
        hole.style.top = -(top) + "px";
    });

    setInterval(function(){
        if (birdstopall == 0) {
            score = score + 0.0531;
           // console.log(score);
            var characterTop = 
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            if(jumping == 0) {
                character.style.top = (characterTop+birdspd)+"px";
                if (birdspd < 3) {                   
                    birdspd = birdspd + (0.085*(falltime**2));
                    if (falltime < 1) {
                    falltime = falltime + 0.0531;
                    } else if (falltime > 1 && falltime < 5){
                        falltime = falltime + 0.085;
                    } else {
                        falltime = falltime + 0.0531;
                    }
                } else if (birdspd > 3) {
                    birdspd = 3;
                }
            }
            var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
            var holetop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
            //var characterleft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
            //var charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            
            characterTop = characterTop - 20;
            var cTop = -(100-characterTop);

            //console.log(`blockleft ${blockleft}`);
            //console.log(`ctop ${cTop}`)
           // console.log(`holetop ${holetop}`)
            console.log(`characterTop ${characterTop}`)
            if(characterTop > 800 || characterTop < 320 || /*(((characterleft-blockleft)**2) > 20)&&(((holetop-characterTop)**2) < 20) (edit x **2 must > 0 except i)*/ ((blockleft<40)&&(blockleft>-45)&&((cTop<holetop+720) || (cTop>holetop+850))) ) {
                    endgame();                   
                    /*stay();
                    alert("Game over!");
                    var stopanimation = function() {
                        animation.pause();
                    }*/
                    document.getElementById('game').style.display = "none";
                    document.getElementById('balljump').style.display = "none";
                    score = score * 612 / (718 * 1.35) / (blockspd * 2); //YTW = TW => YW
                    console.log(`Accurate score: ${score}`);
                    score = round(score, 2);
                    prompt(`Game Over! Your score is ${score}`,"LOL");

                }
            }
    },10);
    } else {
        alert("Please refresh this page to replay.");
        endgame("bird");
        }
}

function jump() {
    if (birdstopall == 0) {
    score = score - (0.411 ** Math.random());
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = 
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop > 6)/*&&(counter<15)*/) {
            birdspd = 0.1;
            birdup();
            birdupspd = -3;           
        }
        if(jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    },10);
}
}

/*function drift() {
    characterTop = (characterTop+3)+"px";
}

function stay() {
    character.style.top = 500 + "px";
    stay();v
}*/

function birdup() {
    var characterTop = 
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    character.style.top = (characterTop + birdupspd)+"px";
    if (birdupspd > -3) {
        falltime = 0.3
        birdupspd = (birdupspd - 0.85*(falltime**2));
        if (falltime < 1) {
        falltime = falltime + 0.1;
        } else {
            falltime = falltime + 0.095;
        }
        birdup();
    } else {
        falltime = 1.35;
    }
}

let spdnan;

function askspd() {
    blockspd = prompt("What speed you would like to play with? (Default: 2)", "2");
    blockspd = +(blockspd);
    spdnan = isNaN(blockspd);
    if (blockspd > 10 || blockspd < 1 || spdnan == true) {
        alert("Please enter a proper value (1-10).");
        askspd();
    }
}