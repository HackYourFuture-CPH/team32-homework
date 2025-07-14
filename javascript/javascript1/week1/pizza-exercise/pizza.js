console.log("I love pizza");

let favouritePizzaName = "kabab pizza";
let pizzaPrice = 200;
console.log("New pizza order: " + favouritePizzaName + "." + "The price of the pizza is: " +  pizzaPrice);

let qty = 2;

let size = "family";

let totalPrice;
if(size.toLocaleLowerCase() === "family"){
   totalPrice =  pizzaPrice * 2 * qty
}
else{
    totalPrice = pizzaPrice * qty;
}
console.log(totalPrice);
console.log("New pizza order: " + qty +" "+ size + " "+ favouritePizzaName + "." + "Total cost for the order is: " + totalPrice);
