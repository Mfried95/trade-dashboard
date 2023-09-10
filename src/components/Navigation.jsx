import logo from "../assets/SDM-logo.png";
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <>
      <div className="nav-container">
        
        <div className="navlinks">
          <img src={logo} alt="" />
          <ul>
            <li className="page-links">Trading</li>
            <li className="page-links">Account</li>
            <li className="page-links">History</li>
          </ul>
        </div>

        <div className="nav-info">
          <ul>
            <li>%P&L</li>
            <li>Equity</li>
            <li>Deposit</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
