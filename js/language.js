(() => {
  function normalize(value) {
    return value.replace(/\s+/g, ' ').trim();
  }

  const spanishToEnglish = new Map(Object.entries({
    'Más allá del feed | La realidad detrás de la pantalla': 'Beyond the Feed | Reality Behind the Screen',
    'Más allá del feed': 'Beyond the Feed',
    'Influencers | Más allá del feed': 'Influencers | Beyond the Feed',
    'Galería | Más allá del feed': 'Gallery | Beyond the Feed',
    'Paralelos | Más allá del feed': 'Parallels | Beyond the Feed',
    'Integrantes | Más allá del feed': 'Team members | Beyond the Feed',
    'Explora ilustraciones, retratos e imágenes de todas las secciones del proyecto.': 'Explore illustrations, portraits, and images from every section of the project.',
    'Galería completa del proyecto': 'Complete project gallery',
    'Artículo de demostración | Más allá del feed': 'Demo Article | Beyond the Feed',
    'Detalle | Más allá del feed': 'Detail | Beyond the Feed',
    'Mapa de inicio | Más allá del feed': 'Homepage Map | Beyond the Feed',
    'Artículo de demostración para Más allá del feed.': 'Demo article for Beyond the Feed.',
    'Galería de fotografías de Más allá del feed.': 'Photo gallery for Beyond the Feed.',
    'Mapa de influencers de sostenibilidad, crecimiento personal y finanzas dentro de Más allá del feed.': 'A map of sustainability, personal growth, and finance influencers featured in Beyond the Feed.',
    'Mapa visual provisional de la estructura de inicio de Más allá del feed.': 'A provisional visual map of the Beyond the Feed homepage structure.',
    'Abrir menú': 'Open menu',
    'Cerrar menú': 'Close menu',
    'Cambiar idioma a inglés': 'Switch language to English',
    'Cambiar idioma a español': 'Switch language to Spanish',
    'Explora las secciones del sitio': 'Explore the site sections',
    'Abrir historia de demostración sobre inteligencia artificial': 'Open the artificial intelligence demo story',
    'Computadora en un espacio de trabajo tecnológico, imagen de referencia de Unsplash.': 'Computer in a technology workspace, reference image from Unsplash.',
    'Imagen de referencia sobre tecnología digital de Unsplash.': 'Reference image about digital technology from Unsplash.',
    'Personas colaborando en un entorno tecnológico, imagen de referencia de Unsplash.': 'People collaborating in a technology setting, reference image from Unsplash.',
    'Imagen temática sobre riesgos y seguridad digital, referencia visual de Unsplash.': 'Thematic image about digital risks and security, visual reference from Unsplash.',
    'Imagen temática sobre seguridad digital, referencia visual de Unsplash.': 'Thematic image about digital security, visual reference from Unsplash.',
    'Tecnología de inteligencia artificial, imagen de referencia de Unsplash.': 'Artificial intelligence technology, reference image from Unsplash.',
    'Imagen temática sobre inteligencia artificial, referencia visual de Unsplash.': 'Thematic image about artificial intelligence, visual reference from Unsplash.',
    'Imagen temática sobre vida digital, referencia visual de Unsplash.': 'Thematic image about digital life, visual reference from Unsplash.',
    'Retrato de referencia sobre creación de contenido, imagen de Unsplash.': 'Reference portrait about content creation, image from Unsplash.',
    'Imagen temática sobre seguridad informática, referencia visual de Unsplash.': 'Thematic image about computer security, visual reference from Unsplash.',
    'Imagen temática sobre tecnología digital, referencia visual de Unsplash.': 'Thematic image about digital technology, visual reference from Unsplash.',
    'Aplicaciones de comunicación digital, imagen de referencia de Unsplash.': 'Digital communication apps, reference image from Unsplash.',
    'Composición visual de inteligencia artificial y tecnología, imagen de referencia de Unsplash.': 'Visual composition of artificial intelligence and technology, reference image from Unsplash.',
    'Persona utilizando un dispositivo móvil, imagen de referencia de Unsplash.': 'Person using a mobile device, reference image from Unsplash.',
    'Personas compartiendo ideas alrededor de una pantalla, imagen de referencia de Unsplash.': 'People sharing ideas around a screen, reference image from Unsplash.',
    'Computadora con código en un espacio de trabajo digital, imagen de referencia de Unsplash.': 'Computer with code in a digital workspace, reference image from Unsplash.',
    'Dispositivo móvil que ilustra privacidad digital, imagen de referencia de Unsplash.': 'Mobile device illustrating digital privacy, reference image from Unsplash.',
    'Persona frente a un dispositivo digital, imagen de referencia de Unsplash.': 'Person in front of a digital device, reference image from Unsplash.',
    'Personas conversando en un entorno digital, imagen de referencia de Unsplash.': 'People talking in a digital environment, reference image from Unsplash.',
    'Imagen de referencia sobre seguridad tecnológica de Unsplash.': 'Reference image about technology security from Unsplash.',
    'Imagen ilustrativa sobre inteligencia artificial de Unsplash.': 'Illustrative image about artificial intelligence from Unsplash.',
    'Retrato de Marce, la Recicladora.': 'Portrait of Marce, the Recycler.',
    'Retrato de Carmen Hijosa.': 'Portrait of Carmen Hijosa.',
    'Retrato de Margarita Pasos.': 'Portrait of Margarita Pasos.',
    'Retrato de Jay Shetty.': 'Portrait of Jay Shetty.',
    'Retrato de Andrés Garza.': 'Portrait of Andrés Garza.',
    'Retrato de Tori Dunlap.': 'Portrait of Tori Dunlap.',
    'Mapa interactivo. Enfoca o selecciona una dimensión para explorarla.': 'Interactive map. Focus on or select a dimension to explore it.',
    'Dimensiones de exploración': 'Exploration dimensions',
    'Ir a inicio': 'Go to home',
    'Volver a inicio': 'Back to home',
    'Volver a la portada': 'Back to the homepage',
    'Volver a Más allá del feed': 'Back to Beyond the Feed',
    'Ir al inicio de Más allá del feed': 'Go to the Beyond the Feed homepage',
    'Símbolo gráfico de DosCaras.IA': 'DosCaras.IA graphic symbol',
    'Volver al inicio de la página principal': 'Back to the homepage',
    'Galería de paralelos': 'Parallels gallery',
    'Galería de integrantes': 'Team members gallery',
    'Integrante 5': 'Team member 5',
    'Paralelo visual sobre aspectos positivos y negativos de la inteligencia artificial.': 'Visual comparison of positive and negative aspects of artificial intelligence.',
    'Imagen que representa la misión del proyecto.': 'Image representing the project mission.',
    'Imagen que representa la visión del proyecto.': 'Image representing the project vision.',
    'Imagen que representa el valor de la veracidad.': 'Image representing the value of accuracy.',
    'Imagen que representa el pensamiento crítico.': 'Image representing critical thinking.',
    'Imagen que representa el respeto.': 'Image representing respect.',
    'Imagen que representa la innovación.': 'Image representing innovation.',
    'Imagen correspondiente a la declaración individual de Jimena.': 'Image for Jimena’s individual statement.',
    'Imagen correspondiente a la declaración individual de Miguel Ángel.': 'Image for Miguel Ángel’s individual statement.',
    'Imagen correspondiente a la declaración individual de Jhon.': 'Image for Jhon’s individual statement.',
    'Imagen correspondiente a la declaración individual de Emanuel.': 'Image for Emanuel’s individual statement.',
    'Imagen correspondiente a la declaración individual de Isabela.': 'Image for Isabela’s individual statement.',
    'Mapa mental de influencers con impacto y desarrollo personal.': 'Mind map of influencers focused on impact and personal development.',
    'Noticias verificadas': 'Verified news',
    'Portada ilustrativa sobre inteligencia artificial y sesgo algorítmico; no representa el artículo.': 'Illustrative cover about artificial intelligence and algorithmic bias; it does not depict the article.',
    'Retrato ilustrativo en blanco y negro de una persona entre una multitud; no representa las vulnerabilidades descritas.': 'Illustrative black-and-white portrait of a person in a crowd; it does not depict the vulnerabilities described.',
    'Edificio tecnológico con el logotipo de OpenAI; imagen ilustrativa, no es el centro de datos descrito.': 'Technology building with the OpenAI logo; illustrative image, not the data center described.',
    'Carpeta digital de vidrio cromado sobre fondo oscuro.': 'Chrome-glass digital folder against a dark background.',
    'Primer plano de un ojo impreso en un billete de dólar.': 'Close-up of an eye printed on a dollar bill.',
    'Tecla Enter de vidrio transparente.': 'Transparent glass Enter key.',
    'Collage de rostros observando desde varias pantallas de computadora.': 'Collage of faces looking out from several computer screens.',
    'Persona rodeada de iconos de redes sociales que representan su influencia en la vida cotidiana.': 'Person surrounded by social media icons representing its influence on everyday life.',
    'Mano que retira símbolos de aprobación de una pantalla.': 'Hand removing approval symbols from a screen.',
    'Escultura clásica de un filósofo leyendo un libro.': 'Classical sculpture of a philosopher reading a book.',
    'Figura de la justicia con una balanza.': 'Figure of Justice holding scales.',
    'Dólares y relojes en una composición monocromática.': 'Dollars and clocks in a monochrome composition.',
    'Objetivo principal': 'Main objective',
    'Informar sobre el impacto de la inteligencia artificial, las redes sociales y los influencers en la sociedad actual.': 'To inform people about the impact of artificial intelligence, social media, and influencers on today’s society.',
    'Informar sobre el impacto de la inteligencia artificial, las redes sociales y los influencers en la sociedad actual mediante contenidos claros y educativos.': 'To inform people about the impact of artificial intelligence, social media, and influencers on today’s society through clear, educational content.',
    'Fomentar el pensamiento crítico para que los visitantes puedan identificar los beneficios, riesgos y consecuencias del uso de las tecnologías digitales.': 'To encourage critical thinking so visitors can identify the benefits, risks, and consequences of using digital technologies.',
    'Promover el uso responsable de la tecnología mediante contenidos interactivos que permitan comprender mejor la realidad detrás de las pantallas.': 'To promote responsible technology use through interactive content that helps people better understand the reality behind screens.',
    'Galería visual · Inteligencia artificial': 'Visual gallery · Artificial intelligence',
    'Dos caras de la IA': 'Two sides of AI',
    'Explora los paralelos elaborados por cada integrante y compara sus beneficios y riesgos.': 'Explore each team member’s comparisons and consider AI’s benefits and risks.',
    'Ver los cinco paralelos ↗': 'View all five comparisons ↗',
    'Ver objetivos del proyecto': 'View the project objectives',
    'Rostro de piedra fragmentado': 'Fragmented stone face',
    'Rostros en grano monocromático': 'Monochrome grainy faces',
    'Estudio creativo digital': 'Digital creative studio',
    'Laboratorio holográfico': 'Holographic laboratory',
    'Mirada digital': 'Digital gaze',
    'Escultura de un rostro de piedra agrietado en blanco y negro.': 'Black-and-white sculpture of a cracked stone face.',
    'Composición granulada de rostros en blanco y negro.': 'Grainy black-and-white composition of faces.',
    'Estudio creativo con herramientas digitales iluminadas en tonos neón.': 'Creative studio with digital tools illuminated in neon.',
    'Laboratorio futurista con globo, microscopio y pantallas digitales.': 'Futuristic laboratory with a globe, microscope, and digital screens.',
    'Manos metálicas sosteniendo un teléfono con una red social.': 'Metal hands holding a phone displaying a social network.',
    'Inicio': 'Home',
    '¿Quiénes somos?': 'Who are we?',
    'Misión': 'Mission',
    'Visión': 'Vision',
    'Valores': 'Values',
    'Objetivos del proyecto': 'Project objectives',
    '¿Dominación de la IA?': 'AI domination?',
    'Delitos cibernéticos': 'Cybercrimes',
    'Comparación': 'Parallel',
    'Paralelos': 'Parallels',
    'Los paralelos presentan, en imágenes, los aspectos positivos y negativos de la inteligencia artificial elaborados por cada integrante. Haz clic para ver la galería.': 'The parallels present, in images, the positive and negative aspects of artificial intelligence prepared by each team member. Click to view the gallery.',
    'Abrir la galería de paralelos en una pestaña nueva': 'Open the parallels gallery in a new tab',
    'Declaraciones (vuelvo enseguida)': "Statements (I'll be right back)",
    'Mapa mental': 'Mind Map',
    'Textos': 'Texts',
    'Influencers / Textos': 'Influencers / Texts',
    'Noticias IA': 'AI News',
    'Actualidad': 'Current affairs',
    'Tecnología': 'Technology',
    'Sociedad': 'Society',
    'Opinión': 'Perspectives',
    'Trabajos': 'School projects',
    'Galería': 'Gallery',
    'Sobre nosotros': 'About us',
    'Navegación principal': 'Main navigation',
    'Navegación secundaria': 'Secondary navigation',
    'Navegación del pie de página': 'Footer navigation',
    'Inicio: presentación de Más allá del feed': 'Home: introduction to Beyond the Feed',
    'Temas para explorar: historias y respuestas sobre la vida digital': 'Topics to explore: stories and answers about digital life',
    'Noticias de IA y tecnología: artículos enlazados a sus fuentes': 'AI and technology news: articles linked to their sources',
    'Tecnología y sociedad: mapa de conexiones entre temas digitales': 'Technology and society: map of connections between digital topics',
    'Opiniones y perspectivas: preguntas y análisis': 'Opinions and perspectives: questions and analysis',
    'Introducción del proyecto: propósito, misión, visión y valores': 'Project introduction: purpose, mission, vision, and values',
    'Proyecto ¿Dominación de la IA?: delitos cibernéticos, paralelos y declaraciones': 'The “AI Domination?” project: cybercrimes, comparisons, and statements',
    'Influencers y tesis: mapa de perfiles y textos del equipo': 'Influencers and theses: profile map and team essays',
    'Inglés: espacios reservados para trabajos escolares': 'English: spaces reserved for school projects',
    'Español: espacios reservados para trabajos escolares': 'Spanish: spaces reserved for school projects',
    'Galería del proyecto: imágenes de sus distintas secciones': 'Project gallery: images from its different sections',
    'Temas para explorar': 'Topics to explore',
    'Noticias de IA': 'AI news',
    'Opiniones y perspectivas': 'Opinions and perspectives',
    'Espacios para fotografías': 'Spaces for photographs',
    'Imagen ilustrativa de inteligencia artificial y tecnología, de Unsplash.': 'Illustrative image of artificial intelligence and technology, from Unsplash.',
    'Ver detalle: Referencia visual · Inteligencia artificial': 'View detail: Visual reference · Artificial intelligence',
    'Ver detalle: Referencia visual · Redes sociales': 'View detail: Visual reference · Social media',
    'Ver detalle: Referencia visual · Creación de contenido': 'View detail: Visual reference · Content creation',
    'Ver detalle: Referencia visual · Vida digital': 'View detail: Visual reference · Digital life',
    'Ver detalle: Referencia visual · Tecnología y sociedad': 'View detail: Visual reference · Technology and society',
    'Ver detalle: Referencia visual · Comunicación': 'View detail: Visual reference · Communication',
    'Ver detalle: Referencia visual · Tecnología': 'View detail: Visual reference · Technology',
    'Ver detalle: Referencia visual · Seguridad digital': 'View detail: Visual reference · Digital security',
    'La realidad detrás de la pantalla': 'Reality behind the screen',
    'MÁS ALLÁ DEL FEED': 'BEYOND THE FEED',
    'MÁS ALLÁ': 'BEYOND',
    'DEL FEED': 'THE FEED',
    'EXPLORA EL SITIO': 'EXPLORE THE SITE',
    'Explora las secciones del sitio': 'Explore the site sections',
    'Noticias': 'News',
    'Tecnología y sociedad': 'Technology and society',
    'Inglés': 'English',
    'Español': 'Spanish',
    'Una mirada escolar a la inteligencia artificial, las redes sociales y la cultura digital: preguntas para entender cómo se relacionan con nuestras decisiones y la vida cotidiana.': 'A student perspective on artificial intelligence, social media, and digital culture: questions to understand how they connect with our choices and everyday life.',
    'Todavía no hay noticias en la lista. Puedes agregar publicaciones verificadas en data/noticias.json.': 'There are no news items yet. You can add verified publications to data/noticias.json.',
    'La lista se mantiene manualmente en data/noticias.json.': 'The list is maintained manually in data/noticias.json.',
    'No se pudo cargar la lista de noticias. Abre el sitio con un servidor web local, como Live Server, y comprueba que data/noticias.json esté disponible.': 'The news list could not be loaded. Open the site with a local web server, such as Live Server, and check that data/noticias.json is available.',
    'Imagen ilustrativa · No es una fotografía del acontecimiento': 'Illustrative image · Not a photograph of the event',
    'Leer el artículo original en BBC News ↗': 'Read the original article on BBC News ↗',
    'Titular original: What is PHP and why did it spark a global cyber-security scramble?': 'Original headline: What is PHP and why did it spark a global cyber-security scramble?',
    'Titular original: Big, noisy and coming to a town near you - why the data centre backlash is growing': 'Original headline: Big, noisy and coming to a town near you - why the data centre backlash is growing',
    'Anthropic advierte de riesgos de la IA al presentar su salida a bolsa': 'Anthropic warns of AI risks ahead of its stock market listing',
    'Una alerta de ciberseguridad pone el foco en fallas de PHP': 'A cybersecurity alert highlights flaws in PHP',
    'Crece el debate público sobre la expansión de los centros de datos': 'Public debate grows over data centre expansion',
    'Al presentar documentos para cotizar en bolsa, la compañía describió riesgos asociados al desarrollo y uso de sistemas avanzados de IA, junto con posibles beneficios. El artículo recoge lo declarado por la empresa y el contexto de su presentación.': 'In its stock market filing, the company described risks associated with developing and using advanced AI systems, as well as potential benefits. The article reports the company’s statements and the context of its filing.',
    'El reportaje explica cómo investigadores identificaron dos vulnerabilidades en PHP y cómo distintas organizaciones respondieron con parches y medidas de precaución. La BBC indica que, al actualizar la nota, no se habían reportado explotaciones exitosas.': 'The report explains how researchers identified two vulnerabilities in PHP and how organizations responded with patches and precautions. The BBC says that, when the article was updated, no successful exploitation had been reported.',
    'La BBC examina la expansión de los centros de datos y las preocupaciones expresadas por comunidades sobre su consumo eléctrico y sus posibles efectos ambientales. El artículo también explica su relación con los servicios digitales y la infraestructura de IA.': 'The BBC examines the expansion of data centres and community concerns about their electricity use and potential environmental effects. The article also explains their role in digital services and AI infrastructure.',
    'IA y responsabilidad': 'AI and responsibility',
    'Infraestructura y sociedad': 'Infrastructure and society',
    'Imagen ilustrativa sobre inteligencia artificial; no representa el acontecimiento ni procede del artículo.': 'Illustrative image about artificial intelligence; it does not depict the event or come from the article.',
    'Imagen ilustrativa sobre seguridad digital; no representa las vulnerabilidades descritas en el artículo.': 'Illustrative image about digital security; it does not depict the vulnerabilities described in the article.',
    'Imagen ilustrativa de un espacio de trabajo tecnológico; no muestra un centro de datos.': 'Illustrative image of a technology workspace; it does not show a data centre.',
    'Explorar las historias': 'Explore the stories',
    'Conocer el proyecto': 'About the project',
    'Espacios para los trabajos escolares.': 'Spaces for school projects.',
    'Aquí se reúne la información disponible para cada trabajo escolar.': 'Available information for each school project is collected here.',
    'Grupo 1 · Institucional': 'Group 1 · Institutional',
    'Home / Who are we?': 'Home / Who are we?',
    'Presentación del proyecto y sus apartados institucionales.': 'Project introduction and institutional sections.',
    'Más allá del feed es un proyecto escolar de información y análisis que explora la relación entre la tecnología, los medios digitales y la sociedad. Busca ir más allá de lo que vemos en las pantallas, examinando las ideas, los impactos y las preguntas que surgen de nuestra vida digital.': 'Beyond the Feed is a student information and analysis project exploring the relationship between technology, digital media, and society. It looks beyond what we see on screens to examine the ideas, impacts, and questions that emerge from our digital lives.',
    'Aquí conviven explicaciones generales, preguntas para el debate y noticias enlazadas a sus fuentes originales. Las imágenes de apoyo se identifican como ilustrativas y no se presentan como fotografías de los acontecimientos.': 'The project brings together general explanations, discussion questions, and news linked to its original sources. Supporting images are identified as illustrative and are not presented as photographs of the events.',
    'Este es un espacio creado para informar, orientar y prevenir sobre el uso adecuado de la tecnología sin dejar que te controle o te vuelva adicto. Aquí se encontrará información útil sobre los beneficios y riesgos en el Internet, sumado a eso, tips para mejorar tu navegación.': 'This space was created to inform, guide, and help prevent problems by promoting appropriate technology use without letting it control you or become an addiction. Here you will find useful information about the benefits and risks of using the internet, along with tips to improve your browsing experience.',
    'La siguiente página está creada para ser dinámica, accesible y amigable, permitiendo que cualquier persona pueda aprender, resolver dudas y encontrar recomendaciones de forma sencilla.': 'This page is designed to be dynamic, accessible, and user-friendly, so anyone can learn, get answers, and find recommendations easily.',
    'Introducción': 'Introduction',
    'Mission': 'Mission',
    'Informar, analizar y generar conciencia sobre el impacto de la tecnología en la sociedad mediante contenidos de calidad que promuevan el pensamiento crítico, la reflexión y el diálogo.': 'To inform, analyze, and raise awareness of technology’s impact on society through quality content that encourages critical thinking, reflection, and dialogue.',
    'Vision': 'Vision',
    'Ser un referente digital en la construcción de una comunidad informada, crítica y consciente, que comprenda el poder de la tecnología y la utilice para construir un mejor futuro.': 'To become a digital reference for building an informed, critical, and aware community that understands the power of technology and uses it to create a better future.',
    'Valores': 'Values',
    'Veracidad': 'Accuracy',
    'Basarnos en hechos y fuentes verificables, evitando presentar rumores como información confirmada.': 'We rely on facts and verifiable sources, and avoid presenting rumors as confirmed information.',
    'Pensamiento crítico': 'Critical thinking',
    'Cuestionar la información, examinar argumentos y contrastar diferentes perspectivas.': 'We question information, examine arguments, and compare different perspectives.',
    'Respeto': 'Respect',
    'Reconocer diferentes opiniones y tratar los temas y las personas con responsabilidad.': 'We recognize different opinions and treat topics and people responsibly.',
    'Innovación': 'Innovation',
    'Explorar nuevas formas de comunicar, investigar y comprender las historias.': 'We explore new ways to communicate, research, and understand stories.',
    'Objectives': 'Objectives',
    'Espacio reservado para agregar los objetivos cuando se defina su contenido.': 'Reserved space for objectives to be added once their content is defined.',
    'AI Domination?': 'AI Domination?',
    'Inteligencia artificial': 'Artificial intelligence',
    'Cybercrimes': 'Cybercrimes',
    'Casos seleccionados y recomendaciones para reconocer riesgos y cuidar la seguridad digital.': 'Selected cases and recommendations for recognizing risks and staying safe online.',
    'Dos espacios para agregar los delitos cibernéticos seleccionados y su mapa mental o diseño.': 'Two spaces for the selected cybercrimes and their mind map or design.',
    'Qué es:': 'What it is:',
    'Cómo cuidarte:': 'Protect yourself:',
    'Ilustración digital de una cabeza rodeada por elementos en órbita.': 'Digital illustration of a head surrounded by orbiting elements.',
    'Silueta de una persona frente a una computadora.': 'Silhouette of a person in front of a computer.',
    'El orbiting ocurre cuando alguien sigue pendiente de la actividad en redes de otra persona después de cortar el contacto, por ejemplo, viendo sus historias o reaccionando a sus publicaciones sin retomar una conversación. Por sí solo no siempre constituye un delito, pero puede convertirse en acoso si es persistente, invasivo o incluye vigilancia, amenazas o difusión de información privada.': 'Orbiting happens when someone keeps tracking another person’s social media activity after contact has ended, for example by viewing their stories or reacting to posts without restarting a conversation. On its own, it is not always a crime, but it can become harassment when it is persistent or invasive, or involves surveillance, threats, or sharing private information.',
    'Ajusta la privacidad de tus cuentas, restringe o bloquea a quien te incomode y guarda pruebas si la conducta continúa. Si te genera inseguridad, busca apoyo de alguien de confianza.': 'Adjust your account privacy settings, restrict or block anyone who makes you uncomfortable, and save evidence if the behavior continues. If it makes you feel unsafe, seek help from someone you trust.',
    'El grooming es una forma de manipulación en línea: una persona adulta busca ganarse la confianza de un menor con fines de explotación o abuso sexual. Puede presionarlo para guardar secretos, cambiar a conversaciones privadas o compartir datos o imágenes íntimas.': 'Grooming is a form of online manipulation in which an adult tries to gain a minor’s trust for the purpose of sexual exploitation or abuse. They may pressure the minor to keep secrets, move to private conversations, or share personal details or intimate images.',
    'No es culpa del menor. Si alguien te presiona o te hace sentir incómodo, corta el contacto si puedes, bloquea y reporta la cuenta, conserva los mensajes y cuéntaselo cuanto antes a un adulto de confianza. Si existe peligro inmediato, busca ayuda de emergencia.': 'A minor is never to blame for being manipulated. If someone pressures you or makes you uncomfortable, stop contact if you can, block and report the account, keep the messages, and tell a trusted adult as soon as possible. If there is immediate danger, seek emergency help.',
    'Imagen de referencia · Unsplash': 'Reference image · Unsplash',
    'Parallel': 'Comparison',
    'Cada integrante presentará su comparación individual de los beneficios y las desventajas de la inteligencia artificial.': 'Each team member will present an individual comparison of the benefits and drawbacks of artificial intelligence.',
    'Comparación individual pendiente de agregar.': 'Individual comparison pending.',
    'Comparación entre los beneficios y las desventajas de la inteligencia artificial.': 'A comparison of the benefits and drawbacks of artificial intelligence.',
    'Beneficios': 'Benefits',
    'Contenido por agregar.': 'Content to be added.',
    'Desventajas': 'Drawbacks',
    "Statements (I'll be right back)": "Statements (I'll be right back)",
    'Integrante 1': 'Team member 1',
    'Integrante 2': 'Team member 2',
    'Integrante 3': 'Team member 3',
    'Integrante 4': 'Team member 4',
    'Integrante 5': 'Team member 5',
    'Espacio reservado para su tesis individual.': 'Reserved space for their individual thesis.',
    'Tesis sobre influencers': 'Theses about influencers',
    'Tesis general': 'General thesis',
    'Cómo los influencers pueden apoyar el aprendizaje y el emprendimiento cuando se comparte información confiable.': 'How influencers can support learning and entrepreneurship when they share reliable information.',
    'Tesis general · Borrador': 'General thesis · Draft',
    'Borrador basado en las argumentaciones recibidas de Emanuel y Miguel Ángel.': 'Draft based on the arguments submitted by Emanuel and Miguel Ángel.',
    'Las redes sociales han convertido a los influencers en participantes importantes de la circulación de conocimientos y experiencias. Mediante contenidos, consejos y cursos, pueden acercar a más personas temas relacionados con el desarrollo personal, la tecnología y el emprendimiento.': 'Social media has made influencers important participants in the circulation of knowledge and experience. Through content, advice, and courses, they can make topics related to personal development, technology, and entrepreneurship more accessible.',
    'Esta influencia puede ser especialmente útil para quienes empiezan un proyecto o necesitan comprender temas complejos, incluidas decisiones económicas. Las experiencias compartidas ofrecen ideas para evaluar opciones y reconocer desafíos; sin embargo, cada negocio y cada persona tienen circunstancias distintas.': 'This influence can be especially useful for people starting a project or trying to understand complex topics, including financial decisions. Shared experiences can offer ideas for weighing options and recognizing challenges; however, every business and person has different circumstances.',
    'Además, Internet facilita el acceso a información, pero no todo contenido es exacto ni adecuado para todos. Contrastar fuentes, revisar la experiencia de quien publica y analizar críticamente sus recomendaciones ayuda a reducir el riesgo de engaños y decisiones poco informadas.': 'The internet also makes information easy to access, but not all content is accurate or suitable for everyone. Checking sources, considering the author’s experience, and critically assessing recommendations can help reduce the risk of deception and poorly informed decisions.',
    'Por ello, los influencers pueden contribuir al aprendizaje y al desarrollo de sus comunidades cuando comunican de manera responsable y fundamentan sus consejos. Su contenido debe complementar, no sustituir, las fuentes especializadas o la orientación profesional.': 'Influencers can therefore contribute to learning and the development of their communities when they communicate responsibly and support their advice with evidence. Their content should complement, not replace, specialized sources or professional guidance.',
    'Tesis sobre influencers | Más allá del feed': 'Influencer Theses | Beyond the Feed',
    'Más allá del feed · Influencers': 'Beyond the Feed · Influencers',
    'Argumentos del equipo sobre aprendizaje, desarrollo personal y emprendimiento.': 'Team arguments on learning, personal development, and entrepreneurship.',
    'Las tesis individuales del equipo': 'The team’s individual theses',
    'El texto de esta tesis queda pendiente de agregar.': 'The thesis text is pending.',
    'Volver a Influencers': 'Back to Influencers',
    'Abrir todas las tesis en una pestaña nueva': 'Open all theses in a new tab',
    'Abrir tesis completa ↗': 'Open full thesis ↗',
    'Mapa mental de influencers y sus áreas de interés.': 'Mind map of influencers and their areas of interest.',
    'Tesis individuales': 'Individual theses',
    'Tesis individual pendiente de agregar.': 'Individual thesis pending.',
    'Con la expansión de las redes sociales, han surgido creadores que comparten sus habilidades, conocimientos y experiencias sobre temas que pueden contribuir al desarrollo personal.': 'As social media has grown, creators have emerged who share their skills, knowledge, and experiences on topics that can contribute to personal development.',
    'La conectividad permite que estos aprendizajes lleguen a más personas. Al compartir sus experiencias, los influencers pueden ayudar a comprender temas económicos, sociales y políticos, y aportar ideas para abordar distintos problemas.': 'Connectivity allows these lessons to reach more people. By sharing their experiences, influencers can help audiences understand economic, social, and political topics and offer ideas for addressing different problems.',
    'Internet también facilita el acceso a información en pocos segundos. Consultar fuentes confiables y contrastar lo que encontramos ayuda a tomar decisiones informadas y a reducir el riesgo de caer en engaños o estafas.': 'The internet also provides quick access to information. Consulting reliable sources and checking what we find against other sources can support informed decisions and reduce the risk of deception or scams.',
    'Por eso, el contenido de los influencers se ha convertido en una forma cotidiana de aprendizaje para muchas personas. Su capacidad para comunicar y conectar con sus audiencias puede acercar conocimientos y experiencias útiles.': 'For many people, influencer content has become part of everyday learning. Influencers’ ability to communicate and connect with their audiences can make useful knowledge and experiences more accessible.',
    'En conclusión, las redes sociales y los influencers pueden favorecer el aprendizaje y el desarrollo personal. Para que esa influencia sea positiva, es importante analizar la información con pensamiento crítico y no sustituir la orientación de profesionales o fuentes especializadas.': 'In conclusion, social media and influencers can support learning and personal development. For that influence to be positive, it is important to assess information critically and not treat it as a substitute for advice from professionals or specialized sources.',
    'El desarrollo de la tecnología y la inteligencia artificial ha abierto nuevas oportunidades para el comercio y para empresas que nacen de ideas sencillas. En ese proceso, especialistas y creadores de contenido pueden compartir conocimientos, consejos y cursos que orienten a quienes quieren iniciar un emprendimiento.': 'Developments in technology and artificial intelligence have opened new opportunities for commerce and for businesses that begin with simple ideas. Specialists and content creators can share knowledge, advice, and courses to guide people who want to start a business.',
    'Empezar un negocio puede ser complejo, especialmente al tomar decisiones financieras. Conocer las experiencias de otras personas ayuda a entender los desafíos, evaluar opciones y encontrar posibles soluciones.': 'Starting a business can be challenging, especially when making financial decisions. Learning from other people’s experiences can help new entrepreneurs understand challenges, weigh options, and find possible solutions.',
    'Algunos empresarios y expertos comparten métodos, aprendizajes y errores acumulados a lo largo de su trayectoria. Ese contenido puede ofrecer puntos de partida útiles, aunque cada emprendimiento debe adaptarse a sus circunstancias y verificar la información.': 'Some business owners and experts share methods, lessons, and mistakes gathered throughout their careers. This content can offer useful starting points, though every business should adapt advice to its circumstances and verify the information.',
    'Así, influencers con experiencia en tecnología y negocios pueden acercar conocimientos a quienes comienzan y fomentar el aprendizaje colaborativo. Su orientación puede ser valiosa, pero debe complementarse con análisis crítico y fuentes confiables.': 'In this way, influencers with experience in technology and business can make knowledge more accessible to beginners and encourage collaborative learning. Their guidance can be valuable, but it should be combined with critical thinking and reliable sources.',
    'En la actualidad, los influencers tienen un gran impacto en la vida de las personas porque sus mensajes circulan a gran escala, influyen en decisiones, hábitos y formas de pensar, y muchas veces llegan a públicos que buscan orientación, inspiración o aprendizaje. Aunque no todos tienen el mismo nivel de reconocimiento, quienes comparten contenido útil y bien fundamentado pueden transformar la manera en que otras personas entienden temas de salud, productividad, economía y medio ambiente.': 'Influencers have a significant impact on people’s lives because their messages reach large audiences and shape decisions, habits, and ways of thinking. Their content often reaches people seeking guidance, inspiration, or learning. Although not all influencers are equally well-known, those who share useful, well-supported content can change how people understand health, productivity, economics, and the environment.',
    'El verdadero valor del contenido digital no está solo en la fama, sino en la calidad del mensaje. Los creadores que abordan temas como la inteligencia financiera, el crecimiento personal, la sostenibilidad y la salud mental aportan ideas que pueden servir para mejorar la vida cotidiana. Cuando ese tipo de contenido está bien estructurado, ayuda a que la gente adquiera conocimiento práctico y tome decisiones con más criterio.': 'The true value of digital content lies not only in fame but also in the quality of its message. Creators who discuss financial literacy, personal growth, sustainability, and mental health can share ideas that improve everyday life. Well-structured content on these topics helps people gain practical knowledge and make more considered decisions.',
    'Existen ejemplos claros de creadores que aportan valor real. Fran Romero enseña cómo crear marcas personales, trabajar digitalmente y escalar proyectos con recursos limitados; Humphrey Yang explica por qué evitar dejar el dinero estancado puede representar una pérdida de poder adquisitivo; Andrew Huberman y James Clear muestran cómo pequeños hábitos y decisiones diarias pueden generar grandes cambios con el tiempo. Del mismo modo, Isaías Hernández y Kristy Duthman usan sus plataformas para divulgar temas ambientales de manera accesible y motivadora, ayudando a la gente a comprender problemas complejos y a actuar con esperanza.': 'There are clear examples of creators who offer real value. Fran Romero teaches how to build personal brands, work online, and grow projects with limited resources; Humphrey Yang explains how leaving money idle can erode its purchasing power; and Andrew Huberman and James Clear show how small habits and daily choices can lead to significant changes over time. Likewise, Isaías Hernández and Kristy Duthman use their platforms to explain environmental issues in an accessible, motivating way, helping people understand complex problems and take hopeful action.',
    'Por eso, las redes sociales pueden ser herramientas positivas si se usan con conciencia. En lugar de consumir contenido superficial o vacío, es importante buscar a los creadores que aporten información útil, reflexiva y con sentido. Cuando la influencia se orienta al aprendizaje, la organización personal y el bienestar colectivo, puede convertirse en una poderosa herramienta para crecer y tomar decisiones más responsables.': 'Social media can therefore be a positive tool when used mindfully. Instead of consuming superficial or empty content, it is important to seek creators who share useful, thoughtful, and meaningful information. When influence supports learning, personal organization, and collective well-being, it can help people grow and make more responsible decisions.',
    'Desde la llegada de la tecnología, varios ámbitos de la vida han ido evolucionando, y uno de los más impactados ha sido el entretenimiento y la manera en que las personas se relacionan entre sí. En palabras más cortas, las redes sociales han transformado la comunicación, la información y la forma en que percibimos la realidad.': 'Since technology emerged, many areas of life have changed, especially entertainment and the way people relate to one another. In short, social media has transformed communication, information, and how we perceive reality.',
    'En esos espacios existen usuarios que publican contenido sobre diferentes temas, algunos de mayor tendencia y otros de gran relevancia para la vida cotidiana. A estas personas se les conoce como influencers. Muchos de ellos hablan sobre temas importantes como la inteligencia financiera, el ahorro, las inversiones y la educación económica, temas que pueden ayudar a las personas a tomar decisiones más responsables con su dinero.': 'People post about many subjects on these platforms: some are trending, while others are highly relevant to everyday life. These creators are known as influencers. Many discuss topics such as financial literacy, saving, investing, and economic education, which can help people make more responsible decisions about money.',
    'Andrés Garza es un ejemplo claro de esta mirada, porque democratiza el conocimiento financiero y explica conceptos que pueden ser útiles para cualquiera. No hay nada más poderoso que estar informado sobre ahorro e inversión, especialmente cuando se toman decisiones que afectan el futuro económico de una persona. Asimismo, Baijavier ofrece contenidos sobre finanzas y transparencia en trámites bancarios, algo muy valioso para quienes buscan entender mejor el sistema financiero.': 'Andrés Garza is a clear example of this approach: he makes financial knowledge more accessible and explains concepts that can help anyone. Being informed about saving and investing is especially important when making decisions that affect a person’s financial future. Baijavier also shares information about finance and transparency in banking procedures, which is valuable for people seeking to better understand the financial system.',
    'Además del dinero, existen temas como el crecimiento personal y la salud mental, que tienen un impacto muy fuerte en la vida de las personas. Lean Molina propone hábitos, disciplina y una mentalidad más sólida, mientras que Coral Mujaes explica por qué la salud mental es tan importante como la salud física. En este mismo sentido, Carlota Bruna y María Testino destacan la importancia del cuidado ambiental y el impacto de la sobreconsumo.': 'Beyond money, personal growth and mental health also have a major impact on people’s lives. Lean Molina discusses habits, discipline, and developing a stronger mindset, while Coral Mujaes explains why mental health is as important as physical health. Similarly, Carlota Bruna and María Testino highlight environmental care and the impact of overconsumption.',
    'Los influencers no siempre tienen que ser personas con una vida artificial llena de lujo o exceso. También pueden ser quienes comparten contenido útil, honesto y con valor real para la sociedad. Por eso, las redes sociales pueden funcionar como herramientas de aprendizaje y crecimiento si se usan de manera consciente y crítica.': 'Influencers do not have to present an artificial life of luxury or excess. They can also be people who share useful, honest content with real value for society. Social media can therefore support learning and growth when used mindfully and critically.',
    'Cuando se habla de los influencers, hay bastantes clichés en cuanto a las personas que se dedican a esto, sin tener en cuenta que estos han logrado posicionarse en diferentes ámbitos, desarrollados para ayudar al individuo y la comunidad.': 'There are many clichés about influencers, often overlooking how they have established themselves in different fields and developed content that can help individuals and communities.',
    'Gracias a esto, se ha facilitado el aprendizaje por medio de la tecnología, en una variedad inmensa de temas, si se habla de finanzas, hay un grupo específico para esto, un ejemplo de los mismos, serían "Mis propias finanzas" un matrimonio que presenta y ayuda a las personas a invertir y ahorrar; en el mismo entorno está "Tori Dunlap" una chica estadounidense que se centra en las finanzas pero hacia las mujeres, los dos influenciadores aportan sus conocimientos al mundo.': 'Technology has made it easier to learn about a wide range of subjects. In finance, for example, “Mis Propias Finanzas” is a married couple who teach people about investing and saving. Tori Dunlap, an American creator who focuses on women’s finances, works in the same field. Both influencers share their knowledge with the world.',
    'Las personas tienen que tomar conciencia sobre sus comportamientos, para llegar a darse cuenta de las falencias que se están teniendo, en eso te puedo ayudar "Margarita pasos", una influenciadora dedicada a ayudar a las personas con la ansiedad y depresión a través del autoconocimiento, también está "Jay Shatty" que no solo se enfoca en la introspección, sino que además te ayuda a crear hábitos, los dos usando la experiencia personal como inspiración para lograr la superación personal.': 'People need to reflect on their behavior to recognize where they may be struggling. Margarita Pasos helps people address anxiety and depression through self-awareness. Jay Shetty also encourages introspection and helps people build habits. Both draw on personal experience to inspire personal growth.',
    'Ese es el único planeta que tenemos y si no aprendemos a cuidarlo, ¿dónde viviremos? Eso es algo que se plantea Sara Samaniego o como se apoda en redes, "Marce, la Recicladora", que ayuda a todo su público a saber cómo clasificar y reciclar residuos; Carmen Hijosa, diseñadora española que se enfocó en tejidos tradicionales con un biomaterial creado por ella, ambas, aunque diferentes se mueven por la misma causa que es cuidar el planeta, aportando su propia creatividad para lograr que las personas también desarrollen ideas propias y ayuden a esa causa colectiva.': 'This is the only planet we have; if we do not learn to care for it, where will we live? Sara Samaniego, known online as “Marce, la Recicladora,” teaches her audience how to sort and recycle waste. Spanish designer Carmen Hijosa developed a biomaterial inspired by traditional textiles. Although their work differs, both contribute creatively to the shared cause of protecting the planet and encourage others to develop ideas of their own.',
    'El poder que tienen ciertas personas para influenciar a las masas es esencial, porqué con éste, podríamos lograr el avance total y el crecimiento en la humanidad.': 'The ability of certain people to influence large audiences matters because it can help drive human progress and growth.',
    'Manos metálicas interactuando con un teléfono inteligente.': 'Metal hands interacting with a smartphone.',
    'Ojo que aparece en un billete de dólar.': 'Eye appearing on a dollar bill.',
    'Tecla Enter de vidrio cromado.': 'Chrome-glass Enter key.',
    'Escultura de un filósofo leyendo un libro.': 'Sculpture of a philosopher reading a book.',
    'Mostrar tesis individuales': 'Show individual theses',
    'Ocultar tesis individuales': 'Hide individual theses',
    'Ecosistema digital conectado con inteligencia artificial, redes sociales, educación, salud y crecimiento económico.': 'Connected digital ecosystem featuring artificial intelligence, social media, education, healthcare, and economic growth.',
    'Declaraciones individuales': 'Statements',
    'Influencers y tesis': 'Influencers and theses',
    'Influencers / Texts': 'Influencers / Texts',
    'Mind Map': 'Mind Map',
    'Mapa mental de influencers de impacto y desarrollo. Pulsa para desplegar sus seis perfiles.': 'Mind map of influencers focused on impact and growth. Select to reveal all six profiles.',
    'Mostrar influencers': 'Show influencers',
    'Ocultar influencers': 'Hide influencers',
    'Influencers': 'Influencers',
    'Seis perfiles organizados por los temas del mapa mental.': 'Six profiles organized by the mind map topics.',
    'Sostenibilidad y medioambiente': 'Sustainability and the environment',
    'Educación ambiental': 'Environmental education',
    'Marce, la Recicladora': 'Marce, the Recycler',
    'Creadora de contenido y educadora ambiental que acerca el reciclaje y la gestión responsable de residuos a la vida cotidiana.': 'A content creator and environmental educator who brings recycling and responsible waste management into everyday life.',
    'Especialidad:': 'Specialty:',
    'reciclaje y divulgación ambiental.': 'recycling and environmental outreach.',
    'Aporte:': 'Contribution:',
    'ayuda a visibilizar el trabajo de reciclaje y promueve una participación más consciente.': 'she highlights recycling work and encourages more conscious participation.',
    'Instagram': 'Instagram',
    'YouTube': 'YouTube',
    'Innovación textil': 'Textile innovation',
    'Carmen Hijosa': 'Carmen Hijosa',
    'Diseñadora y emprendedora vinculada con la innovación textil y Piñatex, un material desarrollado por Ananas Anam a partir de fibra de hoja de piña.': 'A designer and entrepreneur associated with textile innovation and Piñatex, a material developed by Ananas Anam from pineapple leaf fiber.',
    'diseño e innovación de materiales textiles.': 'textile design and materials innovation.',
    'impulsa la exploración de alternativas materiales en la industria textil.': 'she encourages the exploration of alternative materials in the textile industry.',
    'Ananas Anam · Piñatex': 'Ananas Anam · Piñatex',
    'Crecimiento personal': 'Personal growth',
    'Desarrollo personal': 'Personal development',
    'Margarita Pasos': 'Margarita Pasos',
    'Creadora y comunicadora que comparte contenidos de crecimiento personal y herramientas prácticas para la vida cotidiana.': 'A creator and communicator who shares personal growth content and practical tools for everyday life.',
    'Temas:': 'Topics:',
    'hábitos, motivación y desarrollo personal.': 'habits, motivation, and personal development.',
    'invita a la reflexión y al aprendizaje personal sin que sus consejos sustituyan orientación profesional.': 'she encourages reflection and personal learning; her advice is not a substitute for professional guidance.',
    'Redes oficiales: pendientes de verificar.': 'Official social accounts: pending verification.',
    'Bienestar y propósito': 'Well-being and purpose',
    'Jay Shetty': 'Jay Shetty',
    'Autor, presentador del pódcast On Purpose y creador de contenidos sobre relaciones, propósito y bienestar.': 'An author, host of the On Purpose podcast, and content creator covering relationships, purpose, and well-being.',
    'relaciones, mindfulness y propósito.': 'relationships, mindfulness, and purpose.',
    'presenta conversaciones y herramientas para la reflexión personal; sus contenidos no sustituyen orientación profesional.': 'he shares conversations and tools for personal reflection; his content is not a substitute for professional guidance.',
    'Sitio oficial': 'Official website',
    'Finanzas y educación financiera': 'Finance and financial education',
    'Educación financiera': 'Financial education',
    'Andrés Garza': 'Andrés Garza',
    'Proyecto educativo que comparte recursos para entender, cuidar y organizar las finanzas personales.': 'An educational project sharing resources to understand, manage, and organize personal finances.',
    'presupuesto, ahorro, inversión y decisiones financieras personales.': 'budgeting, saving, investing, and personal financial decisions.',
    'ofrece herramientas educativas para apoyar una toma de decisiones más informada.': 'it offers educational tools to support more informed decision-making.',
    'Finanzas personales': 'Personal finance',
    'Tori Dunlap': 'Tori Dunlap',
    'Fundadora de Her First $100K, un proyecto de educación financiera para ayudar a mujeres a desarrollar su autonomía económica.': 'Founder of Her First $100K, a financial education project that helps women build economic independence.',
    'presupuesto, deuda, negociación salarial e inversión.': 'budgeting, debt, salary negotiation, and investing.',
    'facilita recursos para fortalecer la confianza y la autonomía en decisiones financieras.': 'she provides resources to build confidence and independence in financial decisions.',
    'Her First $100K': 'Her First $100K',
    'Influencers y voces clave.': 'Influencers and key voices.',
    'Este mapa conecta seis perfiles que aportan perspectivas relevantes en sostenibilidad, desarrollo personal y finanzas. La idea no es adoptar una visión única ni prometer fórmulas mágicas, sino explorar voces con contenido útil, verificable y con impacto real en la vida cotidiana.': 'This map connects six profiles offering perspectives on sustainability, personal growth, and finance. Rather than promoting a single point of view or promising quick fixes, it introduces voices sharing useful, verifiable content with a real impact on everyday life.',
    'Categorías de influencers': 'Influencer categories',
    'Categoría A': 'Category A',
    'Categoría B': 'Category B',
    'Categoría C': 'Category C',
    'Textiles sostenibles': 'Sustainable textiles',
    'Sostenibilidad': 'Sustainability',
    'Comunicadora y referente en educación ambiental que trabaja para visibilizar la importancia del reciclaje, la reutilización y el consumo responsable en comunidades y medios digitales.': 'A communicator and environmental education advocate who highlights the importance of recycling, reuse, and responsible consumption in communities and digital media.',
    'Especialidad:': 'Specialty:',
    'educación ambiental y reciclaje creativo.': 'environmental education and creative recycling.',
    'convierte la basura en un tema visible, cercano y colectivo, con foco en la conciencia ambiental.': 'she makes waste a visible, relatable, and collective issue, with a focus on environmental awareness.',
    'Diseñadora y emprendedora conocida por su trabajo en innovación textil y el desarrollo de Piñatex, un material elaborado a partir de fibra de piña, como alternativa más sostenible en la industria textil.': 'A designer and entrepreneur known for her work in textile innovation and the development of Piñatex, a material made from pineapple fiber as a more sustainable alternative for the textile industry.',
    'innovación textil sostenible y materiales alternativos.': 'sustainable textile innovation and alternative materials.',
    'aporta una visión de diseño con impacto ambiental en la moda y la producción textil.': 'she brings a design perspective focused on environmental impact in fashion and textile production.',
    'Educadora y comunicadora especializada en bienestar emocional, hábitos y crecimiento personal, con un enfoque cercano y práctico para acompañar procesos de mejora personal sin promesas irreales.': 'An educator and communicator specializing in emotional well-being, habits, and personal growth. Her approachable, practical perspective supports personal development without unrealistic promises.',
    'hábitos, autonomía, salud mental y propósito.': 'habits, independence, mental health, and purpose.',
    'ofrece herramientas concretas para organizar la vida diaria y trabajar en bienestar con perspectiva realista.': 'she offers practical tools for organizing daily life and supporting well-being with a realistic perspective.',
    'Mindfulness y propósito': 'Mindfulness and purpose',
    'Autor y creador de contenido centrado en bienestar, atención plena, relaciones y sentido personal. Su contenido combina filosofía, conversación y orientación práctica para la vida cotidiana.': 'An author and content creator focused on well-being, mindfulness, relationships, and personal meaning. His work combines philosophy, conversation, and practical guidance for everyday life.',
    'bienestar, propósito, relaciones y equilibrio.': 'well-being, purpose, relationships, and balance.',
    'comparte herramientas para la reflexión personal, siempre con un enfoque de aprendizaje continuo.': 'he shares tools for personal reflection with an emphasis on continuous learning.',
    'Creador de contenido que comparte conocimientos financieros y explica conceptos de ahorro e inversión.': 'A content creator who shares financial knowledge and explains saving and investing concepts.',
    'ahorro e inversión.': 'saving and investing.',
    'acerca conocimientos financieros para ayudar a tomar decisiones económicas informadas.': 'he shares financial knowledge to help people make informed economic decisions.',
    'Finanzas para jóvenes': 'Finance for young people',
    'Creadora de contenido enfocada en educación financiera, autonomía económica y toma de decisiones smarter con el dinero, especialmente para personas que buscan construir una base sólida en su relación con el dinero.': 'A content creator focused on financial education, economic independence, and smarter money decisions, especially for people building a solid foundation for managing their finances.',
    'ahorro, deuda, inversión, salario y libertad financiera.': 'saving, debt, investing, salary, and financial freedom.',
    'enfrenta el tema financiero con lenguaje claro, práctico y orientado a la acción responsable.': 'she approaches finance with clear, practical language and an emphasis on responsible action.',
    'Ver perfil': 'View profile',
    'Ver perfil de Marce, la Recicladora': 'View Marce, the Recycler’s profile',
    'Ver perfil de Carmen Hijosa': 'View Carmen Hijosa’s profile',
    'Ver perfil de Margarita Pasos': 'View Margarita Pasos’s profile',
    'Ver perfil de Jay Shetty': 'View Jay Shetty’s profile',
    'Ver perfil de Andrés Garza': 'View Andrés Garza’s profile',
    'Ver perfil de Tori Dunlap': 'View Tori Dunlap’s profile',
    'Texts': 'Texts',
    'Párrafo inicial': 'Opening paragraph',
    'Espacio reservado para el párrafo introductorio de la página.': 'Reserved space for the page introduction.',
    'Textos escolares sobre los influencers': 'School texts about influencers',
    'Texto por agregar': 'Text to be added',
    'Espacio reservado para completar este texto escolar.': 'Reserved space for this school text.',
    'Selección editorial': 'Editorial selection',
    'Noticias de IA y tecnología.': 'AI and technology news.',
    'Una selección de publicaciones sobre inteligencia artificial, plataformas digitales, ciberseguridad y su impacto social. Cada tarjeta conduce al artículo original para consultar su contexto y los detalles en la fuente.': 'A selection of reporting on artificial intelligence, digital platforms, cybersecurity, and their social impact. Each card links to the original article for context and details from the source.',
    'Cargando la selección de noticias…': 'Loading the news selection…',
    'Activa JavaScript para consultar las noticias de la lista local.': 'Enable JavaScript to view the local news list.',
    'Temas para explorar': 'Topics to explore',
    'Preguntas que merecen otra mirada.': 'Questions worth a closer look.',
    'Demostración': 'Demo',
    '¿La IA ya reemplaza a los humanos?': 'Is AI already replacing humans?',
    'Entre el miedo y la oportunidad, la inteligencia artificial sigue transformando el mundo del trabajo. ¿Estamos preparados para lo que viene?': 'Between fear and opportunity, artificial intelligence continues to transform the world of work. Are we ready for what comes next?',
    'Leer historia →': 'Read the story →',
    'Bienestar digital': 'Digital well-being',
    '¿Qué lugar ocupan las redes en el bienestar cotidiano?': 'What role does social media play in everyday well-being?',
    'Una pregunta para considerar experiencias distintas y contrastarlas con información confiable.': 'A question that invites us to consider different experiences and compare them with reliable information.',
    'Respuesta:': 'Answer:',
    'Las redes sociales no afectan a todas las personas de la misma manera. Pueden ayudar a mantener amistades, encontrar comunidades de apoyo y descubrir información; también pueden generar presión por compararse o permanecer conectado.': 'Social media does not affect everyone in the same way. It can help people maintain friendships, find supportive communities, and discover information; it can also create pressure to compare oneself with others or stay constantly connected.',
    'El efecto depende del contenido, del tiempo de uso y de cómo se usan las plataformas. Desplazarse durante mucho tiempo sin interactuar puede hacer que algunas personas se sientan peor, mientras que conversar con amistades o participar en comunidades de interés puede fortalecer la conexión. Las notificaciones y el uso nocturno también pueden interrumpir el descanso.': 'The effect depends on the content, time spent, and how the platforms are used. Scrolling for a long time without interacting may make some people feel worse, while talking with friends or joining communities of interest can strengthen connection. Notifications and nighttime use can also disrupt rest.',
    'Una forma práctica de evaluar el impacto es observar cómo te sientes antes y después de usar las redes, qué actividades desplazan y si afectan el sueño, el estudio o las relaciones. Puedes silenciar notificaciones, dejar el teléfono fuera de la habitación por la noche, hacer pausas y dejar de seguir cuentas que te generen malestar. Si el uso se vuelve difícil de controlar o afecta tu bienestar de forma persistente, habla con una persona adulta de confianza o un profesional.': 'A practical way to assess the impact is to notice how you feel before and after using social media, which activities it displaces, and whether it affects sleep, school, or relationships. You can mute notifications, keep your phone out of the bedroom at night, take breaks, and unfollow accounts that make you feel distressed. If use becomes difficult to control or persistently affects your well-being, talk with a trusted adult or a professional.',
    'Leer respuesta completa →': 'Read the full answer →',
    'Cultura digital': 'Digital culture',
    'Creación, autoría y reconocimiento en internet.': 'Creation, authorship, and recognition online.',
    'Un tema para conversar sobre las herramientas digitales y el valor que damos a las obras.': 'A topic for discussing digital tools and the value we place on creative work.',
    'Crear y compartir algo en internet no elimina el trabajo ni los derechos de quien lo hizo. Si reutilizas una imagen, una canción, un texto o una idea, identifica a su autor y revisa qué usos permite la licencia o solicita autorización cuando sea necesario.': 'Creating and sharing something online does not erase the creator’s work or rights. If you reuse an image, song, text, or idea, identify its creator and check what uses the license permits, or request permission when needed.',
    'Dar crédito es importante, pero no siempre sustituye el permiso: citar a la persona creadora no vuelve automáticamente legal cualquier copia o adaptación. Las reglas dependen del tipo de obra, la licencia, el propósito y la legislación aplicable. También conviene diferenciar entre inspiración, cita y reproducción, y conservar enlaces o datos de la fuente para que otras personas puedan encontrarla.': 'Giving credit matters, but it does not always replace permission: citing a creator does not automatically make every copy or adaptation lawful. Rules depend on the type of work, its license, the purpose, and applicable law. It is also useful to distinguish inspiration, quotation, and reproduction, and keep source links or details so others can find the original.',
    'Cuando se usan herramientas de inteligencia artificial, es responsable explicar qué herramienta se utilizó y para qué, especialmente en trabajos escolares o profesionales. Revisa el resultado, verifica sus fuentes y no atribuyas a una persona palabras o imágenes que no creó. Reconocer la autoría fomenta la confianza, permite que el público valore el trabajo original y ayuda a que el entorno digital sea más justo.': 'When using AI tools, it is responsible to explain which tool was used and for what, especially in school or professional work. Review the result, verify its sources, and do not attribute words or images to someone who did not create them. Acknowledging authorship builds trust, helps audiences value original work, and contributes to a fairer digital environment.',
    '¿La conexión digital siempre significa cercanía?': 'Does digital connection always mean closeness?',
    'Una invitación a pensar cómo se complementan la comunicación en línea y los vínculos personales.': 'An invitation to consider how online communication and personal relationships complement each other.',
    'Estar conectado no siempre significa sentirse cerca. Un mensaje, una llamada o un grupo en línea pueden mantener una relación a distancia y facilitar el apoyo, pero la cercanía también requiere confianza, atención y un interés mutuo que se construye con el tiempo.': 'Being connected does not always mean feeling close. A message, call, or online group can maintain a long-distance relationship and make support easier, but closeness also requires trust, attention, and mutual care built over time.',
    'La comunicación digital puede ser especialmente valiosa cuando las personas viven lejos, tienen horarios distintos o encuentran una comunidad que no tienen cerca. Aun así, los mensajes breves no siempre transmiten el tono o las emociones con claridad, y una conversación en línea puede quedarse en contacto superficial si no hay escucha o reciprocidad.': 'Digital communication can be especially valuable when people live far apart, have different schedules, or find a community they do not have nearby. Still, brief messages do not always convey tone or emotions clearly, and an online conversation can remain superficial without listening or reciprocity.',
    'Para fortalecer un vínculo, importa más la calidad que la cantidad de interacciones: conversar con atención, preguntar cómo está la otra persona, respetar sus límites y ofrecer ayuda concreta. Cuando sea posible y ambas personas lo quieran, compartir tiempo fuera de la pantalla también puede complementar la relación. La tecnología sirve mejor como puente para el encuentro y el apoyo, no como una medida única de cuánta cercanía existe.': 'To strengthen a relationship, the quality of interactions matters more than the quantity: talk attentively, ask how the other person is doing, respect their boundaries, and offer concrete help. When possible and mutually welcome, spending time together away from screens can also complement the relationship. Technology works best as a bridge to connection and support, not as the sole measure of closeness.',
    'La IA también merece una mirada crítica.': 'AI deserves a critical look, too.',
    'La inteligencia artificial puede ser útil, pero no es neutral ni infalible. Sus datos, objetivos y decisiones de diseño pueden afectar la privacidad, ampliar desigualdades y cambiar la forma en que trabajamos y aprendemos. Explora estos impactos y abre cada tema para leer el análisis completo.': 'Artificial intelligence can be useful, but it is neither neutral nor infallible. Its data, objectives, and design decisions can affect privacy, widen inequalities, and change how we work and learn. Explore these impacts and open each topic to read the full analysis.',
    'Explorar el mapa de conexiones': 'Explore the connection map',
    'Privacidad y vigilancia algorítmica': 'Privacy and algorithmic surveillance',
    'Los sistemas de IA pueden inferir mucho más que lo que compartimos directamente: también analizan hábitos, relaciones y patrones de comportamiento.': 'AI systems can infer much more than what we share directly: they also analyze habits, relationships, and behavioral patterns.',
    '¿Cuál es el problema?': 'What is the problem?',
    'Para entrenar y operar sistemas de IA se recopilan y procesan grandes cantidades de información. Búsquedas, ubicación, voz, imágenes y actividad en plataformas pueden combinarse para inferir intereses, rutinas o características personales que nunca expresamos de forma explícita.': 'Large amounts of information are collected and processed to train and run AI systems. Searches, location, voice, images, and platform activity can be combined to infer interests, routines, or personal characteristics that we never explicitly shared.',
    'Esto puede hacer más cómodos algunos servicios, pero también permite perfilar a las personas, dirigirles publicidad o tomar decisiones sobre ellas con poca transparencia. El riesgo aumenta cuando los datos se conservan demasiado tiempo, se comparten con terceros o se usan para un propósito distinto del que la persona esperaba. Una predicción algorítmica puede parecer precisa sin ser correcta, y aun así influir en qué contenidos, oportunidades o precios se muestran.': 'This can make some services more convenient, but it can also enable profiling, targeted advertising, or opaque decisions about people. The risk grows when data is kept too long, shared with third parties, or used for a purpose people did not expect. An algorithmic prediction may seem precise without being correct, yet still influence which content, opportunities, or prices are shown.',
    '¿Qué conviene hacer?': 'What can we do?',
    'Antes de usar una herramienta, revisa qué datos solicita y para qué; limita permisos que no sean necesarios y evita introducir información íntima, financiera o identificable en servicios cuya política no conoces. Las organizaciones que implementan IA deben explicar qué datos procesan, protegerlos, permitir corregir errores y ofrecer alternativas cuando una decisión tenga consecuencias importantes. La privacidad no depende solo de que cada usuario “tenga cuidado”: también requiere límites y responsabilidades para quienes diseñan y despliegan estas tecnologías.': 'Before using a tool, check what data it requests and why; limit unnecessary permissions and avoid entering intimate, financial, or identifying information into services whose policies you do not know. Organizations using AI should explain what data they process, protect it, allow errors to be corrected, and offer alternatives when a decision has significant consequences. Privacy does not depend only on each user “being careful”; it also requires limits and accountability for those who design and deploy these technologies.',
    'Sesgos y responsabilidad': 'Bias and accountability',
    'Una IA aprende de datos y decisiones humanas: puede repetir prejuicios, equivocarse de forma desigual y dificultar saber quién responde.': 'AI learns from data and human decisions: it can repeat prejudice, make unequal errors, and make it difficult to know who is accountable.',
    '¿De dónde vienen los sesgos?': 'Where does bias come from?',
    'Los modelos se entrenan con datos que reflejan la historia y las desigualdades de la sociedad. Si ciertos grupos aparecen poco, están representados de forma estereotipada o reciben etiquetas incorrectas, el sistema puede funcionar peor para ellos. También influyen las decisiones de quienes eligen los datos, definen qué significa “éxito” y establecen dónde se usa la herramienta.': 'Models are trained on data that reflects society’s history and inequalities. If some groups are underrepresented, portrayed stereotypically, or incorrectly labeled, the system may work worse for them. The choices of those who select the data, define what “success” means, and decide where the tool is used also matter.',
    'El daño no se limita a una respuesta extraña. En contextos como selección de personal, educación, salud, crédito o reconocimiento facial, un error puede cerrar oportunidades o someter a alguien a un escrutinio injusto. Además, una respuesta expresada con seguridad puede llevar a las personas a confiar demasiado en la máquina y dejar de verificarla. Decir que “lo decidió el algoritmo” no elimina la responsabilidad de las instituciones que lo compran, configuran y utilizan.': 'The harm is not limited to an odd answer. In hiring, education, health care, credit, or facial recognition, an error can close off opportunities or subject someone to unfair scrutiny. A confident-sounding answer can also lead people to overtrust a machine and stop checking it. Saying “the algorithm decided” does not remove the responsibility of the institutions that purchase, configure, and use it.',
    '¿Cómo reducir el daño?': 'How can harm be reduced?',
    'Antes de desplegar un sistema, hay que probarlo con grupos y situaciones diversas, medir errores y publicar límites conocidos. Las decisiones de alto impacto necesitan revisión humana competente, explicaciones comprensibles y una vía efectiva para apelar. Si las pruebas muestran perjuicios que no pueden corregirse, la opción responsable puede ser no usar el sistema. La supervisión debe continuar después del lanzamiento porque los datos y las condiciones cambian.': 'Before deploying a system, test it with diverse groups and situations, measure errors, and publish known limitations. High-impact decisions need competent human review, understandable explanations, and an effective way to appeal. If testing reveals harms that cannot be corrected, the responsible choice may be not to use the system. Oversight must continue after launch because data and conditions change.',
    'Trabajo, aprendizaje y costos invisibles': 'Work, learning, and hidden costs',
    'La automatización puede ahorrar tiempo, pero sus beneficios y costos no se reparten por igual, y la infraestructura de IA también consume recursos.': 'Automation can save time, but its benefits and costs are not shared equally, and AI infrastructure also consumes resources.',
    '¿Qué cambia para las personas?': 'What changes for people?',
    'La IA puede acelerar tareas rutinarias y apoyar nuevas formas de crear, pero también reorganiza empleos y puede reducir la demanda de algunas funciones. El resultado depende de quién controla la herramienta: aumenta la productividad no garantiza mejores salarios ni más tiempo libre si las ganancias se concentran y las personas trabajadoras no participan en las decisiones.': 'AI can speed up routine tasks and support new forms of creativity, but it also reorganizes jobs and may reduce demand for some roles. The outcome depends on who controls the tool: higher productivity does not guarantee better wages or more free time if gains are concentrated and workers have no say in decisions.',
    'En educación, usar IA para explicar un tema o recibir ideas puede ser útil; delegar todo el razonamiento puede dificultar aprender a investigar, escribir y detectar errores. Los sistemas generativos pueden inventar datos o presentar información incompleta, por lo que su fluidez no equivale a conocimiento. En el trabajo ocurre algo similar: una sugerencia automática puede ayudar, pero no debe reemplazar el juicio profesional cuando están en juego la seguridad, los derechos o el bienestar de las personas.': 'In education, AI can be useful for explaining a topic or generating ideas; delegating all reasoning can make it harder to learn how to research, write, and spot errors. Generative systems can invent facts or provide incomplete information, so fluency is not the same as knowledge. The same applies at work: an automated suggestion can help, but should not replace professional judgment when people’s safety, rights, or well-being are at stake.',
    'También hay costos materiales.': 'There are also material costs.',
    'Entrenar y ejecutar modelos requiere centros de datos, electricidad, agua para refrigeración y equipos que deben fabricarse y reemplazarse. El impacto varía según la tecnología y la fuente de energía, pero no es invisible. Para aprovechar la IA con responsabilidad, conviene elegir usos que aporten un beneficio claro, verificar los resultados, proteger el criterio humano y exigir información sobre impactos laborales y ambientales. La pregunta no es solo qué puede automatizarse, sino quién obtiene el beneficio y quién asume el costo.': 'Training and running models requires data centers, electricity, cooling water, and equipment that must be manufactured and replaced. The impact varies by technology and energy source, but it is not invisible. To use AI responsibly, choose uses with a clear benefit, verify results, protect human judgment, and demand information about labor and environmental impacts. The question is not only what can be automated, but who benefits and who bears the cost.',
    'Laboratorio de la realidad': 'Reality Lab',
    'Las plataformas, la inteligencia artificial, la cultura y la economía no son fragmentos aislados: forman parte del mismo tejido de la vida cotidiana.': 'Platforms, artificial intelligence, culture, and the economy are not isolated fragments: they are part of the same fabric of everyday life.',
    'Explora seis dimensiones conectadas. Selecciona una para leer su descripción; las líneas expresan relaciones temáticas, no datos ni relaciones cuantitativas.': 'Explore six connected dimensions. Select one to read its description. The lines show thematic connections, not data or quantitative relationships.',
    'Laboratorio': 'Reality',
    'de la realidad': 'Lab',
    'Dimensión seleccionada': 'Selected dimension',
    'Las personas usan, interpretan y cuestionan las tecnologías de maneras diversas. El contexto social ayuda a entender tanto sus posibilidades como sus efectos.': 'People use, interpret, and question technology in different ways. Social context helps us understand both its possibilities and its effects.',
    'Restablecer selección': 'Reset selection',
    'Voces y perspectivas': 'Voices and perspectives',
    'La pregunta no es solo qué ocurre, sino qué significa.': 'The question is not only what happens, but what it means.',
    'Filosofía': 'Philosophy',
    '¿Somos realmente libres?': 'Are we truly free?',
    'Cuando la información se curva a nuestro comportamiento, ¿seguimos construyendo nuestra propia verdad?': 'When information is shaped around our behavior, are we still building our own view of the truth?',
    'Lectura crítica': 'Critical reading',
    'Antes de compartir, mirar el contexto.': 'Before sharing, consider the context.',
    'Preguntarse quién publica, qué evidencia ofrece y qué información falta ayuda a distinguir datos, interpretaciones y opiniones.': 'Asking who published something, what evidence they provide, and what information is missing helps distinguish facts, interpretations, and opinions.',
    'Ética': 'Ethics',
    '¿Cómo equilibrar nuevas posibilidades tecnológicas con el cuidado de la información personal?': 'How can we balance new technological possibilities with the protection of personal information?',
    'Economía': 'Economics',
    'El impacto económico de la inteligencia artificial': 'The economic impact of artificial intelligence',
    'Una pregunta abierta sobre cambios en el trabajo, el acceso a herramientas y la distribución de oportunidades.': 'An open question about changes in work, access to tools, and the distribution of opportunities.',
    'Un proyecto escolar para explorar la relación entre tecnología, medios digitales y sociedad.': 'A student project exploring the relationship between technology, digital media, and society.',
    'Las noticias incluyen enlaces a sus fuentes originales.': 'News items include links to their original sources.',
    'Un espacio para reunir imágenes relacionadas con los temas del proyecto. Las imágenes actuales son referencias ilustrativas de Unsplash, no fotografías de nuestro equipo ni de los acontecimientos mencionados; podrán sustituirse por fotografías propias.': 'A space for images related to the project topics. Current images are illustrative references from Unsplash, not photos of our team or the events mentioned; they may be replaced with our own photographs.',
    'Referencia visual · Inteligencia artificial': 'Visual reference · Artificial intelligence',
    'Referencia visual · Redes sociales': 'Visual reference · Social media',
    'Referencia visual · Creación de contenido': 'Visual reference · Content creation',
    'Referencia visual · Vida digital': 'Visual reference · Digital life',
    'Referencia visual · Tecnología y sociedad': 'Visual reference · Technology and society',
    'Referencia visual · Comunicación': 'Visual reference · Communication',
    'Referencia visual · Tecnología': 'Visual reference · Technology',
    'Referencia visual · Seguridad digital': 'Visual reference · Digital security',
    'Volver a la página principal': 'Back to the homepage',
    'Demostración editorial': 'Editorial demo',
    'Este contenido es una página de demostración provisional. El texto y la estructura están listos para adaptarse a un artículo real cuando exista información confirmada.': 'This is a provisional demo page. Its text and structure are ready to be adapted into a real article when verified information is available.',
    'La inteligencia artificial está cambiando el ritmo del trabajo, la educación y la creatividad. El debate ya no se limita a si la tecnología puede automatizar tareas, sino a qué tipo de trabajo, identidad y responsabilidad quedan en juego cuando las máquinas intervienen en la vida cotidiana.': 'Artificial intelligence is changing the pace of work, education, and creativity. The debate is no longer limited to whether technology can automate tasks, but also concerns work, identity, and responsibility when machines enter everyday life.',
    'Para muchas personas, la automatización representa una oportunidad de productividad y acceso a nuevas herramientas. Para otras, plantea dudas sobre el futuro del empleo, la vigilancia de los datos y la distribución del valor económico. El punto central no es solo qué puede hacer la inteligencia artificial, sino qué decisiones humanas toman quienes la diseñan, regulan y usan.': 'For many people, automation offers greater productivity and access to new tools. For others, it raises questions about the future of work, data surveillance, and the distribution of economic value. The central issue is not only what artificial intelligence can do, but also the human decisions made by those who design, regulate, and use it.',
    'La historia de la tecnología muestra que cada herramienta modifica los ritmos de la sociedad. Lo que diferencia a esta etapa es la velocidad, la escala y la capacidad de adaptar contenido, decisiones y recomendaciones a partir de millones de señales. Por eso, el debate permanece abierto: no se trata de asumir una narrativa de reemplazo total, sino de comprender cómo la colaboración entre humanos y sistemas inteligentes puede redefinir nuestras responsabilidades.': 'The history of technology shows that every tool changes the pace of society. What makes this era different is the speed, scale, and ability to adapt content, decisions, and recommendations based on millions of signals. The debate remains open: rather than assuming total replacement, we need to understand how collaboration between people and intelligent systems may redefine our responsibilities.',
    'Volver a las historias': 'Back to the stories',
    'Vista de contenido': 'Content view',
    'Este espacio todavía no tiene más contenido disponible.': 'No additional content is available here yet.',
    'Volver al inicio': 'Back to home',
    'Volver a la sección de origen': 'Back to the original section',
    'Este contenido no está disponible.': 'This content is unavailable.',
    'No se recibieron los datos necesarios para mostrar esta vista.': 'The data required to display this view was not received.',
    'MAPA VISUAL · BORRADOR': 'VISUAL MAP · DRAFT',
    'PREVISUALIZAR': 'PREVIEW',
    'Escritorio': 'Desktop',
    'Móvil': 'Mobile',
    'ARQUITECTURA DE PORTADA': 'HOMEPAGE ARCHITECTURE',
    'El mapa': 'The map',
    'de inicio.': 'of the homepage.',
    'Un recorrido visual por la portada: de la primera impresión a la conversación.': 'A visual tour of the homepage: from the first impression to the conversation.',
    'Esquema de contenido y jerarquía; no es la web definitiva.': 'A content and hierarchy outline; this is not the final website.',
    'ORDEN DE LECTURA': 'READING ORDER',
    'De arriba hacia abajo': 'Top to bottom',
    'CÓMO LEER ESTE MAPA': 'HOW TO READ THIS MAP',
    'Contenido / texto': 'Content / text',
    'Área visual / imagen': 'Visual area / image',
    'Acción representada': 'Action represented',
    'Provisional o por aprobar': 'Provisional or pending approval',
    'ESTRUCTURA DE LA PÁGINA': 'PAGE STRUCTURE',
    'VISTA ESCRITORIO · FLUIDA': 'DESKTOP VIEW · FLUID',
    'MARCA / SÍMBOLO POR DEFINIR': 'BRAND / SYMBOL TO BE DEFINED',
    'Quiénes somos': 'About us',
    'MENÚ': 'MENU',
    'NAVEGACIÓN': 'NAVIGATION',
    'PORTADA / HERO': 'HOMEPAGE / HERO',
    'LA REALIDAD DETRÁS DE LA PANTALLA': 'REALITY BEHIND THE SCREEN',
    'Noticias, ideas y preguntas para entender lo que las redes no siempre muestran.': 'News, ideas, and questions to understand what social media does not always show.',
    'BOTÓN PRINCIPAL · DESTINO: HISTORIAS': 'PRIMARY BUTTON · DESTINATION: STORIES',
    'Una pregunta para mirar más allá del scroll.': 'A question that looks beyond the scroll.',
    'ÁREA VISUAL · COMPOSICIÓN ORIGINAL': 'VISUAL AREA · ORIGINAL COMPOSITION',
    'PRESENTACIÓN': 'INTRODUCTION',
    'Quiénes': 'Who',
    'somos.': 'we are.',
    'CONTENIDO PROVISIONAL · PENDIENTE DE APROBACIÓN': 'PROVISIONAL CONTENT · PENDING APPROVAL',
    'TEXTO / PROPÓSITO': 'TEXT / PURPOSE',
    'Un espacio para explorar cómo la tecnología, los medios y las redes transforman la forma en que vivimos y entendemos el mundo.': 'A space to explore how technology, media, and social networks transform the way we live and understand the world.',
    'DESCRIPCIÓN DEL PROYECTO · POR VALIDAR': 'PROJECT DESCRIPTION · TO BE VERIFIED',
    'MISIÓN': 'MISSION',
    'Qué buscamos aportar.': 'What we aim to contribute.',
    'VISIÓN': 'VISION',
    'Qué futuro imaginamos.': 'The future we imagine.',
    'Principios que nos guían.': 'The principles that guide us.',
    'VERACIDAD · CRITERIO · RESPETO': 'ACCURACY · JUDGMENT · RESPECT',
    'HISTORIAS DESTACADAS': 'FEATURED STORIES',
    'Lo que merece': 'What deserves',
    'otra mirada.': 'a closer look.',
    'EJEMPLOS TEMÁTICOS · NO SON NOTICIAS REALES': 'TOPIC EXAMPLES · NOT REAL NEWS',
    'ESPACIO PARA IMAGEN': 'IMAGE SPACE',
    '01 / DESTACADA': '01 / FEATURED',
    'INTELIGENCIA ARTIFICIAL': 'ARTIFICIAL INTELLIGENCE',
    '¿Qué cambia cuando la inteligencia artificial entra en nuestra vida cotidiana?': 'What changes when artificial intelligence enters our everyday lives?',
    'Espacio para una síntesis breve que invite a explorar el tema.': 'Space for a short summary that invites readers to explore the topic.',
    'TÍTULO + DESCRIPCIÓN': 'TITLE + DESCRIPTION',
    'ALGORITMOS': 'ALGORITHMS',
    'EJEMPLO': 'EXAMPLE',
    '¿Quién decide qué aparece en tu feed?': 'Who decides what appears in your feed?',
    'Resumen breve · pendiente de redacción.': 'Short summary · to be written.',
    'REDES Y PRIVACIDAD': 'SOCIAL MEDIA AND PRIVACY',
    'Lo que compartimos, lo que dejamos atrás.': 'What we share, what we leave behind.',
    'TECNOLOGÍA + SOCIEDAD': 'TECHNOLOGY + SOCIETY',
    'Nada ocurre': 'Nothing happens',
    'aislado.': 'in isolation.',
    'Un mapa interactivo para descubrir cómo se conectan las ideas, las plataformas y la vida diaria.': 'An interactive map to discover how ideas, platforms, and everyday life connect.',
    'NODOS EXPLORABLES · EXPERIENCIA PROPUESTA': 'EXPLORABLE NODES · PROPOSED EXPERIENCE',
    'INTELIGENCIA': 'ARTIFICIAL',
    'ARTIFICIAL': 'INTELLIGENCE',
    'REDES': 'SOCIAL',
    'SOCIALES': 'NETWORKS',
    'CULTURA': 'CULTURE',
    'ECONOMÍA': 'ECONOMICS',
    'PERSONAS': 'PEOPLE',
    'MEDIOS': 'MEDIA',
    'RELACIÓN / TEMA CONECTADO': 'CONNECTION / RELATED TOPIC',
    'OPINIONES Y PERSPECTIVAS': 'OPINIONS AND PERSPECTIVES',
    'Una pregunta.': 'One question.',
    'Más de una respuesta.': 'More than one answer.',
    'Argumentos y puntos de vista diferentes, presentados con contexto y respeto.': 'Different arguments and points of view, presented with context and respect.',
    'PREGUNTA CENTRAL · PROPUESTA': 'CENTRAL QUESTION · PROPOSAL',
    '¿Las redes nos acercan o deciden cómo nos vemos?': 'Do social networks bring us closer, or decide how we see ourselves?',
    'ARGUMENTO A': 'ARGUMENT A',
    'ARGUMENTO B': 'ARGUMENT B',
    'Espacio para presentar posturas, evidencias y matices.': 'Space to present positions, evidence, and nuance.',
    'OTRAS VOCES': 'OTHER VOICES',
    'Tecnología y privacidad': 'Technology and privacy',
    'Cultura y algoritmos': 'Culture and algorithms',
    'PUNTOS DE VISTA · POR DEFINIR': 'POINTS OF VIEW · TO BE DEFINED',
    'CIERRE EDITORIAL': 'EDITORIAL CLOSING',
    'CIERRE EDITORIAL · FRASE PROPUESTA': 'EDITORIAL CLOSING · PROPOSED LINE',
    'El siguiente paso empieza con una pregunta.': 'The next step begins with a question.',
    'Mira más allá': 'Look beyond',
    'de la pantalla.': 'the screen.',
    'CIERRE / ACCIÓN · DESTINO: ACTUALIDAD': 'CLOSING / ACTION · DESTINATION: CURRENT AFFAIRS',
    'Perspectivas': 'Perspectives',
    'PROYECTO ESCOLAR': 'STUDENT PROJECT',
    'INFORMACIÓN DEL PROYECTO · POR DEFINIR': 'PROJECT INFORMATION · TO BE DEFINED',
    'NOTA DE DISEÑO': 'DESIGN NOTE',
    'Las áreas visuales son espacios de contenido, no imágenes ni noticias; los textos de misión, visión y presentación requieren aprobación.': 'Visual areas are content placeholders, not images or news; the mission, vision, and introduction texts require approval.',
    'Cambiar vista del mapa': 'Change map view',
    'Mapa de inicio, ir al comienzo': 'Homepage map, go to the beginning',
    'A. Navegación superior': 'A. Top navigation',
    'Diagrama de ejemplo que conecta inteligencia artificial con redes sociales, cultura, economía y personas. Es una representación de una experiencia interactiva propuesta.': 'Example diagram connecting artificial intelligence with social media, culture, economics, and people. It represents a proposed interactive experience.',
    'Misión, visión y valores; todos los textos son provisionales': 'Mission, vision, and values; all text is provisional',
    'Espacio reservado para una composición tecnológica y cinematográfica': 'Space reserved for a cinematic technology composition',
    'DEMOSTRACIÓN': 'DEMO',
    'Orden de lectura de arriba hacia abajo': 'Reading order from top to bottom',
    'Leyenda del mapa': 'Map legend',
    'Enlaces de navegación representados': 'Represented navigation links',
    'Acciones propuestas': 'Proposed actions',
    'Representación del menú móvil': 'Mobile menu representation',
    'Marca provisional Más allá del feed': 'Provisional Beyond the Feed brand',
    'Las noticias incluyen enlaces a sus fuentes originales.': 'News items include links to their original sources.',
    'Imagen ilustrativa sobre inteligencia artificial y tecnología, de Unsplash.': 'Illustrative image of artificial intelligence and technology, from Unsplash.',
    'Imagen ilustrativa de redes sociales y comunicación digital, de Unsplash.': 'Illustrative image of social media and digital communication, from Unsplash.',
    'Retrato ilustrativo de una creadora de contenido, de Unsplash.': 'Illustrative portrait of a content creator, from Unsplash.',
    'Persona usando un teléfono inteligente, imagen ilustrativa de Unsplash.': 'Person using a smartphone, illustrative image from Unsplash.',
    'Personas colaborando con tecnología digital, imagen ilustrativa de Unsplash.': 'People collaborating with digital technology, illustrative image from Unsplash.',
    'Equipo conversando en un entorno digital, imagen ilustrativa de Unsplash.': 'Team talking in a digital environment, illustrative image from Unsplash.',
    'Espacio de trabajo con una computadora, imagen ilustrativa de Unsplash.': 'Computer workspace, illustrative image from Unsplash.',
    'Imagen ilustrativa sobre ciberseguridad y medios digitales, de Unsplash.': 'Illustrative image about cybersecurity and digital media, from Unsplash.',
    'Imagen ilustrativa sobre inteligencia artificial y su relación con las personas, de Unsplash.': 'Illustrative image about artificial intelligence and its relationship with people, from Unsplash.',
    'Cambiar idioma a inglés': 'Switch language to English',
    'Cambiar idioma a español': 'Switch language to Spanish',
    'Traducir al inglés': 'Translate to English',
    'Traducir al español': 'Translate to Spanish',
    'Imagen ilustrativa · No es una fotografía del acontecimiento': 'Illustrative image · Not a photograph of the event',
    'Titular original: Anthropic warns of \'catastrophic risk\' to humankind ahead of blockbuster share listing': 'Original headline: Anthropic warns of \'catastrophic risk\' to humankind ahead of blockbuster share listing',
    'Anthropic advierte de riesgos de la IA al presentar su salida a bolsa': 'Anthropic warns of AI risks as it prepares to go public',
    'Al presentar documentos para cotizar en bolsa, la compañía describió riesgos asociados al desarrollo y uso de sistemas avanzados de IA, junto con posibles beneficios. El artículo recoge lo declarado por la empresa y el contexto de su presentación.': 'In its IPO filing, the company described risks associated with developing and using advanced AI systems, as well as potential benefits. The article reports the company’s statements and the context of its filing.',
    'IA y responsabilidad': 'AI and responsibility',
    'Una alerta de ciberseguridad pone el foco en fallas de PHP': 'A cybersecurity alert puts PHP flaws in the spotlight',
    'Titular original: What is PHP and why did it spark a global cyber-security scramble?': 'Original headline: What is PHP and why did it spark a global cyber-security scramble?',
    'El reportaje explica cómo investigadores identificaron dos vulnerabilidades en PHP y cómo distintas organizaciones respondieron con parches y medidas de precaución. La BBC indica que, al actualizar la nota, no se habían reportado explotaciones exitosas.': 'The report explains how researchers identified two PHP vulnerabilities and how organizations responded with patches and precautions. The BBC said no successful exploitation had been reported when the article was updated.',
    'Ciberseguridad': 'Cybersecurity',
    'Crece el debate público sobre la expansión de los centros de datos': 'Public debate grows over the expansion of data centers',
    'Titular original: Big, noisy and coming to a town near you - why the data centre backlash is growing': 'Original headline: Big, noisy and coming to a town near you - why the data centre backlash is growing',
    'La BBC examina la expansión de los centros de datos y las preocupaciones expresadas por comunidades sobre su consumo eléctrico y sus posibles efectos ambientales. El artículo también explica su relación con los servicios digitales y la infraestructura de IA.': 'The BBC examines the growth of data centers and communities’ concerns about their electricity use and potential environmental effects. The article also explains their role in digital services and AI infrastructure.',
    'Infraestructura y sociedad': 'Infrastructure and society',
    'Leer el artículo original en BBC News ↗': 'Read the original article at BBC News ↗',
    'Leer en BBC News: Anthropic advierte de riesgos de la IA al presentar su salida a bolsa. Se abre en una pestaña nueva.': 'Read at BBC News: Anthropic warns of AI risks as it prepares to go public. Opens in a new tab.',
    'Leer en BBC News: Una alerta de ciberseguridad pone el foco en fallas de PHP. Se abre en una pestaña nueva.': 'Read at BBC News: A cybersecurity alert puts PHP flaws in the spotlight. Opens in a new tab.',
    'Leer en BBC News: Crece el debate público sobre la expansión de los centros de datos. Se abre en una pestaña nueva.': 'Read at BBC News: Public debate grows over the expansion of data centers. Opens in a new tab.'
  }));

  const englishToSpanish = new Map(
    [...spanishToEnglish].map(([spanish, english]) => [normalize(english), spanish])
  );
  const nativeEnglishToSpanish = new Map([
    ['AI Domination?', '¿Dominación de la IA?'],
    ['Who are we?', '¿Quiénes somos?'],
    ['Mission', 'Misión'],
    ['Vision', 'Visión'],
    ['Values', 'Valores'],
    ['Objectives', 'Objetivos'],
    ['Project objectives', 'Objetivos del proyecto'],
    ['Cybercrimes', 'Delitos cibernéticos'],
    ['Parallel', 'Comparación'],
    ["Statements (I'll be right back)", 'Declaraciones (vuelvo enseguida)'],
    ['Mind Map', 'Mapa mental'],
    ['Texts', 'Textos'],
    ['Influencers / Texts', 'Influencers / Textos'],
    ['Home / Who are we?', 'Inicio / ¿Quiénes somos?'],
    ['The story reveals a dark consequence of technology: AI-driven comfort can create unhealthy dependence and isolate users from the real world.', 'La historia muestra una consecuencia preocupante de la tecnología: el consuelo que ofrece la IA puede generar dependencia y aislar a las personas del mundo real.'],
    ['On the one hand, AI can make people feel less lonely by offering emotional support. It is available at any time, can listen when someone feels sad or needs someone to talk to, and can help people solve problems, research different topics, and consider possible solutions.', 'Por un lado, la IA puede ayudar a que las personas se sientan menos solas al ofrecer apoyo emocional. Está disponible en cualquier momento, puede escuchar a alguien que está triste o necesita conversar, y puede ayudar a resolver problemas, investigar distintos temas y considerar posibles soluciones.'],
    ['On the other hand, relying on AI for emotional support can create unhealthy dependence and distance people from the real world. Someone may become so dependent on AI that they struggle to think for themselves or understand the limits of its advice. They may also choose to talk to AI instead of building real relationships with friends and family.', 'Por otro lado, depender de la IA para recibir apoyo emocional puede generar una dependencia poco saludable y alejar a las personas del mundo real. Alguien podría depender tanto de la IA que le cueste pensar por sí mismo o comprender los límites de sus consejos. También podría preferir hablar con una IA en lugar de construir relaciones reales con sus amistades y familiares.'],
    ['The short film shows this risk through a girl grieving her husband’s death. To fill the emptiness, she buys a robot identical to him. We should learn to cope with losing someone, but not by isolating ourselves or replacing human relationships with AI. Healing takes time, and connecting with other people matters even when the process is slow.', 'El cortometraje muestra este riesgo a través de una joven que está de duelo por la muerte de su esposo. Para llenar ese vacío, compra un robot idéntico a él. Debemos aprender a afrontar la pérdida de alguien, pero no aislándonos ni reemplazando las relaciones humanas con IA. Sanar toma tiempo, y conectar con otras personas importa aunque el proceso sea lento.'],
    ['In conclusion, AI can provide companionship and support, but people should not depend on it too much. Real human relationships remain important.', 'En conclusión, la IA puede ofrecer compañía y apoyo, pero las personas no deberían depender demasiado de ella. Las relaciones humanas reales siguen siendo importantes.'],
    ['The story demonstrates that synthetic replicas can ease loneliness at first, but may ultimately deepen psychological distress because they cannot capture genuine human essence.', 'La historia muestra que las réplicas sintéticas pueden aliviar la soledad al principio, pero a la larga podrían intensificar el malestar psicológico porque no pueden reproducir la esencia humana.'],
    ['Technology has advanced significantly, and AI can offer personalized suggestions to people coping with loss. It may provide temporary comfort and ideas for approaching difficult problems.', 'La tecnología ha avanzado mucho, y la IA puede ofrecer sugerencias personalizadas a quienes atraviesan una pérdida. Puede brindar consuelo temporal e ideas para afrontar problemas difíciles.'],
    ['Someone grieving may turn to an AI replica because they miss a person and want companionship. However, an AI response cannot provide the genuine understanding and connection of another human being.', 'Una persona en duelo puede recurrir a una réplica de IA porque extraña a alguien y busca compañía. Sin embargo, una respuesta de IA no puede ofrecer la comprensión y la conexión auténticas de otro ser humano.'],
    ['Furthermore, when a person recognizes that this companionship is not real, they may feel even lonelier or sadder. Depending on a replica may also keep them from seeking support from friends and family.', 'Además, cuando alguien reconoce que esa compañía no es real, puede sentirse aún más solo o triste. Depender de una réplica también puede impedirle buscar apoyo en sus amistades y familiares.'],
    ['In conclusion, synthetic replicas may relieve loneliness for a while, but they cannot replace human relationships. Relying on them too much can eventually increase emotional distress.', 'En conclusión, las réplicas sintéticas pueden aliviar la soledad durante un tiempo, pero no pueden sustituir las relaciones humanas. Depender demasiado de ellas puede aumentar el malestar emocional.'],
    ["The story demonstrates that although synthetic replicas can ease initial loneliness, they may deepen psychological distress because they cannot capture a person's genuine human essence.", 'La historia muestra que, aunque las réplicas sintéticas pueden aliviar la soledad inicial, también pueden intensificar el malestar psicológico porque no reproducen la esencia humana de una persona.'],
    ['On the one hand, a replica may give someone the feeling of seeing or speaking with a person who has died. For a family grieving a loss, this service could offer temporary comfort and help them revisit memories. However, that comfort may feel unsettling and cannot replace real support.', 'Por un lado, una réplica puede dar a alguien la sensación de ver o hablar con una persona fallecida. Para una familia en duelo, este servicio podría ofrecer consuelo temporal y ayudar a recordar momentos compartidos. Sin embargo, ese consuelo puede resultar inquietante y no sustituye el apoyo real.'],
    ["Moreover, synthetic replicas can preserve memories, knowledge, and experiences. Families may use them to learn more about a loved one's life and remember important stories.", 'Además, las réplicas sintéticas pueden conservar recuerdos, conocimientos y experiencias. Las familias podrían usarlas para conocer más sobre la vida de un ser querido y recordar historias importantes.'],
    ["On the other hand, replicas may harm a family's emotional well-being if someone cannot accept the death and chooses the replica instead of continuing to build relationships and take part in daily life.", 'Por otro lado, las réplicas pueden afectar el bienestar emocional de una familia si alguien no logra aceptar la muerte y elige la réplica en lugar de seguir construyendo relaciones y participando en la vida cotidiana.'],
    ['Furthermore, relying on a replica to avoid painful emotions may affect how people understand and process grief as a natural part of life. People need time and support to cope with loss, not technology that keeps them from facing it.', 'Asimismo, depender de una réplica para evitar emociones dolorosas puede afectar la manera en que las personas comprenden y procesan el duelo como parte natural de la vida. Para afrontar una pérdida, necesitan tiempo y apoyo, no una tecnología que les impida hacerlo.'],
    ['In conclusion, synthetic replicas may preserve memories and ease the initial pain of loss, but they also carry serious emotional risks. They can provide temporary comfort, yet they cannot replace human connection and may interfere with grieving if people become dependent on them.', 'En conclusión, las réplicas sintéticas pueden conservar recuerdos y aliviar el dolor inicial de una pérdida, pero también conllevan riesgos emocionales importantes. Pueden brindar consuelo temporal, aunque no sustituyen la conexión humana y podrían interferir con el duelo si alguien depende de ellas.'],
    ['On the one hand, technology plays an important role in many areas of life, including work and medicine. It can streamline processes, support research, and help people solve complex problems more quickly.', 'Por un lado, la tecnología cumple una función importante en muchos ámbitos, como el trabajo y la medicina. Puede agilizar procesos, apoyar la investigación y ayudar a resolver problemas complejos con mayor rapidez.'],
    ['For example, AI tools can assist healthcare research by helping scientists develop treatments and identify diseases sooner. They can also boost daily productivity when used thoughtfully.', 'Por ejemplo, las herramientas de IA pueden apoyar la investigación médica y ayudar a desarrollar tratamientos e identificar enfermedades antes. También pueden mejorar la productividad diaria cuando se usan con criterio.'],
    ['On the other hand, excessive automation can make people dependent on technology for too many tasks. If we rely on AI instead of thinking through our actions, we may weaken our ability to reason independently.', 'Por otro lado, la automatización excesiva puede hacer que dependamos de la tecnología para demasiadas tareas. Si recurrimos a la IA en lugar de reflexionar sobre lo que hacemos, podemos debilitar nuestra capacidad de razonar por cuenta propia.'],
    ['Furthermore, AI cannot replace a real person. It may imitate communication, but it cannot truly reproduce human emotions or the way people experience feelings.', 'Además, la IA no puede reemplazar a una persona real. Puede imitar la comunicación, pero no reproduce de verdad las emociones humanas ni la manera en que las personas las experimentan.'],
    ['In conclusion, technology and AI can be useful tools in everyday life, but they must be used responsibly. Misuse and overdependence can affect many areas of life, so people should stay prepared, think critically, and continue using their own judgment.', 'En conclusión, la tecnología y la IA pueden ser herramientas útiles en la vida cotidiana, pero deben usarse de manera responsable. El uso inadecuado y la dependencia excesiva pueden afectar muchos aspectos de la vida; por eso, es importante prepararse, pensar críticamente y conservar el criterio propio.'],
    ['On the one hand, AI companions can offer company and comfort to people who feel lonely, including older adults or people with disabilities who lack regular support. Some may also use replicas to remember deceased loved ones or talk about their grief.', 'Por un lado, los asistentes de IA pueden ofrecer compañía y consuelo a personas que se sienten solas, incluidos adultos mayores o personas con discapacidad que no reciben apoyo frecuente. Algunas también podrían usar réplicas para recordar a seres queridos fallecidos o hablar de su duelo.'],
    ['These tools may help users feel supported and encourage personal reflection. However, they should not be treated as a cure or replace support from trusted people or qualified professionals.', 'Estas herramientas pueden ayudar a que las personas se sientan acompañadas y promover la reflexión personal. Sin embargo, no deben considerarse una cura ni sustituir el apoyo de personas de confianza o profesionales calificados.'],
    ['On the other hand, AI may create an idealized dream world. If someone uses chatbots or smart devices to escape difficulties, they may rely on technology for too much of life instead of facing problems and seeking human connection.', 'Por otro lado, la IA puede crear un mundo idealizado. Si alguien usa chatbots o dispositivos inteligentes para escapar de las dificultades, podría depender demasiado de la tecnología en lugar de afrontar los problemas y buscar conexión humana.'],
    ['Furthermore, these systems can be misused for fraud. Stolen images or copied voices may let scammers impersonate friends or family and target vulnerable people.', 'Además, estos sistemas pueden utilizarse para cometer fraudes. Las imágenes robadas o las voces copiadas pueden permitir que estafadores suplanten a amistades o familiares y se aprovechen de personas vulnerables.'],
    ["In conclusion, AI companionship may provide temporary comfort, but overuse can lead to dependency and emotional difficulties. It should support people's lives, not control their choices or replace genuine relationships.", 'En conclusión, la compañía de la IA puede brindar consuelo temporal, pero su uso excesivo puede generar dependencia y dificultades emocionales. La tecnología debe apoyar la vida de las personas, no controlar sus decisiones ni sustituir relaciones auténticas.']
  ]);
  const originalText = new WeakMap();
  const renderedText = new WeakMap();
  const originalAttributes = new WeakMap();
  const renderedAttributes = new WeakMap();
  const translatableAttributes = ['alt', 'aria-label', 'placeholder', 'title', 'data-glitch', 'data-detail-title'];
  const createLanguageButton = () => {
    let button = document.querySelector('[data-language-toggle]');
    if (button) {
      button.classList.add('language-toggle--floating');
      document.body.append(button);
      return button;
    }

    button = document.createElement('button');
    button.className = 'language-toggle';
    button.classList.add('language-toggle--floating');
    button.type = 'button';
    button.dataset.languageToggle = '';
    button.setAttribute('aria-label', 'Cambiar idioma a inglés');
    button.title = 'Cambiar idioma a inglés';
    button.setAttribute('aria-pressed', 'false');
    button.innerHTML = `
      <span class="language-toggle__track" aria-hidden="true">
        <span class="language-toggle__option language-toggle__option--es">ES</span>
        <span class="language-toggle__option language-toggle__option--en">EN</span>
        <span class="language-toggle__thumb"></span>
      </span>
    `;
    document.body.append(button);
    return button;
  };

  const languageButton = createLanguageButton();
  let currentLanguage = 'es';

  const translateText = (value, language = currentLanguage) => {
    const key = normalize(value);
    if (language === 'en') {
      if (key.startsWith('Ver detalle: ')) {
        return `View detail: ${translateText(key.slice('Ver detalle: '.length), 'en')}`;
      }
      return spanishToEnglish.get(key) || value;
    }
    return nativeEnglishToSpanish.get(key)
      || (spanishToEnglish.has(key) ? value : englishToSpanish.get(key) || value);
  };

  const setTextNodeLanguage = (node) => {
    if (!originalText.has(node)) {
      originalText.set(node, node.data);
    } else if (node.data !== renderedText.get(node)) {
      originalText.set(node, node.data);
    }

    const original = originalText.get(node);
    const leading = original.match(/^\s*/)?.[0] || '';
    const trailing = original.match(/\s*$/)?.[0] || '';
    const content = original.slice(leading.length, original.length - trailing.length || undefined);
    const translated = normalize(content)
      ? `${leading}${translateText(content)}${trailing}`
      : original;

    if (node.data !== translated) node.data = translated;
    renderedText.set(node, translated);
  };

  const setAttributeLanguage = (element, attribute) => {
    if (!element.hasAttribute(attribute)) return;
    let originals = originalAttributes.get(element);
    let rendered = renderedAttributes.get(element);
    if (!originals) {
      originals = new Map();
      rendered = new Map();
      originalAttributes.set(element, originals);
      renderedAttributes.set(element, rendered);
    }

    const value = element.getAttribute(attribute);
    if (!originals.has(attribute) || value !== rendered.get(attribute)) {
      originals.set(attribute, value);
    }
    const translated = translateText(originals.get(attribute));
    if (value !== translated) element.setAttribute(attribute, translated);
    rendered.set(attribute, translated);
  };

  const translateNode = (root) => {
    if (root.nodeType === Node.TEXT_NODE) {
      setTextNodeLanguage(root);
      return;
    }
    if (!(root instanceof Element) || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(root.tagName)) return;

    [root, ...root.querySelectorAll('*')].forEach((element) => {
      translatableAttributes.forEach((attribute) => setAttributeLanguage(element, attribute));
    });
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => node.parentElement?.closest('script, style, noscript, [aria-hidden="true"]')
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT
    });
    while (walker.nextNode()) setTextNodeLanguage(walker.currentNode);
  };

  const updateDocumentMetadata = () => {
    document.documentElement.lang = currentLanguage;
    if (document.title) {
      if (!document.documentElement.dataset.originalTitle) {
        document.documentElement.dataset.originalTitle = document.title;
      }
      document.title = translateText(document.documentElement.dataset.originalTitle);
    }

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      if (!description.dataset.originalContent) {
        description.dataset.originalContent = description.content;
      }
      description.content = translateText(description.dataset.originalContent);
    }
  };

  const updateLanguageButton = () => {
    if (!languageButton) return;
    const targetLanguage = currentLanguage === 'es' ? 'en' : 'es';
    const label = targetLanguage === 'en' ? 'Cambiar idioma a inglés' : 'Cambiar idioma a español';
    languageButton.setAttribute('aria-label', translateText(label));
    languageButton.setAttribute('title', translateText(label));
    languageButton.setAttribute('aria-pressed', String(currentLanguage === 'en'));
    languageButton.dataset.language = currentLanguage;
  };

  const applyLanguage = (language, persist = true) => {
    currentLanguage = language === 'en' ? 'en' : 'es';
    translateNode(document.body);
    updateDocumentMetadata();
    updateLanguageButton();

    if (persist) {
      try {
        window.localStorage.setItem('site-language', currentLanguage);
      } catch (error) {
        console.warn('Could not save the selected language preference.', error);
      }
    }

    document.dispatchEvent(new CustomEvent('site-language-change', {
      detail: { language: currentLanguage }
    }));
  };

  try {
    currentLanguage = window.localStorage.getItem('site-language') === 'en' ? 'en' : 'es';
  } catch (error) {
    console.warn('Could not read the saved language preference.', error);
  }

  translateNode(document.body);
  updateDocumentMetadata();
  updateLanguageButton();

  const observer = new MutationObserver((records) => {
    records.forEach((record) => {
      if (record.type === 'characterData') {
        setTextNodeLanguage(record.target);
        return;
      }
      if (record.type === 'attributes' && record.target instanceof Element) {
        setAttributeLanguage(record.target, record.attributeName);
        return;
      }
      record.addedNodes.forEach(translateNode);
    });
  });
  observer.observe(document.body, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: translatableAttributes
  });

  languageButton?.addEventListener('click', () => {
    const nextLanguage = currentLanguage === 'es' ? 'en' : 'es';
    languageButton.classList.remove('is-switching');
    void languageButton.offsetWidth;
    languageButton.classList.add('is-switching');
    window.setTimeout(() => languageButton.classList.remove('is-switching'), 600);
    applyLanguage(nextLanguage);
  });

  window.siteI18n = {
    get currentLanguage() {
      return currentLanguage;
    },
    translateText
  };
})();
