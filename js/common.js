let a = document.getElementsByClassName("navbar")[0];
let burger = document.getElementsByClassName("burger-bar");

window.addEventListener("scroll", () => {
    let sr = window.scrollY;

    a.classList.toggle("navbar-scroll-active", sr > 10);
    burger[0].classList.toggle("bg-black",sr>10);
    burger[1].classList.toggle("bg-black",sr>10);
    burger[2].classList.toggle("bg-black",sr>10);

    if (sr >= 10) {
        document.getElementsByClassName("logo")[0].src = "../images/logo.png";
        burger.backgroundColor="black";
    } else {
        document.getElementsByClassName("logo")[0].src = "../images/logo-2.png";
        burger.backgroundColor="white";
    }
});

function nav_toggle_fun() {
    var ab = document.getElementsByClassName("navbar-mobile")[0];

    if (ab.style.display == "flex") {
        ab.style.display = "none";
    } else {
        ab.style.display = "flex";
    }
}

function go_back() {
    var a = document.getElementsByClassName("navbar-mobile")[0];
    a.style.display = "none";
}
