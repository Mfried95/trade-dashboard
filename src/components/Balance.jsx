import React, { useState, useEffect } from "react";
import "../styles/balance.css";
import BalanceItem from "./BalanceItem";
import { spotBalances, fiatBalances } from "../data/data";

const Balance = () => {
  const [balances, setBalances] = useState([]);
  const [fiat, setFiat] = useState([]);

  useEffect(() => {
    setBalances(spotBalances);
    setFiat(fiatBalances);
  }, []);

  return (
    <div className="balance-container">
      <header className="total-bal-display">
        <span>Spot balance: $50,000</span>
      </header>

      <div className="balance-grid">
        {balances.map((balance) => (
          <BalanceItem
            key={balance.id}
            symbol={balance.symbol}
            currency={balance.currency}
            amount={balance.amount}
            balance={balance.balance}
          />
        ))}
      </div>

      <header className="new-section-header">
        <span>Fiat balance: $10,000</span>
      </header>

      <div className="balance-grid">
        {fiat.map((money) => (
          <BalanceItem
            key={money.id}
            symbol={money.symbol}
            currency={money.currency}
            amount={money.amount}
            balance={money.balance}
          />
        ))}
      </div>
    </div>
  );
};

export default Balance;
