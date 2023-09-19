import React from "react";
import { useState } from "react";

const App = ({ options, value, setSelectedValue }) => {
  return (
    <div>
      <select
        value={value}
        onChange={(e) => setSelectedValue(e.target.value)}
        className="w-64 h-8 border-solid border-2 border-sky-500 rounded-md m-5"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <form>
        <input
          list="color"
          name="color"
          value={value}
          onChange={(e) => setSelectedValue(e.target.value)}
          className="w-64 h-8 border-solid border-2 border-sky-500 rounded-md m-5"
        />
        <datalist id="color" className=" p-20 text-base text-red-100">
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className=" p-20 text-base text-red-100"
            />
          ))}
        </datalist>
        <input type="submit" />
      </form>
    </div>
  );
};
const ComboBox = () => {
  const options = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Blue",
      value: "blue",
    },
  ];

  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div className="bg-white rounded-lg mt-3 px-6 py-8  ring-slate-900/5 shadow-xl">
      <p className="text-left text-base font-bold text-blue-500">
        Tailwind - Combo Box
      </p>
      <div>
        <App
          options={options}
          value={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <p>Selected value: {selectedValue}</p>
      </div>
    </div>
  );
};

export default ComboBox;
