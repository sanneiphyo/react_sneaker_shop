import React, { useState } from 'react';
import ShoeImages from "./data";
import ShoeCard from './ShoeCard';
import Text from './Text';
import product1 from "../assets/images/product-1.jpg"; // Ensure this import matches your actual path

const Sale = () => {
  const [bigShoeImg, setBigShoeImg] = useState(product1);

  const changeBigShoeImage = (id) => {
    const selectedShoe = ShoeImages.find(image => image.id === id);
    if (selectedShoe) {
      setBigShoeImg(selectedShoe.bigShoe);
    }
  };

  return (
    <div className='mx-[4rem]  sm:flex sm:mx-[10rem] mt-[2rem]  h-[50rem]  sm:h-[30rem]'>
      {/** Main shoe image */}
      <div >
        <div  className='w-[25rem]  mx-7'>
        <img
          src={bigShoeImg}
          alt="Selected product"
          className="mt-5 w-[22rem] h-[20rem] rounded"
        />
        </div>
        
     
      {/** Thumbnails */}
      <div className='flex mt-5 gap-3'>
        {ShoeImages.map((image) => (
          <ShoeCard
            key={image.id}
            image={image}
            isSelected={image.bigShoe === bigShoeImg}
            changeBigShoeImage={changeBigShoeImage}
          />
        ))}
         </div>
      </div>
      {/**text */}
      <div className='sm:ml-[4rem] mt-[5rem]'>
            <Text/>
      </div>
    </div>
  );
};

export default Sale;
