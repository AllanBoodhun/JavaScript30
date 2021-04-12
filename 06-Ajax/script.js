const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then(data => data.json())
  .then(jdata => cities.push(...jdata));

console.log(cities);

function citiesFinder (wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi'); // On défini la regex à partir de wordtomatch. 'gi' pour "global insensitive"
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


function displayMatches() {
  const matchArray = citiesFinder(this.value, cities);
  const html = matchArray.map(place => {
    // pour avoir la regex cherchée en surbrillance
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);// pour avoir la regex cherchée en surbrillance
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);// pour avoir la regex cherchée en surbrillance
    return `
    <li>
      <span class ="name">${cityName}, ${stateName}</span>
      <span class ="population">${numberWithCommas(place.population)}</span>
    </li>`;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change',displayMatches);
searchInput.addEventListener('keyup',displayMatches);