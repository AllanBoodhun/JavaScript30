const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


// au click
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
  
// au survol
// panels.forEach(panel => panel.addEventListener('mouseover', toggleOpen));
// panels.forEach(panel => panel.addEventListener('mouseout', toggleOpen));