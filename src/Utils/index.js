/**
 * This function calculates total prices of a new order
 * @param {array} products cartProducts: Array of objects
 * @returns {number} Total price
 */
export const totalPrice = products => {
  let sum = 0
  products.map(product => (sum += product.price))
  return sum
}
