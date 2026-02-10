const stocks = [
  { symbol: "RELIANCE", name: "Reliance", change: 1.8, weight: 5, contribution: 0.18, price: 2860, volume: 6200000 },
  { symbol: "TCS", name: "TCS", change: -0.6, weight: 4, contribution: -0.05, price: 3915, volume: 2100000 },
  { symbol: "HDFCBANK", name: "HDFC Bank", change: 0.4, weight: 4, contribution: 0.04, price: 1665, volume: 8400000 },
  { symbol: "INFY", name: "Infosys", change: 1.1, weight: 3, contribution: 0.09, price: 1652, volume: 5200000 },
  { symbol: "ICICIBANK", name: "ICICI Bank", change: -1.2, weight: 3, contribution: -0.1, price: 1110, volume: 9100000 },
  { symbol: "BHARTIARTL", name: "Bharti Airtel", change: 2.3, weight: 3, contribution: 0.15, price: 1448, volume: 7600000 },
  { symbol: "LT", name: "Larsen & Toubro", change: 0.2, weight: 3, contribution: 0.02, price: 3652, volume: 1900000 },
  { symbol: "HINDUNILVR", name: "Hindustan Unilever", change: -0.4, weight: 2, contribution: -0.02, price: 2486, volume: 1400000 },
  { symbol: "SBIN", name: "SBI", change: 1.6, weight: 2, contribution: 0.08, price: 817, volume: 13200000 },
  { symbol: "KOTAKBANK", name: "Kotak Bank", change: -1.7, weight: 2, contribution: -0.09, price: 1834, volume: 3200000 },
  { symbol: "BAJFINANCE", name: "Bajaj Finance", change: 2.1, weight: 2, contribution: 0.11, price: 7205, volume: 1200000 },
  { symbol: "ITC", name: "ITC", change: -0.2, weight: 2, contribution: -0.01, price: 452, volume: 18500000 },
  { symbol: "ASIANPAINT", name: "Asian Paints", change: -2.4, weight: 2, contribution: -0.12, price: 2850, volume: 1100000 },
  { symbol: "HCLTECH", name: "HCL Tech", change: 0.9, weight: 2, contribution: 0.06, price: 1530, volume: 2900000 },
  { symbol: "SUNPHARMA", name: "Sun Pharma", change: 1.2, weight: 2, contribution: 0.05, price: 1440, volume: 3600000 },
  { symbol: "AXISBANK", name: "Axis Bank", change: -0.9, weight: 2, contribution: -0.05, price: 1125, volume: 6400000 },
  { symbol: "MARUTI", name: "Maruti Suzuki", change: 1.4, weight: 2, contribution: 0.04, price: 12650, volume: 620000 },
  { symbol: "TITAN", name: "Titan", change: -1.1, weight: 1, contribution: -0.03, price: 3610, volume: 950000 },
  { symbol: "ULTRACEMCO", name: "UltraTech", change: 0.7, weight: 1, contribution: 0.02, price: 10230, volume: 410000 },
  { symbol: "WIPRO", name: "Wipro", change: -0.5, weight: 1, contribution: -0.01, price: 472, volume: 7800000 },
  { symbol: "NTPC", name: "NTPC", change: 1.9, weight: 1, contribution: 0.03, price: 348, volume: 15400000 },
  { symbol: "POWERGRID", name: "Power Grid", change: -0.3, weight: 1, contribution: -0.01, price: 300, volume: 9100000 },
  { symbol: "NESTLEIND", name: "Nestle", change: 0.1, weight: 1, contribution: 0.01, price: 26350, volume: 220000 },
  { symbol: "ONGC", name: "ONGC", change: -2.1, weight: 1, contribution: -0.05, price: 284, volume: 17600000 },
  { symbol: "ADANIENT", name: "Adani Ent", change: 2.7, weight: 1, contribution: 0.06, price: 3180, volume: 1200000 },
  { symbol: "JSWSTEEL", name: "JSW Steel", change: -1.6, weight: 1, contribution: -0.04, price: 905, volume: 5600000 },
  { symbol: "TATASTEEL", name: "Tata Steel", change: 0.6, weight: 1, contribution: 0.02, price: 152, volume: 22500000 },
  { symbol: "CIPLA", name: "Cipla", change: -0.8, weight: 1, contribution: -0.02, price: 1330, volume: 2100000 },
  { symbol: "DRREDDY", name: "Dr Reddy's", change: 1.5, weight: 1, contribution: 0.03, price: 5875, volume: 530000 },
  { symbol: "GRASIM", name: "Grasim", change: -1.3, weight: 1, contribution: -0.03, price: 2485, volume: 670000 },
  { symbol: "BAJAJFINSV", name: "Bajaj Finserv", change: 0.8, weight: 1, contribution: 0.02, price: 1625, volume: 1700000 },
  { symbol: "TECHM", name: "Tech Mahindra", change: 1.0, weight: 1, contribution: 0.02, price: 1320, volume: 2100000 },
  { symbol: "M&M", name: "Mahindra", change: -0.7, weight: 1, contribution: -0.02, price: 1895, volume: 2400000 },
  { symbol: "BRITANNIA", name: "Britannia", change: 0.3, weight: 1, contribution: 0.01, price: 5060, volume: 320000 },
  { symbol: "TATAMOTORS", name: "Tata Motors", change: 2.0, weight: 1, contribution: 0.04, price: 985, volume: 8200000 },
  { symbol: "DIVISLAB", name: "Divis", change: -2.3, weight: 1, contribution: -0.05, price: 3960, volume: 430000 },
  { symbol: "COALINDIA", name: "Coal India", change: 0.5, weight: 1, contribution: 0.02, price: 462, volume: 9300000 },
  { symbol: "HINDALCO", name: "Hindalco", change: 1.7, weight: 1, contribution: 0.03, price: 635, volume: 6400000 },
  { symbol: "BPCL", name: "BPCL", change: -1.9, weight: 1, contribution: -0.04, price: 590, volume: 4700000 },
  { symbol: "TATACONSUM", name: "Tata Consumer", change: 0.4, weight: 1, contribution: 0.01, price: 1190, volume: 1500000 },
  { symbol: "UPL", name: "UPL", change: -0.6, weight: 1, contribution: -0.02, price: 540, volume: 2700000 },
  { symbol: "SBILIFE", name: "SBI Life", change: 1.3, weight: 1, contribution: 0.02, price: 1565, volume: 1200000 },
  { symbol: "SHREECEM", name: "Shree Cement", change: -0.4, weight: 1, contribution: -0.01, price: 26500, volume: 85000 },
  { symbol: "EICHERMOT", name: "Eicher", change: 1.1, weight: 1, contribution: 0.02, price: 3925, volume: 310000 },
  { symbol: "HEROMOTOCO", name: "Hero Moto", change: -1.5, weight: 1, contribution: -0.03, price: 4630, volume: 290000 },
  { symbol: "INDUSINDBK", name: "IndusInd", change: 0.2, weight: 1, contribution: 0.01, price: 1395, volume: 2900000 },
  { symbol: "APOLLOHOSP", name: "Apollo", change: 1.9, weight: 1, contribution: 0.03, price: 6490, volume: 420000 },
  { symbol: "LTIM", name: "LTIMindtree", change: -0.3, weight: 1, contribution: -0.01, price: 5235, volume: 360000 },
  { symbol: "ADANIPORTS", name: "Adani Ports", change: 0.7, weight: 1, contribution: 0.02, price: 1355, volume: 1900000 },
  { symbol: "TATAPOWER", name: "Tata Power", change: 1.4, weight: 1, contribution: 0.03, price: 428, volume: 7600000 },
  { symbol: "BAJAJ-AUTO", name: "Bajaj Auto", change: -0.9, weight: 1, contribution: -0.02, price: 9650, volume: 260000 }
];

