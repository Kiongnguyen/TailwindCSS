import React, { useState } from "react";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function Pagination() {
  const [show, setShow] = useState();

  return (
    <div className=" relative h-screen bg-white rounded-lg mt-3 px-6 py-8  ring-slate-900/5 shadow-xl ">
      <p className="text-left text-base font-bold text-blue-500">
        Tailwind - Pagination
      </p>
      <div className="Pagination">
        <ul className="flex justify-center">
          <li
            onClick={() => {
              setShow(1);
            }}
            className="w-10 h-10 p-2 cursor-pointer rounded-full bg-white active:bg-gray-600  hover:ring-3 hover:bg-gray-200 hover:font-bold text-center"
          >
            <i class="fa-solid fa-forward-step rotate-180"></i>
          </li>
          <li
            onClick={() => {
              show === 1 ? setShow(10) : setShow(show - 1);
            }}
            className="w-10 h-10 p-2 cursor-pointer rounded-full bg-white active:bg-gray-600  hover:ring-3 hover:bg-gray-200 hover:font-bold text-center"
          >
            <i class="fa-solid fa-caret-left"></i>
          </li>

          {list.map((list, index) => (
            <li
              key={index}
              className={`${
                show === list
                  ? "border-solid border-sky-500 border-2 bg-sky-300"
                  : ""
              } w-10 h-10 p-2 cursor-pointer rounded-full bg-white active:bg-gray-600  hover:ring-3 hover:bg-gray-200 hover:font-bold text-center`}
              onClick={() => {
                setShow(list);
              }}
            >
              <span>{list}</span>
            </li>
          ))}
          <li
            onClick={() => {
              show === 10 ? setShow(1) : setShow(show + 1);
            }}
            className="w-10 h-10 p-2 cursor-pointer rounded-full bg-white active:bg-gray-600  hover:ring-3 hover:bg-gray-200 hover:font-bold text-center"
          >
            <i class="fa-solid fa-caret-right"></i>
          </li>
          <li
            onClick={() => {
              setShow(10);
            }}
            className="w-10 h-10 p-2 cursor-pointer rounded-full bg-white active:bg-gray-600  hover:ring-3 hover:bg-gray-200 hover:font-bold text-center"
          >
            <i class="fa-solid fa-forward-step"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
