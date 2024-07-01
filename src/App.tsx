import React from 'react';
import { CartProvider } from './context/context';
import Sale from './components/Sale';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <Sale/>
    </CartProvider>
  );
};

export default App;
