import React from "react";

const Service = ({data}) => {
    const {image, name, price, recipi, _id} = data ;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipi}</p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 text-white ">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
