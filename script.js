let overlay = document.querySelector("#overlay");
let f1pop = document.querySelector("#f1pop");
let dicepop = document.querySelector("#dicepop");
let drumpop = document.querySelector("#drumpop");

let closebtns = document.querySelectorAll("#close");
closebtns.forEach((element) => {
    element.addEventListener('click', function () {
        overlay.classList.remove("active");
        f1pop.classList.remove("active");
        dicepop.classList.remove("active");
        drumpop.classList.remove("active");
    })
});

close.onclick = function () {
    overlay.classList.remove("active");
    f1pop.classList.remove("active");
    dicepop.classList.remove("active");
    drumpop.classList.remove("active");
};



let f1Btn = document.querySelector("#f1");
f1Btn.addEventListener("click", function () {
    f1pop.classList.add("active");
    overlay.classList.add("active");
});

let diceBtn = document.querySelector("#dice");
diceBtn.addEventListener("click", function () {
    dicepop.classList.add("active");
    overlay.classList.add("active");
});

let drumBtn = document.querySelector("#drum");
drumBtn.addEventListener("click", function () {
    drumpop.classList.add("active");
    overlay.classList.add("active");
});
