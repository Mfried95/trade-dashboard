import { useState, useEffect } from "react";

const Trade = () => {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    getMarketApi();
  }, []);

  const getMarketApi = async () => {
    const api = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7`
    );

    const data = await api.json();

    setMarketData(data);
  };

  console.log(marketData)

  return <div>Trade</div>;
};

export default Trade;
