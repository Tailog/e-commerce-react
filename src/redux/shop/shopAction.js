import shopTypes from './shopTypes';
import {db, convertCollectionsSnapShotToMap} from './../../store/firebase';

export const fetchCollectionsStart =() =>{
  return {
    type: shopTypes.FETCH_COLLECTIONS_START,
  }
}
export const fetchCollectionsSuccess = (collections) => {
  return {
    type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
  }
}
export const fetchCollectionsFailure = (errorMessage) => {
  return {
    type: shopTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
  }
}

export const fetchCollectionsStartAsync = () =>{
  return dispatch => {
    dispatch(fetchCollectionsStart());
    const collectionRef = db.collection("collections");
    collectionRef.get()
    .then(snapShot => {
      const collectionsMap = convertCollectionsSnapShotToMap(snapShot);
      dispatch(fetchCollectionsSuccess(collectionsMap))
    })
    .catch((error) => {
      dispatch(fetchCollectionsFailure(error.message))
    });
  }
}