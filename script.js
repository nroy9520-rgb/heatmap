const stocks = [
  { symbol: "RELIANCE", name: "Reliance", change: 1.8, weight: 5, sector: "Energy" },
  { symbol: "TCS", name: "TCS", change: -0.6, weight: 4, sector: "IT" },
  { symbol: "HDFCBANK", name: "HDFC Bank", change: 0.4, weight: 4, sector: "Banking" },
  { symbol: "INFY", name: "Infosys", change: 1.1, weight: 3, sector: "IT" },
  { symbol: "ICICIBANK", name: "ICICI Bank", change: -1.2, weight: 3, sector: "Banking" },
  { symbol: "BHARTIARTL", name: "Bharti Airtel", change: 2.3, weight: 3, sector: "Telecom" },
  { symbol: "LT", name: "Larsen & Toubro", change: 0.2, weight: 3, sector: "Infra" },
  { symbol: "HINDUNILVR", name: "Hindustan Unilever", change: -0.4, weight: 2, sector: "FMCG" },
  { symbol: "SBIN", name: "SBI", change: 1.6, weight: 2, sector: "Banking" },
  { symbol: "KOTAKBANK", name: "Kotak Bank", change: -1.7, weight: 2, sector: "Banking" },
  { symbol: "BAJFINANCE", name: "Bajaj Finance", change: 2.1, weight: 2, sector: "Finance" },
  { symbol: "ITC", name: "ITC", change: -0.2, weight: 2, sector: "FMCG" },
  { symbol: "ASIANPAINT", name: "Asian Paints", change: -2.4, weight: 2, sector: "Consumer" },
  { symbol: "HCLTECH", name: "HCL Tech", change: 0.9, weight: 2, sector: "IT" },
  { symbol: "SUNPHARMA", name: "Sun Pharma", change: 1.2, weight: 2, sector: "Pharma" },
  { symbol: "AXISBANK", name: "Axis Bank", change: -0.9, weight: 2, sector: "Banking" },
  { symbol: "MARUTI", name: "Maruti Suzuki", change: 1.4, weight: 2, sector: "Auto" },
  { symbol: "TITAN", name: "Titan", change: -1.1, weight: 1, sector: "Consumer" },
  { symbol: "ULTRACEMCO", name: "UltraTech", change: 0.7, weight: 1, sector: "Cement" },
  { symbol: "WIPRO", name: "Wipro", change: -0.5, weight: 1, sector: "IT" },
  { symbol: "NTPC", name: "NTPC", change: 1.9, weight: 1, sector: "Utilities" },
  { symbol: "POWERGRID", name: "Power Grid", change: -0.3, weight: 1, sector: "Utilities" },
  { symbol: "NESTLEIND", name: "Nestle", change: 0.1, weight: 1, sector: "FMCG" },
  { symbol: "ONGC", name: "ONGC", change: -2.1, weight: 1, sector: "Energy" },
  { symbol: "ADANIENT", name: "Adani Ent", change: 2.7, weight: 1, sector: "Infra" },
  { symbol: "JSWSTEEL", name: "JSW Steel", change: -1.6, weight: 1, sector: "Metals" },
  { symbol: "TATASTEEL", name: "Tata Steel", change: 0.6, weight: 1, sector: "Metals" },
  { symbol: "CIPLA", name: "Cipla", change: -0.8, weight: 1, sector: "Pharma" },
  { symbol: "DRREDDY", name: "Dr Reddy's", change: 1.5, weight: 1, sector: "Pharma" },
  { symbol: "GRASIM", name: "Grasim", change: -1.3, weight: 1, sector: "Materials" },
  { symbol: "BAJAJFINSV", name: "Bajaj Finserv", change: 0.8, weight: 1, sector: "Finance" },
  { symbol: "TECHM", name: "Tech Mahindra", change: 1.0, weight: 1, sector: "IT" },
  { symbol: "M&M", name: "Mahindra", change: -0.7, weight: 1, sector: "Auto" },
  { symbol: "BRITANNIA", name: "Britannia", change: 0.3, weight: 1, sector: "FMCG" },
  { symbol: "TATAMOTORS", name: "Tata Motors", change: 2.0, weight: 1, sector: "Auto" },
  { symbol: "DIVISLAB", name: "Divis", change: -2.3, weight: 1, sector: "Pharma" },
  { symbol: "COALINDIA", name: "Coal India", change: 0.5, weight: 1, sector: "Energy" },
  { symbol: "HINDALCO", name: "Hindalco", change: 1.7, weight: 1, sector: "Metals" },
  { symbol: "BPCL", name: "BPCL", change: -1.9, weight: 1, sector: "Energy" },
  { symbol: "TATACONSUM", name: "Tata Consumer", change: 0.4, weight: 1, sector: "FMCG" },
  { symbol: "UPL", name: "UPL", change: -0.6, weight: 1, sector: "Chemicals" },
  { symbol: "SBILIFE", name: "SBI Life", change: 1.3, weight: 1, sector: "Insurance" },
  { symbol: "SHREECEM", name: "Shree Cement", change: -0.4, weight: 1, sector: "Cement" },
  { symbol: "EICHERMOT", name: "Eicher", change: 1.1, weight: 1, sector: "Auto" },
  { symbol: "HEROMOTOCO", name: "Hero Moto", change: -1.5, weight: 1, sector: "Auto" },
  { symbol: "INDUSINDBK", name: "IndusInd", change: 0.2, weight: 1, sector: "Banking" },
  { symbol: "APOLLOHOSP", name: "Apollo", change: 1.9, weight: 1, sector: "Healthcare" },
  { symbol: "LTIM", name: "LTIMindtree", change: -0.3, weight: 1, sector: "IT" },
  { symbol: "ADANIPORTS", name: "Adani Ports", change: 0.7, weight: 1, sector: "Infra" },
  { symbol: "TATAPOWER", name: "Tata Power", change: 1.4, weight: 1, sector: "Utilities" },
  { symbol: "BAJAJ-AUTO", name: "Bajaj Auto", change: -0.9, weight: 1, sector: "Auto" }
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

stocks.forEach((stock) => {
  const tile = document.createElement("article");
  tile.className = "tile";
  const span = spanSize(stock.weight);
  tile.style.gridColumn = `span ${span.col}`;
  tile.style.gridRow = `span ${span.row}`;
  tile.style.background = colorScale(stock.change);

  tile.innerHTML = `
    <div>
      <h2>${stock.symbol}</h2>
      <span>${stock.name}</span>
    </div>
    <div>
      <div class="change">${stock.change > 0 ? "+" : ""}${stock.change.toFixed(1)}%</div>
      <div class="sector">${stock.sector}</div>
    </div>
  `;

  heatmap.appendChild(tile);
});

const legendChips = document.querySelectorAll(".legend-chip");
legendChips.forEach((chip) => {
  const level = Number(chip.dataset.level);
  chip.style.background = colorScale(level);
});
