const monthlyPrices = [2140, 2158, 2179, 2210, 2238, 2255, 2274, 2292, 2311, 2340, 2369, 2395];

const provinceData = [
  { name: "A Coruña", region: "Galicia", abbr: "C", x: 105, y: 110, price: 1760, yoy: 5.6, rent: 10.8, yield: 5.4 },
  { name: "Lugo", region: "Galicia", abbr: "LU", x: 140, y: 95, price: 1360, yoy: 3.2, rent: 7.3, yield: 4.9 },
  { name: "Ourense", region: "Galicia", abbr: "OU", x: 135, y: 138, price: 1290, yoy: 2.7, rent: 6.8, yield: 5.1 },
  { name: "Pontevedra", region: "Galicia", abbr: "PO", x: 100, y: 150, price: 1650, yoy: 6.4, rent: 9.4, yield: 5.6 },
  { name: "Asturias", region: "Asturias", abbr: "AS", x: 184, y: 90, price: 1510, yoy: 4.2, rent: 8.4, yield: 5.1 },
  { name: "Cantabria", region: "Cantabria", abbr: "CA", x: 236, y: 98, price: 1695, yoy: 6.0, rent: 9.8, yield: 5.3 },
  { name: "Bizkaia", region: "País Vasco", abbr: "BI", x: 280, y: 102, price: 2920, yoy: 7.1, rent: 14.7, yield: 5.2 },
  { name: "Gipuzkoa", region: "País Vasco", abbr: "SS", x: 320, y: 102, price: 3330, yoy: 6.6, rent: 16.3, yield: 4.8 },
  { name: "Álava", region: "País Vasco", abbr: "VI", x: 290, y: 125, price: 2260, yoy: 5.4, rent: 11.9, yield: 5.0 },
  { name: "Navarra", region: "Navarra", abbr: "NA", x: 338, y: 126, price: 2160, yoy: 4.5, rent: 10.7, yield: 5.0 },
  { name: "La Rioja", region: "La Rioja", abbr: "LO", x: 304, y: 142, price: 1540, yoy: 3.8, rent: 8.2, yield: 5.6 },
  { name: "León", region: "Castilla y León", abbr: "LE", x: 196, y: 150, price: 1200, yoy: 2.1, rent: 6.1, yield: 5.0 },
  { name: "Palencia", region: "Castilla y León", abbr: "P", x: 230, y: 150, price: 1120, yoy: 2.6, rent: 5.9, yield: 5.4 },
  { name: "Burgos", region: "Castilla y León", abbr: "BU", x: 262, y: 150, price: 1410, yoy: 3.6, rent: 7.1, yield: 5.1 },
  { name: "Zamora", region: "Castilla y León", abbr: "ZA", x: 188, y: 182, price: 980, yoy: 1.9, rent: 5.3, yield: 5.2 },
  { name: "Valladolid", region: "Castilla y León", abbr: "VA", x: 224, y: 178, price: 1510, yoy: 4.0, rent: 8.4, yield: 5.4 },
  { name: "Soria", region: "Castilla y León", abbr: "SO", x: 275, y: 178, price: 1180, yoy: 2.3, rent: 6.2, yield: 5.5 },
  { name: "Salamanca", region: "Castilla y León", abbr: "SA", x: 206, y: 214, price: 1410, yoy: 3.2, rent: 7.7, yield: 5.7 },
  { name: "Segovia", region: "Castilla y León", abbr: "SG", x: 250, y: 208, price: 1650, yoy: 4.7, rent: 9.0, yield: 5.5 },
  { name: "Ávila", region: "Castilla y León", abbr: "AV", x: 236, y: 226, price: 1290, yoy: 2.8, rent: 6.8, yield: 5.8 },
  { name: "Madrid", region: "Comunidad de Madrid", abbr: "M", x: 272, y: 238, price: 3920, yoy: 8.2, rent: 19.2, yield: 4.8 },
  { name: "Guadalajara", region: "Castilla-La Mancha", abbr: "GU", x: 300, y: 228, price: 1420, yoy: 5.1, rent: 8.1, yield: 5.6 },
  { name: "Toledo", region: "Castilla-La Mancha", abbr: "TO", x: 272, y: 265, price: 1260, yoy: 4.8, rent: 7.2, yield: 5.9 },
  { name: "Cuenca", region: "Castilla-La Mancha", abbr: "CU", x: 322, y: 260, price: 1090, yoy: 3.3, rent: 6.1, yield: 5.8 },
  { name: "Albacete", region: "Castilla-La Mancha", abbr: "AB", x: 332, y: 304, price: 1140, yoy: 3.9, rent: 6.7, yield: 6.0 },
  { name: "Ciudad Real", region: "Castilla-La Mancha", abbr: "CR", x: 278, y: 300, price: 980, yoy: 2.4, rent: 5.8, yield: 6.2 },
  { name: "Huesca", region: "Aragón", abbr: "HU", x: 360, y: 170, price: 1390, yoy: 4.4, rent: 7.7, yield: 5.4 },
  { name: "Zaragoza", region: "Aragón", abbr: "Z", x: 355, y: 205, price: 1820, yoy: 5.8, rent: 9.6, yield: 5.5 },
  { name: "Teruel", region: "Aragón", abbr: "TE", x: 360, y: 246, price: 970, yoy: 2.2, rent: 5.5, yield: 6.1 },
  { name: "Lleida", region: "Cataluña", abbr: "L", x: 410, y: 168, price: 1640, yoy: 4.9, rent: 8.5, yield: 5.2 },
  { name: "Girona", region: "Cataluña", abbr: "GI", x: 463, y: 160, price: 2530, yoy: 7.0, rent: 13.2, yield: 5.0 },
  { name: "Barcelona", region: "Cataluña", abbr: "B", x: 450, y: 198, price: 4280, yoy: 6.7, rent: 20.4, yield: 4.6 },
  { name: "Tarragona", region: "Cataluña", abbr: "T", x: 420, y: 220, price: 1810, yoy: 5.5, rent: 9.4, yield: 5.6 },
  { name: "Castellón", region: "Comunitat Valenciana", abbr: "CS", x: 407, y: 258, price: 1510, yoy: 6.1, rent: 8.6, yield: 5.9 },
  { name: "Valencia", region: "Comunitat Valenciana", abbr: "V", x: 400, y: 292, price: 2230, yoy: 10.1, rent: 12.2, yield: 5.8 },
  { name: "Alicante", region: "Comunitat Valenciana", abbr: "A", x: 396, y: 328, price: 2180, yoy: 9.2, rent: 11.6, yield: 5.9 },
  { name: "Murcia", region: "Región de Murcia", abbr: "MU", x: 370, y: 342, price: 1440, yoy: 7.5, rent: 8.2, yield: 6.1 },
  { name: "Almería", region: "Andalucía", abbr: "AL", x: 358, y: 390, price: 1290, yoy: 7.1, rent: 7.6, yield: 6.0 },
  { name: "Granada", region: "Andalucía", abbr: "GR", x: 323, y: 382, price: 1680, yoy: 6.8, rent: 9.4, yield: 5.8 },
  { name: "Málaga", region: "Andalucía", abbr: "MA", x: 292, y: 396, price: 3020, yoy: 12.4, rent: 15.7, yield: 5.4 },
  { name: "Cádiz", region: "Andalucía", abbr: "CA", x: 235, y: 408, price: 1750, yoy: 8.3, rent: 10.2, yield: 5.7 },
  { name: "Huelva", region: "Andalucía", abbr: "H", x: 193, y: 388, price: 1210, yoy: 4.8, rent: 7.1, yield: 5.9 },
  { name: "Sevilla", region: "Andalucía", abbr: "SE", x: 248, y: 360, price: 1910, yoy: 5.9, rent: 10.8, yield: 5.6 },
  { name: "Córdoba", region: "Andalucía", abbr: "CO", x: 279, y: 350, price: 1360, yoy: 4.5, rent: 7.8, yield: 5.8 },
  { name: "Jaén", region: "Andalucía", abbr: "J", x: 308, y: 346, price: 1110, yoy: 3.8, rent: 6.5, yield: 6.0 },
  { name: "Badajoz", region: "Extremadura", abbr: "BA", x: 184, y: 298, price: 940, yoy: 2.1, rent: 5.2, yield: 6.2 },
  { name: "Cáceres", region: "Extremadura", abbr: "CC", x: 192, y: 255, price: 1030, yoy: 2.4, rent: 5.8, yield: 6.1 },
  { name: "Ciudad Autónoma de Ceuta", region: "Ceuta", abbr: "CE", x: 255, y: 446, price: 1870, yoy: 4.9, rent: 10.4, yield: 5.5 },
  { name: "Ciudad Autónoma de Melilla", region: "Melilla", abbr: "ML", x: 328, y: 448, price: 1980, yoy: 5.2, rent: 10.9, yield: 5.4 },
  { name: "Baleares", region: "Illes Balears", abbr: "PM", x: 565, y: 290, price: 3910, yoy: 11.5, rent: 18.8, yield: 5.0 },
  { name: "Las Palmas", region: "Canarias", abbr: "GC", x: 520, y: 470, price: 2130, yoy: 8.6, rent: 11.7, yield: 5.7 },
  { name: "Santa Cruz de Tenerife", region: "Canarias", abbr: "TF", x: 570, y: 485, price: 2240, yoy: 9.0, rent: 12.1, yield: 5.6 },
];

