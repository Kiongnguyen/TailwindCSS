import React, { useState } from "react";

const list = ["Profile", "My account", "Logout"];
const listMax = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hanggouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];
const listSelected = [
  "Show some love to Material",
  "Show notification content",
  "Hide sensitive notification content",
  "Hide all notification content",
];
function Menu() {
  const [overlay, setoverlay] = useState(false);
  const [show, setShow] = useState();
  const handleSimple = () => {
    setoverlay(!overlay);
  };
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className=" relative h-80 bg-white rounded-lg mt-3 px-6 py-8  ring-slate-900/5 shadow-xl ">
        <p className="text-left text-base font-bold text-blue-500">
          Tailwind - Menu Simple
        </p>
        <div className=" pt-10 w-full ">
          <button
            onClick={handleSimple}
            className="w-44 h-8 border-solid transition ease-linear  border-gray-500 border-2 rounded-md bg-white active:bg-gray-600 hover:-translate-y-1 hover:scale-110 hover:ring-3 hover:border-[3px] hover:font-bold"
          >
            <span>Open Menu</span>
          </button>
        </div>

        <div
          className={`absolute p-2 w-44 bg-white rounded-lg  ring-slate-900/5 shadow-xl  ${
            overlay ? "flex" : "hidden"
          } flex-col rounded-md`}
        >
          <ul className="divide-y-2 " onClick={handleSimple}>
            {list.map((list, index) => (
              <li
                key={index}
                className="w-full leading-10  cursor-pointer bg-white active:bg-gray-600  hover:ring-3 hover:bg-gray-200 hover:font-bold"
                onClick={() => {
                  setShow(index);
                }}
              >
                <a href={`/${list[show]}`}>
                  <i className="fa-brands fa-codepen"></i> <span>{list}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className=" relative h-80 bg-white rounded-lg mt-3 px-6 py-8  ring-slate-900/5 shadow-xl ">
        <p className="text-left text-base font-bold text-blue-500">
          Tailwind - Menu Selected
        </p>
        <div className=" pt-10 w-full ">
          <button
            onClick={handleSimple}
            className="w-auto h-16  transition ease-linear   rounded-md bg-white hover:bg-gray-200 hover:-translate-y-1 hover:scale-110 hover:ring-3  hover:font-bold"
          >
            <span className="font-bold">When device is locked</span>
            <p>{listSelected[show]}</p>
          </button>
        </div>

        <div
          className={`absolute p-2 w-96 bg-white rounded-lg  ring-slate-900/5 shadow-xl  ${
            overlay ? "flex" : "hidden"
          } flex-col rounded-md`}
        >
          <ul className="divide-y-2 " onClick={handleSimple}>
            {listSelected.map((list, index) => (
              <li
                key={index}
                className="w-full leading-10  cursor-pointer bg-white active:bg-gray-600  hover:ring-3 hover:bg-gray-200 hover:font-bold"
                onClick={() => {
                  setShow(index);
                }}
              >
                <i className="fa-brands fa-codepen"></i> <span>{list}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className=" relative h-80 bg-white rounded-lg mt-3 px-6 py-8  ring-slate-900/5 shadow-xl ">
        <p className="text-left text-base font-bold text-blue-500">
          Tailwind - Menu Max height
        </p>
        <div className=" pt-10 w-full flex justify-center">
          <button
            onClick={handleSimple}
            className="w-8 h-8  rounded-full bg-white active:bg-gray-200   hover:bg-gray-100  hover:font-bold"
          >
            <span>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </button>
        </div>

        <div
          className={`absolute top-32 left-48 p-2 w-44 bg-white rounded-lg  ring-slate-900/5 shadow-xl  ${
            overlay ? "flex" : "hidden"
          } flex-col rounded-md`}
        >
          <ul className="divide-y-2 h-48 overflow-auto" onClick={handleSimple}>
            {listMax.map((listMax, index) => (
              <li
                key={index}
                className="w-full leading-10  cursor-pointer bg-white active:bg-gray-600  hover:ring-3 hover:bg-gray-200 hover:font-bold"
                onClick={() => {
                  setShow(index);
                }}
              >
                <i className="fa-brands fa-codepen"></i> <span>{listMax}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
