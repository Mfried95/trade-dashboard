import "./App.css";
import Navigation from "./components/Navigation";
import Trade from "./components/Trade";

function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="layout">
        <Trade />
      </div>
    </div>
  );
}

export default App;
