import cartTypes from './cartTypes';

export const toggleCartVisibility = () => {
  return {
    type : cartTypes.TOGGLE_CART_VISIBILITY
  };
}