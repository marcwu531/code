var edge = document.getElementById("edge");
var html1 = document.getElementById("html1");
var kthead = document.getElementById("kthead");
var kt = document.getElementById("kt");
var ktbody = document.getElementById("ktbody");
var ktlefthand = document.getElementById("ktlefthand");
var ktrighthand = document.getElementById("ktrighthand");
var ktpp = document.getElementById("ktpp");
var ktleftleg = document.getElementById("ktleftleg");
var ktrightleg = document.getElementById("ktrightleg");
var jyhead = document.getElementById("jyhead");
var jy = document.getElementById("jy");
var jybody = document.getElementById("jybody");
var jylefthand = document.getElementById("jylefthand");
var jyrighthand = document.getElementById("jyrighthand");
var jypp = document.getElementById("jypp");
var jyleftleg = document.getElementById("jyleftleg");
var jyrightleg = document.getElementById("jyrightleg");
//var i = 0;
let count = 0;
//console.log(kthead.style.top);
let ktallpos = [/*"kt",*/"kthead","ktbody","ktlefthand","ktrighthand","ktpp","ktleftleg","ktrightleg"];
let jyallpos = [/*"jy",*/"jyhead","jybody","jylefthand","jyrighthand","jypp","jyleftleg","jyrightleg"];

//window.posofdir;
//window.posofdir2;

window.i = 0;
window.pp = 0;
window.jy2up = 1;
window.kt2r = 1;

/*for (i = 0; i < (ktallpos.length);i++) {
    var ktallpos[i] = document.getElementById(ktallpos[i]);
}*/

async function animation(){
    document.getElementById("animation").style.display = "none";
    //alert("Happy mother day!");
    await delay(531);
   // await delay(1000);
    edge.style.visibility = "visible";
    //html1.style.visibility = "visible";
    //edge.style.overflow = "hidden";
    //await 100ms;
    //alert("hi");
    //kt.style.right = 400 + "px";
    //kt.style.top = 280 + "px";
    kthead.style.right = 400 + "px";
    kthead.style.top = 300 + "px";
    kthead.style.transform = "rotate(0deg)";
    ktbody.style.right = 407.5 + "px";
    ktbody.style.top = 305 + "px";
    ktbody.style.transform = "rotate(0deg)";
    ktlefthand.style.right = 413 + "px";
    ktlefthand.style.top = 325 + "px";
    ktlefthand.style.transform = "rotate(45deg)";
    ktrighthand.style.right = 402 + "px";
    ktrighthand.style.top = 325 + "px";
    ktrighthand.style.transform = "rotate(-45deg)";
    ktpp.style.right = 403 + "px";
    ktpp.style.top = 348 + "px";
    ktpp.style.visibility = "hidden";
    ktpp.style.transform = "rotate(-75deg)";
    ktpp.style.width = 3 + "px";
    //ktpp.style.display = "none";
    //ktpp.style.background.color = "none";
    ktleftleg.style.right = 413 + "px";
    ktleftleg.style.top = 350 + "px";
    ktleftleg.style.transform = "rotate(45deg)";
    ktrightleg.style.right = 402 + "px";
    ktrightleg.style.top = 350 + "px";
    ktrightleg.style.transform = "rotate(-45deg)";
    /*for (i = 0; i < ktallpos.length; i++) {
        //if(ktallpos[i].style.transform == null) {
        //ktallpos[i].createElement("transform");
        //}
        //ktallpos[i].style.transform = "rotate(0deg)"
        setrotate(ktallpos[i]);
    }*/
    
    //document.getElementById("jypeople").style.visibility = "hidden";
    
    jyhead.style.right = -315 + "px";
    jyhead.style.top = 300 + "px";
    jyhead.style.transform = "rotate(0deg)";
    jybody.style.right = -307.5 + "px";
    jybody.style.top = 305 + "px";
    jybody.style.transform = "rotate(0deg)";
    jylefthand.style.right = -313 + "px";
    jylefthand.style.top = 325 + "px";
    jylefthand.style.transform = "rotate(-45deg)";
    jyrighthand.style.right = -302 + "px";
    jyrighthand.style.top = 325 + "px";
    jyrighthand.style.transform = "rotate(45deg)";
    jypp.style.right = -303 + "px";
    jypp.style.top = 348 + "px";
    jypp.style.visibility = "hidden";
    jypp.style.transform = "rotate(75deg)";
    jypp.style.width = 1 + "px";
    jyleftleg.style.right = -311 + "px";
    jyleftleg.style.top = 350 + "px";
    jyleftleg.style.transform = "rotate(-45deg)";
    jyrightleg.style.right = -300 + "px";
    jyrightleg.style.top = 350 + "px";
    jyrightleg.style.transform = "rotate(45deg)";
    for (i = 0; i < ktallpos.length; i++) {
        document.getElementById(ktallpos[i]).style.right = +(document.getElementById(ktallpos[i]).style.right.split("px")[0])+175+"px";
    }
    for (i = 0; i < jyallpos.length; i++) {
        document.getElementById(jyallpos[i]).style.right = +(document.getElementById(jyallpos[i]).style.right.split("px")[0])+250+"px";
    }
    ktmove("1st");
}

