const pages = ["html/emelee.html", "html/ada.html", "html/elspeth.html", "html/fiammetta.html", "html/ljudmila.html", "html/missy.html", "html/nickie.html", "html/npcs.html", "html/rosie.html", "html/weapons.html", "html/xiomara.html"]
function rand(){
    location.replace(pages[Math.floor(Math.random() * pages.length)])
}

window.onload = function() {
    let ul = document.getElementById("facts");
    const a = ["Emelee is actually a shapeshifting alien", 
    "Missy often speaks backwards", 
    "Fiammetta is not allowed out of the base without Nickie or Cupid", 
    "Ada spent two years in an asylum", 
    "Elspeth has two tattoos", 
    "Rosie can't remove her robotic arm", 
    "Xiomara has been on a ship just once in her life", 
    "Nickie has two beloved daughters", 
    "Ljudmila is constantly on patrol and tends to shoot on sight", 
    "The area within 1 mile of the base has been declared the 'murder zone' due to the murderous intents of the team",
    "Fiammetta has numerous times attempted to murder Cupid's husband"];
    var s="";
    for (var i=0; i<5; i++) {
        l = Math.floor(Math.random()*a.length)
        s+= `<li>${a[l]}</li>`
        console.table(a)
        a.splice(l, 1);
    }
    ul.innerHTML = s;
}