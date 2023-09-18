import React, { useState } from "react";

const Alert = ({ type, children }) => {
  const [isDismissed, setIsDismissed] = useState(false);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  const listAlert = {
    success: "bg-[#77ED8B] text-[#065E49]",
    error: "bg-[#FFAC82] text-[#7A0916]",
    warn: "bg-[#FFD666] text-[#7A4100]",
    info: "bg-[#61F3F3] text-[#003768]",
  };
  const listIcon = {
    success: "fa-solid fa-square-check",
    error: "fa-solid fa-circle-xmark",
    warn: "fa-solid fa-triangle-exclamation",
    info: "fa-solid fa-circle-exclamation",
  };

  return (
    <div
      className={`flex-row justify-between items-center w-72 h-12 rounded-md shadow-xl m-3  text-md    ${listAlert[type]}`}
      role="alert"
      style={{ display: isDismissed ? "none" : "flex" }}
    >
      <i className={`pl-2 text-xl  ${listIcon[type]}`}></i>
      <span className=" pl-2 ">{children}</span>
      <button type="button" className=" m-2" onClick={handleDismiss}>
        <i class="   hover:text-white fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};

export default Alert;
