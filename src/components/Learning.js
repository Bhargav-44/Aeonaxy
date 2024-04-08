import React from "react";
import image from "./9350.jpg";
import { useGlobalContext } from "../Context";

const Learning = () => {

  const {load, setLoad, step, setStep} = useGlobalContext();
  const handleSubmit = () => {
    setLoad(80);
    setStep(step + 1);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:justify-items-start items-center">
        <img src={image} className="w-64 h-96 ml-0 lg:ml-96" alt="" />
        <div className="flex flex-col w-5/6 mr-0 lg:mr-10 pr-4">
          <p className="text-2xl font-semibold text-[#1f1f1f] mb-4">
            You're in the right place
          </p>
          <p>
            Brilliant gets you hands on to help improve your professional skills
            and knowledge. You'll interact with concepts and solve fun problems
            in math, science, and computer science.
          </p>
        </div>
      </div>
      <button className="p-2 px-6 rounded bg-black text-white mt-4" onClick={handleSubmit}>
        Continue
      </button>
    </div>
  );
};

export default Learning;
