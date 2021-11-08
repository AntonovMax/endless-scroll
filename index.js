let inner = document.getElementById('inner')
let hidden = document.getElementById('hidden')



window.addEventListener('scroll', function () {
  if (window.scrollY === 0) {
    inner.innerHTML = 'Begin';
  } else if (window.scrollY > 100) {
    inner.style.left = '1000px'
  } else if (window.scrollY < 100) {
    inner.style.left = '200px'
  } else {
    inner.innerHTML = window.scrollY + 'px';
  }


});


console.log('Go to the forest');
