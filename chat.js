let ans;
function chat() {
    ans = prompt("","");
    /*if(ans == "HI"){
        alert("Hi");
    }*/
    var chatletter = document.getElementById("chatbutton");
    chatletter.innerHTML = ans;
}