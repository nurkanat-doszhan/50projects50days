let joke = document.getElementById('joke');
let btn = document.getElementById('btn');
fetch('https://icanhazdadjoke.com/slack')
  .then((res) => res.json())
  .then(function (dataObject) {
    joke.innerHTML = dataObject.attachments[0].text;
  })
  .catch(console.error);
btn.onclick = function(){ location.reload(); }