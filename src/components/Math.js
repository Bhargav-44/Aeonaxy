import React from "react";
import { useState } from "react";
import student from "./student.png";
import { useGlobalContext } from "../Context";

const Math = () => {
  const { load, setLoad, step, setStep } = useGlobalContext();

  const options = [
    {
      content: "Arithmetic",
      lvl: "Introductory",
      img: "",
    },
    {
      content: "Basic Algebra",
      lvl: "Foundational",
      img: "",
    },
    {
      content: "Intermediate Algebra",
      lvl: "Intermediate",
      img: "",
    },
    {
      content: "Calculus",
      lvl: "Advanced",
      img: "",
    },
  ];

  const [comfort, setComfort] = useState("");
  const handleClick = (comfort) => {
    setComfort(comfort);
  };

  const handleSubmit = () => {
    setLoad(100);
    setStep(step + 1);
  };

  const isButtonActive = comfort !== "";

  return (
    <div className="flex flex-col items-center justify-center mt-12 p-2 text-[#1f1f1f]">
      <p className="font-semibold text-3xl text-center">
        What is your math comfort level?
      </p>
      <p className="p-4 text-gray-600">
        Choose the highest level you feel confident in — you can always adjust
        later.
      </p>

      <div className="mt-10 flex flex-col lg:flex-row">
        {options.map((el, i) => {
          const isSelected = el.content === comfort;
          return (
            <div
              key={i}
              className={`flex flex-col mx-2 items-center p-6 border ${
                isSelected ? "border-[#e2d1b6] ring-1 ring-red-900/5" : ""
              }  ${isSelected ? "shadow-lg" : ""} ${
                isSelected ? "rounded-lg" : ""
              } rounded mb-4 cursor-pointer`}
              onClick={() => handleClick(el.content)}
            >
              <img src={student} className="w-44 h-40 mr-4" alt="" />
              <p className="text-[#1f1f1f] text-sm">{el.content}</p>
              <p className="text-gray-400 text-lg">{el.lvl}</p>
            </div>
          );
        })}
      </div>

      <button
        className={`p-2 px-6 mt-4 rounded ${
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

export default Math;
