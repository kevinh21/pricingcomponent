import React from 'react';


const prices = [
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
    }
  ];


function BasicCard(props) {
    return (
        <div>
            <div className='card'>
            <div className='basic'>Basic</div>
            <div className='19.99'></div>
            <div className='storage'>500 GB Storage</div>

            </div>
        </div>
    );
}

export default BasicCard;