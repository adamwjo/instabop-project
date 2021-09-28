import React from "react";

function Stock({stockData, clickAction}) {
  return (
    <div>
      <div onClick={() => clickAction(stockData)} className="card">
        <div className="card-body">
          <h5 className="card-title">{stockData.name}</h5>
          <p className="card-text">{stockData.ticker + "-" +stockData.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
