let left = document.getElementsByClassName('left')[0];
let right = document.getElementsByClassName('right')[0];

left.onmouseover = function() {
    left.style.width = '75%';
    right.style.width = '25%';
}
right.onmouseover = function() {
    right.style.width = '75%';
    left.style.width = '25%';
}

window.onmouseout = function() {
    left.style.width = '50%';
    right.style.width = '50%';
}