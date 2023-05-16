let inp = document.getElementById('inp')
let btnSearch = document.getElementById('btn-search')
btnSearch.onclick = function() {
  inp.classList.toggle('active')
  inp.focus()
}