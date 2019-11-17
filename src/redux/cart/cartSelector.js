import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const cartItemsSelector = createSelector(
  [selectCart],
  (cart) => cart.cartItems 
);

export const cartItemsCountSelector = createSelector(
  [cartItemsSelector],
  (cartItems) => {
    const reducer = (accumulateValue, cartItem) =>
      accumulateValue + cartItem.quantity;
    return cartItems.reduce(reducer,0);
  }
)