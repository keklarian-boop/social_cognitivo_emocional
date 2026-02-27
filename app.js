const courses = [
  '1° básico', '2° básico', '3° básico', '4° básico',
  '5° básico', '6° básico', '7° básico', '8° básico',
  '1° medio', '2° medio', '3° medio', '4° medio',
];

const dimensions = ['Conciencia emocional', 'Regulación emocional', 'Autonomía emocional', 'Competencia social', 'Vida y bienestar'];

const questionBank = {
  simple: {
    'Conciencia emocional': ['Reconozco cuando estoy alegre o triste.', 'Puedo decir cómo me siento.', 'Me doy cuenta cuando estoy enojado/a.', 'Identifico emociones en mi cuerpo.', 'Sé cuándo necesito ayuda emocional.'],
    'Regulación emocional': ['Cuando me enojo, trato de calmarme.', 'Puedo esperar antes de reaccionar.', 'Pido apoyo cuando una emoción me supera.', 'Uso respiraciones para tranquilizarme.', 'Evito hacer daño cuando estoy molesto/a.'],
    'Autonomía emocional': ['Confío en mí para enfrentar desafíos.', 'Intento resolver problemas por mí mismo/a.', 'Me animo cuando algo no resulta.', 'Reconozco mis fortalezas.', 'Puedo decir “no” cuando algo me hace mal.'],
    'Competencia social': ['Escucho a mis compañeros/as.', 'Respeto turnos al hablar.', 'Puedo trabajar en equipo.', 'Busco resolver conflictos conversando.', 'Ayudo a otros cuando lo necesitan.'],
    'Vida y bienestar': ['Tengo hábitos que me hacen sentir bien.', 'Disfruto actividades saludables.', 'Pido apoyo cuando estoy mal.', 'Me siento seguro/a en mi curso.', 'Tengo metas que quiero cumplir.'],
  },
  intermedio: {
    'Conciencia emocional': ['Identifico qué emoción predomina en mí durante el día.', 'Distingo emociones parecidas (ej. frustración vs. rabia).', 'Reconozco señales físicas de mis emociones.', 'Puedo explicar por qué me siento de cierta manera.', 'Detecto cambios emocionales antes de actuar.'],
    'Regulación emocional': ['Aplico estrategias para calmarme en momentos difíciles.', 'Evito reaccionar impulsivamente cuando me molesto.', 'Reencuadro pensamientos negativos.', 'Busco apoyo oportunamente para regularme.', 'Mantengo el control en discusiones.'],
    'Autonomía emocional': ['Mantengo mi motivación aunque aparezcan obstáculos.', 'Tomo decisiones considerando mis valores.', 'Gestiono la presión de pares de forma saludable.', 'Asumo responsabilidad por mis actos.', 'Me recupero emocionalmente después de un error.'],
    'Competencia social': ['Me comunico de manera asertiva.', 'Empatizo con emociones de mis compañeros/as.', 'Colaboro activamente en tareas grupales.', 'Manejo desacuerdos sin agresión.', 'Contribuyo a un clima de respeto en el curso.'],
    'Vida y bienestar': ['Organizo hábitos que favorecen mi bienestar.', 'Mantengo equilibrio entre estudio, descanso y ocio.', 'Planteo metas personales realistas.', 'Pido ayuda cuando me siento sobrepasado/a.', 'Participo en actividades que fortalecen mi bienestar.'],
  },
  reflexivo: {
    'Conciencia emocional': ['Reflexiono sobre cómo mis emociones influyen en mis decisiones.', 'Identifico con precisión emociones complejas.', 'Reconozco detonantes emocionales recurrentes.', 'Analizo la coherencia entre emoción, pensamiento y acción.', 'Monitoreo mis estados emocionales en contextos exigentes.'],
    'Regulación emocional': ['Uso estrategias conscientes para regular emociones intensas.', 'Postergo reacciones inmediatas para responder con criterio.', 'Practico autocalma en situaciones de estrés.', 'Transformo emociones difíciles en aprendizaje.', 'Mantengo regulación emocional en relaciones significativas.'],
    'Autonomía emocional': ['Sostengo mi autoestima frente a la crítica.', 'Defiendo límites personales de forma respetuosa.', 'Mantengo sentido de propósito en periodos complejos.', 'Decido en función de mis convicciones y bienestar.', 'Persevero ante frustraciones académicas o personales.'],
    'Competencia social': ['Promuevo vínculos basados en respeto y colaboración.', 'Escucho activamente perspectivas distintas a la mía.', 'Gestiono conflictos con enfoque restaurativo.', 'Acompaño emocionalmente a otros cuando lo requieren.', 'Contribuyo al bienestar socioemocional del grupo.'],
    'Vida y bienestar': ['Diseño rutinas sostenibles de autocuidado.', 'Integro hábitos que favorecen salud mental y física.', 'Desarrollo proyectos personales con sentido.', 'Busco redes de apoyo cuando enfrento crisis.', 'Evalúo periódicamente mi bienestar integral.'],
  },
};

