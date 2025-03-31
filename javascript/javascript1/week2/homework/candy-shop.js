const candyPriceTable = [
  { candyType: "Sweet", pricePerGram: 0.5 },
  { candyType: "Chocolate", pricePerGram: 0.7 },
  { candyType: "Toffee", pricePerGram: 1.1 },
  { candyType: "Chewing-gum", pricePerGram: 0.03 },
];

let boughtCandyPrices = [];
function addCandy(candyType, weight) {
  boughtCandyPrices.push({ candyType: candyType, weight: weight });
}

addCandy("Sweet", 200);
addCandy("Toffee", 100);

console.log(boughtCandyPrices);

let amountToSpend = Math.random() * 100;
function canBuyMoreCandy() {

    let boughtAmount =0;

    for(let i =0; i<boughtCandyPrices.length; i++){

        const boughtItem = boughtCandyPrices[i];
         
        const itemPrice = candyPriceTable.find(item=>item.candyType == boughtItem.candyType);

        const amount = boughtItem.weight * itemPrice.pricePerGram;


        boughtAmount = boughtAmount +amount;
    }
 
   
    console.log("amountToSpend",amountToSpend);
    console.log("boughtAmount",boughtAmount);
  return boughtAmount<amountToSpend;
}



console.log(canBuyMoreCandy());
