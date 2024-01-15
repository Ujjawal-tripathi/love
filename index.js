let bt = document.querySelector(".yes")
bt.addEventListener("click", change)
function change() {
    let b = document.querySelector(".text")
    b.innerHTML = "I am grateful for your acceptance of my proposal <br> We're set for a date in the near future."
    let c = document.querySelector(".yes")
    let d = document.querySelector(".hel")
    c.style.opacity = 0;
    d.style.opacity = 0;
    let e = document.querySelector(".gif1")
    let f = document.querySelector(".gif2")
    e.style.opacity = 0;
    e.style.display = "none";

    f.style.opacity = 1;
    f.style.display = "block";






}
