import React, { createContext, useState } from 'react';
import { BsEmojiWink } from 'react-icons/bs';


export const CartContext = createContext();

const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  const addToCart = (product, id) => {
    const newItem = { ...product, quantity: 1 };
    
    const cartItem = cart.find((item) => {
      return item.id === id;
    })

    if(cartItem) {
      const newCart = [...cart].map((item) => {
        if(item.id === id) {
          return {...item, quantity: item.quantity + 1}
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    else {
      setCart([...cart, newItem]);
    }
  }

  return <CartContext.Provider value={{addToCart, cart}}>
    {children}
  </CartContext.Provider>
};

export default CartProvider;
