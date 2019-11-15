import React from 'react';
import {connect} from 'react-redux';

import { ReactComponent as ShoppingIcon} from './../../assets/logo/11.2 shopping-bag.svg.svg';

import './cart-icon.scss';
import { toggleCartVisibility } from '../../redux/cart/cartActions';

const CartIcon = ({handleToggle}) => {
  return (
    <div className='cart-icon' onClick={()=> handleToggle()}>
      <ShoppingIcon className='shopping-icon'/>
      <span className="item-count">0</span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>{
  return {
    handleToggle : () => dispatch(toggleCartVisibility())
  }
}

export default connect(null,mapDispatchToProps)(CartIcon);