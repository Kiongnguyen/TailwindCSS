import React from "react";
import { useState } from "react";

function RadioButton() {
  const [isCheck, setIsCheck] = useState(true);
  const [isCheck1, setIsCheck1] = useState(false);
  const [isCheck2, setIsCheck2] = useState(false);
  //   const [isCheck12, setIsCheck12] = useState(false);

  return (
    <div className="bg-white rounded-lg mt-3 px-6 py-8  ring-slate-900/5 shadow-xl grid grid-cols-2 gap-2">
      <div className="bg-white rounded-lg p-3 ring-slate-900/5 shadow-xl">
        <p className="text-left text-base font-bold text-blue-500">
          Tailwind - Radio button -base
        </p>
        <div className=" pt-10 w-full ">
          <button
            onClick={() => {
              setIsCheck(!isCheck);
            }}
            className="w-6 h-6  transition ease-linear  text-[#00A76F]  rounded-full bg-white active:bg-[#c0f8d0]  hover:bg-[#e6f4ea]"
          >
            <i
              className={`fa${
                isCheck
                  ? "-regular fa-circle text-gray-500"
                  : "-regular fa-circle-dot"
              }`}
            ></i>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-3 ring-slate-900/5 shadow-xl">
        <p className="text-left text-base font-bold text-blue-500">
          Tailwind - Radio button-Indeterminate
        </p>
        <div className=" pt-10 w-full ">
          <span className="text-black ">Parent</span>
          <button
            onClick={() => {
              setIsCheck1(!isCheck1);
              setIsCheck2(!isCheck2);
            }}
            className="w-6 h-6  transition ease-linear  text-[#00A76F]  rounded-full bg-white active:bg-[#c0f8d0]  hover:bg-[#e6f4ea]"
          >
            <i
              className={`fa${
                isCheck1 && isCheck2
                  ? "-regular fa-circle-dot"
                  : isCheck1 || isCheck2
                  ? "-solid fa-circle-dot"
                  : "-regular fa-circle  text-gray-500"
              }`}
            ></i>
          </button>
        </div>

        <div className="flex ">
          <div className=" pt-5 w-32 ">
            <span className="text-black ">Child 1</span>
            <button
              onClick={() => {
                setIsCheck1(!isCheck1);
              }}
              className="w-6 h-6  transition ease-linear  text-[#00A76F]  rounded-full bg-white active:bg-[#c0f8d0]  hover:bg-[#e6f4ea]"
            >
              <i
                className={`fa${
                  isCheck1
                    ? "-regular fa-circle-dot"
                    : "-regular fa-circle  text-gray-500"
                }`}
              ></i>
            </button>
          </div>

          <div className=" pt-5 w-32 ">
            <span className="text-black ">Child 2</span>
            <button
              onClick={() => {
                setIsCheck2(!isCheck2);
              }}
              className="w-6 h-6  transition ease-linear  text-[#00A76F]  rounded-full bg-white active:bg-[#c0f8d0]  hover:bg-[#e6f4ea]"
            >
              <i
                className={`fa${
                  isCheck2
                    ? "-regular fa-circle-dot"
                    : "-regular fa-circle  text-gray-500"
                }`}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadioButton;
