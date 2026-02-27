const COURSES = [
  "1° básico", "2° básico", "3° básico", "4° básico",
  "5° básico", "6° básico", "7° básico", "8° básico",
  "1° medio", "2° medio", "3° medio", "4° medio"
];

const DIMENSIONS = {
  "Conciencia emocional": {
    simple: [
      "Puedo decir cómo me siento.",
      "Reconozco cuando estoy alegre o triste.",
      "Noto cuando algo me enoja.",
      "Puedo contar cómo se siente mi cuerpo cuando tengo una emoción.",
      "Sé cuándo necesito pedir ayuda emocional."
    ],
    intermediate: [
      "Identifico mis emociones en situaciones escolares.",
      "Distingo emociones parecidas (por ejemplo, rabia y frustración).",
      "Reconozco cambios emocionales durante el día.",
      "Comprendo por qué siento ciertas emociones.",
      "Detecto señales físicas de mis estados emocionales.",
      "Puedo expresar con palabras lo que siento."
    ],
    reflective: [
      "Reconozco patrones emocionales en mis decisiones académicas.",
      "Diferencio emociones primarias y secundarias en mí.",
      "Analizo causas internas y externas de mis emociones.",
      "Identifico sesgos emocionales al relacionarme.",
      "Puedo verbalizar mi estado emocional de forma precisa.",
      "Reconozco cómo mis emociones impactan mis metas."
    ]
  },
  "Regulación emocional": {
    simple: [
      "Cuando me enojo, puedo calmarme sin hacer daño.",
      "Pido tiempo para tranquilizarme.",
      "Respiro profundo cuando algo me molesta.",
      "Puedo esperar antes de reaccionar.",
      "Busco una solución cuando estoy triste."
    ],
    intermediate: [
      "Uso estrategias para manejar emociones intensas.",
      "Evito responder impulsivamente cuando estoy molesto/a.",
      "Puedo recuperar la calma en conflictos.",
      "Busco apoyo cuando siento sobrecarga emocional.",
      "Transformo pensamientos negativos en opciones realistas.",
      "Mantengo autocontrol en situaciones de presión escolar."
    ],
    reflective: [
      "Aplico autorregulación emocional antes de tomar decisiones importantes.",
      "Gestiono la frustración académica de forma constructiva.",
      "Utilizo técnicas conscientes (respiración, pausa, reencuadre).",
      "Regulo emociones en interacciones digitales y presenciales.",
      "Mantengo equilibrio emocional frente a evaluaciones o conflictos.",
      "Convierto experiencias emocionales difíciles en aprendizaje."
    ]
  },
  "Autonomía emocional": {
    simple: [
      "Confío en que puedo aprender cosas nuevas.",
      "Intento nuevamente cuando me equivoco.",
      "Puedo decir lo que necesito con respeto.",
      "Me siento valioso/a como persona.",
      "Pido ayuda cuando no puedo solo/a."
    ],
    intermediate: [
      "Me siento capaz de enfrentar desafíos personales.",
      "Mantengo motivación en tareas difíciles.",
      "Tomo decisiones considerando mis valores.",
      "Cuido mi autoestima en contextos sociales.",
      "Asumo responsabilidad por mis acciones emocionales.",
      "Persisto aunque reciba críticas constructivas."
    ],
    reflective: [
      "Tomo decisiones autónomas alineadas con mi proyecto vital.",
      "Gestiono mi autoconcepto frente a la presión social.",
      "Mantengo motivación intrínseca en metas académicas.",
      "Ejercito pensamiento crítico sobre mis reacciones emocionales.",
      "Asumo responsabilidad emocional sin culpar a terceros.",
      "Sostengo una autoeficacia realista y saludable."
    ]
  },
  "Competencia social": {
    simple: [
      "Escucho a mis compañeros cuando hablan.",
      "Puedo pedir perdón cuando me equivoco.",
      "Comparto y respeto turnos.",
      "Trato con amabilidad a otros.",
      "Busco resolver peleas conversando."
    ],
    intermediate: [
      "Me comunico asertivamente con compañeros y docentes.",
      "Respeto puntos de vista diferentes al mío.",
      "Colaboro en equipo para lograr metas comunes.",
      "Resuelvo conflictos mediante diálogo y acuerdos.",
      "Muestro empatía frente a dificultades de otros.",
      "Evito conductas de exclusión en mi curso."
    ],
    reflective: [
      "Aplico habilidades de comunicación efectiva en conflictos complejos.",
      "Manejo desacuerdos con enfoque de respeto mutuo.",
      "Promuevo climas inclusivos y de buen trato.",
      "Ejercito liderazgo colaborativo y empático.",
      "Detecto dinámicas relacionales que afectan el bienestar grupal.",
      "Contribuyo a la mediación escolar de manera responsable."
    ]
  },
  "Competencias para la vida y el bienestar": {
    simple: [
      "Tengo hábitos que me ayudan a sentirme bien.",
      "Sé que descansar es importante.",
      "Puedo pedir apoyo cuando tengo un problema.",
      "Trato de pensar en soluciones cuando algo sale mal.",
      "Hago cosas que me hacen sentir tranquilo/a."
    ],
    intermediate: [
      "Organizo mi tiempo para equilibrar estudio y descanso.",
      "Tomo decisiones saludables para mi bienestar.",
      "Identifico redes de apoyo dentro del colegio.",
      "Enfrento problemas con actitud de solución.",
      "Desarrollo hábitos de autocuidado emocional.",
      "Proyecto metas personales alcanzables."
    ],
    reflective: [
      "Integro bienestar emocional en mi planificación de vida.",
      "Evalúo consecuencias socioemocionales de mis decisiones.",
      "Practico autocuidado sostenido ante alta demanda académica.",
      "Activo redes de apoyo en momentos de crisis.",
      "Fortalezco resiliencia frente a cambios y adversidad.",
      "Construyo un propósito personal con sentido y equilibrio."
    ]
  }
};

