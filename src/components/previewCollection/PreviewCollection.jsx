import React from 'react';

import './previewCollection.scss';

import CollectionItem from './../collectionItem/CollectionItem';

const PreviewCollection=({title,items})=>{
  return(
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {
         items
         .filter((item,i)=>{
           return i<4;
         })
         .map((item)=>{
           return <CollectionItem key={item.id} item={item}/>
         }) 
        }
      </div>
    </div>
  )
}

export default PreviewCollection;