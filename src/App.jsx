import "./App.css";
import Navigation from "./components/Navigation";
import Trade from "./components/Trade";
import Balance from "./components/Balance"

function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="layout">
        <Trade />
        <Balance/>
      </div>
    </div>
  );
}

export default App;
