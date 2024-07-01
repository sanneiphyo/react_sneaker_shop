import React, { useState } from 'react';
import plus from '../assets/images/icon-plus.svg';
import minus from '../assets/images/icon-minus.svg';
import cart from "../assets/images/cart.svg";
import { useCart } from '../context/context';

const Text = () => {
    const [count, setCount] = useState(0);
    const { addToCart } = useCart();

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        if (count > 0) {
            addToCart(count);
            setCount(0);
        }
    };

    return (
        <div className="w-full">
            <div>
                <p className="text-gray-600 text-lg font-semibold">SNEAKER COMPANY</p>
                <h1 className="text-6xl font-bold">Fall Limited Sneakers</h1>
                <p className="text-gray-900">
                    This low-profile sneakers are your perfect casual wear companion.
                    Featuring a durable rubber outer sole. They'll withstand everything
                    the weather can offer.
                </p>
                <div className="flex gap-5 mt-3">
                    <p className="text-gray-900 line-through bg-gray-300 px-2 rounded">$12500</p>
                    <p className="text-orange-500">- 50%</p>
                </div>
                <div className="mt-5 sm:flex">
                    <button className='w-full sm:w-[50px] pl-[10rem] rounded-xl sm:pl-[17px] bg-gray-200 py-5 sm:my-3' onClick={decrementCount}>
                        <img src={minus} alt="minus" />
                    </button>
                    <div className='mt-2 mb-2 w-full sm:w-[5rem] rounded-xl pl-[10rem] sm:pl-[2rem] sm:px-2 py-3'>
                        <p className="text-gray-900">{count}</p>
                    </div>
                    <button className='w-full sm:w-[50px] pl-[10rem] rounded-xl sm:pl-[17px] bg-gray-200 py-5 sm:my-3' onClick={incrementCount}>
                        <img src={plus} alt="plus" />
                    </button>
                    <button className='bg-orange-500 hover:opacity-25 sm:mx-5 sm:px-5 sm:py-3 h-[50px] rounded-xl w-full sm:w-[10rem] gap-2 text-white font-bold sm:mt-3 mt-5 flex py-3 px-[7rem]' onClick={handleAddToCart}>
                        <img src={cart} alt='cart' />
                        <p>Add To Cart</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Text;
