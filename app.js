let userNumber = document.getElementById("getNumber");
userNumber.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        start(e);
    }
});

userNumber.focus();

let counter = 0;

function start() {
    randNum();
    userNum();
    compNum();
}

function randNum() {
    let ran = Math.floor(Math.random() * 10);
    return ran;
}

function userNum() {
    let user = document.getElementById("getNumber").value;
    return user;
}

function compNum() {
    let a = userNum();
    let b = randNum();
    let z = document.getElementById("compare");
    let c = document.getElementById("counter");

    if (a != b) {
        z.innerHTML = "Numbers are not the same. Computer got " + b + ", and user got " + a;
        z.style.color = "white";
        z.style.backgroundColor = "#ff0000";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        counter++
        c.innerHTML = "You have tried " + counter + " times."
        c.style.color = "white";
        c.style.backgroundColor = "#312f2f";
        c.style.padding = "20px";
        c.style.textAlign = "center";
        document.querySelector("body").style.backgroundColor = "#ff9c9c";
    } else if ( a == b) {
        z.innerHTML = "Numbers are the same. Computer got " + b + ", and user got " + a;
        z.style.color = "white";
        z.style.backgroundColor = "#0700a7";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        c.innerHTML = "You have tried " + counter + " times to get it right."
        c.style.color = "white";
        c.style.backgroundColor = "#312f2f";
        c.style.padding = "20px";
        c.style.textAlign = "center";
        counter = 0;
        document.querySelector("body").style.backgroundColor = "#e4ff9c";
    }

    reset();
}

function reset(){
    document.getElementById("getNumber").value = "";

}