const KEYWORDS = {
  "Conciencia emocional": ["siento", "sentí", "emoción", "emociones", "rabia", "triste", "alegr", "miedo", "ansiedad"],
  "Regulación emocional": ["calmar", "respirar", "control", "manejar", "regular", "tranquil", "pausa"],
  "Autonomía emocional": ["decid", "respons", "confianza", "autoestima", "motiva", "meta", "lograr"],
  "Competencia social": ["compañer", "curso", "amigo", "familia", "escuchar", "dialog", "conflicto", "equipo"],
  "Competencias para la vida y el bienestar": ["bienestar", "dormir", "descanso", "apoyo", "salud", "hábito", "equilibrio"]
};

const EMOTION_KEYWORDS = ["alegría", "tristeza", "miedo", "rabia", "enojo", "ansiedad", "calma", "frustración", "vergüenza", "culpa", "orgullo"];

let barChart;
let radarChart;
let groupChart;

const form = document.getElementById("surveyForm");
const courseSelect = document.getElementById("studentCourse");
const dateInput = document.getElementById("applicationDate");
const filterCourse = document.getElementById("filterCourse");
const likertSections = document.getElementById("likertSections");
const resultsSection = document.getElementById("results");

function setDateNow() {
  const now = new Date();
  dateInput.value = now.toISOString().slice(0, 10);
}

function populateCourses() {
  courseSelect.innerHTML = "<option value=''>Seleccionar</option>" + COURSES.map((c) => `<option>${c}</option>`).join("");
  filterCourse.innerHTML += COURSES.map((c) => `<option>${c}</option>`).join("");
}

function getTier(course) {
  const idx = COURSES.indexOf(course);
  if (idx <= 3) return "simple";
  if (idx <= 7) return "intermediate";
  return "reflective";
}

