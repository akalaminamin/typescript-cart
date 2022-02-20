"use strict";
const productStore = [];
const addProduct = (product) => {
    productStore.push(product);
    console.log(product);
};
// const product1: ProductsType = {
//     id:1,
//     title:"product1",
//     price:33,
//     quintity:1,
//     discountStatus:false
// }
// addProduct(product1)
