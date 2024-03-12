import React from "react";

const GridShippingCart = () => {
  return (
    <div className="grid grid-cols-[repeat(4,auto)] container rounded-lg gap-x-4 gap-y-8">
      <img
        className="image"
        src="https://images.pexels.com/photos/8148587/pexels-photo-8148587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
        alt=""
      />
      <div>
        <h3>Stylish Tote Bag</h3>
        <p>Brown Color Women's Tote Bag</p>
        <span>#368798</span>
      </div>
      <div>
        <label>Quantity :</label>
        <input type="text" value={1} size={1} />
      </div>
      <div className="price text-right">$99.00</div>

      <img className="image"
        src="https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
        alt=""
      />
      <div>
        <h3>Sunglasses</h3>
        <p>Glasses with wooden frame</p>
        <span>#756328</span>
      </div>
      <div>
        <label>Quantity :</label>
        <input type="text" value="1" size={1} />
      </div>
      <div className="price text-right">$142.00</div>
    </div>
  );
};

export default GridShippingCart;
