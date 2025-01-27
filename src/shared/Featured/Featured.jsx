import React from "react";
import SectionTitle from "../../components/SectionTitle.jsx";
import featured from "../../../src/assets/home/featured.jpg";
import "./Featurd.css";

const Featured = () => {
  return (
    <div className="featuredImage my-20 p-12 bg-opacity-100">
      <SectionTitle title="form our menu" secandTitle="check it out" />

      <div className="flex justify-center items-center gap-8 px-16 text-white">
        <div>
          <img src={featured} alt="" />
        </div>
        <div>
          <h2 className="text-xl text-[#D99904]">January 22, 2025</h2>
          <h2 className="uppercase text-2xl mb-2"> Where can i get some?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            voluptatibus perferendis eligendi nesciunt consequuntur rem
            doloremque dicta repudiandae modi possimus?
          </p>
          <button className="btn btn-outline uppercase border-0 border-b-4 text-white"> read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
