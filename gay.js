function Threecm() {
    window.kt = prompt("How long is kt (cm)?", "3");
if (kt == 3) {
alert("Correct!");
      } else if (kt < 3) {
    alert("Let us give he a better value.");
} else if (kt > 3) {
    alert("How tf he got this big???");
} else {
    alert("Wrong syntax.");
}
}

function nogu() {
    window.jy = prompt("How long is jy (cm)?", "0");
if (jy == 0) {
alert("Correct!");
      } else if (jy < 0) {
    alert("Let us give he a better value.");
} else if (jy > 0) {
    alert("How tf he got this big???");
} else {
    alert("Wrong syntax.");
}
}

function NotGayButLes() {
    window.vp = prompt("Is vp gay (y/n)?", "");
if (vp == "y") {
alert("Correct!");

      } else if (vp == "n") {
    alert("Oh he is les.");
    
} else {
    alert("Wrong syntax.");
    
}
}

function gay() {
    rngnumber(1,3);
    
    if (rng == 1) {
        Threecm();
        rngnumber(1,2);
        if (rng == 1) {
            nogu();
            NotGayButLes();
        } else {
            NotGayButLes();
            nogu();
        }
    } else if (rng == 2) {
        nogu();
        rngnumber(1,2);
        if (rng == 1) {
            Threecm();
            NotGayButLes();
        } else {
            NotGayButLes();
            Threecm();
        }
    } else if (rng == 3) {
        NotGayButLes();
        rngnumber(1,2);
        if (rng == 1) {
            Threecm();
            nogu();
        } else {
            nogu();
            Threecm();
        }
    } else {
        bug("gay");
    }
        breed();
    }
    
    function breed() {
        /*let y = "n";
        let n = "y";*/
        if (vp == "n") {
            rngnumber(1,31);
            if (rng == 20) {
                alert("3p wtf");
            } else {
            alert("Since vp is les, he can not breed with others, which makes kt and jy feel guilty when they breed together, so they do not want to breed also.");
            }
        } else if (vp == "y") {
            rngnumber(1,5);
        if (rng == 3) {
            alert("Since vp see kt want do with jy, which makes kt and jy feel embarrassed when they breed together, so they do not want to breed now.");
        } else {
        let baby = (jy + kt)/2 /*1.5*/
        if (typeof baby === 'number' || baby == 0) {
                window.truefalse = prompt("kt is now breeding with jy","3cmvsnogu");
                    if (truefalse !== "3cmvsnogu") {
                    prompt(`Don't change it you stupid!`,"Haha stupid.");
                        if (truefalse == "mwvsck") {
                            mwvsck();
                        }
                    }
                    alert(`The baby from kt and jy's length is ${baby}`);
                    if (baby > 0) {
                    alert(`But jy is 'jerless' so he cut his own baby's 44`);
                    }
                } else {
                        bug("Wrong syntax!"); 
                    }
            } 
        } else {
            bug("breed"); 
            }
    }

    function mwvsck() {
        alert("There is a msg from the coder...");
        truefalse = prompt("FUCK YOU","...");
        if (truefalse == "mwvsck" || truefalse == "marcwuvschingkin") { //3cmvsnogu
            mwvsck();
        }
    }