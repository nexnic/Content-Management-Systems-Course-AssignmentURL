'use strict';

const url = 'https://rainydays.frontendkenterik.no/wp-json/';

async function api(url) {
  const response = await fetch(url);
  const result = await response.json();

  console.log(result);
}

api(url);
