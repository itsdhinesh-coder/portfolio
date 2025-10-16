let a = document.getElementById("abt-edu");
let b = document.getElementById("abt-exp");
let c = document.getElementById("abt-ski-in");
function displayEdu(){
    a.style.display = "flex";
    b.style.display = "none";
    c.style.display = "none"
};
function displayExp(){
    a.style.display = "none";
    b.style.display = "flex";
    c.style.display = "none"
}
function displaySki(){
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "flex"
}
let i1 = document.getElementById("icon1");
let i2 = document.getElementById("icon2");
let i3 = document.getElementById("icon3");
let i4 = document.getElementById("icon4");
let i5 = document.getElementById("icon5");
let i6 = document.getElementById("icon6");
let i7 = document.getElementById("icon7");
let i8 = document.getElementById("icon8");
let i9 = document.getElementById("icon9");
let i10 = document.getElementById("icon10");
let i11 = document.getElementById("icon11");
let iconArray = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11]
function showIcons() {
    let j = 0;
    let print = setInterval(() => {
        if (j < iconArray.length) {
            iconArray[j].style.display = "flex";
            j++;
        } else {
            clearInterval(print);
        }
    }, 200);
}
let d = document.getElementById("name");
let online = document.getElementById("online");
let offline = document.getElementById("offline");
let fadeAway = document.getElementById("fdaw")

function printName(){
    let e = d.value;
    let f = confirm("Hi "+e+", Can we catch up offline for a quick meeting?")
    if(f == true){
        alert("The meeting will be finalized soon, and you will receive the confirmation shortly.");
        online.style.display = "block";
        offline.style.display = "none";
        fadeAway.style.display = "none";
    }
    else{
        alert("Lets connect Virtually, will provide the update soon");
        online.style.display = "none";
        offline.style.display = "block";
        fadeAway.style.display = "none";
    }
}