import { series } from "./data.js";

const tableBody = document.querySelector("#series-table tbody")!;
const averageSpan = document.querySelector("#promedio")! as HTMLSpanElement;

function loadSeries(): void {
  let totalTemporadas = 0;

  series.forEach(serie => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.nombre}</td>
      <td>${serie.canal}</td>
      <td>${serie.temporadas}</td>
    `;
    tableBody.appendChild(row);
    totalTemporadas += serie.temporadas;
  });

  const avg = totalTemporadas / series.length;
  averageSpan.textContent = avg.toFixed(1);
}

loadSeries();