import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import cart from '../assets/images/cart.svg';
import avatar from '../assets/images/avatar.png';
import { useCart } from '../context/context';
import Product1 from '../assets/images/product-1.jpg';
import { IoCloseOutline } from 'react-icons/io5';

const Navbar = () => {
    const { cartCount, resetCart } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const unitPrice = 62500;

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const handleRemoveItem = () => {
        setIsCartOpen(false); // Close the cart panel
        resetCart(); // Reset cart count to 0
    };

    const totalPrice = cartCount * unitPrice;

    return (
        <nav id="navbar" className="w-full flex bg-gray-200 h-[4rem] justify-between items-center px-4 sm:px-10">
            <div className="flex-shrink-0 sm:mx-[8rem]">
                <img src={logo} alt="logo" className="h-8 w-[7rem]" />
            </div>

            <div className="flex items-center gap-5 sm:mr-[5rem] cursor-pointer">
                <div className="relative">
                    <img src={cart} alt="cart" className="h-6 w-6 my-5 mx-3" onClick={toggleCart} />
                    {cartCount > 0 && (
                        <span className="absolute top-0 right-0 mt-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs z-50">
                            {cartCount}
                        </span>
                    )}
                    {isCartOpen && (
                        <div className="absolute flex right-0 mt-[-20px] w-[20rem] bg-gray-100 shadow-lg rounded-lg p-4 z-50">
                            <div className="ml-2 w-[5rem]">
                                <img src={Product1} alt="shoe product" className="w-20 h-20 rounded-lg" />
                            </div>
                            <div className="flex-col ml-3 font-medium">
                                <div className="flex items-center justify-between">
                                    <p className="mx-2 line-through font-bold">$12500</p>
                                    
                                    <span className="text-orange-500 mx-2">x 50% dis</span>
                                    <div className="cursor-pointer ml-4 bg-red-600 rounded-lg text-white " onClick={handleRemoveItem} > 
                                    <IoCloseOutline  />
                                    </div>
                                </div>
                                <div className="ml-2 flex-col">
                                    <div>
                                        <p>${unitPrice.toLocaleString()} x {cartCount}</p>
                                    </div>
                                    <div>Total: ${totalPrice.toLocaleString()}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="ml-4">
                    <img src={avatar} alt="avatar" className="h-10 w-10 border-[2px] rounded-full border-orange-500" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
