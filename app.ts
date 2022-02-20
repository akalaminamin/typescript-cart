interface ProductsType {
  id: number;
  title: string;
  price: number;
  quantity: number;
  discountStatus: boolean;
}

interface DiscountCodeType {
  code: string;
  value: number;
  applied: string;
}

const promoCodes: Array<DiscountCodeType> = [
  {
    code: "halfDiscount",
    value: 50,
    applied: "all",
  },
  {
    code: "singleDiscount",
    value: 50,
    applied: "product3",
  },
];

let productStore: Array<ProductsType> = [];

// addded new product function
const addProduct = (product: ProductsType) => {
  productStore.push(product);
  console.log(productStore);
};

const product1: ProductsType = {
  id: 1,
  title: "product1",
  price: 20,
  quantity: 1,
  discountStatus: false,
};
const product2: ProductsType = {
  id: 2,
  title: "product2",
  price: 20,
  quantity: 2,
  discountStatus: false,
};
const product3: ProductsType = {
  id: 3,
  title: "product3",
  price: 20,
  quantity: 2,
  discountStatus: false,
};
addProduct(product1);
addProduct(product2);
addProduct(product3);

// remove product from product store function
const removeProduct = (id: number) => {
  productStore = productStore.filter((item) => item.id !== id);
  console.log(productStore);
};
removeProduct(2);

// handle quintity function
const incrementQuintity = (id: number) => {
  const matchProduct = productStore.find((item) => item.id === id);
  if (matchProduct) {
    if (matchProduct) {
      matchProduct.quantity++;
      console.log("quantity increment", matchProduct.quantity);
    }
  }
};
incrementQuintity(1);

// decrement product quintity function
const decreamentQuantity = (id: number) => {
  const matchProduct = productStore.find((item) => item.id === id);
  if (matchProduct) {
    if (matchProduct.quantity > 1) {
      matchProduct.quantity--;
      console.log("quantity decrement", matchProduct.quantity);
    }
  }
};

decreamentQuantity(1);

// total price function
let totalPrice: number;
const totalAmount = () => {
  totalPrice = productStore.reduce(
    (total, ele) => total + ele.quantity * ele.price,
    0
  );
  console.log(totalPrice);
};
totalAmount();

// single product total amount funciton
let singleTotalPrice: number;
const singleProductPrice = (product: ProductsType) => {
  singleTotalPrice = product.quantity * product.price;
  console.log(singleTotalPrice);
};

singleProductPrice(productStore[0]);

// apply discount code funciton
const applyDiscount = (code: string): void => {
  const discountCode = promoCodes.find((item) => item.code === code);
  if (discountCode) {
    if (discountCode.applied === "all") {
      let discountAmount = (totalPrice * discountCode.value) / 100;
      console.log(discountAmount);
    } else {
      const product = productStore.find(
        (item) => item.title === discountCode.applied
      );
      if (!product?.discountStatus) {
        const discountAmount = (singleTotalPrice * discountCode.value) / 100;
        product?.discountStatus = true;
        console.log(discountAmount);
      } else {
        console.log("promo code date is expaired");
      }
    }
  }
};
applyDiscount("singleDiscount"); 
