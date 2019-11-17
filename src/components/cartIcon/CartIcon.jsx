import React from 'react';
import {connect} from 'react-redux';

import { ReactComponent as ShoppingIcon} from './../../assets/logo/11.2 shopping-bag.svg.svg';

import { toggleCartVisibility } from '../../redux/cart/cartActions';
import {cartItemsCountSelector} from '../../redux/cart/cartSelector';
import './cart-icon.scss';

const CartIcon = ({handleToggle, itemCount}) => {
  return (
    <div className='cart-icon' onClick={()=> handleToggle()}>
      <ShoppingIcon className='shopping-icon'/>
      <span className="item-count">{itemCount}</span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>{
  return {
    handleToggle : () => dispatch(toggleCartVisibility())
  }
}

const mapStateToProps = (state) => {
  return {
    itemCount : cartItemsCountSelector(state)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);