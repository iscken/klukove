import React from "react";
import { useSelector } from "react-redux";

const Deteils = () => {
  const { deteils } = useSelector((s) => s.pro);
  console.log(deteils);
  return (
    <div>
      {deteils.map((el) => (
        <div>
          <img src={el.image} alt="" />
          <h1>{el.name}</h1>
          <h2>{el.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default Deteils;
