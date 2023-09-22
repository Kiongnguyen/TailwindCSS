import React, { useState } from "react";

const data = [
  {
    id: 1,
    label: "Trang chủ",
    children: [
      {
        id: 2,
        label: "Giới thiệu",
      },
      {
        id: 3,
        label: "Sản phẩm",
        children: [
          {
            id: 4,
            label: "Điện thoại",
          },
          {
            id: 5,
            label: "Máy tính",
          },
        ],
      },
    ],
  },
];

const Treeview = () => {
  const [expandedNodes, setExpandedNodes] = useState([]);
  const [isExpanded, setIsExpanded] = useState(true);

  const renderTree = (node, depth = 0) => {
    const children = node.children
      ? node.children.map((child) => renderTree(child, depth + 1))
      : [];
    return (
      <div key={node.id}>
        <div style={{ paddingLeft: depth * 20 }}>{node.label}</div>
        {children.map((child) => (
          <button
            key={child.id}
            onClick={() => {
              setIsExpanded(expandedNodes.includes(child.id));
              setExpandedNodes((prevExpandedNodes) => {
                return isExpanded
                  ? prevExpandedNodes.filter((id) => id !== child.id)
                  : [...prevExpandedNodes, child.id];
              });
            }}
          >
            {isExpanded ? "Thu gọn" : "Mở rộng"}
          </button>
        ))}
      </div>
    );
  };
  return (
    <div className=" relative h-auto bg-white rounded-lg mt-3 px-6 py-8  ring-slate-900/5 shadow-xl flex flex-col">
      <p className="text-left text-base font-bold text-blue-500">
        Tailwind - Tree View
      </p>
      <div>{renderTree(data)}</div>
    </div>
  );
};

export default Treeview;

// {
//     /* <i class="fa-solid fa-square-xmark"></i>
//   <i class="fa-solid fa-square-minus"></i>
//   <i class="fa-solid fa-square-plus"></i> */
//   }

//   const View = () => {
//     const arr = [
//       1,
//       "Main",
//       ["Hello", "Subtree with children", "World", "Something something"],
//     ];
//     const [checked, setChecked] = useState(false);
//     const [checkeditems, setCheckeditems] = useState(false);
//     return (
//       <div>
//         <button
//           onClick={() => {
//             setChecked(!checked);
//           }}
//         >
//           <i
//             className={`fa-solid fa-square-${
//               arr[2] === 0 ? "xmark" : checked ? "minus" : "plus"
//             }`}
//           ></i>{" "}
//           {arr[1]}
//         </button>
//         <ul className={`${checked ? "blok" : "hidden"}`}>
//           {arr[2].map((item) => (
//             <li>{item}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   };
