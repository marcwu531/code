//let versions = ["html1"];

function htmlchange(currentversion) {
    /*for (i=1;i-1<versions.length;i++){
    if (i == currentversion){
    } else {
    //var version = versions[i+1];
    document.getElementById(versions[i]).style.display = "block";
    }
    }*/
    document.getElementById("html1").style.display = "block";
    document.getElementById("html2").style.display = "block";
}

//document.getElementById("html1").style.display = "none";

/*document.write(`<a id="htmlchange" href="javascript:htmlchange()">Change Html</a>



<div id='html1'>
    <input type="button" value="Previous" onclick="changegame()">
</div>`);*/

//alert("hi");

function changegame(version,type) {

    //html1.innerHTML='<object type="text/html" data="index.html" ></object>';
    if(version == 1){
        if(type = "computer"){
        window.location.href = "html1(computer).html";
        } else if(type="phone"){
            
        }
    }else
    if(version == 2){
        if(type="computer"){
            
        } else if(type="phone"){
        window.location.href = "html2(phone).html";
        }
    }
}

document.getElementById("html1").style.display = "none";
document.getElementById("html2").style.display = "none";