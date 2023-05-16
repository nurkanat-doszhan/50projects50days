let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let step = document.querySelectorAll('.steps span')

let i = 0;
let stepCount;
for (let i = 0; i < step.length; i++) {
    stepCount = i
}

next.onclick = function() {
    if (step[i].classList.contains != 'active' && i < stepCount) {
        step[i+1].classList.add('active')
        i++
    } if (i == stepCount) {
        this.classList.remove('active')
        this.setAttribute('disabled', true)
    }
    prev.removeAttribute('disabled')
    prev.classList.add('active')
}

prev.onclick = function() {
    if (step[i].classList.contains != 'active' && i >= 1) {
        step[i].classList.remove('active')
        i--
    } if (i == 0) {
        this.classList.remove('active')
        this.setAttribute('disabled', true)
    }
    next.removeAttribute('disabled')
    next.classList.add('active')
}
