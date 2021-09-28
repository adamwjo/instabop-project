import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, removeStock}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      
       {portfolio.map((oneStock) => <Stock clickAction={removeStock} key={oneStock.id} stockData={oneStock} />)}
      
    </div>
  );
}

export default PortfolioContainer;
