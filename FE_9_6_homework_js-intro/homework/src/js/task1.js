let baseSum = parseFloat(prompt('Input amount of money', '0'));
let discount = parseFloat(prompt('Input the discount', '0'));
let price_Discount = (baseSum - baseSum * discount / 100).toFixed(2);

if (baseSum <= 0) {
    console.log('Invalid data');
} else if (isNaN(baseSum)) {
    console.log('Invalid data');
} else if (discount <= 0) {
    console.log('Invalid data');
} else if (discount >= 100) {
    console.log('Invalid data');
} else {
    let saveSum = (baseSum - price_Discount).toFixed(2);
    console.log(`Price without discount: ${baseSum}
Discount: ${discount} %
Price with discount: ${price_Discount} 
Saved: ${saveSum}`);
}