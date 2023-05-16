let imgAct = document.querySelectorAll(".img");

for (let i = 0; i < imgAct.length; i++) {
    imgAct[i].onclick = function () {
        for (let k = 0; k < imgAct.length; k++) {
            imgAct[k].classList.remove("active");
        }
        imgAct[i].classList.add("active");
    };
}
