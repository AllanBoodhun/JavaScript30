const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  // vérifie la touche shift et le check
  if(e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
        if(checkbox === this || checkbox === lastChecked) {
          inBetween = !inBetween;
          console.log('start');
        }
        if(inBetween) {
          checkbox.checked = true;
        }
    });
  }
  lastChecked = this;
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))