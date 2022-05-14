//let start = 0;
window.rickrolld = 0;
musicmanage("rick", 0);
document.getElementById('Rick').style.display = "none";
document.getElementById('Pressrenai').style.display = "none";
document.getElementById('dyhtps word').style.display = "none";
window.setVolume = "50%";
window.volumeNumber = 0.5;
window.volumeType = "true";

document.getElementById('canvas').style.display = "none";


function music(type) {
    if(type == nggyu) {
        var nggyump3 = document.getElementById('nggyu');
        nggyump3.volume = volumeNumber;
        nggyump3.play();

        //if (start = 0) {
        if (rickrolld == 0) {
        rickrolld = 1;
        let ans = prompt("Haha get rickroll'd", "NEVER GONNA GIVE YOU UP");
        //console.log(`document.getElementById("gaybutton").style.display = ("block");`);
        if(ans == `document.getElementById("button").style.display = ("block");`) {
            ans = prompt("Error. (Place: ???)", "Reload.");
            if(ans == "531") {
            document.getElementById("gaybutton").style.display = "block";
            document.getElementById('Pressrenai').style.display = "block";
            nggyump3.pause();
            }
        }
        }
        //start = 1;
        //}
    } else if(type == tf) {
        document.getElementById('tf').volume = volumeNumber;
        document.getElementById('tf').play();
        console.log(`??? = button`);
    } else if(type == renai) {
        document.getElementById('renai').volume = volumeNumber;
        document.getElementById('renai').play();
    } else if(type == dyhtps) {
        document.getElementById('dyhtps').volume = volumeNumber;

        document.getElementById('dyhtps').play();
    }

}

document.getElementById('dyhtps1').style.display = "none";

function musicshowup(which) {
 if(which == 1) {
    document.getElementById('Rick').style.display = "block";
    document.getElementById('dyhtps1').style.display = "block";
 }
 if(which == 2) {
    musicmanage("rick", 1);
 }
 if(which == 3){
    document.getElementById('dyhtps word').style.display = "block";
 }
}

function musicmanage(which, truefalse) {
    if(which == "rick") {
    if (truefalse == 0) {
        truefalse = "none";
    } else if (truefalse == 1) {
        truefalse = "block";
    }
    document.getElementById('好康的').style.display = truefalse;
    document.getElementById('Press nggyu').style.display = truefalse;
    document.getElementById('nggyuvid').style.display = truefalse;
    document.getElementById('tf word').style.display = truefalse;
    document.getElementById('nggyusong').style.display = truefalse;
    document.getElementById('tfvid').style.display = truefalse;
    }
}

function volumeSet() {
    alert(`Reminder: If change the volume when playing song, please press the song name again to apply the changes.`);
    volume = prompt(`What volume you want change to? (Default: 50%)`, "50%");

    volume = volume.split("%");
    volumeNumber = +(volume[0]);
    volumeType = isNaN(volumeNumber);

  //  console.log(volumeNumber);  
   // console.log(typeof volumeNumber);
  //  console.log(volumeType);

    if(volumeType == false) {
       // console.log("done");
        volume = `${volumeNumber}%`;
        //console.log(volume);
        volumeNumber = volumeNumber/100;
        //console.log(volumeNumber); 
    } else {
        alert("Please enter a proper value");
        volumeSet();
    }
}

function musicpause() {
    document.querySelectorAll('audio').forEach(el => el.pause());
    document.querySelectorAll('audio').forEach(el => el.currentTime = 0);
}