function renderLikert() {
  const tempCourse = courseSelect.value || "1° básico";
  const tier = getTier(tempCourse);
  const scaleLegend = "1=Nunca · 2=Casi nunca · 3=A veces · 4=Casi siempre · 5=Siempre";
  likertSections.innerHTML = `<p class='scale-hint'>${scaleLegend}</p>`;

  Object.entries(DIMENSIONS).forEach(([dim, versions]) => {
    const items = versions[tier];
    const block = document.createElement("section");
    block.className = "dim-section";
    block.innerHTML = `<h3>${dim}</h3>`;
    items.forEach((item, idx) => {
      const key = `${dim}-${idx}`;
      const label = document.createElement("label");
      label.innerHTML = `${item}
        <select name='${key}' required>
          <option value=''>Seleccionar</option>
          <option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option>
        </select>`;
      block.appendChild(label);
    });
    likertSections.appendChild(block);
  });
}

function interpretLevel(value) {
  if (value <= 2.4) return { label: "Bajo desarrollo", cls: "low" };
  if (value <= 3.4) return { label: "Desarrollo medio", cls: "medium" };
  return { label: "Desarrollo adecuado", cls: "high" };
}

function mean(arr) {
  return arr.reduce((a, b) => a + b, 0) / (arr.length || 1);
}

function stdDev(arr) {
  const m = mean(arr);
  const variance = mean(arr.map((v) => (v - m) ** 2));
  return Math.sqrt(variance);
}

function analyzeQualitative(texts) {
  const merged = texts.join(" ").toLowerCase();
  const byDimension = {};
  let dominant = "Sin categoría dominante";

  Object.entries(KEYWORDS).forEach(([dimension, keys]) => {
    byDimension[dimension] = keys.reduce((count, key) => count + (merged.match(new RegExp(key, "g")) || []).length, 0);
  });

  const sorted = Object.entries(byDimension).sort((a, b) => b[1] - a[1]);
  if (sorted[0] && sorted[0][1] > 0) dominant = sorted[0][0];

  const emotions = EMOTION_KEYWORDS.filter((e) => merged.includes(e));

  const synthesis = `Predomina la dimensión "${dominant}" en el discurso del estudiante. Se detectan ${emotions.length || 0} referencias emocionales explícitas (${emotions.join(", ") || "no identificadas"}).`;

  return { byDimension, dominant, emotions, synthesis };
}

function recommendations(dimAverages) {
  const reco = [];
  if (dimAverages["Regulación emocional"] < 3) {
    reco.push("Entrenamiento en identificación emocional, respiración consciente, registro emocional y talleres de mediación escolar.");
  }
  if (dimAverages["Competencia social"] < 3) {
    reco.push("Trabajo en habilidades sociales, role playing, mediación guiada y prácticas de comunicación asertiva.");
  }
  if (dimAverages["Autonomía emocional"] < 3) {
    reco.push("Fortalecer autoeficacia y autoestima mediante metas graduales, feedback positivo y reflexión personal.");
  }
  if (reco.length === 0) {
    reco.push("Mantener plan de educación emocional con tutorías preventivas, actividades colaborativas y seguimiento bimensual.");
  }
  return reco;
}

function parseFormData() {
  const name = document.getElementById("studentName").value.trim();
  const age = Number(document.getElementById("studentAge").value);
  const course = courseSelect.value;
  const date = dateInput.value;
  const anonymize = document.getElementById("anonymize").checked;
  const tier = getTier(course);

  const dimensionScores = {};
  Object.entries(DIMENSIONS).forEach(([dim, versions]) => {
    const vals = versions[tier].map((_, idx) => Number(form.elements[`${dim}-${idx}`].value));
    dimensionScores[dim] = vals;
  });

  const dimAverages = Object.fromEntries(Object.entries(dimensionScores).map(([k, v]) => [k, Number(mean(v).toFixed(2))]));
  const generalAverage = Number(mean(Object.values(dimAverages)).toFixed(2));
  const deviation = Number(stdDev(Object.values(dimAverages)).toFixed(2));
  const level = interpretLevel(generalAverage);
  const wellbeingIndex = Number((generalAverage * 20).toFixed(1));
  const openResponses = ["openQ1", "openQ2", "openQ3"].map((id) => document.getElementById(id).value.trim());
  const qualitative = analyzeQualitative(openResponses);
  const reco = recommendations(dimAverages);
  const alert = generalAverage < 2.5 || Object.values(dimAverages).some((v) => v < 2.3);

  return {
    id: crypto.randomUUID(),
    name,
    displayName: anonymize ? `Estudiante-${Math.floor(Math.random() * 9000 + 1000)}` : name,
    age,
    course,
    date,
    tier,
    dimensionScores,
    dimAverages,
    generalAverage,
    deviation,
    level: level.label,
    levelClass: level.cls,
    wellbeingIndex,
    openResponses,
    qualitative,
    recommendations: reco,
    alert
  };
}

