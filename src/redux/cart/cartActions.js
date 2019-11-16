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