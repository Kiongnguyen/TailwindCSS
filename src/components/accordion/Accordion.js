import React, { useState } from "react";

const Accordion = () => {
  const items = [
    {
      heading: "Rapidly build modern websites",
      content:
        "Tailwind is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    },
    {
      heading: "“Best practices” don't actually work",
      content:
        "I've written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.",
    },
    {
      heading: "An API for your design system",
      content:
        "Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system.",
    },
    {
      heading: "Build whatever you want, seriously",
      content:
        "Because Tailwind is so low-level, it never encourages you to design the same site twice. Even with the same color palette and sizing scale, it's easy to build the same component with a completely different look in the next project.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="bg-white rounded-lg mt-3 px-6 py-8  ring-slate-900/5 shadow-xl">
      <p className="text-left text-base font-bold text-blue-500">
        Tailwind - accordion
      </p>
      <ul className="divide-y-2 text-black">
        {items.map((item, index) => (
          <li
            key={index}
            className={`w-full transition ease-linear duration-500 ${
              activeIndex === index
                ? "bg-gray-200 rounded-lg mt-3 px-6 py-8  ring-slate-900/5 shadow-xl"
                : " py-2 "
            }`}
          >
            <h3 className="text-lg font-bold">
              <button
                type="button"
                className="w-full"
                onClick={() => handleToggle(index)}
              >
                {item.heading}
                <i
                  className={` fa-solid fa-chevron-down float-right text-center pr-6  ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  } `}
                ></i>
              </button>
            </h3>
            <div
              className={` text-xs font-medium text-center  py-2 italic ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              {item.content}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
