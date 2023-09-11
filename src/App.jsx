import "./App.css";
import Navigation from "./components/Navigation";
import Order from "./components/Order";
import Balance from "./components/Balance"

function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="layout">
        <Order />
        <Balance/>
      </div>
    </div>
  );
}

export default App;
