let content = document.getElementsByClassName('content')

console.log(window.innerHeight)
for (let i = 0; i < content.length; i++) {
  console.log(content[i].scrollLeft)
}