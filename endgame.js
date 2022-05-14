window.birdstopall = 0;
window.move = 1;

function endgame(event) {
    isornotok = 0;
    if(event = "snake") {
        document.getElementById('left').style.display = "none";
        document.getElementById('right').style.display = "none";
        document.getElementById('up').style.display = "none";
        document.getElementById('down').style.display = "none";
        move = 0;
        document.getElementById('canvas').style.display = "none";

    }
    if(event = "bird") {
        document.getElementById('game').style.display = "none";
        document.getElementById('balljump').style.display = "none";
        birdstopall = 1;
    }
    music(nggyu);
}