const relevantData = [
  { title: "Oferta activa", value: "-4.8% interanual", detail: "Menor inventario disponible respecto al año anterior." },
  { title: "Tiempo medio de venta", value: "72 días", detail: "La rotación mejora frente al trimestre pasado." },
  { title: "Esfuerzo hipotecario", value: "34% de ingresos", detail: "Porcentaje de renta familiar dedicado a la cuota." },
  { title: "Rentabilidad bruta alquiler", value: "6.2%", detail: "Media estimada en núcleos urbanos principales." },
];

const monthLabels = ["May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic", "Ene", "Feb", "Mar", "Abr"];
const lastPrice = monthlyPrices.at(-1);
const firstPrice = monthlyPrices[0];
const annualGrowth = ((lastPrice - firstPrice) / firstPrice) * 100;
const averagePrice = monthlyPrices.reduce((a, b) => a + b, 0) / monthlyPrices.length;
const strongestProvince = provinceData.reduce((max, p) => (p.yoy > max.yoy ? p : max), provinceData[0]);

const kpis = [
  { label: "Precio medio actual", value: `${lastPrice.toLocaleString("es-ES")} €/m²`, delta: `+${annualGrowth.toFixed(1)}% en 12 meses`, trend: "up" },
  { label: "Precio medio 12 meses", value: `${Math.round(averagePrice).toLocaleString("es-ES")} €/m²`, delta: "Tendencia alcista sostenida", trend: "up" },
  { label: "Provincia con más subida", value: strongestProvince.name, delta: `+${strongestProvince.yoy.toFixed(1)}% interanual`, trend: "up" },
  { label: "Variación mes anterior", value: `${(((lastPrice - monthlyPrices.at(-2)) / monthlyPrices.at(-2)) * 100).toFixed(2)}%`, delta: "Crecimiento mensual", trend: "up" },
];

