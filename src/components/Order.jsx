import { useState, useEffect } from "react";
import "../styles/order.css";
import OrderItem from "./OrderItem";
import { tradeOrders } from "../data/data";

const Trade = () => {
  const [orders, setOrders] = useState([]);

  console.log(orders);

  useEffect(() => {
    setOrders(tradeOrders);
  }, []);

  return (
    <div className="trade-container">
      <header>
        <h1>Spot Trading</h1>
        <span className="slogan">
          Discover SDM spot trading: deposit & trade today!{" "}
        </span>
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
            currencyName={item.currency}
            buyPrice={item.buyPrice}
            sellPrice={item.sellPrice}
            spreadPrice={item.spreadPrice}
          />
        ))}
      </section>
    </div>
  );
};

export default Trade;
