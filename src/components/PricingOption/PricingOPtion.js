import React from "react";
import Benefit from "../Benefit/Benefit";

const PricingOPtion = (props) => {
  const { name, price, benefits } = props.option;
  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="bg-indigo-300 p-4 rounded text-xl font-bold">{name}</h2>
      <p>
        <span className="text-5xl font-bold">{price}</span>
        <span className=" text-xl font-bold text-gray-500">/mo</span>
      </p>
      <div>
        <h3 className="text-xl  text-left">Benifits:</h3>
        {benefits.map((benefit) => (
          <Benefit benefit={benefit}></Benefit>
        ))}
      </div>
    </div>
  );
};

export default PricingOPtion;
