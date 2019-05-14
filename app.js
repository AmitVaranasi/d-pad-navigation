document.activeElement.addEventListener('keydown', handleKeydownEvent);

function handleKeydown(e) {
  switch(e.key) {
    case 'ArrowUp':
      nav(-1);
      break;
    case 'ArrowDown':
      nav(1);
      break;
    case 'ArrowRight':
      nav(1);
      break:
    case 'ArrowLeft': 
      nav(-1);
      break;
  }
}

function nav (move) {
  var next = currentIndex + move;
  var items = document.querySelectorAll('items');
  var targetElement = items[next];
  targetElement.focus();
}

