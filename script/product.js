'use strict';

const urlSearch = document.location.search
console.log(urlSearch)

const test = new URLSearchParams(urlSearch);

let id = test.get("id")
console.log(id)


async function productpage() {

    try {
        const response = await fetch(URL + 'products', {
            headers: { Authorization: bAuth(openKey, secretKey)},
          });
    
          const result = await response.json();
          console.log(result)
        
            const index = result.findIndex((result) => result.sku === id)
            console.log(index);
        
            Page__product.innerHTML += `
                <h2>
                    ${result[index].name}
                </h2>
                <img src="${result[index].images[0].src}" class="" alt="Image of jacket name${result[index].name}">
                ${String(result[index].description)}
                Kr ${result[index].price} ,-
                <button onclick="rdcart(${result[index].sku})" class="btn">Buy</button>
            `;
        

    }catch (error) {
        console.log(error);
    }



    
}

productpage()