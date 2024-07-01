import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);

    
    const addToCart = (count) => {
        setCartCount((prevCount) => prevCount + count); 
    };

    
    const resetCart = () => {
        setCartCount(0); 
    };

    return (
        <CartContext.Provider value={{ cartCount, addToCart, resetCart }}>
            {children}
        </CartContext.Provider>
    );
};


export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