const heatmap = document.getElementById("heatmap");

const colorScale = (change) => {
  const clamped = Math.max(-3, Math.min(3, change));
  if (clamped === 0) return "#1f2937";
  const hue = clamped > 0 ? 145 : 5;
  const intensity = Math.abs(clamped) / 3;
  const lightness = 22 + intensity * 20;
  const saturation = 70 + intensity * 10;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const spanSize = (weight) => {
  if (weight >= 4) return { col: 4, row: 2 };
  if (weight >= 3) return { col: 3, row: 2 };
  if (weight >= 2) return { col: 3, row: 1 };
  return { col: 2, row: 1 };
};

const formatRupees = (value) => {
  if (value >= 1e12) return `₹${(value / 1e12).toFixed(2)}T`;
  if (value >= 1e9) return `₹${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e7) return `₹${(value / 1e7).toFixed(2)}Cr`;
  if (value >= 1e5) return `₹${(value / 1e5).toFixed(2)}L`;
  return `₹${value.toLocaleString("en-IN")}`;
};

stocks.forEach((stock) => {
  const tile = document.createElement("article");
  tile.className = "tile";
  const span = spanSize(stock.weight);
  tile.style.gridColumn = `span ${span.col}`;
  tile.style.gridRow = `span ${span.row}`;
  tile.style.background = colorScale(stock.change);
  const invested = stock.price * stock.volume;

  tile.innerHTML = `
    <div>
      <h2>${stock.symbol}</h2>
      <span>${stock.name}</span>
    </div>
    <div>
      <div class="change">${stock.change > 0 ? "+" : ""}${stock.change.toFixed(1)}%</div>
      <span>${formatRupees(invested)} traded</span>
      <div class="sector">Index impact ${stock.contribution > 0 ? "+" : ""}${stock.contribution.toFixed(2)}%</div>
    </div>
  `;

  heatmap.appendChild(tile);
});

const legendChips = document.querySelectorAll(".legend-chip");
legendChips.forEach((chip) => {
  const level = Number(chip.dataset.level);
  chip.style.background = colorScale(level);
});
