import shopTypes from './shopTypes';

export const updateCollections =(collectionsMap) =>{
  return {
    type: shopTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
  }
} 