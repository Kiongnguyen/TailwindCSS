import React from "react";

function Button() {
  return (
    <div className="bg-white rounded-lg mt-3 px-6 py-8  ring-slate-900/5 shadow-xl ">
      <p className="text-left text-base font-bold text-blue-500">
        Tailwind - Button
      </p>
      <div className=" pt-10 w-full grid grid-cols-4 gap-3">
        <button className="w-42 h-8 border-solid transition ease-linear  border-gray-500 border-2 rounded-md bg-white active:bg-[#00A76F] hover:-translate-y-1 hover:scale-110 hover:text-[#00A76F] hover:border-[#00A76F] hover:border-[3px] hover:bg-[#C8FAD6]">
          <span>Click me!</span>
        </button>
        <button className="w-42 h-8 border-solid transition ease-in border-gray-500 border-2 rounded-md bg-white active:bg-[#5119B7] hover:border-[#5119B7] hover:-translate-y-1 hover:scale-110 hover:text-[#5119B7] hover:border-[3px] hover:bg-[#EFD6FF]">
          Click me!
        </button>
        <button className="w-42 h-8 border-solid active:animate-ping transition ease-out border-gray-500 border-2 rounded-md bg-white active:bg-[#006C9C] hover:border-[#006C9C] hover:-translate-y-1 hover:scale-110 hover:text-[#006C9C] hover:border-[3px] hover:bg-[#CAFDF5]">
          Click me!
        </button>
        <button className="w-42 h-8 border-solid transition ease-in-out border-gray-500 border-2 rounded-md bg-white   hover:border-[#FFAB00] hover:-translate-y-1 hover:scale-110 hover:text-[#FFAB00] hover:border-[3px] hover:bg-[#FFF5CC]">
          <button className="active:animate-ping w-full h-full active:bg-[#FFAB00] opacity-75">
            Click me!
          </button>
        </button>
      </div>
    </div>
  );
}

export default Button;
