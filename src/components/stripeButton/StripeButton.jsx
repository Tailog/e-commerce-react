import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({price}) => {
  const stripePrice = price*100;
  const publishable_key = 'pk_test_WrJxColly1UyQQCkfjOLBkmz00zCF077ZL';
  const onToken = ({token}) =>{
    console.log('====================================');
    console.log(token);
    console.log('====================================');
    alert('Payment Accepted')
  }
  return (
  <StripeCheckout 
    label="Pay Now"
    panelLabel="Pay Now"
    name="CRWN Clothing .ltd"
    description={`Your total is €${price}`}
    image="https://sendeyo.com/up/d/f3eb2117da"
    shippingAddress
    billingAddress
    token={onToken}
    amount={stripePrice}
    stripeKey={publishable_key}
  />
  )
}

export default StripeButton;