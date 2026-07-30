export const fases = [
  {
    numero: '01',
    nombre: 'Planificación',
    titulo: 'Elaboración del plan y validación',
    detalle: 'Diseño del plan de trabajo, elaboración de instrumentos (rúbricas, listas de cotejo) y validación por juicio de expertos. Coordinación con la Municipalidad Provincial de Huánuco a través del Área de Centros Poblados y Juntas Vecinales.',
  },
  {
    numero: '02',
    nombre: 'Convocatoria y selección',
    titulo: 'Convocatoria a líderes vecinales',
    detalle: 'Convocatoria a líderes y miembros de Juntas Vecinales, y selección de los 15 participantes por muestreo intencional. Aplicación del pretest mediante rúbricas.',
  },
  {
    numero: '03',
    nombre: 'Producción colaborativa',
    titulo: 'Grabación y edición del álbum',
    detalle: 'Sesiones de producción colaborativa: grabación y edición del álbum Tokosh de Cajón Peruano, con acompañamiento de especialistas en percusión y artistas freestyle. Evaluación intermedia mediante entrevistas y grupos focales.',
  },
  {
    numero: '04',
    nombre: 'Evaluación final',
    titulo: 'Postest y análisis de datos',
    detalle: 'Aplicación del postest y grupos focales finales. Mezcla final de las 24 pistas del álbum. Análisis de datos mixtos y validación por juicio de expertos.',
  },
  {
    numero: '05',
    nombre: 'Difusión y cierre',
    titulo: 'Publicación y entrega de resultados',
    detalle: 'Elaboración y publicación del artículo científico en revista Scopus, y publicación del álbum Tokosh de Cajón Peruano. Presentación del informe final y entrega de resultados a la Municipalidad Provincial de Huánuco.',
  },
]

export const generos = [
  {
    letra: 'A',
    nombre: 'Afroperuano',
    pistas: [
      'El Latido de Mi Tierra (Festejo)',
      'Panalivio en La Mañana (Panalivio)',
      'Landó (Cardo o Ceniza)',
      'Festejo (Guaranguito)',
      'Panalivio (Tamalito)',
      'Zamacueca (Negro tiene que ser)',
      'María Landó (Susana Baca)',
      'Raíces de Landó (Landó)',
      'Zamacueca y Tondero: Fuego y Tradición',
      'Tondero (La perla del Chira)',
    ],
  },
  {
    letra: 'B',
    nombre: 'Criollo',
    pistas: [
      'Suspiros de Vals (Vals peruano)',
      'Polka Don Pedrito (Polca)',
      'Que viva el Perú señores (Eva Ayllón)',
      'Vals melódico (Llora guitarra)',
      'Vals medio Jaranero (Fina estampa)',
      'Polca (Perú campeón)',
      'Marinera de Lima (Soy la redondez del mundo)',
      'Marinera norteña (Amigos por siempre)',
      'Vals (Mal paso - Kipus)',
    ],
  },
  {
    letra: 'C',
    nombre: 'Sierra',
    pistas: ['Huayno (Airampito)', 'Carnaval ayacuchano', 'A la vida le he pedido (huayno huanuqueño)'],
  },
  {
    letra: 'D',
    nombre: 'Selva',
    pistas: ['Salta salta Yanacita (selva)', 'San Juanito'],
  },
]

export const impacto = [
  { titulo: 'COMUNICATIVA', detalle: 'Expresión oral, trabajo en equipo y resolución de conflictos.' },
  { titulo: 'EMOCIONAL', detalle: 'Autoconocimiento, manejo del estrés, empatía y resiliencia.' },
  { titulo: 'TECNOLOGICAS', detalle: 'Grabación multipista, edición digital y uso de estudio de grabación (DAW).' },
  { titulo: 'COLABORATIVA', detalle: 'Roles distribuidos entre los participantes y cohesión del tejido comunitario.' },
]

export const facilitadores = [
  { titulo: 'Especialistas en percusión', detalle: 'Con experiencia en la ejecución tradicional del Cajón Peruano.' },
  { titulo: 'Artistas Freestyle de Huánuco', detalle: 'De la Asociación de Artistas Freestyle, aportando las secciones de improvisación rítmica.' },
  { titulo: 'Equipo de la Municipalidad', detalle: 'Personal del Área de Centros Poblados y Juntas Vecinales, facilitando la convocatoria y los espacios.' },
]

export const aliados = [
  { nombre: 'Universidad Nacional Daniel Alomía Robles (UNDAR)', rol: 'Infraestructura, préstamo de equipos de grabación y acceso al laboratorio de la Vicepresidencia de Investigación.' },
  { nombre: 'Municipalidad Provincial de Huánuco (MPH)', rol: 'Facilidades para la convocatoria y acceso a los espacios de las Juntas Vecinales, a través del Área de Centros Poblados y Juntas Vecinales.' },
  { nombre: 'Asociación de Artistas Freestyle', rol: 'Artistas freestyle de Huánuco que aportan las secciones de improvisación rítmica del álbum.' },
]

export const equipo = [
  { nombre: 'Dr. Aland Bravo Vecorena', rol: 'Investigador principal · Facultad de Educación Musical y Artes' },
  { nombre: 'Mgtr. Jorge Gadi Marcellini Morales', rol: 'Coinvestigador · Docente Auxiliar' },
  { nombre: 'Mgtr. Fabio Rodríguez Meléndez', rol: 'Colaborador del proyecto' },
]

export function initials(name) {
  return name
    .replace(/^(Dr\.|Dra\.|Mgtr\.|Lic\.)\s*/, '')
    .split(' ')
    .filter((w) => w[0] === w[0].toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
}
