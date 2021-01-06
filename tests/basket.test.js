const { scanItem, addItemToBasket, getBasketTotal, basket, removeItemFromBasket } = require("../basket");

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

const items = [apple, banana, orange, pineapple, kiwi];

describe("Shopping Basket", () => {
    // test senaryolari
    it("should scan an item barcode and return matching item", () => {
        const resultItem = scanItem(456); // exercise step
        // toBe -- primitive data types - string, number, bool, null, undefined
        // toEqual -- complex data types object/array
        expect(resultItem).toEqual(banana);  // verify step
    });

    it("should add an item to the shopping basket", () => {
        addItemToBasket(apple);
        expect(basket).toContain(apple);
    })

    it("should calculate total price of all items in the shopping basket", () => {
        addItemToBasket(kiwi);
        const total = getBasketTotal();
        expect(total).toBe(30); // apple + kiwi
    })

    it("should remove item from basket", () => {
        removeItemFromBasket(kiwi);
        expect(basket).not.toContain(kiwi);
    })
})

