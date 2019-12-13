import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const shopCollectionsSelector = createSelector(
  [selectShop],
  shop => shop.collections
)

export const fetchingShopSelector = createSelector(
  [selectShop],
  shop => shop.isFetching
)

export const collectionForPreviewSelector = createSelector(
  [shopCollectionsSelector],
  collections => collections ? Object.keys(collections).map(key=> collections[key]) : []
)

export const collectionSelector = (collectionId) => {
  return (
    createSelector(
      [shopCollectionsSelector],
      collections =>collections ? collections[collectionId] : null
    )
  )
}