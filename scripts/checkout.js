import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProductsFetch, loadProducts } from '../data/products.js';
import { loadCart, loadCartFetch } from '../data/cart.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';


async function loadPage() {
  try {
    // throw 'error';

    await Promise.all([
      loadProductsFetch(),

      loadCartFetch()
    ])

    // const value = await new Promise((resolve, reject) => {
    //   // throw 'error1';
    //   loadCart(() => {
    //     // reject('error3');

    //     resolve('value3');
    //   });
    // });
  } catch (error) {
    console.log('unexpected error. please try again later.');
  }

  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();