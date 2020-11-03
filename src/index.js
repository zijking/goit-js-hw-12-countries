// import './styles.css';
import './sass/main.scss';
import './js/render';
import listResultTmp from './templates/list-countries.hbs';
import searchCountryes from './js/fetchCountries';
const debounceFn = require('lodash.debounce');

const inputEl = document.querySelector('#search-js');
const listResultEl = document.querySelector('.js-list-countires');

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
  //   console.dir(listResultEl);
  listResultEl.innerHTML = '';
  listResultEl.insertAdjacentHTML('beforebegin', listResultTmp(res));
}
