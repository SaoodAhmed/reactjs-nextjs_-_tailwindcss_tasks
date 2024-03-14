import React from "react";

const FlexSelf = () => {
  return (
    <div className="p-10 flex flex-col mx-auto max-w-none w-96">
      <img className=""
        src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300"
        alt=""
      />
      <span className="spanUtil">$220</span>
      <h3>Comfort Grey Sneakers</h3>
      <p className="mt-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cum
        impedit veniam
      </p>
      <button className="buttonClass self-start">Add to Cart</button>
    </div>
  );
};

export default FlexSelf;
