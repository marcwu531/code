function rngnumber(min, max) {
    window.rng = Math.floor(Math.random()*(max-min+1)+min);
}

function round(number, digit) {
    //console.log(`Accurate score: ${number}`);
    var m = Number((Math.abs(number) * (10 ** digit)).toPrecision(15));
    return Math.round(m) / (10 ** digit) * Math.sign(number);
}