import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const shopCollectionsSelector = createSelector(
  [selectShop],
  shop => shop.collections
)