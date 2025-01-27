import React, { useEffect, useState } from "react";
import MenuCart from "./MenuCart.jsx";
import { Link } from "react-router";
import SectionTitle from "../../../components/SectionTitle.jsx";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.filter((item) => item.category === "popular");
        setMenu(newData);

        // This is data available or not avilable condition
        // if(newData){
        //     console.log("its data available")
        // }else{
        //     console.log("data is not maching ")
        // }
      });
  }, []);

  return (
    <div className="m-16 text-center">
      <SectionTitle
        title="from our menu"
        secandTitle="check out"
      ></SectionTitle>
      <div className="mt-16 grid gap-4 grid-cols-2">
        {menu.map((menu) => (
          <MenuCart menu={menu} key={menu?._id} />
        ))}
      </div>

      <Link className="btn btn-outline border-0 border-b-4 my-10">
        {" "}
        View Full Mene
      </Link>
    </div>
  );
};

export default Menu;
