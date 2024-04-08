import React from "react";
import image from "./image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../Context";

const Review = () => {
  const { step, setStep, load, setLoad } = useGlobalContext();
  const handleSubmit = () => {
    setStep(step + 1);
    setLoad(load + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:justify-items-start items-center">
        <img src={image} className="w-96 h-80 ml-0 lg:ml-72" alt="" />
        <div className="flex flex-col mr-0 lg:mr-10 pr-4 w-5/6">
          <p className="text-3xl font-semibold text-[#1f1f1f] mb-4">
            You're on your way!
          </p>
          <div className="flex mt-6">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                size="2x"
                color="#eea720"
              />
            ))}
          </div>
          <p className="italic mt-4">
            "Through its engaging and well-structured courses, Brilliant has
            taught me mathematical concepts that I previously struggled to
            understand. I now feel confident approaching both technical job
            interviews and real world problem solving situations."
          </p>
          <p className="italic mt-4">— Jacob S.</p>
        </div>
      </div>
      <button
        className="p-2 px-8 rounded bg-black text-white mt-10"
        onClick={handleSubmit}
      >
        Continue
      </button>
    </div>
  );
};

export default Review;