function saveRecord(record) {
  const records = JSON.parse(localStorage.getItem("socioRecords") || "[]");
  records.push(record);
  localStorage.setItem("socioRecords", JSON.stringify(records));
}

function drawIndividualCharts(record) {
  const labels = Object.keys(record.dimAverages);
  const values = Object.values(record.dimAverages);

  if (barChart) barChart.destroy();
  if (radarChart) radarChart.destroy();

  barChart = new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: { labels, datasets: [{ label: "Promedio", data: values, backgroundColor: "#4f8ef7" }] },
    options: { scales: { y: { min: 0, max: 5 } } }
  });

  radarChart = new Chart(document.getElementById("radarChart"), {
    type: "radar",
    data: {
      labels,
      datasets: [{ label: "Perfil socioemocional", data: values, borderColor: "#1f6feb", backgroundColor: "rgba(31,111,235,0.25)" }]
    },
    options: { scales: { r: { min: 0, max: 5 } } }
  });
}

function showIndividualResult(record) {
  const interp = document.getElementById("interpretation");
  const rec = document.getElementById("recommendations");

  interp.innerHTML = `
    <p><strong>Estudiante:</strong> ${record.displayName} (${record.course})</p>
    <p><strong>Promedio general:</strong> ${record.generalAverage} <span class="badge ${record.levelClass}">${record.level}</span></p>
    <p><strong>Desviación estándar:</strong> ${record.deviation}</p>
    <p><strong>Dimensión más descendida:</strong> ${Object.entries(record.dimAverages).sort((a, b) => a[1] - b[1])[0][0]}</p>
    <p><strong>Síntesis cualitativa:</strong> ${record.qualitative.synthesis}</p>
    <p><strong>Palabras emocionales detectadas:</strong> ${record.qualitative.emotions.join(", ") || "Sin coincidencias"}</p>
  `;

  rec.innerHTML = `<h3>Proyección de mejora personalizada</h3><ul>${record.recommendations.map((r) => `<li>${r}</li>`).join("")}</ul>`;
  resultsSection.classList.remove("hidden");
  drawIndividualCharts(record);
}

function getFilteredRecords() {
  const all = JSON.parse(localStorage.getItem("socioRecords") || "[]");
  const c = filterCourse.value;
  const from = document.getElementById("filterFrom").value;
  const to = document.getElementById("filterTo").value;

  return all.filter((r) => {
    const okCourse = !c || r.course === c;
    const okFrom = !from || r.date >= from;
    const okTo = !to || r.date <= to;
    return okCourse && okFrom && okTo;
  });
}

