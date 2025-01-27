import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle.jsx";
import Service from "./Service.jsx";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);

  return (
    <div className="my-16">
      <SectionTitle
        title="chef recommends"
        secandTitle="Should Try"
      ></SectionTitle>
      <div className="grid grid-cols-3 gap-3 text-center mx-10 ">
        {service.map((data) => (
          <Service data={data} key={data?._id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
