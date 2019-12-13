import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {fetchingShopSelector} from './../../../redux/shop/shopSelector';
import {fetchCollectionsStartAsync} from './../../../redux/shop/shopAction';

import WithSpinner from './../../withSpinner/WithSpinner';
import CollectionOverview from "../../collectionOverview/CollectionOverview";
import Collection from '../collection/Collection';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component{
  componentDidMount(){
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
  }
  render(){
    const { match, isCollectionFetching } = this.props;
    return (
      <div className="shop-page">
          <Route 
            exact path={`${match.path}`} 
            render = {(props) =>{
              return (
                <CollectionOverviewWithSpinner
                  isLoading={isCollectionFetching}
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
                  isLoading={isCollectionFetching}
                  {...props}
                />
              )
            }}  
          />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: fetchingShopSelector
})

const mapDispatchToProps = dispatch => {
  return {
    fetchCollectionsStartAsync: ()=> dispatch(fetchCollectionsStartAsync()) 
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);