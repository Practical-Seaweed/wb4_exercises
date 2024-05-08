"use strict"

function parsePartCode(yourProductCode) {
    let colonIndexValue = yourProductCode.indexOf(":");
    let hypenIndexValue = yourProductCode.indexOf("-");

    let supplierCode = yourProductCode.substring(0, colonIndexValue);
    let productNumber = yourProductCode.substring(
        colonIndexValue + 1,
        hypenIndexValue
    );

    let size = yourProductCode.substring(hypenIndexValue + 1);

    let productInfo = {
        supplierCode: supplierCode,
        productNumber: productNumber,
        productSize: size,
    };

    return productInfo;
}

// pretend that this is your product description
let productCode = "XYZ:1234-L";

// calling this function gives us the object with different property of that specific part
let productInfo = parsePartCode(productCode);

// call the object and print the value
console.log(`
Supplier Code: ${productInfo.supplierCode}
Product Number: ${productInfo.productNumber}
Product Size: ${productInfo.productSize}
`)
// this code above was all Rohan code, I will be studying this 
// the code below is Eric Schwartz code. Will also be studying it



/*

function parsePartCode(code) {


    // get the supplier code from the passed in string
    let supplierCode = code.substring(0, code.indexOf(":"));

    // get the product number from the passed in string
    let productNumber = code.substring(code.indexOf(":") + 1, code.indexOf("-"));

    // get the size from the passed in string
    let size = code.substring(code.indexOf("-") + 1);

    // put all that together in and object and return from the function
    return {
        supplierCode: supplierCode,
        productNumber: productNumber,
        size: size
    }
}

// create a variable holding some product code
let potato = "XYZ:1234-L"




























    */