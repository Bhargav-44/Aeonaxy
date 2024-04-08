import React from "react";
import { useState } from "react";
import student from "./student.png";
import { useGlobalContext } from "../Context";

const Interest = () => {
  const { load, setLoad, step, setStep } = useGlobalContext();

  const options = [
    {
      txt: "Learning specific skills to advance my career",
      img: "",
    },
    {
      txt: "Exploring new topics I'm interested in",
      img: "",
    },
    {
      txt: "Refreshing my math foundations",
      img: "",
    },
    {
      txt: "Exercising my brain to stay sharp",
      img: "",
    },
    {
      txt: "Something else",
      img: "",
    },
  ];

  const [interest, setInterest] = useState("");
  const handleClick = (interest) => {
    setInterest(interest);
  };

  const handleSubmit = () => {
    setStep(step + 1);
    setLoad(60);
  };

  const isButtonActive = interest !== "";

  return (
    <div className="flex flex-col items-center justify-center mt-4 p-2 text-[#1f1f1f]">
      <p className="font-semibold text-3xl text-center ">
        Which are you most interested in?
      </p>
      <p className="p-4 text-gray-600">
        Choose just on. This will help us get you started (but won't limit your
        experience).
      </p>

      <div className="mt-6">
        {options.map((el, i) => {
          const isSelected = el.txt === interest;
          return (
            <div
              key={i}
              className={`flex items-center p-2 pr-2 md:pr-48 border ${
                isSelected ? "border-[#e2d1b6] ring-1 ring-red-900/5" : ""
              }  ${isSelected ? "shadow-lg" : ""} ${
                isSelected ? "rounded-lg" : ""
              } rounded mb-4 cursor-pointer`}
              onClick={() => handleClick(el.txt)}
            >
              <img src={student} className="w-10 h-10 mr-4" alt="" />
              <p className="text-[#1f1f1f]">{el.txt}</p>
            </div>
          );
        })}
      </div>

      <button
        className={`p-2 px-6 rounded ${
          isButtonActive ? "bg-black text-white" : "bg-slate-300 text-white"
        }`}
        disabled={!isButtonActive}
        onClick={handleSubmit}
      >
        Continue
      </button>
    </div>
  );
};

export default Interest;
