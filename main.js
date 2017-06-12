var $content = document.querySelector('#content')
var string = '"Back in my heyday, I would kill Michael Jordan one-on-one." - LaVar Ball'

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
    if ($next !== null) {
      $next.classList.add('bold')
    } else {
      var $container = document.querySelector('.container')
      var test = "Test complete!"
      var final = renderTest(test)
    	$container.appendChild(final)
    }
  }
})

function renderTest(score) {
  var $test = document.createElement('h3')
  $test.textContent = score
  return $test
}
