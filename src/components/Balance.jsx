import React, { useState, useEffect } from "react";
import "../styles/balance.css";
import BalanceItem from "./balanceItem";

const Balance = () => {
  // State to store balance data
  const [balances, setBalances] = useState([]);
  const [fiat, setFiat] = useState([])

  // Simulated data (you can fetch this from an API)
  const spotBalances = [
    { id: 1, symbol: "ETH", currency: "Ethereum", amount: 0.5, balance: '$ 12,500' },
    { id: 2, symbol: "BTC", currency: "Bitcoin", amount: 1.2 },
    
  ];

  const fiatBalances = [
    { id: 1, symbol: "ETHs", currency: "Ethereum", amount: 0.5, balance: '$ 12,500' },
    { id: 2, symbol: "BTC", currency: "Bitcoin", amount: 1.2 },
    
  ];

  useEffect(() => {
    setBalances(spotBalances)
    setFiat(fiatBalances)
  }, []);

  console.log("this is fiat state", fiat)

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
        <span>New Section Header</span>
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