let input = document.querySelectorAll('.input-text');

for (let i=0; i<input.length; i++) {
  let inputChild = input[i].children[1];
  inputChild.onfocus = function() {
    input[i].classList.add('actived');
  }
  inputChild.onblur = function() {
    input[i].classList.remove('actived');
  }
}