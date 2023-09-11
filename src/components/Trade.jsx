import { useState, useEffect } from "react";
import "../styles/trade.css";
import OrderItem from "./OrderItem"; // Assuming you have an OrderItem component
import { tradeOrders } from "../data/data";

const Trade = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(tradeOrders);
  }, []);

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
        {orders.map((item) => (
          <OrderItem
            key={item.id}
            currency={item.currency}
            buyPrice={item.buyPrice}
            sellPrice={item.sellPrice}
            spreadPrice={item.spread}
          />
        ))}
      </section>
    </div>
  );
};

export default Trade;
