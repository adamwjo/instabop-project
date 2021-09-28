import { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/stocks')
      .then(r => r.json())
      .then(data => setStocks(data))
  }, [])

  const addStock = (clickedStock) => {
    if(!portfolio.includes(clickedStock)){
        setPortfolio((prevStockArray) => [...prevStockArray, clickedStock])
    }
  }

  const removeStock = (clickedStock) => {
    setPortfolio((prevStockArray) => prevStockArray.filter((pStock) => pStock !== clickedStock))
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer addStock={addStock} stocks={stocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer removeStock={removeStock} portfolio={portfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
