let boughtCandyPrices =[]
function addCandy(candyType, weight) {
    if (candyType === "sweet") {
        boughtCandyPrices.push(weight * 0.5);
    } else if(candyType === "chocolate") {
        boughtCandyPrices.push(weight * 0.7);
    } else if(candyType === "toffee") {
        boughtCandyPrices.push(weight * 1.1)
    } else if(candyType === "chewing-gum") {
        boughtCandyPrices.push(weight * 0.05)
    }
}
amountToSpend = Math.random() * 100
function canBuyMoreCandy () {
    let candySum = 0;
    let index = 0;
    while (index < boughtCandyPrices.length) {
        candySum += boughtCandyPrices[index];
        index++;
    }
    let remainingMoney = amountToSpend - candySum;
    remainingMoney >= 0.05 ? console.log("You can buy more, so please do!") : console.log("Enough candy for you!")
}