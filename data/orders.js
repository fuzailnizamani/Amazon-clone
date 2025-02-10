// export const orders = JSON.parse(localStorage.getItem('orders')) || [] ;

// export function addOrder(order){
//   orders.unshift(order);

//   saveToStorage();
// }

// function saveToStorage(){
//   localStorage.setItem('orders', JSON.stringify(orders));
// }

// export function getOrder(orderId) {
//   let matchingOrder;

//   orders.forEach((order) => {
//     if (order.id.trim() === orderId.trim()) {
//       matchingOrder = order;
//     }
//   });

//   return matchingOrder;
// }

export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
  orders.unshift(order);
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

export function getOrder(orderId) {
  return orders.find(order => order.id?.trim() === orderId.trim()) || null;
}