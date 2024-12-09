"use strict";
let stores = [
    { id: 1, name: "Milk", count: 100 },
    { id: 2, name: "Yakult", count: 100 },
    { id: 3, name: "Butter", count: 100, }
];
let carts = [];
function addToCart(productName, quantity) {
    const product = stores.find((item) => item.name.toLowerCase() === productName.toLowerCase());
    if (product) {
        if (product.count >= quantity) {
            const cartItem = carts.find((item) => item.name === productName);
            if (cartItem) {
                cartItem.count += quantity;
            }
            else {
                carts.push({ id: product.id, name: product.name, count: quantity });
            }
            product.count -= quantity;
            console.log(`${quantity} x ${product.name} has been added to your cart.`);
        }
        else {
            console.log(`Not enough stock for ${product.name}. Only ${product.count} left.`);
        }
    }
    else {
        console.log("Product not found in store.");
    }
}
;
function show() {
    console.log(`Your current carts: `, carts);
    console.log(`Stores: `, stores);
}
;
function updateProduct(index, newCount) {
    if (index >= 0 && index < carts.length) {
        const cartProduct = carts[index];
        const storeProduct = stores.find(product => product.id == cartProduct.id);
        if (storeProduct) {
            const diff = newCount - cartProduct.count;
            if (storeProduct.count >= diff) {
                cartProduct.count = newCount;
                storeProduct.count -= diff;
                console.log(`Updated your carts ${cartProduct.name}`);
            }
            else {
                console.log("Update failed !!!!");
            }
        }
    }
    else {
        console.log("Error Value Input !!!");
    }
}
function deleteProduct(index) {
    if (index >= 0 && index < carts.length) {
        const cartProduct = carts.splice(index, 1)[0];
        const storeProduct = stores.find(product => cartProduct.id === product.id);
        if (storeProduct) {
            storeProduct.count += cartProduct.count;
        }
        console.log(`${cartProduct.name} in your cart deleted`);
    }
    else {
        console.log("Error value input!!!");
    }
}
function main() {
    while (true) {
        console.log("Current state:");
        show();
        const input = prompt("Enter your choice (C/R/U/D/E): ");
        if (!input)
            continue;
        switch (input.toUpperCase()) {
            case "C":
                const productName = String(prompt("Enter product name you want to buy: "));
                const quantity = Number(prompt("Enter quantity you want: "));
                addToCart(productName, quantity);
                break;
            case "R":
                show();
                break;
            case "U":
                const updateIndex = Number(prompt("Enter the index of the product you want to change: "));
                const newQuantity = Number(prompt("Enter the quantity you want: "));
                updateProduct(updateIndex, newQuantity);
                break;
            case "D":
                const deleteIndex = Number(prompt("Enter the index of the product you want to delete: "));
                deleteProduct(deleteIndex);
                break;
            case "E":
                console.log("Thank you for purchasing at Rikki Stores :3");
                return;
            default:
                console.error("Invalid input. Please enter C, R, U, D, or E.");
        }
    }
}
main();
