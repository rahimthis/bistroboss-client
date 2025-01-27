import React from "react";

const MenuCart = ({ menu }) => {
  const { name, recipe, image, price } = menu;
  return (
    <div className="flex">
      <img style={{
        borderRadius: "0px 75px 75px 75px"
      }} className="w-[118px] has-[104px] " src={image} alt="" />
      <div className="ml-6 w-6/12 ">
        <h3 className="text-xl text-white">{name} - - - - - - - -</h3>
        <p>{recipe}</p>
      </div>
      <p className="ml-6 text-xl text-[#D99904]">${price}</p>
    </div>
  );
};

export default MenuCart;
