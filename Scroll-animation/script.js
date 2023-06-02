let content = document.getElementsByClassName('content')
// window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });


window.onscroll = function () {
  console.log(window.scrollY)
    // console.log(document.body.scrollHeight)
}
for (let i = 0; i < content.length; i++) {
  console.log(content[i].coor);
}