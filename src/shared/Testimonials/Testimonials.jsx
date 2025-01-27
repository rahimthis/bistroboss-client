import { Swiper, SwiperSlide } from "swiper/react";
import quote from "../../assets/icon/quote.png"

// rating styles
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// required modules
import { Navigation } from "swiper/modules";
import SectionTitle from "../../components/SectionTitle";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="my-20">
      <SectionTitle title="testimonials" secandTitle="What Our Clients Say " />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
     
       {reviews.map((data) => (
          <SwiperSlide >
           <div className="flex flex-col items-center mx-24 ">
           <Rating style={{ maxWidth: 180 }} value={data.rating} readOnly />
           <img className="w-36 h-36" src={quote} alt="" />
            <p className="mt-3">{data.details}</p>
            <h2 className="text-xl mt-3 text-[#D99904] ">{data.name}</h2>
           </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
