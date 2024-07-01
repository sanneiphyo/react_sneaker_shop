import React from "react";


const ShoeCard =({ image, isSelected, changeBigShoeImage })=>{
  const  handleClick = () => {
    changeBigShoeImage(image.id);
  };

  return (
    <div
      className={`cursor-pointer  hover:opacity-50 max-sm:flex-1 ${isSelected ? "border-[3px] border-orange-500 rounded-xl" : "border-transparent"}`}
      onClick={handleClick}
    >
      <div className=" justify-center file: items-center  bg-card bg-center bg-cover ">
        <img
          src={image.thumbnail}
          alt="Shoe Collections"
          width={100}
          height={100}
          className="object-contain rounded "
        />
      </div>
    </div>
  );
};

export default ShoeCard;