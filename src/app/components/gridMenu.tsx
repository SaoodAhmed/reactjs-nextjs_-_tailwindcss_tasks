import React from "react";

const GridMenu = () => {
  return (
    // fr -> occupy remaning space just like grow propery but, auto depend on
    // element size automatically space adjustable

    <div className="grid grid-cols-[1fr,auto] p-10 max-w-7xl  gap-y-8 mx-auto ">
      <div className="">
        <h3 className="text-3xl font-bold mb-2">Veg Burger</h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque
          hic eligendi
        </p>
      </div>
      <span className="text-5xl pl-4"> 🍔 </span>
      <div className="">
        <h3 className="text-3xl font-bold mb-2">Veg Burger</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque
          hic eligendi
        </p>
      </div>
      <span className="text-5xl pl-4"> 🌮 </span>
      <div className="">
        <h3 className="text-3xl font-bold mb-2">Veg Burger</h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque
          hic eligendi
        </p>
      </div>
      <span className="text-5xl pl-4"> 🧇 </span>
    </div>
  );
};

export default GridMenu;
