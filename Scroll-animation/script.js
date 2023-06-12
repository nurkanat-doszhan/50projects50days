let content = document.getElementsByClassName('content')

for (let i = 0; i < content.length; i++) {
  console.log(document.body.scrollHeight)
  let height = 210;
  let cont = 4;
  let def = 200;
  window.onscroll = function () {
    if (window.scrollY > def) {
      content[cont].classList.add('show');
      def += height;
      cont += 1;
    } else {
      content[cont].classList.remove('show');
      def -= height;
      cont -= 1;
      console.log(def)
    }
  }
}