async function move(pos,right,top,rotate,loop,delayms){
    await delay(411);
        for (i = 0; i < loop; i++) {
           // console.log(pos);
        var position = document.getElementById(pos);
        /*if(position.style.right == null){
            position.createElement("right");
        }*/
       /* console.log(position.style.right);
        console.log(+(position.style.right.split("px")[0]));*/
        position.style.right = +(position.style.right.split("px")[0]) - +(right) + "px";
        position.style.top = +(position.style.top.split("px")[0]) - +(top) + "px";
        //console.log(position.style.transform);
        //posofdir = ((position.style.transform.split("rotate(")[1])).split("deg)")[0];
        //console.log(posofdir);
        //posofdir2 = posofdir.split("deg)")[0];
        //console.log(posofdir2);
        //posofdir = position.style.transform
        //console.log(posofdir2);
        position.style.transform = `rotate(${+(((position.style.transform.split("rotate(")[1])).split("deg)")[0]) + rotate}deg)`;
        //console.log(position.style.transform);
        await delay(delayms);
    }
    //if (pos == ktallpos[ktallpos.length - 3]) {
        if(pp == 0){
            pp = 1;
        //await move("kthead",1,0,0,200,10);
        await delay(100);
        jymove("1st");
        await delay(3000);
        ktpp.style.visibility = "visible";
        //ktmove("2nd");
        move("ktpp",0.05,0.15,-0.6,80,15);
        sizechange("ktpp",0.1,1,20,30);
        jypp.style.visibility = "visible";
        await move("jypp",/*-0.05*/-0.1,/*0.15*/0.05,0.7,100,15);
        //sizechange("jypp",0,-0.1,-0.1,30);
        sizechange("jypp",0,-1,5,30);
        move("jypp",0.1,0,-0.1,20,30);
        await delay(531);
        jymove("2nd");
        
        }
    //}
}

async function sizechange(pos,width,height,loop,delayms) {
    //if (pos == "ktpp") {
    for(i = 0; i < loop; i++) {
        //if(pos == "ktpp") {
        //if(position.style.width == null) {
            //ktpp.style.width = 5 + "px";
            //console.log("created");
        //}
        var position = document.getElementById(pos);
            position.style.height = (+(position.style.height.split("px")[0]) + height) + "px";
            position.style.width = (+(position.style.width.split("px")[0]) + width) + "px";
            
            //ktpp.style.right = +(ktpp.style.right.split("px")[0]) - +(height) + "px";
        //console.log(ktpp.style.width);
        await delay(delayms);
        }
    //}
}

async function ktmove(time) {
    if(time == "1st") {
        //count = ktallpos.length   //need change (noth)
        for (i = 0; i < ktallpos.length; i++) {
        move(ktallpos[i],1,0,0,2000,10);
        //move("ktbody",1,0,100,10);
        //move("ktlefthand",1,0,100,10);
        //console.log(i);
        }
        //ktpp.style.display = "block;"
        //ktpp.style.right = -700 + "px"
        
    }
    /*if(time == "2nd") {
        //for (i = 0; i < 15; i++) {
            //move(ktpp,0,0,3,100,10);
            sizechange(ktpp,1,0,1000,10);
        //}
    }*/
    else if(time == "2nd"){
        //await delay(3000);
        //await function() =>{
        for (i = 0; i < ktallpos.length; i++) {
        if (i == ktallpos.length - 1) {
            await move(ktallpos[i],1,0.1,0,1700,10);
            await delay(300);
            ktmove("3rd");
        } else {
        move(ktallpos[i],1,0.1,0,1700,10);
        //move(ktallpos[i],-1,0,0,100,10);
        }
        }
        //}
        //await delay(1700)
        //ktmove("3rd");
        /*for (i = 0; i < ktallpos.length; i++) {
            kt2move();
        }*/
    }
    else if(time == "3rd") {
        kt2r = -0.7;
        //for (i = 0; i < 10; i++) {
        kt3loop();
        //await delay(3000);
        //}
    } else if (time == "4th"){
        for (i = 0; i < ktallpos.length; i++) {
            move(ktallpos[i],-1,0,0,1000,10);
        }
    }
    
}

window.loop = 0;

