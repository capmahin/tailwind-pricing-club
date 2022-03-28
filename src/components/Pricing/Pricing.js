import React from "react";
import PricingOPtion from "../PricingOption/PricingOPtion";

const Pricing = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Free",
      price: 0.0,
      benefits: [
        "lifeTime Deals",
        "unlimited Deals",
        "localized Deals",
        "fantastic Deals",
        "crazy Deals",
      ],
    },
    {
      id: 2,
      name: "Regular",
      price: 9.99,
      benefits: [
        "Everything Free",
        "unlimited Deals",
        "localized Deals",
        "fantastic Deals",
        "crazy Deals",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 19.99,
      benefits: [
        "Everything Regular Free",
        "unlimited Deals",
        "localized Deals",
        "fantastic Deals",
        "crazy Deals",
      ],
    },
  ];
  return (
    <div className="bg-indigo-300 p-4 mt-8">
      <h1 className="text-6xl font-mono text-white">Best deals of the town</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
        voluptate, reiciendis libero at doloribus odit maxime eaque labore rerum
        accusantium!
      </p>
      <div className="grid md:grid-cols-3 gap-3 mt-8">
        {pricingOptions.map((option) => (
          <PricingOPtion key={option.id} option={option}></PricingOPtion>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