function renderAdmin(records = getFilteredRecords()) {
  const tbody = document.querySelector("#recordsTable tbody");
  const insights = document.getElementById("groupInsights");

  tbody.innerHTML = records.map((r) => `
      <tr>
        <td>${r.displayName}</td>
        <td>${r.course}</td>
        <td>${r.date}</td>
        <td>${r.generalAverage}</td>
        <td>${r.level}</td>
        <td>${r.wellbeingIndex}</td>
        <td>${r.alert ? "⚠️ Crítico" : "OK"}</td>
      </tr>
    `).join("");

  if (!records.length) {
    insights.innerHTML = "<p>No hay registros para los filtros aplicados.</p>";
    if (groupChart) groupChart.destroy();
    return;
  }

  const groupByDim = {};
  Object.keys(DIMENSIONS).forEach((d) => {
    groupByDim[d] = Number(mean(records.map((r) => r.dimAverages[d])).toFixed(2));
  });

  const critical = Object.entries(groupByDim).filter(([, v]) => v < 3).map(([k]) => k);
  const avg = Number(mean(records.map((r) => r.generalAverage)).toFixed(2));
  const byLevel = {
    básica: records.filter((r) => r.course.includes("básico")).length,
    media: records.filter((r) => r.course.includes("medio")).length
  };

  insights.innerHTML = `
    <p><strong>Promedio grupal:</strong> ${avg}</p>
    <p><strong>Dimensiones críticas:</strong> ${critical.join(", ") || "Sin dimensiones críticas"}</p>
    <p><strong>Comparación nivel educativo:</strong> Básica (${byLevel.básica}) vs Media (${byLevel.media}) registros.</p>
    <p><strong>Recomendación grupal:</strong> Priorizar intervención universal SEL y apoyo focalizado en dimensiones críticas.</p>
  `;

  if (groupChart) groupChart.destroy();
  groupChart = new Chart(document.getElementById("groupChart"), {
    type: "bar",
    data: {
      labels: Object.keys(groupByDim),
      datasets: [{ label: "Promedio grupal por dimensión", data: Object.values(groupByDim), backgroundColor: "#60a5fa" }]
    },
    options: { scales: { y: { min: 0, max: 5 } } }
  });
}

function exportCSV(records) {
  const rows = [
    ["nombre", "curso", "fecha", "promedio_general", "nivel", "indice_bienestar", "alerta"],
    ...records.map((r) => [r.displayName, r.course, r.date, r.generalAverage, r.level, r.wellbeingIndex, r.alert ? "critico" : "ok"])
  ];
  const csv = rows.map((r) => r.join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "evaluacion_socioemocional.csv";
  a.click();
}

function exportXLSX(records) {
  const ws = XLSX.utils.json_to_sheet(records.map((r) => ({
    nombre: r.displayName,
    curso: r.course,
    fecha: r.date,
    promedio_general: r.generalAverage,
    nivel: r.level,
    indice_bienestar: r.wellbeingIndex,
    alerta: r.alert ? "critico" : "ok"
  })));
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Resultados");
  XLSX.writeFile(wb, "evaluacion_socioemocional.xlsx");
}

async function exportIndividualPdf() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const target = document.getElementById("results");
  const canvas = await html2canvas(target);
  const img = canvas.toDataURL("image/png");
  doc.text("Reporte Individual Socioemocional", 10, 10);
  doc.addImage(img, "PNG", 10, 18, 190, 250);
  doc.save("reporte_individual.pdf");
}

async function exportGroupPdf() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const target = document.querySelector("section.card:last-of-type");
  const canvas = await html2canvas(target);
  const img = canvas.toDataURL("image/png");
  doc.text("Reporte Grupal Socioemocional", 10, 10);
  doc.addImage(img, "PNG", 10, 18, 190, 250);
  doc.save("reporte_grupal.pdf");
}

function exportChartsAsPng() {
  ["barChart", "radarChart", "groupChart"].forEach((id) => {
    const canvas = document.getElementById(id);
    if (!canvas) return;
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = `${id}.png`;
    a.click();
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const record = parseFormData();
  saveRecord(record);
  showIndividualResult(record);
  renderAdmin();
  form.reset();
  setDateNow();
  renderLikert();
});

courseSelect.addEventListener("change", renderLikert);
document.getElementById("applyFilters").addEventListener("click", () => renderAdmin());
document.getElementById("clearFilters").addEventListener("click", () => {
  filterCourse.value = "";
  document.getElementById("filterFrom").value = "";
  document.getElementById("filterTo").value = "";
  renderAdmin();
});
document.getElementById("exportCsv").addEventListener("click", () => exportCSV(getFilteredRecords()));
document.getElementById("exportXlsx").addEventListener("click", () => exportXLSX(getFilteredRecords()));
document.getElementById("downloadIndividualPdf").addEventListener("click", exportIndividualPdf);
document.getElementById("downloadGroupPdf").addEventListener("click", () => exportGroupPdf());
document.getElementById("exportChartsPng").addEventListener("click", exportChartsAsPng);

populateCourses();
setDateNow();
renderLikert();
renderAdmin();
