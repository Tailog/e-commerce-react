import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import StripeButton from './../../stripeButton/StripeButton';
import {cartItemsSelector,cartTotalSelector} from "../../../redux/cart/cartSelector";
import CheckoutItem from "../../checkoutItem/CheckoutItem";

import './checkout.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">
      <span>TOTAL : {total}€</span>
    </div>
    <StripeButton price={total}/>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems : cartItemsSelector,
  total: cartTotalSelector
})

export default connect(mapStateToProps)(CheckoutPage);