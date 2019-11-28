import React from 'react';
import {connect} from 'react-redux';

import {directorySectionSelector} from '../../redux/directory/directorySelector';
import {createStructuredSelector} from 'reselect';

import MenuItem from '../menuItem/MenuItem';
import "./directory.scss";


const Directory =({sections}) => {
  return (
    <div className="directory-menu">
      {
        sections.map(({id,...props})=>{
          return <MenuItem key ={id} {...props} />
        })
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections : directorySectionSelector
})

export default connect(mapStateToProps)(Directory);