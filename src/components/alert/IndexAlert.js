import React from "react";
import ErrorAlert from "./ErrorAlert";
import InfoAlert from "./InfoAlert";
import SuccessAlert from "./SuccessAlert";
import WarnAlert from "./WarnAlert";

const IndexAlert = () => {
  return (
    <div className="bg-white rounded-lg mt-3 px-6 py-8  ring-slate-900/5 shadow-xl">
      <p className="text-left text-base font-bold text-blue-500">
        Tailwind - alert
      </p>
      <ErrorAlert />
      <InfoAlert />
      <SuccessAlert />
      <WarnAlert />
    </div>
  );
};

export default IndexAlert;
