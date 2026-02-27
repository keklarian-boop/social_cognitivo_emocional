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
const courseComparisonEl = document.getElementById('course-comparison');
const tableBody = document.querySelector('#records-table tbody');
const templateDialog = document.getElementById('template-dialog');
const templateStudentEl = document.getElementById('template-student');
const templateCheckEl = document.getElementById('template-check');
const templateUploadEl = document.getElementById('template-upload');

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

function getProfileKeyByCourse(course) {
  const level = getLevelByCourse(course);
  return level === 'basica-inicial' ? 'simple' : level === 'basica-media' ? 'intermedio' : 'reflexivo';
}

function updateLanguageByCourse() {
  profileEl.value = getProfileKeyByCourse(courseEl.value || courses[0]);
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
    recs.push('Plan de 4 semanas en aula: (1) rutina diaria de semáforo emocional al inicio de clase, (2) práctica guiada de respiración 4-4-6 por 3 minutos, (3) registro emocional breve al cierre de jornada, y (4) derivación a convivencia escolar si persiste desregulación intensa.');
  }
  if (byDimension['Competencia social'].avg < 3.0) {
    recs.push('Intervención docente estructurada: dos actividades semanales de role-playing, protocolo de resolución de conflictos en 5 pasos (escuchar, validar, acordar, reparar, seguimiento) y mediación guiada con pauta observable.');
  }
  if (byDimension['Conciencia emocional'].avg < 3.0) {
    recs.push('Fortalecer vocabulario emocional con tarjetas de emociones 3 veces por semana, identificación de detonantes y conversación reflexiva docente-estudiante de 5 minutos.');
  }
  if (byDimension['Autonomía emocional'].avg < 3.0) {
    recs.push('Acompañamiento en autonomía: metas semanales SMART, autoevaluación de logro y retroalimentación positiva específica por parte de docentes y familia.');
  }
  if (byDimension['Vida y bienestar'].avg < 3.0) {
    recs.push('Plan de bienestar integral: higiene del sueño, pausa activa diaria, organización de tiempos de estudio/descanso y seguimiento quincenal con apoderado.');
  }
  if (!recs.length) recs.push('Mantener prácticas actuales y establecer monitoreo mensual para sostener el desarrollo socioemocional.');
  return recs;
}

function familyGuidanceDetailed(record) {
  const guidance = [];
  if (record.byDimension['Regulación emocional'].avg < 3) {
    guidance.push('Aplicar rutina familiar diaria de 10 minutos: nombrar emoción del día, validar sin juicio, practicar respiración conjunta (inhalar 4, sostener 4, exhalar 6) y acordar una acción de autocuidado.');
  }
  if (record.byDimension['Competencia social'].avg < 3) {
    guidance.push('Realizar actividades cooperativas en casa 2 veces por semana (cocinar, ordenar, juegos de equipo), reforzando turnos de palabra, escucha activa y lenguaje respetuoso.');
  }
  if (record.byDimension['Conciencia emocional'].avg < 3) {
    guidance.push('Usar bitácora emocional simple: “qué sentí, por qué lo sentí, qué hice, qué puedo mejorar”, revisándola en familia al menos 3 días por semana.');
  }
  if (record.byDimension['Vida y bienestar'].avg < 3) {
    guidance.push('Asegurar hábitos base: horario estable de sueño, disminución de pantallas 60 minutos antes de dormir y actividad física de 20-30 minutos diarios.');
  }
  if (!guidance.length) guidance.push('Mantener espacios de conversación emocional semanal y reforzar conductas prosociales observadas.');
  return guidance;
}

