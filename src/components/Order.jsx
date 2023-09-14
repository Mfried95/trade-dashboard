import { useState, useEffect } from "react";
import "../styles/order.css";
import OrderItem from "./OrderItem";
import { tradeOrders } from "../data/data";

const Trade = () => {
  const [orders, setOrders] = useState([]);
  const [currency, setCurrency] = useState('USD');

  const currencies = ['USD', 'EUR', 'GBP', 'CAD', 'BTC', 'USDC', 'ETH'];
  
  console.log(orders);

  useEffect(() => {
    setOrders(tradeOrders);
  }, []);

  return (
    <div className="trade-container">
      <header>
        <h1>Spot Trading</h1>
        <span className="slogan">
          Discover SDM spot trading: deposit & trade today!
        </span>
      </header>

      <section className="currency-selection">
        <ul>
          {currencies.map((curr) => (
            <li onClick={() => setCurrency(curr)} key={curr}>{curr}</li>
          ))}
          <p>| you are trading with {currency}</p>
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
