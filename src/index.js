// import './styles.css';
import './sass/main.scss';

const MAX_COUNTRIES = 10;
const DETALIED = 1;

import listResultTmp from './templates/list-countries.hbs';
import countryTmp from './templates/country.hbs';

import searchCountryes from './js/fetchCountries';
const debounceFn = require('lodash.debounce');
import noteInfoToManyCountries from './js/pnotify';

const inputEl = document.querySelector('#search-js');
const listResultEl = document.querySelector('.js-list-countires');
const detaliedCountryEl = document.querySelector('.js-country-found');

inputEl.addEventListener('input', debounceFn(renderResoult, 500));

function renderResoult(event) {
  const q = event.target.value;
  if (q.length < 2) {
    return;
  }

  searchCountryes(q).then(response => {
    if (response.status === 404) {
      clearList();
      return;
    }
    searchResult(response);
  });
}

function searchResult(res) {
  clearList();
  clearCountry();
  if (res.length > MAX_COUNTRIES) {
    noteInfoToManyCountries();
  } else if (res.length === DETALIED) {
    console.log(countryTmp(res));
    detaliedCountryEl.innerHTML = countryTmp(res);
  } else {
    listResultEl.insertAdjacentHTML('afterbegin', listResultTmp(res));
  }
}

function clearList() {
  listResultEl.innerHTML = '';
}

function clearCountry() {
  detaliedCountryEl.innerHTML = '';
}
