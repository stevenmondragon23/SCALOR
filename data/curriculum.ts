export type Course = {
  code: string;
  name: string;
  content: string;
  product: string;
};

export type Level = {
  id: string;
  name: string;
  etapa: string;
  proposito: string;
  resultado: string;
  cantidad: number;
  enfoque: string;
  certificado: string;
  courses: Course[];
};

export const levels: Level[] = [
  {
    id: "punto-cero",
    name: "Punto Cero",
    etapa: "Idea e intención emprendedora",
    proposito: "Impulsar ideas con criterio",
    resultado: "Propuesta clara, validable y administrable",
    cantidad: 10,
    enfoque:
      "Idea, oportunidad, propuesta de valor, modelo inicial y lanzamiento",
    certificado: "Emprendimiento con Criterio",
    courses: [
      {
        code: "0.1",
        name: "Introducción a SCALOR: La Ciencia y el Arte de Administrar",
        content: "Filosofía, método y ruta de aprendizaje.",
        product: "Mapa personal de aprendizaje empresarial",
      },
      {
        code: "0.2",
        name: "Mentalidad emprendedora con criterio",
        content:
          "Diferencia entre idea, negocio y empresa; pasión, sistema y disciplina.",
        product: "Diagnóstico personal del emprendedor",
      },
      {
        code: "0.3",
        name: "Identificación de oportunidades",
        content: "Problemas, necesidades, deseos, mercado y cliente objetivo.",
        product: "Ficha de oportunidad de negocio",
      },
      {
        code: "0.4",
        name: "Propuesta de valor",
        content: "Cliente, problema, solución, beneficio y diferenciación.",
        product: "Propuesta de valor SCALOR",
      },
      {
        code: "0.5",
        name: "Modelo de negocio inicial",
        content:
          "Fuentes de ingreso, recursos, actividades, canales y costos.",
        product: "Modelo de negocio básico",
      },
      {
        code: "0.6",
        name: "Costos, precios y ganancia desde cero",
        content: "Ingreso, costo, gasto, utilidad, margen y precio mínimo.",
        product: "Plantilla simple de costos y precios",
      },
      {
        code: "0.7",
        name: "Contabilidad para empezar",
        content:
          "Registro de ingresos y egresos, caja diaria, activos, deudas y ganancia real.",
        product: "Registro financiero inicial",
      },
      {
        code: "0.8",
        name: "Validación de la idea",
        content:
          "Hipótesis, producto mínimo viable, prueba con clientes y feedback.",
        product: "Plan de validación de 15 días",
      },
      {
        code: "0.9",
        name: "Marketing inicial y primeras ventas",
        content:
          "Oferta, mensaje de venta, canales, confianza y seguimiento.",
        product: "Guion de venta y plan de comunicación",
      },
      {
        code: "0.10",
        name: "Plan de lanzamiento",
        content: "Objetivos, acciones, recursos, indicadores y revisión.",
        product: "Plan de lanzamiento Punto Cero",
      },
    ],
  },
  {
    id: "basico",
    name: "Básico",
    etapa: "Emprendimiento inicial",
    proposito: "Entender cómo funciona un negocio",
    resultado: "Negocio ordenado y diagnosticado",
    cantidad: 12,
    enfoque: "Fundamentos del emprendimiento y gestión básica",
    certificado: "Fundamentos de Administración para Emprendedores",
    courses: [
      {
        code: "1.1",
        name: "Fundamentos de administración",
        content:
          "Organización, planeación, dirección, control, recursos y objetivos.",
        product: "Mapa administrativo del emprendimiento",
      },
      {
        code: "1.2",
        name: "Contabilidad financiera básica",
        content:
          "Activo, pasivo, patrimonio, ingresos, costos, gastos y estados financieros.",
        product: "Estados financieros simples",
      },
      {
        code: "1.3",
        name: "Costos y presupuestos",
        content:
          "Costos fijos, variables, costo unitario, punto de equilibrio y presupuesto.",
        product: "Estructura de costos y punto de equilibrio",
      },
      {
        code: "1.4",
        name: "Economía para emprendedores",
        content: "Oferta, demanda, valor, precio, escasez, competencia e incentivos.",
        product: "Análisis económico básico",
      },
      {
        code: "1.5",
        name: "Finanzas para no financieros",
        content: "Rentabilidad, liquidez, flujo de caja, deuda y capital de trabajo.",
        product: "Tablero financiero básico",
      },
      {
        code: "1.6",
        name: "Marketing y comportamiento del cliente",
        content: "Segmentación, posicionamiento, marca, canales y confianza.",
        product: "Plan de marketing básico",
      },
      {
        code: "1.7",
        name: "Ventas y gestión comercial",
        content: "Prospección, conversión, seguimiento, objeciones e indicadores.",
        product: "Proceso comercial básico",
      },
      {
        code: "1.8",
        name: "Procesos y operaciones básicas",
        content: "Flujos de trabajo, tareas, cuellos de botella y estandarización.",
        product: "Mapa de procesos",
      },
      {
        code: "1.9",
        name: "Liderazgo y comunicación inicial",
        content:
          "Autoliderazgo, comunicación con clientes y colaboradores, cultura inicial.",
        product: "Plan de liderazgo personal",
      },
      {
        code: "1.10",
        name: "Herramientas digitales para administrar",
        content:
          "Hojas de cálculo, registros, tableros, calendarios y organización documental.",
        product: "Sistema digital básico",
      },
      {
        code: "1.11",
        name: "Entorno legal y tributario básico",
        content:
          "Formalización, comprobantes, impuestos generales y relación con contador.",
        product: "Checklist legal y tributario",
      },
      {
        code: "1.12",
        name: "Proyecto integrador básico",
        content:
          "Diagnóstico, lectura financiera, procesos, plan comercial y mejora.",
        product: "Diagnóstico SCALOR Básico",
      },
    ],
  },
  {
    id: "intermedio",
    name: "Intermedio",
    etapa: "Empresa pequeña",
    proposito: "Gestionar con procesos, datos e indicadores",
    resultado: "Sistema de gestión y crecimiento",
    cantidad: 13,
    enfoque: "Gestión integral de empresas pequeñas",
    certificado: "Gestión Integral de Pequeñas Empresas",
    courses: [
      {
        code: "2.1",
        name: "Diagnóstico empresarial integral",
        content:
          "Diagnóstico administrativo, financiero, comercial, operativo y humano.",
        product: "Informe de diagnóstico empresarial",
      },
      {
        code: "2.2",
        name: "Contabilidad gerencial",
        content:
          "Estados financieros para gestión, análisis vertical y horizontal, indicadores y presupuestos.",
        product: "Informe gerencial mensual",
      },
      {
        code: "2.3",
        name: "Finanzas para pequeñas empresas",
        content: "Flujo de caja proyectado, capital de trabajo, rentabilidad y riesgo.",
        product: "Plan financiero de 90 días",
      },
      {
        code: "2.4",
        name: "Economía gerencial",
        content:
          "Demanda, elasticidad, competencia, precios, incentivos y decisiones marginales.",
        product: "Análisis económico de mercado",
      },
      {
        code: "2.5",
        name: "Estrategia competitiva para pymes",
        content: "Ventaja competitiva, diferenciación, competidores y posicionamiento.",
        product: "Mapa estratégico",
      },
      {
        code: "2.6",
        name: "Pricing y rentabilidad",
        content: "Precio basado en costos y valor, descuentos, portafolio y margen.",
        product: "Sistema de precios",
      },
      {
        code: "2.7",
        name: "Gestión comercial y ventas escalables",
        content: "Embudo, CRM básico, segmentación, retención y cartera.",
        product: "Sistema comercial",
      },
      {
        code: "2.8",
        name: "Marketing estratégico",
        content:
          "Marca, canales, contenido, experiencia del cliente y propuesta comunicacional.",
        product: "Plan de marketing estratégico",
      },
      {
        code: "2.9",
        name: "Operaciones y mejora de procesos",
        content: "Mapeo, capacidad, calidad, productividad y mejora continua.",
        product: "Manual básico de procesos",
      },
      {
        code: "2.10",
        name: "Gestión de personas y cultura",
        content: "Roles, funciones, delegación, evaluación y cultura organizacional.",
        product: "Estructura de roles",
      },
      {
        code: "2.11",
        name: "Analítica de negocios",
        content: "KPIs, dashboards, datos financieros, comerciales y operativos.",
        product: "Dashboard de gestión",
      },
      {
        code: "2.12",
        name: "Gestión de riesgos y control interno",
        content: "Riesgo financiero, operativo, comercial, legal y controles.",
        product: "Matriz de riesgos",
      },
      {
        code: "2.13",
        name: "Proyecto integrador intermedio",
        content: "Diagnóstico, estrategia, finanzas, procesos, personas e indicadores.",
        product: "Plan de gestión y crecimiento",
      },
    ],
  },
  {
    id: "profesional",
    name: "Profesional",
    etapa: "Organización compleja",
    proposito: "Dirigir con visión estratégica",
    resultado: "Toma de decisiones directivas",
    cantidad: 16,
    enfoque: "Dirección estratégica de organizaciones complejas",
    certificado: "Dirección Empresarial y Criterio Administrativo",
    courses: [
      {
        code: "3.1",
        name: "Dirección general",
        content: "Rol directivo, visión sistémica, prioridades y desempeño.",
        product: "Mapa de dirección general",
      },
      {
        code: "3.2",
        name: "Estrategia corporativa y competitiva",
        content: "Industria, ventaja, modelo de negocio, crecimiento y ejecución.",
        product: "Plan estratégico corporativo",
      },
      {
        code: "3.3",
        name: "Finanzas corporativas",
        content:
          "Valor del dinero, flujo libre, costo de capital, riesgo y valoración.",
        product: "Evaluación financiera estratégica",
      },
      {
        code: "3.4",
        name: "Contabilidad avanzada para la dirección",
        content:
          "Estados financieros avanzados, indicadores, control presupuestario e informes.",
        product: "Informe financiero directivo",
      },
      {
        code: "3.5",
        name: "Control de gestión",
        content:
          "Planeamiento, presupuestos, indicadores, Balanced Scorecard y desempeño.",
        product: "Sistema de control de gestión",
      },
      {
        code: "3.6",
        name: "Macroeconomía y entorno empresarial",
        content:
          "Inflación, tasas, tipo de cambio, ciclos, política económica e incertidumbre.",
        product: "Informe macroeconómico",
      },
      {
        code: "3.7",
        name: "Economía empresarial avanzada",
        content:
          "Teoría de la firma, incentivos, competencia imperfecta, regulación y juegos.",
        product: "Análisis económico estratégico",
      },
      {
        code: "3.8",
        name: "Liderazgo organizacional",
        content: "Poder, influencia, cultura, comunicación, conflicto y negociación.",
        product: "Plan de liderazgo organizacional",
      },
      {
        code: "3.9",
        name: "Diseño organizacional",
        content: "Estructuras, roles, coordinación, centralización y crecimiento.",
        product: "Diseño organizacional",
      },
      {
        code: "3.10",
        name: "Operaciones estratégicas y cadena de valor",
        content: "Cadena de valor, productividad, calidad, logística y escalabilidad.",
        product: "Plan operativo estratégico",
      },
      {
        code: "3.11",
        name: "Marketing directivo y estrategia comercial",
        content: "Marca, investigación, portafolio, segmentación y crecimiento comercial.",
        product: "Plan comercial directivo",
      },
      {
        code: "3.12",
        name: "Business Analytics e inteligencia artificial para líderes",
        content: "Datos, modelos, automatización, IA aplicada y ética.",
        product: "Caso de decisión basada en datos",
      },
      {
        code: "3.13",
        name: "Innovación y transformación digital",
        content: "Modelos digitales, innovación, tecnología, cambio y capacidades.",
        product: "Plan de transformación digital",
      },
      {
        code: "3.14",
        name: "Gobierno, ética y responsabilidad empresarial",
        content:
          "Gobierno corporativo, stakeholders, cumplimiento, reputación y ética.",
        product: "Marco de gobierno y ética",
      },
      {
        code: "3.15",
        name: "Consultoría y resolución de problemas empresariales",
        content: "Hipótesis, diagnóstico, análisis, recomendaciones y presentación ejecutiva.",
        product: "Informe de consultoría",
      },
      {
        code: "3.16",
        name: "Proyecto integrador profesional",
        content:
          "Diagnóstico organizacional, estrategia, finanzas, operaciones y plan de implementación.",
        product: "Caso profesional SCALOR",
      },
    ],
  },
];

