import { useState } from "react";

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className={`${isDarkMode ? "dark" : "light"}`}>
      <p className="text-left text-base font-bold text-blue-500 pt-8 pl-6">
        Tailwind - Button Dark Mode
      </p>
      <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div>
          {/* botton 1 */}
          <button
            className="text-sm text-black dark:text-white h-10 w-20 bg-gray-400 rounded-md shadow-lg  hover:bg-gray-700"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <i
              className={`${
                isDarkMode
                  ? "fa-solid fa-toggle-on  "
                  : "fa-solid fa-toggle-off"
              }`}
            ></i>
            <p className="">{isDarkMode ? "Light mode" : "Dark mode"}</p>
          </button>
        </div>
        <div>
          {/* botton 2 */}
          <button
            className="mt-3 text-3xl text-black dark:text-white w-20 bg-gray-400  rounded-md shadow-2xl flex p-1 items-center justify-center hover:bg-gray-700"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <span className="text-sm">
              {isDarkMode ? "Light mode" : "Dark mode"}
            </span>
            <i
              className={`${
                isDarkMode ? "fa-solid fa-sun text-white" : "fa-solid fa-moon "
              }`}
            ></i>
          </button>
        </div>
        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          Tailwind
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          Tạo button mô tả quá trinh nút Dark mode và Light mode_ dùng thư viện
          icon font awesome
        </p>
      </div>
    </div>
  );
}

export default DarkMode;
