import React, { useState, useEffect, createContext } from 'react';

export const CartContext = createContext();

export default function CartProvider ({ children }) {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : [];
  });

  const emptyCart = () => {
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    //console.log(cart);
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
  
      if (existingProduct) {
        // If the product already exists in the cart, increase its quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If the product doesn't exist in the cart, add it with a quantity of 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
      
  const increaseQuantity = (id) => {
    setCart((prevCart) => {
      return prevCart.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      );
    });
  };
  
  const decreaseQuantity = (id) => {
    setCart((prevCart) => {
      return prevCart.map((product) =>
        product.id === id && product.quantity > 0 ? { ...product, quantity: product.quantity - 1 } : product
      );
    });
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};