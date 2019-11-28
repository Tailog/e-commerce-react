import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const shopCollectionsSelector = createSelector(
  [selectShop],
  shop => shop.collections
)

export const collectionForPreviewSelector = createSelector(
  [shopCollectionsSelector],
  collections => Object.keys(collections).map(key=> collections[key])
)

export const collectionSelector = (collectionId) => {
  return (
    createSelector(
      [shopCollectionsSelector],
      collections =>collections[collectionId]
    )
  )
}