(() => {
  const gallery = document.querySelector('.gallery-grid');
  if (!gallery) return;

  const images = [
    ['assets/images/Aprendizaje holográfico con inteligencia artificial.png', 'Aprendizaje asistido por inteligencia artificial', 'Learning with artificial intelligence'],
    ['assets/images/Conexiones globales en hologramas.png', 'Conexiones globales en hologramas', 'Global connections in holograms'],
    ['assets/images/Diorama holográfico de aprendizaje digital.png', 'Diorama de aprendizaje digital', 'Digital learning diorama'],
    ['assets/images/Ecosistema digital futurista en conexión.png', 'Ecosistema digital conectado', 'Connected digital ecosystem'],
    ['assets/images/Escudo holográfico de ciberseguridad.png', 'Escudo holográfico de ciberseguridad', 'Holographic cybersecurity shield'],
    ['assets/images/Espacio de código cyberpunk neón.png', 'Espacio de trabajo con código digital', 'Digital coding workspace'],
    ['assets/images/Infografía de Influencers con Impacto.png', 'Infografía sobre influencers e impacto', 'Infographic about influencers and impact'],
    ['assets/images/meme-tecnologia.jpg', 'Meme de tecnología: jugando en una computadora de juguete', 'Technology meme: playing on a toy computer'],
    ['assets/influencers/ANdres garza.jpg', 'Andrés Garza · Educación financiera', 'Andrés Garza · Financial education'],
    ['assets/influencers/Jay Shetty.jpg', 'Jay Shetty · Bienestar y propósito', 'Jay Shetty · Well-being and purpose'],
    ['assets/influencers/Marce, la Recicladora.jpg', 'Marce, la Recicladora · Educación ambiental', 'Marce, the Recycler · Environmental education'],
    ['assets/influencers/Margarita Pasos.jpg', 'Margarita Pasos · Desarrollo personal', 'Margarita Pasos · Personal development'],
    ['assets/influencers/Tori Dunlap.jpg', 'Tori Dunlap · Finanzas personales', 'Tori Dunlap · Personal finance'],
    ['assets/influencers/carmen_hijosa4.jpg', 'Carmen Hijosa · Innovación textil', 'Carmen Hijosa · Textile innovation'],
    ['assets/introduccion/innovacion.jpg', 'Innovación', 'Innovation'],
    ['assets/introduccion/mision.jpg', 'Misión del proyecto', 'Project mission'],
    ['assets/introduccion/pensamiento critico.jpg', 'Pensamiento crítico', 'Critical thinking'],
    ['assets/introduccion/respeto.jpg', 'Respeto', 'Respect'],
    ['assets/introduccion/verasidad.jpg', 'Veracidad', 'Accuracy'],
    ['assets/introduccion/vision.jpg', 'Visión del proyecto', 'Project vision'],
    ['assets/comparacion/Infografía futurista sobre la IA.png', 'Aspectos positivos y negativos de la inteligencia artificial · 1', 'Positive and negative aspects of AI · 1'],
    ['assets/comparacion/Infografía futurista_ aspectos positivos y negativos de la IA.png', 'Aspectos positivos y negativos de la inteligencia artificial · 2', 'Positive and negative aspects of AI · 2'],
    ['assets/comparacion/Infografía futurista_ pros y contras de la IA.png', 'Pros y contras de la inteligencia artificial', 'Pros and cons of artificial intelligence'],
    ['assets/comparacion/Infografía holográfica_ ventajas y riesgos de la IA.png', 'Ventajas y riesgos de la inteligencia artificial', 'Benefits and risks of artificial intelligence'],
    ['assets/comparacion/Pros y contras de la inteligencia artificial.png', 'Comparación de pros y contras de la IA', 'Comparison of AI pros and cons'],
    ['assets/declarasiones individuales/declaracion1.jpg', 'Declaración individual · Jimena', 'Individual statement · Jimena'],
    ['assets/declarasiones individuales/declaracion2.jpg', 'Declaración individual · Miguel Ángel', 'Individual statement · Miguel Ángel'],
    ['assets/declarasiones individuales/declaracion3.jpg', 'Declaración individual · Jhon', 'Individual statement · Jhon'],
    ['assets/declarasiones individuales/declaracion4.jpg', 'Declaración individual · Emanuel', 'Individual statement · Emanuel'],
    ['assets/declarasiones individuales/declaracion5.jpg', 'Declaración individual · Isabela', 'Individual statement · Isabela'],
    ['assets/tesis/tesis1.jpg', 'Tesis individual · Jimena', 'Individual thesis · Jimena'],
    ['assets/tesis/tesis2.jpg', 'Tesis individual · Miguel Ángel', 'Individual thesis · Miguel Ángel'],
    ['assets/tesis/tesis3.jpg', 'Tesis individual · Jhon', 'Individual thesis · Jhon'],
    ['assets/tesis/tesis4.jpg', 'Tesis individual · Emanuel', 'Individual thesis · Emanuel'],
    ['assets/tesis/tesis5.jpg', 'Tesis individual · Isabella', 'Individual thesis · Isabella'],
    ['assets/tecnologia y sociedad/01.jpg', 'Redes sociales e influencia en la vida cotidiana', 'Social media and influence in everyday life'],
    ['assets/tecnologia y sociedad/02.jpg', 'Reacciones y aprobación en redes sociales', 'Reactions and approval on social media'],
    ['assets/tecnologia y sociedad/03.jpg', 'Persona explorando la realidad virtual', 'Person exploring virtual reality'],
    ['assets/tecnologia y sociedad/grande.jpg', 'Rostros y miradas en pantallas de computadora', 'Faces and gazes on computer screens'],
    ['assets/temas para explorar/historia1.jpg', 'Inteligencia artificial y trabajo', 'Artificial intelligence and work'],
    ['assets/temas para explorar/historia2.jpg', 'Mirada sobre la economía digital', 'A look at the digital economy'],
    ['assets/temas para explorar/historia 3.jpg', 'Creatividad y herramientas digitales', 'Creativity and digital tools'],
    ['assets/voces y perpectivas/economia.jpg', 'Economía y vida cotidiana', 'Economics and everyday life'],
    ['assets/voces y perpectivas/etica.jpg', 'Ética y toma de decisiones', 'Ethics and decision-making'],
    ['assets/voces y perpectivas/filosofia.jpg', 'Filosofía y pensamiento', 'Philosophy and thought'],
    ['assets/voces y perpectivas/lectura critica.jpg', 'Lectura crítica', 'Critical reading'],
    ['assets/hero-eye-blue.jpg', 'Ojo azul y tecnología digital', 'Blue eye and digital technology'],
    ['assets/noticias/noticia1.jpg', 'Imagen editorial de noticias · 1', 'Editorial news image · 1'],
    ['assets/noticias/noticia2.jpg', 'Imagen editorial de noticias · 2', 'Editorial news image · 2'],
    ['assets/noticias/noticia3.jpg', 'Imagen editorial de noticias · 3', 'Editorial news image · 3'],
    ['assets/delitos ciberneticos/grooming.jpg', 'Prevención del grooming en línea', 'Preventing online grooming'],
    ['assets/delitos ciberneticos/orbiting.jpg', 'Ilustración sobre orbiting en redes', 'Illustration about orbiting on social media']
  ];

  const cards = [];
  images.forEach(([src, captionEs, captionEn]) => {
    const figure = document.createElement('figure');
    figure.className = 'gallery-slot';
    figure.dataset.detail = '';
    figure.setAttribute('role', 'button');
    figure.tabIndex = 0;
    figure.dataset.captionEs = captionEs;
    figure.dataset.captionEn = captionEn;

    const media = document.createElement('div');
    media.className = 'gallery-slot-media';

    const image = document.createElement('img');
    image.src = src;
    image.alt = '';
    image.loading = 'lazy';

    const caption = document.createElement('figcaption');
    media.append(image);
    figure.append(media, caption);
    gallery.append(figure);
    cards.push(figure);

    figure.addEventListener('keydown', (event) => {
      if (!['Enter', ' '].includes(event.key)) return;
      event.preventDefault();
      window.openContentDialog?.(figure, figure);
    });
  });

  const renderCaptions = () => {
    const language = window.siteI18n?.currentLanguage;
    cards.forEach((card) => {
      const caption = language === 'en' ? card.dataset.captionEn : card.dataset.captionEs;
      card.querySelector('figcaption').textContent = caption;
      card.setAttribute('aria-label', `${language === 'en' ? 'View detail: ' : 'Ver detalle: '}${caption}`);
    });
  };

  renderCaptions();
  document.addEventListener('site-language-change', () => {
    renderCaptions();
  });
})();
