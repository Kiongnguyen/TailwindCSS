import React from "react";
//phai co cach lay ra dia chi url dang o roi tach ra thanh mang
const items = [
  { href: "/", text: "Home" },
  { href: "/products", text: "Products" },
  { href: "/products/1", text: "Product 1" },
];

const Breadcrumbs = () => {
  return (
    <div className="bg-white rounded-lg mt-3 px-6 py-8  ring-slate-900/5 shadow-xl ">
      <p className="text-left text-base font-bold text-blue-500">
        Tailwind - Breadcrumbs
      </p>
      <div className="block w-full pt-10">
        <a href={items[0].href}>
          <i className="fa-solid fa-house"></i>
          <span className="hover:font-bold hover:underline text-base">
            {items[0].text}
          </span>
          {" / "}
        </a>
        {items.slice(1, 3).map((item, index) => (
          <span key={index} className="">
            <i className="fa-solid fa-link"></i>
            <a
              href={item.href}
              className="text-black hover:font-bold hover:underline text-base "
            >
              {item.text}
            </a>
            <span>{" / "}</span>
          </span>
        ))}
        <span>
          <i className="fa-solid fa-link"></i> Items
        </span>
      </div>
    </div>
  );
};

export default Breadcrumbs;
