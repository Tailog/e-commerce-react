import React from 'react';

import CustomButton from '../button/Button';

import './cartDropdown.scss';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown;