import React from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import {collectionSelector} from '../../../redux/shop/shopSelector';

import CollectionItem from '../../collectionItem/CollectionItem';

import './collection.scss';

const Collection =({collection}) => {
  const {title, items} =collection;
  return(
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {
          items.map(item => <CollectionItem key={item.id} item={item}/>)
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state,props) => {
  const collectionId = props.match.params.collectionId;
  return {
    collection : collectionSelector(collectionId)(state)
  }
}
export default connect(mapStateToProps)(Collection);