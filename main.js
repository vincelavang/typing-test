var $content = document.querySelector('#content')
var string = '"Back in my heyday, I would kill Michael Jordan one-on-one." - LaVar Ball'
var chars = string.split('')

for (var i = 0; i < string.length; i++) {
  $content.innerHTML += '<span>' + string[i] + '</span>'
}
