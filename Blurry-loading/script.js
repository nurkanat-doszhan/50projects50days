let count = 0
let counter = document.getElementById('counter')
let blur = document.getElementById('blurry-loading')
let blurCount = 49
let opacity = 1

const stopTime = setInterval(() => {
    if (count < 100) {
        count++
        counter.innerHTML = count + '%'
        counter.style.opacity = opacity
        if (count % 2) {
            blur.style.filter = 'blur(' + blurCount-- + 'px)'
            opacity = opacity - 0.019
        }
    }
    if (count == 100) {
        counter.style.opacity = 0
        clearTimeout(stopTime)
    }
}, 40);
