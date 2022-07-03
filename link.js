function ask() {
let vid = prompt(`Link?
Format: https://youtu.be/dQw4w9WgXcQ`,"");
let link;
//if(vid.split(".")[0] == `https://youtu`) {
link = vid.split("youtu")[0] + "www.youtube.com/embed/" + vid.split("/")[3]
                    //alert(link)
                //}
document.write(`<iframe width="420" height="315" src= ${link}></iframe>`);
}