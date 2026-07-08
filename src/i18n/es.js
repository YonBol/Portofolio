export default {
  navbar: {
    home: 'Inicio',
    about: 'Sobre mí',
    services: 'Servicios',
    aiShowcase: 'Demos IA',
    work: 'Proyectos',
    contact: 'Contacto',
  },
  hero: {
    greeting: 'Hola, soy Yon 👋',
    toggleDeveloper: 'Desarrollo Web',
    toggleAi: 'Contenido IA',
    resumeBtn: 'Currículum',
    portfolioBtn: 'Proyectos',
    developer: {
      main: 'Full Stack Developer para ',
      accent: 'Aplicaciones Web',
      subtitle: 'Convierto ideas en productos funcionales, desde la interfaz hasta el backend.',
    },
    ai: {
      main: 'AI Developer para ',
      accent: 'Automatización & UGC',
      subtitle: 'Diseño agentes de IA, automatizaciones y contenido estilo UGC para redes sociales.',
    },
  },
  about: {
    title: 'Sobre mí',
    description:
      '¡Hola! Soy Yon Bollain. Me dedico a construir agentes de IA y flujos de trabajo automatizados que ejecutan tareas por sí solos, y a experimentar con avatares, voces y vídeos estilo UGC generados con IA. Vengo de un perfil de desarrollo web, así que me gusta llevar las ideas hasta un producto funcional.',
    educationTitle: 'Educación:',
    education: ['Desarrollo de Aplicaciones', 'Técnico en Sistemas Microinformáticos y Redes'],
    coreStackTitle: 'Stack Principal:',
    aiStackTitle: 'Stack de IA & Automatización:',
  },
  services: {
    title: 'Servicios',
    subtitle: 'Lo que puedo construir para ti, de principio a fin.',
    items: [
      {
        icon: '⚙️',
        title: 'Automatización con IA',
        desc: 'Flujos de trabajo y APIs a medida que eliminan tareas repetitivas y conectan tus herramientas.',
      },
      {
        icon: '🎬',
        title: 'Contenido IA & UGC',
        desc: 'Avatares, voces y vídeos cortos generados con IA, pensados para redes sociales y marketing.',
      },
      {
        icon: '💻',
        title: 'Desarrollo Web',
        desc: 'Convierto ideas en productos funcionales: webs, dashboards y herramientas internas que tu equipo realmente usa.',
      },
    ],
  },
  aiShowcase: {
    title: 'Demos IA',
    subtitle: 'Avatares, voces y contenido estilo UGC que estoy produciendo ahora mismo. Demos disponibles próximamente.',
    badge: 'PRÓXIMAMENTE',
    items: [
      { label: 'DEMO AVATAR UGC', title: 'Avatar UGC con IA' },
      { label: 'DEMO PIPELINE DE FLUJOS', title: 'Flujos & Pipelines' },
      { label: 'DEMO ANUNCIO AUTOGENERADO', title: 'Anuncio Automatizado' },
    ],
  },
  process: {
    title: 'Proceso',
    subtitle: 'Cómo suele ir un proyecto conmigo.',
    toggleDeveloper: 'Desarrollo Web',
    toggleAi: 'Contenido IA',
    developer: [
      { n: '01', title: 'Llamada Inicial', desc: 'Hablamos de tus objetivos, usuarios y lo que necesita el producto.' },
      { n: '02', title: 'Planificar', desc: 'Defino páginas, datos y funcionalidades antes de escribir código.' },
      { n: '03', title: 'Desarrollar', desc: 'Construyo el frontend y el backend, paso a paso.' },
      { n: '04', title: 'Lanzar & Soporte', desc: 'Lo lanzamos, y luego lo mejoro según el uso real.' },
    ],
    ai: [
      { n: '01', title: 'Llamada Inicial', desc: 'Hablamos de tus objetivos y qué automatizar o crear.' },
      { n: '02', title: 'Diseñar el Flujo', desc: 'Diseño el flujo: herramientas, datos y dónde encaja la IA.' },
      { n: '03', title: 'Construir & Entrenar', desc: 'Desarrollo de la automatización, agente o pipeline de contenido.' },
      { n: '04', title: 'Lanzar & Iterar', desc: 'Lo lanzamos, monitorizamos resultados y lo refinamos con uso real.' },
    ],
  },
  work: {
    title: 'Proyectos',
    subtitle: 'Algunos de mis proyectos de desarrollo web.',
    codeBtn: 'Código',
    demoBtn: 'Demo',
    items: [
      {
        title: 'POWERLUX',
        description: 'App de gestión de empresa de suministros construida en Laravel.',
        img: 'somllums.webp',
        code: 'https://github.com/YonBol/POWERLUX',
        demo: 'https://seashell-gazelle-602285.hostingersite.com/home',
      },
      {
        title: 'MYPHONERESCUE',
        description: 'Tienda de reparación de móviles hecha con WordPress.',
        img: 'myphonerescue.png',
        code: '#',
        demo: 'https://www.myphonerescue.com.au',
      },
      {
        title: 'Y&ITECHCARE',
        description: 'Web de empresa de desarrolladores web.',
        img: 'yanditechcare.png',
        code: '#',
        demo: 'https://www.yanditechcare.com',
      },
    ],
  },
  contact: {
    title: 'Contacto',
    subtitle: 'No dudes en dejarme un mensaje :)',
    location: 'España',
    form: {
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      send: 'Enviar',
      sending: 'Enviando',
      sent: '¡Mensaje enviado!',
    },
    validations: {
      required: 'Este campo es requerido',
      email: 'Por favor ingrese un correo válido',
    },
  },
  footer: {
    more: 'Más sobre',
    me: 'mí',
  },
}
