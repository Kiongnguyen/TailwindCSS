import React, { useState } from "react";

const list = [
  "username@gmail.com",
  "user01gmail.com",
  "user02gmail.com",
  "user03gmail.com",
  "Add account ",
];
function Dialog() {
  const [overlay, setoverlay] = useState(false);
  const [show, setShow] = useState(4);
  const handleSimple = () => {
    setoverlay(!overlay);
  };
  return (
    <div className=" relative h-screen bg-white rounded-lg mt-3 px-6 py-8  ring-slate-900/5 shadow-xl ">
      <div
        className={`absolute transition ease-in-out delay-150 top-0 left-0 w-full h-full bg-black opacity-40 z-100 ${
          overlay ? "flex" : "hidden"
        } `}
      ></div>
      <div
        className={`absolute  top-0 left-0 w-full h-full bg-transparent  z-101 ${
          overlay ? "flex" : "hidden"
        }  justify-center items-center`}
      >
        <div
          className={`absolute p-6 bg-white z-200 ${
            overlay ? "flex" : "hidden"
          } flex-col rounded-md`}
          onClick={handleSimple}
        >
          <h2 className="text-xl font-bold mb-3">Set backup account</h2>
          <div className="overflow-visible">
            <ul>
              {list.slice(0, 4).map((list, index) => (
                <li
                  key={index}
                  className="w-56 leading-10  cursor-pointer bg-white active:bg-gray-600  hover:ring-3 hover:bg-gray-200 hover:font-bold"
                  onClick={() => {
                    setShow(index);
                  }}
                >
                  <i class="pl-4 pr-2 text-xl fa-solid fa-user"></i>{" "}
                  <span>{list}</span>
                </li>
              ))}
              <li
                onClick={() => {
                  setShow(4);
                }}
                className="w-56 leading-10 cursor-pointer  bg-white active:bg-gray-600  hover:ring-3 hover:bg-gray-200 hover:font-bold"
              >
                <i class="pl-4 pr-2 text-xl  text-gray-400 fa-solid fa-circle-plus"></i>
                <span> {"   "}Add account </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-left text-base font-bold text-blue-500">
        Tailwind - Dialog
      </p>
      <div className=" pt-10 w-full ">
        <h2 className="text-lg font-bold">Simple</h2>
        <h2 className="text-lg font-bold">Selected:</h2>
        <h3 className="text-lg font-bold">{list[show]}</h3>

        <button
          onClick={handleSimple}
          className="w-44 h-8 border-solid transition ease-linear  border-gray-500 border-2 rounded-md bg-white active:bg-gray-600 hover:-translate-y-1 hover:scale-110 hover:ring-3 hover:border-[3px] hover:font-bold"
        >
          <span>Open simple dialog</span>
        </button>
      </div>
    </div>
  );
}

export default Dialog;
