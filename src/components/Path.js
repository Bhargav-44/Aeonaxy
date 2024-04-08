import React from "react";
import { useState } from "react";
import student from "./student.png";

const Path = () => {
  const options = [
    {
      path: "Foundational Math",
      content:
        "Build your foundational skills in algebra, geometry, and probability.",
      img: "",
      popular: true,
    },
    {
      path: "Mathematical Thinking",
      content:
        "Build your foundational skills in algebra, geometry, and probability.",
      img: "",
      popular: false,
    },
  ];

  const [path, setPath] = useState("");
  const handleClick = (path) => {
    setPath(path);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen  text-[#1f1f1f]">
      <p className="font-semibold text-3xl text-center">
        Learning paths based on your answers
      </p>
      <p className="my-4 text-gray-600">
        Choose one to get started. You can switch anytime.
      </p>

      <div className="mt-6 flex flex-col lg:flex-row ">
        {options.map((el, i) => {
          const isSelected = el.path === path;
          return (
            <div
            key={i}
              className={`flex  mx-2 items-center p-4 border relative rounded mb-4 cursor-pointer`}
              onClick={() => handleClick(el.path)}
            >
              {el.popular && (
                <div className="absolute top-0 -mt-6 left-1/2 transform -translate-x-1/2 bg-yellow-400 p-2 px-4 rounded-3xl">
                  <p className="font-semibold">MOST POPULAR</p>
                </div>
              )}

              <div className="w-48">
                <p className="font-bold">{el.path}</p>
                <p className="">{el.content}</p>
              </div>

              <img src={student} className="w-40 h-36 mr-4" alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Path;
