import { useState, useEffect } from "react";
import "../styles/trade.css";
import Order from "./Order";

const Trade = (props) => {

  //   const [marketData, setMarketData] = useState([]);

  //   useEffect(() => {
  //     getMarketApi();
  //   }, []);

  //   const getMarketApi = async () => {
  //     const api = await fetch(
  //       `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin%2Cbnb%2Ceos%2Csolana&vs_currencies=USD`
  //     );

  //     const data = await api.json();

  //     setMarketData(data);
  //   };

  // console.log(marketData)

  return (
    <div className="trade-container">
      <header>
        <h1>Spot Trading</h1>
        <span>Discover SDM spot trading: deposit & trade today! </span>
      </header>

      <section className="currency-selection">
        <ul>
          <li>USD</li>
          <li>EUR</li>
          <li>GBP</li>
          <li>CAD</li>
          <li>BTC</li>
          <li>USDC</li>
          <li>ETH</li>
          <p> | you are trading with USDC</p>
        </ul>
      </section>

      <section className="order-grid-container">
        <Order 
        currencyName={"BTC/USD"}
        buyPrice={"$25,000"}
        sellPrice={"$24,500"}
        spreadPrice={"0.02%"}
        />
        <Order
        currencyName={"BTC/USD"}
        buyPrice={"$25,000"}
        sellPrice={"$24,500"}
        spreadPrice={"0.02%"}
        />
        <Order
        currencyName={"BTC/USD"}
        buyPrice={"$25,000"}
        sellPrice={"$24,500"}
        spreadPrice={"0.02%"}
        />
        <Order
        currencyName={"BTC/USD"}
        buyPrice={"$25,000"}
        sellPrice={"$24,500"}
        spreadPrice={"0.02%"}
        />
        <Order
        currencyName={"BTC/USD"}
        buyPrice={"$25,000"}
        sellPrice={"$24,500"}
        spreadPrice={"0.02%"}
        />
        <Order
        currencyName={"BTC/USD"}
        buyPrice={"$25,000"}
        sellPrice={"$24,500"}
        spreadPrice={"0.02%"}
        />
        <Order
        currencyName={"BTC/USD"}
        buyPrice={"$25,000"}
        sellPrice={"$24,500"}
        spreadPrice={"0.02%"}
        />
        <Order
        currencyName={"BTC/USD"}
        buyPrice={"$25,000"}
        sellPrice={"$24,500"}
        spreadPrice={"0.02%"}
        />
      </section>
    </div>
  );
};

export default Trade;
