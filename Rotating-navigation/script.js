let menu = document.querySelector('.menu')

menu.onclick = function() {
    this.classList.toggle('active')
    document.querySelector('.container').classList.toggle('active')
    document.querySelector('nav').classList.toggle('active')
}