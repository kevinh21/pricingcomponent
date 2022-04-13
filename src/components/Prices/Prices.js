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
      <div className="optionsWrapper">
        {options.map((option, index) => (
          <div className="cardWrapper">
            <br />
            <div className="nameWrapper">
              {option.name}
              <h1 className="priceWrapper"> {option.monthlyPrice}</h1>
              {option.features.map((feature) => (
                <div className="featureWrapper">{feature}</div>
              ))}
            </div>
            <button className="learnMore">LEARN MORE</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prices;
