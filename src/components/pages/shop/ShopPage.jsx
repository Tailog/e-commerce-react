import React from 'react';
import SHOP_DATA from './shopData.js';

import PreviewCollection from './../../previewCollection/PreviewCollection';


class ShopPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }
  render(){
    const {collections} = this.state;
    return (
      <div className="shop-page">
        {
          collections.map(({id,...collectionProps})=>{
            return <PreviewCollection key={id} {...collectionProps}/>
          })
        }
      </div>
    )
  }
}

export default ShopPage;