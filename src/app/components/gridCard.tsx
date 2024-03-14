import Link from "next/link";
import React from "react";

const GridCard = () => {
  return (
    <div className="card h-96 grid content-between">
      <img className="image rounded-full"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=80"
        alt=""
      />
      <p>
        <strong>Matt Cooper</strong>Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Culpa eaque provident odio, amet aperiam incidunt quae
        minima! Ea, assumenda quaerat.
      </p>
      <Link className="anchor" href={"/"}>View Profile</Link>
    </div>
  );
};

export default GridCard;
