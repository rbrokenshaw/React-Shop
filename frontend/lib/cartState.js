import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  // this is our own custom provider
  // we will store data (state) amd functionality (updaters) here and anyone
  // can access it via the consumer.

  const [cartOpen, setCartOpen] = useState(false);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    console.log('CLOSE THE CART!!');
    setCartOpen(false);
  }

  function openCart() {
    console.log('OPEN CART!!!');
    setCartOpen(true);
  }

  return (
    <LocalStateProvider
      value={{ cartOpen, setCartOpen, toggleCart, closeCart, openCart }}
    >
      {children}
    </LocalStateProvider>
  );
}

// custom hook for acessing the cart local state
function useCart() {
  const all = useContext(LocalStateContext);
  return all;
}

export { CartStateProvider, useCart };