function teacherPreventiveActions(record) {
  const actions = [];
  if (record.byDimension['Regulación emocional'].avg < 3) {
    actions.push('Docente: instalar rutina de apertura socioemocional (2-3 minutos), enseñar técnica de pausa-respiro-pienso-actúo y registrar incidentes para seguimiento semanal.');
  }
  if (record.byDimension['Competencia social'].avg < 3) {
    actions.push('Docente: implementar acuerdos de convivencia co-construidos, círculos restaurativos quincenales y mediación estructurada con evidencia de cumplimiento.');
  }
  if (record.byDimension['Autonomía emocional'].avg < 3) {
    actions.push('Docente: diseñar tareas graduadas con criterios claros y metas de progreso individual, reforzando autoeficacia y autonomía.');
  }
  if (record.byDimension['Vida y bienestar'].avg < 3) {
    actions.push('Docente/Convivencia: activar coordinación con familia para plan de bienestar y revisar factores de riesgo académicos y psicosociales.');
  }
  if (!actions.length) actions.push('Docente: mantener monitoreo preventivo mensual y reforzar prácticas socioemocionales eficaces del curso.');
  return actions;
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

function intraSubjectComparison(record) {
  const previous = state.records
    .filter((r) => r.name === record.name && r.course === record.course)
    .sort((a, b) => a.date.localeCompare(b.date));

  if (!previous.length) return { text: 'Sin medición previa para comparación intra sujeto.', deltas: null };
  const prior = previous[previous.length - 1];
  const deltas = Object.fromEntries(dimensions.map((d) => [d, Number((record.byDimension[d].avg - prior.byDimension[d].avg).toFixed(2))]));
  const text = dimensions.map((d) => `${d}: ${deltas[d] >= 0 ? '+' : ''}${deltas[d]}`).join(' · ');
  return { text: `Cambios por dimensión vs medición previa: ${text}.`, deltas };
}

function courseBenchmark(record) {
  const peers = state.records.filter((r) => r.course === record.course);
  if (!peers.length) return { text: 'Sin histórico del curso para comparar.', gap: null };
  const courseAvg = Number((peers.reduce((sum, r) => sum + r.generalAvg, 0) / peers.length).toFixed(2));
  const gap = Number((record.generalAvg - courseAvg).toFixed(2));
  const dir = gap > 0 ? 'sobre' : gap < 0 ? 'bajo' : 'en';
  return { text: `Comparación por curso: ${Math.abs(gap)} puntos ${dir} del promedio del ${record.course} (${courseAvg}).`, gap, courseAvg };
}

function healthReferral(record) {
  const criticalDimensions = Object.entries(record.byDimension).filter(([, data]) => data.avg <= 2.4).map(([d]) => d);
  if (record.generalAvg > 2.4 && !criticalDimensions.length) return null;
  return {
    needed: true,
    reason: criticalDimensions.length
      ? `Puntajes críticos en: ${criticalDimensions.join(', ')}.`
      : 'Promedio general en rango crítico.',
    plan: 'Derivación sugerida a dupla psicosocial escolar y coordinación con red de salud (APS/CESFAM o salud mental infanto-juvenil), con contacto a apoderado y plan de seguimiento de 4 a 6 semanas.',
  };
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
    <p><strong>Comparación intra sujeto:</strong> ${record.intraSubject.text}</p>
    <p><strong>Comparación por curso:</strong> ${record.courseBenchmark.text}</p>
    <p><strong>Derivación a salud:</strong> ${record.healthReferral ? `${record.healthReferral.reason} ${record.healthReferral.plan}` : 'No requerida actualmente.'}</p>
    <p><strong>Orientaciones familiares:</strong> ${familyGuidanceDetailed(record).join(' ')}</p>
    <p><strong>Acciones preventivas para docentes:</strong> ${teacherPreventiveActions(record).join(' ')}</p>
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

function deleteRecord(recordId) {
  state.records = state.records.filter((r) => r.id !== recordId);
  if (state.currentRecord?.id === recordId) {
    state.currentRecord = null;
    summaryEl.innerHTML = '<p>Selecciona o registra una evaluación para ver resultados individuales.</p>';
    ['download-individual-pdf', 'download-radar', 'download-bars'].forEach((id) => (document.getElementById(id).disabled = true));
    state.charts.bar?.destroy();
    state.charts.radar?.destroy();
    state.charts.bar = null;
    state.charts.radar = null;
  }
  localStorage.setItem('seRecords', JSON.stringify(state.records));
  renderAdmin();
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


function buildExpectedChecklist(profileKey) {
  const profile = questionBank[profileKey] || questionBank.simple;
  const checklist = [];
  Object.entries(profile).forEach(([dimension, questions]) => {
    questions.forEach((question, idx) => {
      checklist.push({ key: `${dimension}-${idx}`, question });
    });
  });
  return checklist;
}

function getRecordTemplate(record) {
  const profileKey = record.profileKey || getProfileKeyByCourse(record.course);
  const expected = buildExpectedChecklist(profileKey);
  const likert = record.responseTemplate?.likert || {};
  const openAnswers = record.openAnswers || [];
  const answeredLikert = expected.filter((item) => Number(likert[item.key]) >= 1 && Number(likert[item.key]) <= 5).length;
  const answeredOpen = openAnswers.filter((a) => String(a || '').trim().length > 0).length;
  const total = expected.length + 3;
  const answered = answeredLikert + answeredOpen;
  return {
    profileKey,
    expected,
    answeredLikert,
    answeredOpen,
    total,
    answered,
    percent: Math.round((answered / total) * 100),
    missingLikert: expected.filter((item) => !(Number(likert[item.key]) >= 1 && Number(likert[item.key]) <= 5)),
    missingOpen: ['open-1', 'open-2', 'open-3'].filter((_, i) => !String(openAnswers[i] || '').trim()),
  };
}

function renderTemplateVerification(record, customTemplate = null) {
  const base = getRecordTemplate(record);
  let report = base;

  if (customTemplate) {
    const likert = customTemplate.likert || {};
    const openAnswers = customTemplate.openAnswers || [customTemplate.open1 || '', customTemplate.open2 || '', customTemplate.open3 || ''];
    const tempRecord = { ...record, responseTemplate: { likert }, openAnswers };
    report = getRecordTemplate(tempRecord);
  }

  const missingLikertRows = report.missingLikert.map((m) => `<li class="check-miss">Falta: ${m.question}</li>`).join('') || '<li class="check-ok">Todas las respuestas Likert están completas.</li>';
  const missingOpenRows = report.missingOpen.map((o) => `<li class="check-miss">Falta respuesta en ${o}</li>`).join('') || '<li class="check-ok">Las preguntas abiertas están completas.</li>';

  templateCheckEl.innerHTML = `
    <p><strong>Completitud:</strong> ${report.answered}/${report.total} (${report.percent}%)</p>
    <h4>Likert</h4>
    <ul>${missingLikertRows}</ul>
    <h4>Abiertas</h4>
    <ul>${missingOpenRows}</ul>
  `;
}

function familySuggestions(record) {
  return familyGuidanceDetailed(record);
}

async function createRecordChartImage(record, type) {
  const canvas = document.createElement('canvas');
  canvas.width = 420;
  canvas.height = 280;
  canvas.style.position = 'fixed';
  canvas.style.left = '-9999px';
  document.body.appendChild(canvas);
  const labels = dimensions;
  const values = labels.map((d) => record.byDimension[d].avg);

  const chart = new Chart(canvas, {
    type,
    data: {
      labels,
      datasets: [{
        label: type === 'bar' ? 'Promedio por dimensión' : 'Perfil individual',
        data: values,
        backgroundColor: type === 'bar' ? '#3b82f6' : 'rgba(16,185,129,0.2)',
        borderColor: type === 'bar' ? '#2563eb' : '#10b981',
      }],
    },
    options: type === 'bar' ? { animation: false, scales: { y: { min: 0, max: 5 } } } : { animation: false, scales: { r: { min: 0, max: 5 } } },
  });

  await new Promise((resolve) => setTimeout(resolve, 120));
  const img = chart.toBase64Image();
  chart.destroy();
  canvas.remove();
  return img;
}

async function makeAllIndividualPdf(records) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  for (let i = 0; i < records.length; i += 1) {
    const record = records[i];
    if (i > 0) doc.addPage();

    doc.setFillColor(30, 64, 175);
    doc.rect(0, 0, 210, 18, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(13);
    doc.text(`Resultados individuales por curso - ${record.course}`, 14, 12);
    doc.setTextColor(0, 0, 0);

    doc.setFontSize(10);
    doc.text(`Estudiante: ${record.name}`, 14, 25);
    doc.text(`Fecha: ${record.date}`, 14, 31);
    doc.text(`Promedio general: ${record.generalAvg} (${record.level.text})`, 14, 37);

    let y = 45;
    dimensions.forEach((d) => {
      doc.text(`${d}: ${record.byDimension[d].avg}`, 14, y);
      y += 6;
    });

    const fam = familySuggestions(record).map((tip, idx) => `${idx + 1}. ${tip}`).join(' ');
    const teacher = teacherPreventiveActions(record).map((tip, idx) => `${idx + 1}. ${tip}`).join(' ');
    doc.text(doc.splitTextToSize(`Sugerencias para la familia: ${fam}`, 180), 14, y + 6);
    doc.text(doc.splitTextToSize(`Acciones preventivas para docentes: ${teacher}`, 180), 14, y + 28);

    const barImg = await createRecordChartImage(record, 'bar');
    const radarImg = await createRecordChartImage(record, 'radar');
    if (barImg) doc.addImage(barImg, 'PNG', 110, 20, 85, 55);
    if (radarImg) doc.addImage(radarImg, 'PNG', 110, 82, 85, 55);
  }

  doc.save(`resultados_individuales_${new Date().toISOString().slice(0, 10)}.pdf`);
}

function renderAdmin() {
  const data = getFilteredRecords();
  if (!data.length) {
    groupSummaryEl.innerHTML = '<p>Sin registros para los filtros seleccionados.</p>';
    courseComparisonEl.innerHTML = '';
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

  const byCourse = {};
  data.forEach((r) => {
    byCourse[r.course] = byCourse[r.course] || [];
    byCourse[r.course].push(r.generalAvg);
  });
  const courseRows = Object.entries(byCourse)
    .map(([course, vals]) => ({ course, avg: Number((vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(2)), n: vals.length }))
    .sort((a, b) => b.avg - a.avg);
  courseComparisonEl.innerHTML = `
    <h3>Comparación por cursos</h3>
    <table>
      <thead><tr><th>Curso</th><th>Promedio general</th><th>N</th></tr></thead>
      <tbody>${courseRows.map((r) => `<tr><td>${r.course}</td><td>${r.avg}</td><td>${r.n}</td></tr>`).join('')}</tbody>
    </table>`;

  tableBody.innerHTML = data.map((r) => {
    const alert = r.generalAvg <= 2.4 ? '⚠️ Crítico' : 'OK';
    const name = r.anonymize ? `Est-${r.id.slice(-4)}` : r.name;
    return `<tr><td>${r.date}</td><td>${name}</td><td>${r.course}</td><td>${r.generalAvg}</td><td>${r.level.text}</td><td>${alert}</td><td><button class="secondary verify-template" data-id="${r.id}">Verificar plantilla</button> <button class="secondary delete-record" data-id="${r.id}">Eliminar</button></td></tr>`;
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
  doc.setFillColor(36, 72, 168);
  doc.rect(0, 0, 210, 22, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(15);
  doc.text('Reporte Individual Socioemocional', 14, 14);
  doc.setTextColor(20, 20, 20);
  doc.setFontSize(10);
  doc.text(`Estudiante: ${record.name} | Curso: ${record.course} | Fecha: ${record.date}`, 14, 30);
  doc.text(`Promedio general: ${record.generalAvg} (${record.level.text})`, 14, 36);
  let y = 44;
  dimensions.forEach((d) => {
    doc.text(`${d}: ${record.byDimension[d].avg} (DE ${record.byDimension[d].std})`, 14, y);
    y += 7;
  });
  doc.text(doc.splitTextToSize(`Síntesis cualitativa: ${record.openAnalysis.synthesis}`, 180), 14, y + 4);
  doc.text(doc.splitTextToSize(`Proyección: ${record.recommendations.join(' ')}`, 180), 14, y + 16);
  doc.text(doc.splitTextToSize(`Comparación intra sujeto: ${record.intraSubject.text}`, 180), 14, y + 28);
  doc.text(doc.splitTextToSize(`Comparación por curso: ${record.courseBenchmark.text}`, 180), 14, y + 40);
  doc.text(doc.splitTextToSize(`Derivación de salud: ${record.healthReferral ? `${record.healthReferral.reason} ${record.healthReferral.plan}` : 'No requerida actualmente.'}`, 180), 14, y + 52);

  const radarImg = state.charts.radar?.toBase64Image();
  if (radarImg) doc.addImage(radarImg, 'PNG', 130, 18, 65, 65);
  doc.save(`reporte_individual_${record.id}.pdf`);
}

function makeGroupPdf(records) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, 210, 22, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(15);
  doc.text('Reporte Grupal Socioemocional', 14, 14);
  doc.setTextColor(20, 20, 20);
  doc.setFontSize(10);
  doc.text(`Total evaluaciones: ${records.length}`, 14, 30);
  const avg = Number((records.reduce((a, r) => a + r.generalAvg, 0) / records.length).toFixed(2));
  doc.text(`Promedio general grupal: ${avg}`, 14, 37);
  const dimMeans = dimensions.map((d) => Number((records.reduce((a, r) => a + r.byDimension[d].avg, 0) / records.length).toFixed(2)));
  let y = 46;
  dimensions.forEach((d, i) => {
    doc.text(`${d}: ${dimMeans[i]}`, 14, y);
    y += 7;
  });
  const byCourse = {};
  records.forEach((r) => {
    byCourse[r.course] = byCourse[r.course] || [];
    byCourse[r.course].push(r.generalAvg);
  });
  const courseLines = Object.entries(byCourse)
    .map(([course, vals]) => `${course}: ${Number((vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(2))} (n=${vals.length})`)
    .join(' · ');
  doc.text(doc.splitTextToSize(`Comparación por cursos: ${courseLines}`, 180), 14, y + 8);

  const criticalCases = records.filter((r) => r.generalAvg <= 2.4).length;
  doc.text(doc.splitTextToSize(`Casos críticos detectados: ${criticalCases}. Acción sugerida: activar protocolo de derivación a salud y seguimiento con dupla psicosocial.`, 180), 14, y + 22);

  const barImg = state.charts.bar?.toBase64Image();
  if (barImg) doc.addImage(barImg, 'PNG', 120, 20, 75, 55);
  doc.save(`reporte_grupal_${new Date().toISOString().slice(0, 10)}.pdf`);
}

async function makeCourseReportPdf(records) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const grouped = {};
  records.forEach((r) => {
    grouped[r.course] = grouped[r.course] || [];
    grouped[r.course].push(r);
  });

  const coursesInReport = Object.keys(grouped).sort();
  for (let i = 0; i < coursesInReport.length; i += 1) {
    const course = coursesInReport[i];
    const rows = grouped[course];
    if (i > 0) doc.addPage();

    doc.setFillColor(17, 24, 39);
    doc.rect(0, 0, 210, 20, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.text(`Reporte por curso para docentes: ${course}`, 14, 13);
    doc.setTextColor(15, 23, 42);

    const avgGeneral = Number((rows.reduce((a, r) => a + r.generalAvg, 0) / rows.length).toFixed(2));
    doc.setFontSize(10);
    doc.text(`Estudiantes evaluados: ${rows.length}`, 14, 30);
    doc.text(`Promedio general del curso: ${avgGeneral}`, 14, 36);

    let y = 44;
    dimensions.forEach((d) => {
      const mean = Number((rows.reduce((a, r) => a + r.byDimension[d].avg, 0) / rows.length).toFixed(2));
      doc.text(`${d}: ${mean}`, 14, y);
      y += 6;
    });

    const critical = rows.filter((r) => r.generalAvg <= 2.4).length;
    doc.text(`Casos críticos en curso: ${critical}`, 14, y + 2);

    const teacherActions = [];
    rows.forEach((r) => teacherPreventiveActions(r).forEach((a) => teacherActions.push(a)));
    const uniqueActions = [...new Set(teacherActions)].slice(0, 6);

    doc.text('Acciones preventivas sugeridas para docentes:', 14, y + 10);
    doc.text(doc.splitTextToSize(uniqueActions.map((a, idx) => `${idx + 1}) ${a}`).join(' '), 180), 14, y + 16);

    const familyLines = [];
    rows.forEach((r) => familyGuidanceDetailed(r).forEach((g) => familyLines.push(g)));
    const uniqueFamily = [...new Set(familyLines)].slice(0, 5);
    doc.text('Orientaciones para coordinación con familias:', 14, y + 54);
    doc.text(doc.splitTextToSize(uniqueFamily.map((a, idx) => `${idx + 1}) ${a}`).join(' '), 180), 14, y + 60);
  }

  doc.save(`reporte_docente_por_curso_${new Date().toISOString().slice(0, 10)}.pdf`);
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
  const profileKey = getProfileKeyByCourse(courseEl.value);
  const profileQuestions = questionBank[profileKey];
  const likertResponses = {};
  Object.entries(profileQuestions).forEach(([dimension, questions]) => {
    questions.forEach((_, idx) => {
      likertResponses[`${dimension}-${idx}`] = Number(fd.get(`${dimension}-${idx}`));
    });
  });

  const record = {
    id: crypto.randomUUID(),
    name: document.getElementById('name').value.trim(),
    age: Number(document.getElementById('age').value),
    course: courseEl.value,
    levelKey: getLevelByCourse(courseEl.value),
    profileKey,
    date: dateEl.value,
    anonymize: document.getElementById('anonymize').checked,
    byDimension: likert.byDimension,
    generalAvg: likert.generalAvg,
    level: likert.level,
    openAnswers,
    openAnalysis: analyzeOpenAnswers(openAnswers),
    responseTemplate: { likert: likertResponses },
  };

  record.recommendations = recommendations(record.byDimension);
  record.longitudinal = longitudinalInsight(record);
  record.intraSubject = intraSubjectComparison(record);
  record.courseBenchmark = courseBenchmark(record);
  record.healthReferral = healthReferral(record);

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

document.getElementById('download-course-report-pdf').addEventListener('click', async () => {
  const data = getFilteredRecords();
  if (!data.length) return;
  await makeCourseReportPdf(data);
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


document.getElementById('download-all-individual-pdf').addEventListener('click', async () => {
  const data = getFilteredRecords();
  if (!data.length) return;
  await makeAllIndividualPdf(data);
});

tableBody.addEventListener('click', (event) => {
  const verifyBtn = event.target.closest('.verify-template');
  if (verifyBtn) {
    const record = state.records.find((r) => r.id === verifyBtn.dataset.id);
    if (!record) return;
    state.currentTemplateRecord = record;
    templateStudentEl.textContent = `${record.name} · ${record.course} · ${record.date}`;
    templateUploadEl.value = '';
    renderTemplateVerification(record);
    templateDialog.showModal();
    return;
  }

  const deleteBtn = event.target.closest('.delete-record');
  if (deleteBtn) {
    const record = state.records.find((r) => r.id === deleteBtn.dataset.id);
    if (!record) return;
    const ok = window.confirm(`¿Eliminar la encuesta de ${record.name} (${record.course})? Esta acción no se puede deshacer.`);
    if (ok) deleteRecord(record.id);
  }
});

document.getElementById('close-template-dialog').addEventListener('click', () => {
  templateDialog.close();
});

templateUploadEl.addEventListener('change', async (event) => {
  const file = event.target.files?.[0];
  if (!file || !state.currentTemplateRecord) return;
  try {
    const raw = await file.text();
    const parsed = JSON.parse(raw);
    renderTemplateVerification(state.currentTemplateRecord, parsed);
  } catch (error) {
    templateCheckEl.innerHTML = '<p class="check-miss">No se pudo leer la plantilla. Use un archivo JSON válido.</p>';
  }
});

boot();
