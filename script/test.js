const wooClientKey = 'ck_f5e2623a2d8dd41ad65e7b0af470a02e1f9837b6';
const wooClientSecret = 'cs_4b6217333e8a80ea461ddd73dc67b749edb65127';
const wooUrl = 'https://rainydays.frontendkenterik.no/wp-json/wc/v3/';

function basicAuth(key, secret) {
  let hash = btoa(key + ':' + secret);
  return 'Basic ' + hash;
}

let auth = basicAuth(wooClientKey, wooClientSecret);

async function getProducts() {
  try {
    const response = await fetch(wooUrl + 'products', {
      headers: { Authorization: basicAuth(wooClientKey, wooClientSecret) },
    });

    const result = await response.json();
    console.log(result);
    
    
  } catch (error) {
    // catches errors both in fetch and response.json
    console.log(error);
  }
}

async function get() {
  const response = await fetch(
    'https://rainydays.frontendkenterik.no/wp-json/wc/v3/products?consumer_key=ck_f5e2623a2d8dd41ad65e7b0af470a02e1f9837b6'
  );
  const result = await response.json();
  console.log(result);
}

getProducts();
