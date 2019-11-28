import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { collectionForPreviewSelector } from "../../redux/shop/shopSelector";

import PreviewCollection from '../previewCollection/PreviewCollection';

import './collectionOverview.scss'

const CollectionOverview = ({collections}) =>{
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...collectionProps }) => {
        return <PreviewCollection key={id} {...collectionProps} />;
      })}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: collectionForPreviewSelector
});

export default connect(mapStateToProps)(CollectionOverview);