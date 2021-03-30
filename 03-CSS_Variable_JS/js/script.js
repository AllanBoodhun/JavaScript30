const inputs = document.querySelectorAll('.control input')

function handleUpdate() {
  // On récupere le data-sizing de l'inputs(px). Si il n'y en a pas, retourne '',pour le color
  const suffix = this.dataset.sizing || '';
  // Editer dans le style du doc              la variable css   la valeur    px ou ''
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// eventListener sur chaque changement de l'input
inputs.forEach(input => input.addEventListener('change', handleUpdate));
// eventListener sur la souris pour que ce soit dynamique
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));