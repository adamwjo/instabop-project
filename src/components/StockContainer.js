import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, addStock}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((oneStock) => <Stock clickAction={addStock} key={oneStock.id} stockData={oneStock} />)}
    </div>
  );
}

export default StockContainer;
