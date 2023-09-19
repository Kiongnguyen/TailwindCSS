import { useState } from "react";

const Badge = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  return (
    <div className="bg-white rounded-lg mt-3 px-6 py-8  ring-slate-900/5 shadow-xl grid grid-cols-3  gap-2">
      <div className="bg-white rounded-lg w-full h-full  ring-slate-900/5 shadow-xl">
        <p className="text-left text-base font-bold text-blue-500">
          Tailwind - Badge - Basic
        </p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-transparent  relative m-10"
        >
          <i className=" text-3xl   fa-solid fa-envelope"></i>
          <div className="absolute w-5 h-5  p-1 -top-1 -right-3 rounded-full text-xs bg-red-500 text-white font-bold animate-bounce">
            {count}
          </div>
        </button>
      </div>

      <div className="bg-white rounded-lg w-full h-full  ring-slate-900/5 shadow-xl">
        <p className="text-left text-base font-bold mb-10 text-blue-500">
          Tailwind - Badge - Info
        </p>
        <a href="/" className="bg-transparent  relative m-10">
          <i className=" text-3xl   fa-solid fa-bell"></i>
          <span className="animate-ping absolute -right-1 inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
          <span className="absolute -top-3 -right-1 inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </a>
      </div>

      <div className="bg-white rounded-lg w-full h-full  ring-slate-900/5 shadow-xl">
        <p className="text-left text-base font-bold mb-10 text-blue-500">
          Tailwind - Badge - Status
        </p>
        <a href="/" className="bg-transparent  relative m-10 ">
          <i className=" text-3xl   fa-solid fa-user"></i>
          <span className="animate-ping absolute -bottom-1 -right-1 inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
          <span className="absolute -bottom-1 -right-1 inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </a>
      </div>
    </div>
  );
};

export default Badge;
