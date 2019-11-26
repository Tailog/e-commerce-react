import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../button/Button';
import CartItem from '../cartItem/CartItem';

import { createStructuredSelector } from "reselect";
import { cartItemsSelector } from '../../redux/cart/cartSelector';

import './cartDropdown.scss';

const CartDropdown = ({cartItems}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems : cartItemsSelector
})

export default connect(mapStateToProps)(CartDropdown);