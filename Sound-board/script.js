let audio = document.getElementsByTagName('audio');
let audiobtn = document.getElementsByClassName('audiobtn');

for (let i=0; i<audiobtn.length; i++) {
  audiobtn[i].onclick = function() {
    audio[i].play();
  }
}