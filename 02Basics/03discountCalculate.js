// Opertator Study

// Discount = ((Listing Price - Selling Price) / Listing Price) * 100

var listingPrice = 799;
var sellingPrice = 199;

var discount = ((listingPrice - sellingPrice) / listingPrice) * 100;
// console.log("Total Discount = " + discount);

var showDiscount = Math.round(discount);
console.log("Total Discount = " + showDiscount + "% off");