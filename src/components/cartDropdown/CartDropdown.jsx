import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

import CustomButton from '../button/Button';
import CartItem from '../cartItem/CartItem';

import { createStructuredSelector } from "reselect";
import { cartItemsSelector } from '../../redux/cart/cartSelector';
import { toggleCartVisibility } from "../../redux/cart/cartActions";

import './cartDropdown.scss';

const CartDropdown = ({cartItems, history, dispatch}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ?
          (
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
          ):
          (
            <span className="empty-message">Your cart is empty</span>
          )
        }
      </div>
      <CustomButton onClick={
        ()=>{
        history.push('/checkout')
        dispatch(toggleCartVisibility());
        }
      }>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems : cartItemsSelector
})

export default withRouter(connect(mapStateToProps)(CartDropdown));