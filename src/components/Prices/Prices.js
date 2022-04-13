import React from "react";
import "./Prices.css";

function Prices() {
  const options = [
    {
      name: "Basic",
      monthlyPrice: "$19.99",
      yearlyPrice: "$199.99",
      features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    },
    {
      name: "Professional",
      monthlyPrice: "$24.99",
      yearlyPrice: "$249.99",
      features: ["1TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    },
    {
      name: "Master",
      monthlyPrice: "$39.99",
      yearlyPrice: "$399.99",
      features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    },
  ];

  return (
    <div>
      <div>
        {options.map((option) => (
          <h2 id="options">
            {option.name} <br />
            {option.monthlyPrice} <br />
            {option.features.map((feature) => (
              <li>{feature}</li>
            ))}
            <div />
          </h2>
        ))}
      </div>
    </div>
  );
}

export default Prices;
