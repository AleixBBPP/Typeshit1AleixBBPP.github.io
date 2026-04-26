const monthlyPrices = [
  2140, 2158, 2179, 2210, 2238, 2255, 2274, 2292, 2311, 2340, 2369, 2395,
];

const cityGrowth = [
  { city: "Madrid", yoy: 8.2 },
  { city: "Barcelona", yoy: 6.7 },
  { city: "Valencia", yoy: 10.1 },
  { city: "Málaga", yoy: 12.4 },
  { city: "Sevilla", yoy: 5.9 },
];

const relevantData = [
  {
    title: "Oferta activa",
    value: "-4.8% interanual",
    detail: "Menor inventario disponible respecto al año anterior.",
  },
  {
    title: "Tiempo medio de venta",
    value: "72 días",
    detail: "La rotación mejora frente al trimestre pasado.",
  },
  {
    title: "Esfuerzo hipotecario",
    value: "34% de ingresos",
    detail: "Porcentaje de renta familiar dedicado a la cuota.",
  },
  {
    title: "Rentabilidad bruta alquiler",
    value: "6.2%",
    detail: "Media estimada en núcleos urbanos principales.",
  },
];

const monthLabels = [
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
  "Ene",
  "Feb",
  "Mar",
  "Abr",
];

const lastPrice = monthlyPrices.at(-1);
const firstPrice = monthlyPrices[0];
const annualGrowth = ((lastPrice - firstPrice) / firstPrice) * 100;
const averagePrice = monthlyPrices.reduce((a, b) => a + b, 0) / monthlyPrices.length;
const maxGrowthCity = cityGrowth.reduce((max, city) => (city.yoy > max.yoy ? city : max), cityGrowth[0]);

const kpis = [
  {
    label: "Precio medio actual",
    value: `${lastPrice.toLocaleString("es-ES")} €/m²`,
    delta: `+${annualGrowth.toFixed(1)}% en 12 meses`,
    trend: "up",
  },
  {
    label: "Precio medio 12 meses",
    value: `${Math.round(averagePrice).toLocaleString("es-ES")} €/m²`,
    delta: "Tendencia alcista sostenida",
    trend: "up",
  },
  {
    label: "Ciudad con más subida",
    value: maxGrowthCity.city,
    delta: `+${maxGrowthCity.yoy.toFixed(1)}% interanual`,
    trend: "up",
  },
  {
    label: "Variación mes anterior",
    value: `${(((lastPrice - monthlyPrices.at(-2)) / monthlyPrices.at(-2)) * 100).toFixed(2)}%`,
    delta: "Crecimiento mensual",
    trend: "up",
  },
];

function renderKpis() {
  const container = document.getElementById("kpi-grid");
  container.innerHTML = kpis
    .map(
      (kpi) => `
      <article class="card">
        <h3>${kpi.label}</h3>
        <div class="metric">${kpi.value}</div>
        <div class="delta ${kpi.trend}">${kpi.delta}</div>
      </article>
    `,
    )
    .join("");
}

function renderCities() {
  const cityList = document.getElementById("city-list");
  cityList.innerHTML = cityGrowth
    .map(
      (item) => `
      <li class="city-row">
        <span>${item.city}</span>
        <strong class="up">+${item.yoy.toFixed(1)}%</strong>
      </li>
    `,
    )
    .join("");
}

function renderHighlights() {
  const box = document.getElementById("highlights");
  box.innerHTML = relevantData
    .map(
      (item) => `
      <article class="highlight">
        <strong>${item.title}: ${item.value}</strong>
        <span>${item.detail}</span>
      </article>
    `,
    )
    .join("");
}

function drawChart() {
  const canvas = document.getElementById("priceChart");
  const ctx = canvas.getContext("2d");

  const ratio = window.devicePixelRatio || 1;
  const cssWidth = canvas.clientWidth || 600;
  const cssHeight = canvas.clientHeight || 220;
  canvas.width = Math.floor(cssWidth * ratio);
  canvas.height = Math.floor(cssHeight * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const width = cssWidth;
  const height = cssHeight;
  ctx.clearRect(0, 0, width, height);

  const padding = 26;
  const min = Math.min(...monthlyPrices) - 20;
  const max = Math.max(...monthlyPrices) + 20;

  const xStep = (width - padding * 2) / (monthlyPrices.length - 1);

  const y = (v) => height - padding - ((v - min) / (max - min)) * (height - padding * 2);

  ctx.strokeStyle = "rgba(159,176,206,0.25)";
  ctx.lineWidth = 1;
  for (let i = 0; i < 4; i++) {
    const gy = padding + ((height - padding * 2) / 3) * i;
    ctx.beginPath();
    ctx.moveTo(padding, gy);
    ctx.lineTo(width - padding, gy);
    ctx.stroke();
  }

  ctx.strokeStyle = "#60a5fa";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  monthlyPrices.forEach((price, i) => {
    const px = padding + i * xStep;
    const py = y(price);
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  });
  ctx.stroke();

  ctx.fillStyle = "#60a5fa";
  monthlyPrices.forEach((price, i) => {
    const px = padding + i * xStep;
    const py = y(price);
    ctx.beginPath();
    ctx.arc(px, py, 2.7, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = "#9fb0ce";
  ctx.font = "11px system-ui";
  monthLabels.forEach((month, i) => {
    const px = padding + i * xStep - 9;
    ctx.fillText(month, px, height - 8);
  });
}

function initDashboard() {
  renderKpis();
  renderCities();
  renderHighlights();
  drawChart();
}

window.addEventListener("load", initDashboard);
window.addEventListener("resize", drawChart);
