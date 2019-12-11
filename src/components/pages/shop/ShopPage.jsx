import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {db, convertCollectionsSnapShotToMap} from '../../../store/firebase';

import CollectionOverview from "../../collectionOverview/CollectionOverview";
import Collection from '../collection/Collection';
import { updateCollections } from '../../../redux/shop/shopAction';

class ShopPage extends React.Component{
  unsubscribeFromSnapShot = null;

  componentDidMount(){
    const {updateCollections} = this.props;
    const collectionRef = db.collection('collections');
    this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async (snapShot)=>{
      const collectionsMap = convertCollectionsSnapShotToMap(snapShot);
      updateCollections(collectionsMap);
    })
  }
  render(){
    const {match} = this.props
    return (
      <div className="shop-page">
          <Route exact path={`${match.path}`} component={CollectionOverview}/>
          <Route path={`${match.path}/:collectionId`} component={Collection}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
  }
}

export default connect(null,mapDispatchToProps)(ShopPage);