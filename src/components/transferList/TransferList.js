import React, { useState } from "react";

const list = [
  { item: "HTML", id: 1 },
  { item: "CSS", id: 2 },
  { item: "Javascript", id: 3 },
  { item: "React JS", id: 4 },
  { item: "Tailwin", id: 5 },
  { item: "Next Js", id: 6 },
];

const TransferList = () => {
  const [leftItems, setLeftItems] = useState(list);
  const [rightItems, setRightItems] = useState([]);

  const [checkedleft, setCheckedleft] = useState([]);
  const handleCheckLeft = (id) => {
    setCheckedleft((prev) => {
      const isCheckedleft = checkedleft.includes(id);
      if (isCheckedleft) {
        return checkedleft.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const [checkedright, setCheckedright] = useState([]);
  const handleCheckRight = (id) => {
    setCheckedright((prev) => {
      const isCheckedright = checkedright.includes(id);
      if (isCheckedright) {
        return checkedright.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleMoveAllToRight = () => {
    setRightItems((prevRightItems) => {
      return prevRightItems.concat(leftItems);
    });
    setLeftItems([]);
  };

  const handleMoveAllToLeft = () => {
    setLeftItems((prevLeftItems) => {
      return prevLeftItems.concat(rightItems);
    });
    setRightItems([]);
  };

  const handleMoveToRight = () => {
    // Di chuyển các phần tử từ mảng bên trái sang mảng bên phải.
    setRightItems((prevRightItems) => {
      return prevRightItems.concat(
        leftItems.filter((item) => checkedleft.includes(item.id))
      );
    });

    // Xóa các phần tử đã di chuyển khỏi mảng bên trái.
    setLeftItems((prevLeftItems) => {
      return prevLeftItems.filter((item) => !checkedleft.includes(item.id));
    });
    setCheckedleft([]);
  };

  const handleMoveToLeft = () => {
    setLeftItems((prevLeftItems) => {
      return prevLeftItems.concat(
        rightItems.filter((item) => checkedright.includes(item.id))
      );
    });

    // Xóa các phần tử đã di chuyển khỏi mảng bên trái.
    setRightItems((prevRightItems) => {
      return prevRightItems.filter((item) => !checkedright.includes(item.id));
    });
    setCheckedright([]);
  };

  return (
    <div className=" relative h-auto bg-white rounded-lg mt-3 px-6 py-8  ring-slate-900/5 shadow-xl flex flex-col">
      <p className="text-left text-base font-bold text-blue-500">
        Tailwind - Transfer List
      </p>
      <div className="w-2/3 grid grid-cols-3 gap-3 self-center mt-3">
        <div className="w-52 h-44  bg-white shadow-xl flex flex-col">
          <h2 className="font-bold text-center">LEFT</h2>

          <div className="w-52 h-40 overflow-auto">
            {leftItems.map((items) => (
              <div key={items.id} className="py-2 pl-4 text-base">
                <input
                  type="checkbox"
                  checked={checkedleft.includes(items.id)}
                  onChange={() => handleCheckLeft(items.id)}
                />
                {"  "}
                {items.item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between items-center">
          <button
            onClick={handleMoveAllToRight}
            className="w-16 h-8 font-bold hover:-translate-y-1 hover:scale-110 rounded-lg bg-slate-200 hover:bg-slate-400"
          >
            {">>"}
          </button>
          <button
            onClick={handleMoveToRight}
            className="w-16 h-8 font-bold hover:-translate-y-1 hover:scale-110 rounded-lg bg-slate-200 hover:bg-slate-400"
          >
            {">"}
          </button>
          <button
            onClick={handleMoveToLeft}
            className="w-16 h-8 font-bold hover:-translate-y-1 hover:scale-110 rounded-lg bg-slate-200 hover:bg-slate-400"
          >
            {"<"}
          </button>
          <button
            onClick={handleMoveAllToLeft}
            className="w-16 h-8 font-bold hover:-translate-y-1 hover:scale-110 rounded-lg bg-slate-200 hover:bg-slate-400"
          >
            {"<<"}
          </button>
        </div>

        <div className="w-52 h-44  bg-white shadow-xl flex flex-col">
          <h2 className="font-bold text-center">RIGHT</h2>

          <div className="w-52 h-40 overflow-auto">
            {rightItems.map((items) => (
              <div key={items.id} className="py-2 pl-4 text-base">
                <input
                  type="checkbox"
                  checked={checkedright.includes(items.id)}
                  onChange={() => handleCheckRight(items.id)}
                />
                {"  "}
                {items.item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferList;
