import cartTypes from './cartTypes';

export const toggleCartVisibility = () => {
  return {
    type : cartTypes.TOGGLE_CART_VISIBILITY
  };
}

export const addItem = (item) => {
  return {
    type : cartTypes.ADD_ITEM,
    payload : item
  }
}

export const removeItem = (item) => {
  return {
    type : cartTypes.REMOVE_ITEM,
    payload : item
  }
}

export const clearItemFromCart = (item) => {
  return {
    type : cartTypes.CLEAR_ITEM,
    payload : item
  }
}