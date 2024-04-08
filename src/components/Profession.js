import React, { useState } from "react";
import student from "./student.png";
import { useGlobalContext } from "../Context";

const Profession = () => {

  const {load, setLoad, step, setStep} = useGlobalContext()

  const options = [
    {
      profession: "Student",
      txt: "or soon to be enrolled",
      img: "",
    },
    {
      profession: "Professional",
      txt: "pursuing a career",
      img: "",
    },
    {
      profession: "Parent",
      txt: "of a school-age child",
      img: "",
    },
    {
      profession: "Lifelong learner",
      txt: "",
      img: "",
    },
    {
      profession: "Teacher",
      txt: "",
      img: "",
    },
    {
      profession: "Other",
      txt: "",
      img: "",
    },
  ];

  const [profession, setProfession] = useState("");
  const handleClick = (work) => {
    setProfession(work);
  };

  const handleSubmit = () => {
    setStep(step + 1);
    setLoad(40)
  }

  const isButtonActive = profession !== "";


  return (
    <div className="flex flex-col items-center justify-center mt-4 p-2 text-[#1f1f1f]">
      <p className="font-semibold text-3xl">Which describes you best?</p>
      <p className="p-4 text-gray-600">This will help you personalize you experience.</p>

      <div className="mt-6">
        {options.map((el, i) => {
            const isSelected = el.profession === profession;
          return (
            <div
              key={i}
              className={`flex items-center p-2 pr-2 md:pr-52 border ${isSelected ? 'border-[#e2d1b6] ring-1 ring-red-900/5' : ''}  ${isSelected ? 'shadow-lg' : ''} ${isSelected ? 'rounded-lg' : ''} rounded mb-4 cursor-pointer`}
              onClick={() => handleClick(el.profession)}
            >
              <img src={student} className="w-10 h-10 mr-4" alt="" />
              <p className="text-slate-500">
                {" "}
                <span className="text-[#1f1f1f] font-medium">
                  {el.profession}
                </span>{" "}
                {el.txt}
              </p>
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

export default Profession;
