// import './styles.css';
import './sass/main.scss';
import './js/render';
import searchCountryes from './js/fetchCountries';
const debounceFn = require('lodash.debounce');

const inputEl = document.querySelector('#search-js');

inputEl.addEventListener('input', debounceFn(renderResoult, 500));

function renderResoult(event) {
  const q = event.target.value;
  if (q.length < 2) {
    return;
  }
  console.log(q);
  searchCountryes(q).then(r => {
    searchResult(r);
  });
}

function searchResult(res) {
  res.map(r => console.log(r));
}
