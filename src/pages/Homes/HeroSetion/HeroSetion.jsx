import React from "react";
import banner from '../../../assets/home/banner.jpg';

const HeroSetion = () => {
  return (
    <div
      className="hero my-20"
      style={{
        height: " 65vh",
        backgroundImage:
          `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center w-9/12  bg-slate-50 p-16 ">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase text-black">Bistro boss</h1>
          <p className="mb-5 text-black">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSetion;
