import React from "react";

const Order = ({ currencyName, buyPrice, sellPrice, spreadPrice }) => {
  return (
    <div className="order">
      <div className="order-header">
        <div className="currency">
          <span>{currencyName}</span>
        </div>
        <span>Spread: {spreadPrice}</span>
      </div>

      <div className="button-container">
        <div className="buy">
          <p>buy</p>
          <span>{buyPrice}</span>
        </div>
        <div className="sell">
          <p>Sell</p>
          <span>{sellPrice}</span>
        </div>
      </div>

      <div className="order-type-input">
        <span>Order type:</span>

        <select name="order-type">
          <option value="market">Market order</option>
          <option value="limit">Limit order</option>
        </select>
      </div>

      <div className="quanity-input">
        <span>Quanity:</span>
        <input type="number" placeholder="0" />
      </div>
    </div>
  );
};

export default Order;
