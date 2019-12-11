import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {db, convertCollectionsSnapShotToMap} from '../../../store/firebase';

import WithSpinner from './../../withSpinner/WithSpinner';
import CollectionOverview from "../../collectionOverview/CollectionOverview";
import Collection from '../collection/Collection';
import { updateCollections } from '../../../redux/shop/shopAction';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component{
  state = {
    loading : true
  };

  unsubscribeFromSnapShot = null;

  componentDidMount(){
    const {updateCollections} = this.props;
    const collectionRef = db.collection('collections');
    this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async (snapShot)=>{
      const collectionsMap = convertCollectionsSnapShotToMap(snapShot);
      updateCollections(collectionsMap);
      this.setState({loading: false});
    })
  }
  render(){
    const {match} = this.props;
    const {loading} = this.state;
    return (
      <div className="shop-page">
          <Route 
            exact path={`${match.path}`} 
            render = {(props) =>{
              return (
                <CollectionOverviewWithSpinner
                  isLoading={loading}
                  {...props}
                />
              )
            }}
          />
          <Route 
            path={`${match.path}/:collectionId`} 
            render = {(props) => {
              return (
                <CollectionPageWithSpinner
                  isLoading={loading}
                  {...props}
                />
              )
            }}  
          />
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