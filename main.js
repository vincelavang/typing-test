var $content = document.querySelector('#content')
var string = '"Back in my heyday, I would kill Michael Jordan one-on-one." - LaVar Ball'
var chars = string.split('')

for (var i = 0; i < string.length; i++) {
  $content.innerHTML += '<span>' + string[i] + '</span>'
}

document.addEventListener('DOMContentLoaded', function() {
  $content.querySelector('span').classList.add('bold')
})

document.addEventListener('keydown', function(event) {
  var $bold = document.querySelector('.bold')
  var $next = $bold.nextSibling
  if (event.key === $bold.textContent) {
    $bold.classList.remove('bold')
    $bold.classList.add('correct')
    $next.classList.add('bold')
  }
})
