'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/*

/////////// FIRST AJAX XMLHTttpRequest

const getCountry = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    //JSON
    //console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `<article class="country">
                        <img class="country__img" src="${data.flag}" />
                    <div class="country__data">
                    <h3 class="country__name">${data.name}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(
                      +data.population / 1000000
                    ).toFixed(1)}m people</p>
                    <p class="country__row"><span>🗣️</span>${
                      data.languages[0].name
                    }</p>
                    <p class="country__row"><span>💰</span>${
                      data.currencies[0].name
                    }</p>
                      </div>
                     </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountry('philippines');
getCountry('usa');

*/
/*
/////////////////////////
const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
                          <img class="country__img" src="${data.flag}" />
                      <div class="country__data">
                      <h3 class="country__name">${data.name}</h3>
                      <h4 class="country__region">${data.region}</h4>
                      <p class="country__row"><span>👫</span>${(
                        +data.population / 1000000
                      ).toFixed(1)}m people</p>
                      <p class="country__row"><span>🗣️</span>${
                        data.languages[0].name
                      }</p>
                      <p class="country__row"><span>💰</span>${
                        data.currencies[0].name
                      }</p>
                        </div>
                       </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryandNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    //JSON
    //console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // Neighbour country - (1)
    renderCountry(data);

    /// Get Neighbour country - (2)
    const [neighbour] = data.borders;

    // AJAX call country 2
    if (!neighbour) return;
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryandNeighbour('philippines');
getCountryandNeighbour('usa');
*/

/// OLD fashion AJAX call with XMLHttpRequest

// const getCountry = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//     request.send();

/////////////////////////    Promises         ///////////////////////

const request = fetch(`https://restcountries.eu/rest/v2/name/usa`);
console.log(request);
