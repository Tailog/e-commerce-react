export const addItemToCart = (cartItems,itemToAdd) => {
  const existing = cartItems.find((item)=>{
    return item.id === itemToAdd.id
  });
  if (existing) {
    return cartItems.map(item =>{
      return (
        item.id === itemToAdd.id
        ?
        {...item,quantity: item.quantity +1}
        :
        item
      )
    })
  }else{
    return [...cartItems,{...itemToAdd,quantity: 1}];
  }
}

export const removeItemFromCart = (cartItems,itemToRemove) => {
   const existingCartItem = cartItems.find(item => {
     return item.id === itemToRemove.id;
   });

   if (existingCartItem.quantity === 1) {
     return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
   }

   return cartItems.map(cartItem => {
     return cartItem.id === itemToRemove.id
       ? { ...cartItem, quantity: cartItem.quantity - 1 }
       : { ...cartItem };
   })
}