import "../styles/balance.css";
import BalanceItem from './balanceItem';

const Balance = () => {
  return (
    <div className="balance-container">
      <header>
        <h2>Spot balance: $50,000</h2>
      </header>

      <div className="balance-grid">
       <BalanceItem/>
        
      </div>
    </div>
  );
};

export default Balance;