function trendClass(value) {
  if (value > 0.5) return "up";
  if (value < -0.5) return "down";
  return "flat";
}

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

function renderTopProvinces() {
  const cityList = document.getElementById("city-list");
  const top = [...provinceData].sort((a, b) => b.yoy - a.yoy).slice(0, 10);

  cityList.innerHTML = top
    .map(
      (item) => `
      <li class="city-row">
        <span>${item.name}</span>
        <strong class="${trendClass(item.yoy)}">${item.yoy > 0 ? "+" : ""}${item.yoy.toFixed(1)}%</strong>
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

function updateProvinceDetails(province) {
  document.getElementById("province-name").textContent = province.name;
  document.getElementById("province-region").textContent = province.region;
  document.getElementById("province-price").textContent = `${province.price.toLocaleString("es-ES")} €/m²`;
  document.getElementById("province-yoy").textContent = `${province.yoy > 0 ? "+" : ""}${province.yoy.toFixed(1)}%`;
  document.getElementById("province-rent").textContent = `${province.rent.toFixed(1)} €/m²/mes`;
  document.getElementById("province-yield").textContent = `${province.yield.toFixed(1)}%`;
}

function renderProvinceMap() {
  const svg = document.getElementById("provinceMap");
  const tooltip = document.getElementById("mapTooltip");

  svg.innerHTML = `
    <path class="map-shape" d="M80 85 L145 70 L220 78 L305 95 L370 126 L468 150 L498 220 L470 306 L440 356 L370 392 L280 415 L210 420 L142 396 L120 350 L96 300 L82 232 Z" />
    <path class="map-shape" d="M515 265 L585 248 L622 282 L594 327 L525 315 Z" />
    <path class="map-shape" d="M472 454 L612 454 L632 506 L468 506 Z" />
  `;

  let activeDot = null;

  provinceData.forEach((province) => {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");

    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("cx", String(province.x));
    dot.setAttribute("cy", String(province.y));
    dot.setAttribute("r", "6.2");
    dot.setAttribute("class", "province-dot");
    dot.setAttribute("tabindex", "0");

    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", String(province.x + 8));
    label.setAttribute("y", String(province.y + 4));
    label.setAttribute("class", "province-label");
    label.textContent = province.abbr;

    const showTooltip = (event) => {
      const bounds = svg.getBoundingClientRect();
      const x = (event.clientX || bounds.left + province.x) - bounds.left;
      const y = (event.clientY || bounds.top + province.y) - bounds.top;
      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y}px`;
      tooltip.style.opacity = "1";
      tooltip.innerHTML = `<strong>${province.name}</strong><br/>${province.price.toLocaleString("es-ES")} €/m² · ${province.yoy > 0 ? "+" : ""}${province.yoy.toFixed(1)}%`;
    };

    const hideTooltip = () => {
      tooltip.style.opacity = "0";
    };

    const selectProvince = () => {
      if (activeDot) activeDot.classList.remove("active");
      dot.classList.add("active");
      activeDot = dot;
      updateProvinceDetails(province);
    };

    dot.addEventListener("mouseenter", showTooltip);
    dot.addEventListener("mousemove", showTooltip);
    dot.addEventListener("mouseleave", hideTooltip);
    dot.addEventListener("click", selectProvince);
    dot.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectProvince();
      }
    });

    group.append(dot, label);
    svg.appendChild(group);
  });

  updateProvinceDetails(provinceData[0]);
}

function initDashboard() {
  renderKpis();
  renderTopProvinces();
  renderHighlights();
  drawChart();
  renderProvinceMap();
}

window.addEventListener("load", initDashboard);
window.addEventListener("resize", drawChart);
