// red, green, refactor
const orange = {
  barcode: 789,
  price: 7,
};
const pineapple = {
  barcode: 5367,
  price: 80,
};
const kiwi = {
  barcode: 765,
  price: 25,
};
const apple = {
  barcode: 123,
  price: 5,
};
const banana = {
  barcode: 456,
  price: 6,
};

const catalogue = [apple, banana, orange, pineapple, kiwi];
const basket = [];

function scanItem(barcode) {
    // product kataloga bak
    // barcode u eslesen urunu bul
    // onu return yap
    // procedural style 
    /*
    for (let urun of catalogue) {
        if(urun["barcode"] === barcode) {
            return urun;
        }
    }
    */
    // functional style
    return catalogue.find(urun => {
        if(urun.barcode === barcode) {
            return true;
        }
    })
}

function addItemToBasket(item) {
    // item vereceyik
    // basket arrayine eklenecek
    return basket.push(item);
}

function getBasketTotal() {
    console.log({ basket });
    /*
    return basket.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
    }, 0);
    */
   let total = 0;
   for(let urun of basket) {
       total = total + urun.price;
   }
   return total;
}

/*
URUN = {
  barcode: 456,
  price: 6,
};
*/

function removeItemFromBasket(productToRemove) {
    // basket arrayinden elementi sil
    const indexToRemove = basket.indexOf(productToRemove);
    basket.splice(indexToRemove);
}

module.exports = {
  scanItem,
  addItemToBasket,
  basket,
  getBasketTotal,
  removeItemFromBasket
};
