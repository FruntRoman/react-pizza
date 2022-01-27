export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj
})
export const clearCart = () => ({
    type: 'CLEAR_CART'
})
export const clearPizzaItem = (pizzaId) => ({
    type: 'CLEAR_PIZZA_ITEM',
    payload: pizzaId
})
export const increasePizzaCount = (id) => ({
    type: 'PLUS_PIZZA_COUNT',
    payload: id
})
export const decreasePizzaCount = (id) => ({
    type: 'MINUS_PIZZA_COUNT',
    payload: id
})