const emotionKeywords = {
  primarias: ['alegría', 'tristeza', 'miedo', 'rabia', 'enojo', 'sorpresa', 'asco'],
  secundarias: ['frustración', 'ansiedad', 'vergüenza', 'culpa', 'orgullo', 'gratitud', 'esperanza', 'estrés'],
};

const semanticDimensionKeywords = {
  'Conciencia emocional': ['siento', 'emocion', 'identificar', 'reconozco', 'triste', 'alegre', 'miedo'],
  'Regulación emocional': ['calmar', 'respirar', 'controlar', 'regular', 'manejar', 'impulso', 'pausa'],
  'Autonomía emocional': ['confío', 'decisión', 'meta', 'autoestima', 'fortaleza', 'límite', 'motivación'],
  'Competencia social': ['compañero', 'equipo', 'escuchar', 'conflicto', 'empatía', 'respeto', 'comunicar'],
  'Vida y bienestar': ['bienestar', 'salud', 'apoyo', 'hábito', 'descanso', 'colegio', 'seguro'],
};

const state = {
  records: JSON.parse(localStorage.getItem('seRecords') || '[]'),
  currentRecord: null,
  charts: { bar: null, radar: null },
};

const form = document.getElementById('survey-form');
const courseEl = document.getElementById('course');
const dateEl = document.getElementById('date');
const profileEl = document.getElementById('language-profile');
const likertContainer = document.getElementById('likert-container');
const summaryEl = document.getElementById('individual-summary');
const groupSummaryEl = document.getElementById('group-summary');
const tableBody = document.querySelector('#records-table tbody');

function boot() {
  dateEl.value = new Date().toISOString().slice(0, 10);
  courses.forEach((course) => {
    courseEl.add(new Option(course, course));
    document.getElementById('filter-course').add(new Option(course, course));
  });
  updateLanguageByCourse();
  renderLikert();
  renderAdmin();
}

function getLevelByCourse(course) {
  const num = parseInt(course, 10);
  if (course.includes('básico') && num <= 4) return 'basica-inicial';
  if (course.includes('básico')) return 'basica-media';
  return 'media';
}

function updateLanguageByCourse() {
  const level = getLevelByCourse(courseEl.value || courses[0]);
  const value = level === 'basica-inicial' ? 'simple' : level === 'basica-media' ? 'intermedio' : 'reflexivo';
  profileEl.value = value;
}

function renderLikert() {
  const profile = questionBank[profileEl.value];
  likertContainer.innerHTML = '';

  Object.entries(profile).forEach(([dimension, questions]) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'dimension';
    wrapper.innerHTML = `<h3>${dimension}</h3>`;

    questions.forEach((question, idx) => {
      const id = `${dimension}-${idx}`;
      const row = document.createElement('div');
      row.className = 'likert-row';
      row.innerHTML = `
        <span>${question}</span>
        <select required name="${id}">
          <option value="">Seleccionar</option>
          <option value="1">1 - Nunca</option>
          <option value="2">2 - Casi nunca</option>
          <option value="3">3 - A veces</option>
          <option value="4">4 - Casi siempre</option>
          <option value="5">5 - Siempre</option>
        </select>`;
      wrapper.appendChild(row);
    });

    likertContainer.appendChild(wrapper);
  });
}

function interpretation(avg) {
  if (avg <= 2.4) return { text: 'Bajo desarrollo', cls: 'low' };
  if (avg <= 3.4) return { text: 'Desarrollo medio', cls: 'mid' };
  return { text: 'Desarrollo adecuado', cls: 'high' };
}

function stdDev(values) {
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const variance = values.reduce((sum, v) => sum + (v - mean) ** 2, 0) / values.length;
  return Math.sqrt(variance);
}

