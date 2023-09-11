import "../styles/balance.css";
import BalanceItem from './balanceItem';

const Balance = () => {
  return (
    <div className="balance-container">
      <header>
        <h2>Spot balance: $50,000</h2>
      </header>

      <div className="balance-grid">
       <BalanceItem 
       symbol={"ETH"}
       currency={" Ethereum"}
       amount={"0.5"}
       balance={"$12,500"}
       />
       <BalanceItem 
       symbol={"ETH"}
       currency={" Ethereum"}
       amount={"0.5"}
       balance={"$12,500"}
       />
       <BalanceItem 
       symbol={"ETH"}
       currency={" Ethereum"}
       amount={"0.5"}
       balance={"$12,500"}
       />
       <BalanceItem 
       symbol={"ETH"}
       currency={" Ethereum"}
       amount={"0.5"}
       balance={"$12,500"}
       />
       <BalanceItem 
       symbol={"ETH"}
       currency={" Ethereum"}
       amount={"0.5"}
       balance={"$12,500"}
       />
       <BalanceItem 
       symbol={"ETH"}
       currency={" Ethereum"}
       amount={"0.5"}
       balance={"$12,500"}
       />
        <header>
          <h2>Fiat balance: ${"10,000"}</h2>
        </header>
        <br />
        <BalanceItem 
       symbol={"ETH"}
       currency={" Ethereum"}
       amount={"0.5"}
       balance={"$12,500"}
       />
       <BalanceItem 
       symbol={"ETH"}
       currency={" Ethereum"}
       amount={"0.5"}
       balance={"$12,500"}
       />
       <BalanceItem 
       symbol={"ETH"}
       currency={" Ethereum"}
       amount={"0.5"}
       balance={"$12,500"}
       />
       <BalanceItem 
       symbol={"ETH"}
       currency={" Ethereum"}
       amount={"0.5"}
       balance={"$12,500"}
       />
       
      </div>
    </div>
  );
};

export default Balance;