export const totalCourses = levels.reduce((acc, l) => acc + l.cantidad, 0);

export const classStructure = [
  {
    title: "Apertura del problema",
    description: "Se presenta una situación real o un error común.",
  },
  {
    title: "La Ciencia",
    description: "Se explica el concepto, modelo o herramienta fundamental.",
  },
  {
    title: "Ejemplo práctico",
    description: "Se muestra cómo funciona en un caso concreto.",
  },
  {
    title: "El Arte",
    description: "Se interpreta qué decisión puede tomarse y qué criterio debe usarse.",
  },
  {
    title: "Acción del estudiante",
    description: "Se deja una tarea, plantilla, pregunta o decisión aplicada.",
  },
];

export const evaluationComponents = [
  {
    component: "Prueba breve",
    evaluates: "Comprensión conceptual",
    example: "Diferenciar costo, gasto y utilidad",
  },
  {
    component: "Caso práctico",
    evaluates: "Aplicación",
    example: "Calcular punto de equilibrio en un negocio",
  },
  {
    component: "Herramienta",
    evaluates: "Operatividad",
    example: "Completar plantilla de costos",
  },
  {
    component: "Decisión justificada",
    evaluates: "Criterio",
    example: "Definir si conviene subir precio o reducir costo",
  },
  {
    component: "Entregable final",
    evaluates: "Integración",
    example: "Plan de lanzamiento o diagnóstico empresarial",
  },
];

export const qualityStandards = [
  {
    label: "Claridad",
    description: "El estudiante entiende sin conocimientos previos excesivos.",
  },
  {
    label: "Rigor",
    description:
      "Cada concepto tiene fundamento administrativo, contable, financiero o económico.",
  },
  {
    label: "Aplicación",
    description: "Cada clase conduce a una acción, herramienta o decisión.",
  },
  {
    label: "Criterio",
    description: "Se enseña cuándo, cómo y por qué usar una herramienta.",
  },
  {
    label: "Escalabilidad",
    description:
      "El contenido puede convertirse en clips, guías, asesorías o herramientas.",
  },
];