function computeLikertResult(formData) {
  const profile = questionBank[profileEl.value];
  const byDimension = {};

  Object.entries(profile).forEach(([dimension, questions]) => {
    const vals = questions.map((_, idx) => Number(formData.get(`${dimension}-${idx}`)));
    byDimension[dimension] = {
      avg: Number((vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(2)),
      std: Number(stdDev(vals).toFixed(2)),
      values: vals,
    };
  });

  const averages = Object.values(byDimension).map((d) => d.avg);
  const generalAvg = Number((averages.reduce((a, b) => a + b, 0) / averages.length).toFixed(2));
  return { byDimension, generalAvg, level: interpretation(generalAvg) };
}

function normalize(text) {
  return text.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

function analyzeOpenAnswers(answers) {
  const text = normalize(answers.join(' '));
  const tokenCounts = {};
  text.split(/[^a-zA-Záéíóúñ]+/).filter(Boolean).forEach((w) => {
    tokenCounts[w] = (tokenCounts[w] || 0) + 1;
  });

  const emotionHits = {
    primarias: emotionKeywords.primarias.filter((k) => text.includes(normalize(k))),
    secundarias: emotionKeywords.secundarias.filter((k) => text.includes(normalize(k))),
  };

  const classified = {};
  Object.entries(semanticDimensionKeywords).forEach(([dimension, keywords]) => {
    const matches = keywords.filter((k) => text.includes(normalize(k)));
    classified[dimension] = matches.length;
  });

  const dominantDimension = Object.entries(classified).sort((a, b) => b[1] - a[1])[0]?.[0] || dimensions[0];
  const commonWords = Object.entries(tokenCounts).sort((a, b) => b[1] - a[1]).slice(0, 8);

  const synthesis = `Se observan referencias predominantes a ${dominantDimension}. Emociones detectadas: primarias (${emotionHits.primarias.join(', ') || 'sin coincidencias'}) y secundarias (${emotionHits.secundarias.join(', ') || 'sin coincidencias'}).`;

  return { tokenCounts: commonWords, emotionHits, classified, dominantDimension, synthesis };
}

function recommendations(byDimension) {
  const recs = [];
  if (byDimension['Regulación emocional'].avg < 3.0) {
    recs.push('Entrenamiento en identificación emocional, técnicas de respiración diafragmática, registro emocional y talleres de mediación escolar.');
  }
  if (byDimension['Competencia social'].avg < 3.0) {
    recs.push('Programa de habilidades sociales: role playing, escucha activa, resolución pacífica de conflictos y mediación guiada.');
  }
  if (byDimension['Conciencia emocional'].avg < 3.0) {
    recs.push('Rutina semanal de vocabulario emocional y autoobservación para fortalecer la conciencia emocional.');
  }
  if (!recs.length) recs.push('Mantener prácticas socioemocionales actuales e incorporar tutorías entre pares para consolidar fortalezas.');
  return recs;
}

function longitudinalInsight(record) {
  const previous = state.records
    .filter((r) => r.name === record.name && r.course === record.course)
    .sort((a, b) => a.date.localeCompare(b.date));

  if (!previous.length) return 'Primera medición registrada.';
  const prior = previous[previous.length - 1];
  const delta = Number((record.generalAvg - prior.generalAvg).toFixed(2));
  const trend = delta > 0 ? 'mejora' : delta < 0 ? 'descenso' : 'estabilidad';
  return `Comparación longitudinal (medición previa): ${trend} de ${delta} puntos.`;
}

function renderIndividual(record) {
  const interpret = interpretation(record.generalAvg);
  const wellbeingIndex = Math.round(record.generalAvg * 20);
  const critical = record.generalAvg <= 2.4 ? 'Sí' : 'No';

  const cards = Object.entries(record.byDimension)
    .map(([dimension, data]) => `<div><strong>${dimension}</strong><br>Prom: ${data.avg} · DE: ${data.std}</div>`)
    .join('');

  summaryEl.innerHTML = `
    <div class="kpi">
      <div><strong>Estudiante:</strong><br>${record.name}</div>
      <div><strong>Curso:</strong><br>${record.course}</div>
      <div><strong>Promedio general:</strong><br>${record.generalAvg}</div>
      <div><strong>Nivel:</strong><br><span class="badge ${interpret.cls}">${interpret.text}</span></div>
      <div><strong>Índice bienestar:</strong><br>${wellbeingIndex}/100</div>
      <div><strong>Alerta crítica:</strong><br>${critical}</div>
    </div>
    <h3>Dimensiones</h3>
    <div class="kpi">${cards}</div>
    <p><strong>Síntesis cualitativa:</strong> ${record.openAnalysis.synthesis}</p>
    <p><strong>Proyección automática:</strong> ${record.recommendations.join(' ')}</p>
    <p><strong>Longitudinal:</strong> ${record.longitudinal}</p>
  `;

  drawCharts(record);
  ['download-individual-pdf', 'download-radar', 'download-bars'].forEach((id) => (document.getElementById(id).disabled = false));
}

function drawCharts(record) {
  const labels = Object.keys(record.byDimension);
  const values = labels.map((label) => record.byDimension[label].avg);

  state.charts.bar?.destroy();
  state.charts.radar?.destroy();

  state.charts.bar = new Chart(document.getElementById('bar-chart'), {
    type: 'bar',
    data: { labels, datasets: [{ label: 'Promedio por dimensión', data: values, backgroundColor: '#3b82f6' }] },
    options: { scales: { y: { min: 0, max: 5 } } },
  });

  state.charts.radar = new Chart(document.getElementById('radar-chart'), {
    type: 'radar',
    data: { labels, datasets: [{ label: 'Perfil individual', data: values, backgroundColor: 'rgba(16,185,129,0.2)', borderColor: '#10b981' }] },
    options: { scales: { r: { min: 0, max: 5 } } },
  });
}

function saveRecord(record) {
  state.records.push(record);
  localStorage.setItem('seRecords', JSON.stringify(state.records));
}

function getFilteredRecords() {
  const fc = document.getElementById('filter-course').value;
  const from = document.getElementById('filter-from').value;
  const to = document.getElementById('filter-to').value;
  const level = document.getElementById('filter-level').value;

  return state.records.filter((r) => {
    const byCourse = fc === 'all' || r.course === fc;
    const byDate = (!from || r.date >= from) && (!to || r.date <= to);
    const byLevel = level === 'all' || r.levelKey === level;
    return byCourse && byDate && byLevel;
  });
}

function renderAdmin() {
  const data = getFilteredRecords();
  if (!data.length) {
    groupSummaryEl.innerHTML = '<p>Sin registros para los filtros seleccionados.</p>';
    tableBody.innerHTML = '';
    return;
  }

  const dimAgg = Object.fromEntries(dimensions.map((d) => [d, []]));
  data.forEach((r) => dimensions.forEach((d) => dimAgg[d].push(r.byDimension[d].avg)));

  const dimAvg = Object.fromEntries(Object.entries(dimAgg).map(([k, v]) => [k, Number((v.reduce((a, b) => a + b, 0) / v.length).toFixed(2))]));
  const generalAvg = Number((data.reduce((a, r) => a + r.generalAvg, 0) / data.length).toFixed(2));
  const weakest = Object.entries(dimAvg).sort((a, b) => a[1] - b[1])[0];

  groupSummaryEl.innerHTML = `
    <div class="kpi">
      <div><strong>Evaluaciones:</strong><br>${data.length}</div>
      <div><strong>Promedio grupal:</strong><br>${generalAvg}</div>
      <div><strong>Dimensión más descendida:</strong><br>${weakest[0]} (${weakest[1]})</div>
      <div><strong>Recomendación de intervención:</strong><br>Plan focalizado en ${weakest[0]} con actividades socioemocionales semanales.</div>
    </div>`;

  tableBody.innerHTML = data.map((r) => {
    const alert = r.generalAvg <= 2.4 ? '⚠️ Crítico' : 'OK';
    const name = r.anonymize ? `Est-${r.id.slice(-4)}` : r.name;
    return `<tr><td>${r.date}</td><td>${name}</td><td>${r.course}</td><td>${r.generalAvg}</td><td>${r.level.text}</td><td>${alert}</td></tr>`;
  }).join('');
}

function csvFromRecords(records) {
  const headers = ['id', 'fecha', 'nombre', 'curso', 'promedio_general', ...dimensions];
  const rows = records.map((r) => [r.id, r.date, r.name, r.course, r.generalAvg, ...dimensions.map((d) => r.byDimension[d].avg)]);
  return [headers, ...rows].map((row) => row.join(',')).join('\n');
}

function downloadBlob(content, filename, type) {
  const blob = new Blob([content], { type });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

function makeIndividualPdf(record) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.setFontSize(14);
  doc.text('Reporte Individual Socioemocional', 14, 15);
  doc.setFontSize(10);
  doc.text(`Estudiante: ${record.name} | Curso: ${record.course} | Fecha: ${record.date}`, 14, 24);
  doc.text(`Promedio general: ${record.generalAvg} (${record.level.text})`, 14, 32);
  let y = 40;
  dimensions.forEach((d) => {
    doc.text(`${d}: ${record.byDimension[d].avg} (DE ${record.byDimension[d].std})`, 14, y);
    y += 7;
  });
  doc.text(`Síntesis cualitativa: ${record.openAnalysis.synthesis}`.slice(0, 180), 14, y + 4);
  doc.text(`Proyección: ${record.recommendations.join(' ')}`.slice(0, 180), 14, y + 12);
  doc.save(`reporte_individual_${record.id}.pdf`);
}

function makeGroupPdf(records) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.setFontSize(14);
  doc.text('Reporte Grupal Socioemocional', 14, 15);
  doc.setFontSize(10);
  doc.text(`Total evaluaciones: ${records.length}`, 14, 24);
  const avg = Number((records.reduce((a, r) => a + r.generalAvg, 0) / records.length).toFixed(2));
  doc.text(`Promedio general grupal: ${avg}`, 14, 31);
  const dimMeans = dimensions.map((d) => Number((records.reduce((a, r) => a + r.byDimension[d].avg, 0) / records.length).toFixed(2)));
  let y = 40;
  dimensions.forEach((d, i) => {
    doc.text(`${d}: ${dimMeans[i]}`, 14, y);
    y += 7;
  });
  doc.text('Recomendación: focalizar intervención en dimensión de menor promedio y seguimiento mensual.', 14, y + 8);
  doc.save(`reporte_grupal_${new Date().toISOString().slice(0, 10)}.pdf`);
}

courseEl.addEventListener('change', () => {
  updateLanguageByCourse();
  renderLikert();
});

['filter-course', 'filter-from', 'filter-to', 'filter-level'].forEach((id) => {
  document.getElementById(id).addEventListener('change', renderAdmin);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  const likert = computeLikertResult(fd);
  const openAnswers = [fd.get('open-1') || document.getElementById('open-1').value, fd.get('open-2') || document.getElementById('open-2').value, fd.get('open-3') || document.getElementById('open-3').value];
  const record = {
    id: crypto.randomUUID(),
    name: document.getElementById('name').value.trim(),
    age: Number(document.getElementById('age').value),
    course: courseEl.value,
    levelKey: getLevelByCourse(courseEl.value),
    date: dateEl.value,
    anonymize: document.getElementById('anonymize').checked,
    byDimension: likert.byDimension,
    generalAvg: likert.generalAvg,
    level: likert.level,
    openAnswers,
    openAnalysis: analyzeOpenAnswers(openAnswers),
  };

  record.recommendations = recommendations(record.byDimension);
  record.longitudinal = longitudinalInsight(record);

  saveRecord(record);
  state.currentRecord = record;
  renderIndividual(record);
  renderAdmin();
  form.reset();
  dateEl.value = new Date().toISOString().slice(0, 10);
  updateLanguageByCourse();
  renderLikert();
});

document.getElementById('download-individual-pdf').addEventListener('click', () => {
  if (state.currentRecord) makeIndividualPdf(state.currentRecord);
});

document.getElementById('download-group-pdf').addEventListener('click', () => {
  const data = getFilteredRecords();
  if (data.length) makeGroupPdf(data);
});

document.getElementById('export-csv').addEventListener('click', () => {
  const data = getFilteredRecords();
  if (!data.length) return;
  downloadBlob(csvFromRecords(data), 'evaluacion_socioemocional.csv', 'text/csv;charset=utf-8;');
});

document.getElementById('export-xlsx').addEventListener('click', () => {
  const data = getFilteredRecords();
  if (!data.length) return;
  const rows = data.map((r) => ({
    ID: r.id,
    Fecha: r.date,
    Nombre: r.name,
    Edad: r.age,
    Curso: r.course,
    PromedioGeneral: r.generalAvg,
    Nivel: r.level.text,
    ...Object.fromEntries(dimensions.map((d) => [d, r.byDimension[d].avg])),
  }));
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(rows);
  XLSX.utils.book_append_sheet(wb, ws, 'Resultados');
  XLSX.writeFile(wb, 'evaluacion_socioemocional.xlsx');
});

document.getElementById('download-radar').addEventListener('click', () => {
  const url = state.charts.radar?.toBase64Image();
  if (!url) return;
  const a = document.createElement('a');
  a.href = url;
  a.download = 'radar_individual.png';
  a.click();
});

document.getElementById('download-bars').addEventListener('click', () => {
  const url = state.charts.bar?.toBase64Image();
  if (!url) return;
  const a = document.createElement('a');
  a.href = url;
  a.download = 'barras_dimensiones.png';
  a.click();
});

boot();
