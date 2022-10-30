'Using strict';

// API Key


// Async APi
async function rainydaysAPI() {
  try {
    const response = await fetch(URL + 'products', {
      headers: { Authorization: bAuth(openKey, secretKey)},
    });

    const result = await response.json();

    console.log(result);

    for(let i = 0; i < result.length; i++) {
      console.log(result[i].description);
    
      productSection.innerHTML += `
            <a href="product.html?id=${result[i].sku}" class="product">
                <div class="product__top">
                    <img src="${result[i].images[0].src}" class="img__category" alt="Image of jacket name${result[i].name}">
                </div>
                <div class="product__mid">
                    <h5 class="subHead">
                        ${result[i].name}
                    </h5>
                        ${String(result[i].description)}
                </div>
                <div class="product__bot">
                <p class="text__price">
                    Kr ${result[i].price} ,-
                </p>
                <button onclick="rdcart(${result[i].sku})" class="btn">Buy</button>
                </div>
            </a>
        `
      

    }

  } catch (error) {
    console.log(error);
  }
}



rainydaysAPI()