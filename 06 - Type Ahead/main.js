const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL '.json'
xhr.open('GET', endpoint, false);

// 3. Отсылаем запрос
xhr.send();

// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status != 200) {
  // обработать ошибку
  console.error(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
} else {
  // вывести результат
  // console.log( xhr.responseText ); // responseText -- текст ответа.
}

const cities = JSON.parse(xhr.response)
console.dir(cities)

const listCities = document.querySelector('ul.suggestions')

const inputSearchCities = document.querySelector('input.search')

inputSearchCities.addEventListener('input', displayMatches)
inputSearchCities.addEventListener('change', displayMatches)

function displayMatches() {
  const matchArray = findMatches(this.value, cities)

  // const citiesInnerHTML = matchArray.forEach(place => {
  //   var spanName = document.createElement('span')
  //   var spanPop = document.createElement('span')
  //   spanName.className = 'name'
  //   spanName.textContent = " " + place.city + " " + place.state + " "
  //   spanPop.className = 'population'
  //   spanPop.textContent = place.population
  //   listCities.appendChild(spanName)
  //   listCities.appendChild(spanPop)
  // })

  const html = matchArray
    .map(place => {
      return `
      <li>
      <span class="name">
      ${place.city},
      ${place.state}
      </span>
      <span class="population">
      ${place.population}
      </span>
      </li>
      `
    })
    .join('')

  listCities.innerHTML = html
}

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi')
    // regex.style.background.color = 'yellow'
    return place.city.match(regex) || place.state.match(regex)
  })
}

// // // // // // // // // // // // // //
// var request = new XMLHttpRequest();
// request.open('GET', endpoint)
// request.responseType = 'json'
// request.send()
// var cities = []
//
// function getCities() {
//   var cities = this.response
//   console.log(cities.length)
//   for (var i = 0; i < cities.length; i++) {
//     cities.forEach(function(element) {
//       console.log(element)
//     })
//   }
// }
// // // // // // // // // // // // // //