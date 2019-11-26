import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const cartItemsSelector = createSelector(
  [selectCart],
  (cart) => cart.cartItems 
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
)

export const cartItemsCountSelector = createSelector(
  [cartItemsSelector],
  (cartItems) => {
    const reducer = (accumulateValue, cartItem) =>
      accumulateValue + cartItem.quantity;
    return cartItems.reduce(reducer,0);
  }
)

export const cartTotalSelector = createSelector(
  [cartItemsSelector],
  cartItems => {
    const reducer = (accumulateValue, cartItem) =>
      accumulateValue + cartItem.quantity * cartItem.price;
    return cartItems.reduce(reducer, 0);
  }
);