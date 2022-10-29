'Using strict';

// API Key

// User
const openKey = 'ck_f5e2623a2d8dd41ad65e7b0af470a02e1f9837b6';

// Password
const secretKey = 'cs_4b6217333e8a80ea461ddd73dc67b749edb65127';

// API URL
const URL = 'https://rainydays.frontendkenterik.no/wp-json/wc/v3/products';

// Async APi
async function rainydaysAPI() {
  try {
    const response = await fetch(`${URL} + ?${openKey}`);
  } catch (error) {
    console.log(error);
  }
}