async function kt3loop() {
    loop++;
    await delay(700);
    rngnumber(5,20);
    //for (i = 0; i < 10; i++) {
        for(i = 0; i < ktallpos.length; i++) {
        move(ktallpos[i],kt2r,0,0,100,rng);
        }
    kt2r = kt2r * (-1);
    //}
    if (loop < 10) {
        await delay(300);
        kt3loop()
    } else {
        await delay(351);
        jymove("3rd");
    }
}

/*async function kt2move() {
    for (i=0; i < 10; i++){
        kt2r = -1;
        await move(ktallpos[i],kt2r,0.1,0,10,10);
        kt2r = kt2r * (-1);
    }
}*/
/*function setrotate(rotate) {
    console.log(rotate.style.transform);
    if(rotate.style.transform == undefined){
        rotate.createElement('transform');
    }
    rotate.style.transform = "rotate(0deg)"
}*/

async function jymove(time){
    if(time == "1st") {
        //edge.style.visibility = "visible";
        for (i = 0; i < jyallpos.length; i++) {
        //document.getElementById(jyallpos[i]).style.visibility = "visible";
        /*document.getElementById(jyallpos[i]).style.createElement('overflow');
        document.getElementById(jyallpos[i]).style.overflow = "hidden";*/
        move(jyallpos[i],-1.3,0,0,1000,10);
        }
    }else if(time == "2nd") {
        /*for(i = 0; i < jyallpos.length; i++) {
             var jy2h = document.getElementById(jyallpos[i]);
            for(i= 0; i < 1; i + 0){
            jy2up = 350 - +(jy2h.style.top.split("px")[0]);
            if (jy2up > 0) {
                jy2up = -1;
            } else if (jy2up < 0) {
                jy2up = 1;
            } else {
                jy2up = 0;
                i++
            }
            await move(jyallpos[i],1,jy2up,1,1,10);
            }
        }*/
        //jypp.style.visibility = "hidden";
        jyppgone();
        move("jyhead",0.3,-0.1,0,1000,1);
        move("jybody",0.08,0,0.7,1000,1);
        move("jylefthand",0.1,-0.015,0,1000,1);
        move("jyrighthand",0.1,-0.015,0.5,1000,1);
        move("jyleftleg",-0.05,0.14,-0.05,1000,1);
        move("jyrightleg",0,0.13,-0.75,1000,1);
        //jyrighthand.style.visibility = "hidden";
        //move("jyleftleg",0.08,0,0,500,1)
        await ktmove("2nd");
        //await(3000);
        //jymove("3rd");
        
    } else if (time == "3rd") {
        ktmove("4th");
        await(1000);
        move("jyhead",-0.3,0.1,0,1000,1);
        move("jybody",-0.08,0,-0.7,1000,1);
        move("jylefthand",-0.1,0.015,0,1000,1);
        move("jyrighthand",-0.1,0.015,-0.5,1000,1);
        move("jyleftleg",0.05,-0.14,0.05,1000,1);
        await move("jyrightleg",0,-0.13,0.75,1000,1);
        await delay (1000);
        jypp.style.visibility = "visible";
    }
    
}

async function jyppgone() {
    /*for (i = 1; i < 1.9; i = i + 0.1) {
        //console.log(i);
        //console.log(jypp.style.filter);
        //jypp.style.filter = "brightness("+i+")";
        await delay(100);
    }*/
    await move("jypp",0.1,0,0,50,30);
    jypp.style.visibility = "hidden";
}

/*async function zoom() {*/
    //var scale = 'scale(1.5)';
    //for(i = 0; i < 1; i = 0) {
    //document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
    //document.body.style.msTransform =   scale;       // IE 9
    //document.body.style.transform = scale;     // General
    //waitnext();
    //await scaledelay();
    //}
//}

//zoom();
/*async function waitnext() {
    if(document.body.style.transform != 'scale(1)') {
    zoom()
    } else {
        waitnext();
    }
}*/

/*function scaledelay() {
  return new Promise(resolve => setTimeout(resolve, 1));
}*/

/*var width = 0;
function getWindowSize() {
    if (document.body && document.body.offsetWidth) {
      width = document.body.offsetWidth;
    }
    if (document.compatMode=='CSS1Compat' &&
        document.documentElement &&
        document.documentElement.offsetWidth ) {
       width = document.documentElement.offsetWidth;
    }
    if (window.innerWidth) {
       width = window.innerWidth;
    }
    return(width);
}

window.onresize = function(event) {
    updateWindowSize(5000);
}*/

let clickable = ["animation","html1","htmlchange"];

document.addEventListener("touchstart", function(e){
e.preventDefault();
},{passive: false});

//async function canclick() {
for(i = 0; i < clickable.length; i++) {
var el = document.getElementById(clickable[i]);
el.addEventListener('touchstart', function(e){
    e.stopPropagation()}, false);
}
//}

//canclick();

document.body.style.zoom = "70%";