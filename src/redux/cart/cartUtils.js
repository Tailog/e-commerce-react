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