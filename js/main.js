const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuToggle && nav) {
  const menuLabel = menuToggle.querySelector('.sr-only');

  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    if (menuLabel) menuLabel.textContent = isOpen ? 'Cerrar menú' : 'Abrir menú';
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      if (menuLabel) menuLabel.textContent = 'Abrir menú';
    });
  });
}

const mindMapDisclosure = document.querySelector('#mind-map[aria-controls="influencers"]');
const influencerProfiles = document.getElementById('influencers');

if (mindMapDisclosure instanceof HTMLButtonElement && influencerProfiles) {
  const disclosureLabel = mindMapDisclosure.querySelector('[data-disclosure-label]');

  mindMapDisclosure.addEventListener('click', () => {
    const isExpanded = mindMapDisclosure.getAttribute('aria-expanded') === 'true';
    mindMapDisclosure.setAttribute('aria-expanded', String(!isExpanded));
    influencerProfiles.hidden = isExpanded;

    if (disclosureLabel) {
      disclosureLabel.textContent = isExpanded ? 'Mostrar influencers' : 'Ocultar influencers';
    }
  });
}

const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (!document.querySelector('.home-return-button')) {
  const homeReturnButton = document.createElement('a');
  const isHomePage = window.location.pathname.endsWith('/index.html')
    || window.location.pathname === '/'
    || window.location.pathname === '';
  homeReturnButton.className = 'button secondary home-return-button';
  homeReturnButton.href = isHomePage ? '#inicio' : 'index.html#inicio';
  homeReturnButton.textContent = 'Volver al inicio';
  homeReturnButton.setAttribute('aria-label', 'Volver al inicio de la página principal');
  document.body.appendChild(homeReturnButton);
}

const revealItems = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const pointerTiltSelector = [
  '.objective-trigger',
  '.mission-box',
  '.value-card',
  '.story-panel',
  '.parallel-gallery-entry',
  '.influencer-general-thesis',
  '.project-introduction',
  '.visual-frame',
  '.opinion-feature',
  '.opinion-context',
  '.mini-opinion',
  '.parallel-gallery-card',
  '.thesis-slot',
  '.cybercrime-slot',
  '.profile-card',
  '.member-gallery-card',
  '.gallery-slot',
  '.related-list article',
  '.news-card'
].join(', ');
const pointerTiltCardsWithControls = [
  '.parallel-gallery-card',
  '.objective-trigger',
  '.thesis-slot',
  '.story-panel',
  '.profile-card',
  '.gallery-slot',
  '.related-list article',
  '.news-card'
].join(', ');
const pointerTiltElements = new WeakSet();
const hasTiltPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const reduceTiltMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const addPointerTilt = (element) => {
  if (pointerTiltElements.has(element) || !hasTiltPointer || reduceTiltMotion.matches) return;
  const isTiltCard = element.matches(pointerTiltCardsWithControls);
  if ((element.matches('[data-detail]') && !isTiltCard)
    || (element.querySelector('a, button, input, textarea, select') && !isTiltCard)) return;
  pointerTiltElements.add(element);
  element.classList.add('pointer-tilt');

  const sheen = document.createElement('span');
  sheen.className = 'pointer-sheen';
  sheen.setAttribute('aria-hidden', 'true');
  element.appendChild(sheen);
  let pointerBounds = null;
  let lastScrollX = window.scrollX;
  let lastScrollY = window.scrollY;
  let viewportWidth = window.innerWidth;
  let viewportHeight = window.innerHeight;

  const capturePointerBounds = () => {
    const rect = element.getBoundingClientRect();
    pointerBounds = { left: rect.left, top: rect.top, width: rect.width, height: rect.height };
    lastScrollX = window.scrollX;
    lastScrollY = window.scrollY;
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
  };

  const resetTilt = () => {
    element.style.removeProperty('transform');
    element.style.removeProperty('--pointer-x');
    element.style.removeProperty('--pointer-y');
    pointerBounds = null;
  };

  element.addEventListener('pointerenter', () => {
    capturePointerBounds();
  });

  element.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    if (reduceTiltMotion.matches) {
      resetTilt();
      return;
    }
    if (!(event.target instanceof Element) || event.target.closest('.pointer-tilt') !== element) {
      resetTilt();
      return;
    }

    if (viewportWidth !== window.innerWidth || viewportHeight !== window.innerHeight) {
      resetTilt();
      capturePointerBounds();
    }

    if (!pointerBounds) capturePointerBounds();
    pointerBounds.left += lastScrollX - window.scrollX;
    pointerBounds.top += lastScrollY - window.scrollY;
    lastScrollX = window.scrollX;
    lastScrollY = window.scrollY;
    if (!pointerBounds.width || !pointerBounds.height) return;

    const x = Math.min(1, Math.max(0, (event.clientX - pointerBounds.left) / pointerBounds.width));
    const y = Math.min(1, Math.max(0, (event.clientY - pointerBounds.top) / pointerBounds.height));

    const rotateY = (x - 0.5) * 6;
    const rotateX = (0.5 - y) * 6;
    element.style.setProperty('--pointer-x', `${x * 100}%`);
    element.style.setProperty('--pointer-y', `${y * 100}%`);
    element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px) scale(1.008)`;
  });

  element.addEventListener('pointerleave', () => {
    resetTilt();
  });
};

const initializePointerTilt = (root = document) => {
  if (root instanceof Element && root.matches(pointerTiltSelector)) addPointerTilt(root);
  root.querySelectorAll(pointerTiltSelector).forEach(addPointerTilt);
};

initializePointerTilt();
document.addEventListener('news:rendered', () => {
  initializePointerTilt(document.getElementById('news-list') || document);
});

const getDetailTitle = (card) => {
  const heading = card.querySelector('h1, h2, h3, h4, h5, h6');
  if (heading) return heading.textContent.trim();

  const label = card.querySelector('.label, .meta-tag, figcaption');
  if (label) return label.textContent.trim();

  const sectionHeading = card.closest('section')?.querySelector('h1, h2, h3');
  if (sectionHeading) return sectionHeading.textContent.trim();

  return card.getAttribute('aria-label') || 'Contenido del proyecto';
};

const openFullDetail = (card) => {
  const title = card.dataset.detailTitle || getDetailTitle(card);
  const content = card.cloneNode(true);
  content.querySelectorAll('.pointer-sheen, button, input, textarea, select').forEach((element) => element.remove());
  content.classList.remove('pointer-tilt');
  content.removeAttribute('data-detail');
  content.removeAttribute('role');
  content.removeAttribute('tabindex');

  const source = new URL(window.location.href);
  const sourceTarget = card.id || card.closest('section[id]')?.id;
  if (sourceTarget) source.hash = sourceTarget;

  const params = new URLSearchParams({
    title,
    content: content.innerHTML,
    source: source.href
  });
  window.location.href = `detalle.html?${params.toString()}`;
};

let contentDialog;
let lastDetailTrigger;

const createContentDialog = () => {
  const dialog = document.createElement('dialog');
  dialog.className = 'content-dialog';
  dialog.setAttribute('aria-labelledby', 'content-dialog-title');
  dialog.setAttribute('aria-modal', 'true');

  const surface = document.createElement('div');
  surface.className = 'content-dialog__surface';

  const header = document.createElement('header');
  header.className = 'content-dialog__header';

  const title = document.createElement('h2');
  title.id = 'content-dialog-title';
  title.tabIndex = -1;

  const closeButton = document.createElement('button');
  closeButton.className = 'content-dialog__close';
  closeButton.type = 'button';
  closeButton.textContent = 'Cerrar';
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    event.preventDefault();
    dialog.close();
  });

  const body = document.createElement('div');
  body.className = 'content-dialog__body';
  const content = document.createElement('div');
  content.className = 'content-dialog__copy';
  body.appendChild(content);
  header.append(title, closeButton);
  surface.append(header, body);
  dialog.appendChild(surface);
  document.body.appendChild(dialog);

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener('close', () => {
    if (lastDetailTrigger instanceof HTMLElement && lastDetailTrigger.isConnected) {
      lastDetailTrigger.focus();
    }
    lastDetailTrigger = null;
  });

  return { element: dialog, title, content, closeButton };
};

const openContentDialog = (card, trigger) => {
  contentDialog ||= createContentDialog();
  const { element: dialog, title: dialogTitle, content: copy, closeButton } = contentDialog;
  const title = card.dataset.detailTitle || getDetailTitle(card);
  dialog.classList.toggle('content-dialog--image', card.matches('.parallel-gallery-card'));
  copy.replaceChildren();
  copy.className = 'content-dialog__copy';

  if (card.matches('.parallel-gallery-card')) {
    const image = card.querySelector('img');
    if (image) copy.appendChild(image.cloneNode());
    dialogTitle.textContent = title;
    lastDetailTrigger = trigger;
    dialog.showModal();
    dialogTitle.focus();
    return;
  }

  if (card.matches('.objective-trigger')) {
    const objectiveContent = card.nextElementSibling?.querySelector('ol');
    if (objectiveContent) {
      const objectiveList = objectiveContent.cloneNode(true);
      const listWrap = document.createElement('div');
      listWrap.className = 'objective-dialog-list';
      listWrap.appendChild(objectiveList);
      copy.appendChild(listWrap);
      dialogTitle.textContent = title;
      lastDetailTrigger = trigger;
      dialog.showModal();
      dialogTitle.focus();
      return;
    }
  }

  if (card.matches('.profile-card')) {
    copy.classList.add('content-dialog__profile');
    const image = card.querySelector('.profile-visual img')?.cloneNode(true);
    const profileContent = card.querySelector('.profile-content')?.cloneNode(true);
    if (image) copy.appendChild(image);
    if (profileContent) {
      profileContent.classList.add('content-dialog__profile-content');
      profileContent.querySelectorAll('[data-detail-open], button').forEach((element) => element.remove());
      profileContent.querySelectorAll('[id]').forEach((element) => element.removeAttribute('id'));
      const heading = profileContent.querySelector('h1, h2, h3, h4, h5, h6');
      if (heading?.textContent.trim() === title) heading.remove();
      copy.appendChild(profileContent);
    }
  } else {
    const content = card.cloneNode(true);
    content.removeAttribute('data-detail');
    content.removeAttribute('data-detail-view');
    content.removeAttribute('id');
    content.removeAttribute('role');
    content.removeAttribute('tabindex');
    content.classList.remove('pointer-tilt');
    content.querySelectorAll('.pointer-sheen, [data-detail-open]').forEach((element) => element.remove());
    content.querySelectorAll('[data-detail], [data-detail-view], [id], [role], [tabindex]').forEach((element) => {
      element.removeAttribute('data-detail');
      element.removeAttribute('data-detail-view');
      element.removeAttribute('id');
      element.removeAttribute('role');
      element.removeAttribute('tabindex');
    });
    const heading = content.querySelector('h1, h2, h3, h4, h5, h6');
    if (heading?.textContent.trim() === title) heading.remove();
    copy.append(...content.childNodes);
  }

  dialogTitle.textContent = title;
  lastDetailTrigger = trigger;
  dialog.showModal();
  dialogTitle.focus();
};

window.openContentDialog = openContentDialog;

document.querySelectorAll('[data-detail]').forEach((card) => {
  const hasInnerControl = card.querySelector('a, button, input, textarea, select');
  if (hasInnerControl) return;

  card.setAttribute('role', 'button');
  card.tabIndex = 0;
  card.setAttribute('aria-label', `Ver detalle: ${getDetailTitle(card)}`);

  card.addEventListener('keydown', (event) => {
    if (event.target !== card || !['Enter', ' '].includes(event.key)) return;
    event.preventDefault();
    if (card.dataset.detailView === 'page') {
      openFullDetail(card);
      return;
    }
    openContentDialog(card, card);
  });
});

document.querySelectorAll('.objective-trigger').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    openContentDialog(button, button);
  });
});

document.addEventListener('click', (event) => {
  if (!(event.target instanceof Element)) return;
  const detailTrigger = event.target.closest('[data-detail-open]');
  const card = event.target.closest('[data-detail]');
  if (detailTrigger && card) {
    event.preventDefault();
    openContentDialog(card, detailTrigger);
    return;
  }
  if (card && card.matches('.objective-trigger')) {
    return;
  }
  if (!card || event.target.closest('[data-detail-ignore]')) return;
  if (event.target.closest('a, button, input, textarea, select')) return;

  event.preventDefault();
  if (card.dataset.detailView === 'page') {
    openFullDetail(card);
    return;
  }
  openContentDialog(card, card);
});

const networkConfig = [
  { id: 'redes', label: 'Redes', x: 17, y: 27, size: 'medium', description: 'Las redes sociales reúnen espacios para publicar, conversar y descubrir contenidos. Al explorarlas, conviene considerar cómo participan las personas y las plataformas.' },
  { id: 'ai', label: 'IA', x: 27, y: 72, size: 'small', description: 'La inteligencia artificial comprende distintas técnicas y herramientas. Para analizar una aplicación concreta, pregunta qué tarea realiza, con qué límites y bajo qué supervisión.' },
  { id: 'sociedad', label: 'Sociedad', x: 50, y: 17, size: 'primary', description: 'Las personas usan, interpretan y cuestionan las tecnologías de maneras diversas. El contexto social ayuda a entender tanto sus posibilidades como sus efectos.' },
  { id: 'cultura', label: 'Cultura', x: 83, y: 29, size: 'medium', description: 'La cultura digital incluye formas de crear, comunicar y compartir. Las herramientas cambian; también importa cómo comunidades y autores les dan significado.' },
  { id: 'economia', label: 'Economía', x: 74, y: 72, size: 'small', description: 'La relación entre tecnología y economía invita a examinar el trabajo, los servicios y el acceso a herramientas sin asumir que sus beneficios se reparten por igual.' },
  { id: 'personas', label: 'Personas', x: 50, y: 87, size: 'small', description: 'Las decisiones humanas están presentes al diseñar, elegir y usar tecnología. La participación, la accesibilidad y la responsabilidad son parte de esa conversación.' }
];

const networkSvg = document.getElementById('network-svg');
const networkNodes = document.getElementById('network-nodes');
const networkTitle = document.getElementById('network-title');
const networkDescription = document.getElementById('network-description');
const resetButton = document.getElementById('reset-network');

if (networkSvg && networkNodes && networkTitle && networkDescription) {
  const lines = [
    ['redes', 'ai'],
    ['redes', 'sociedad'],
    ['redes', 'cultura'],
    ['ai', 'economia'],
    ['sociedad', 'personas'],
    ['cultura', 'personas'],
    ['economia', 'sociedad'],
    ['cultura', 'ai']
  ];

  const svgNamespace = 'http://www.w3.org/2000/svg';
  const defs = document.createElementNS(svgNamespace, 'defs');
  const gradient = document.createElementNS(svgNamespace, 'linearGradient');
  gradient.setAttribute('id', 'network-link-gradient');
  gradient.setAttribute('x1', '0');
  gradient.setAttribute('x2', '1');
  [
    ['0', '#43e4ef'],
    ['0.55', '#8a8bff'],
    ['1', '#d9eaff']
  ].forEach(([offset, color]) => {
    const stop = document.createElementNS(svgNamespace, 'stop');
    stop.setAttribute('offset', offset);
    stop.setAttribute('stop-color', color);
    gradient.appendChild(stop);
  });
  defs.appendChild(gradient);
  networkSvg.appendChild(defs);

  const orbitGroup = document.createElementNS(svgNamespace, 'g');
  orbitGroup.setAttribute('class', 'network-orbits');
  [
    { rx: 300, ry: 188, rotate: -8 },
    { rx: 390, ry: 248, rotate: 12 }
  ].forEach(({ rx, ry, rotate }) => {
    const orbit = document.createElementNS(svgNamespace, 'ellipse');
    orbit.setAttribute('cx', '500');
    orbit.setAttribute('cy', '310');
    orbit.setAttribute('rx', String(rx));
    orbit.setAttribute('ry', String(ry));
    orbit.setAttribute('transform', `rotate(${rotate} 500 310)`);
    orbit.setAttribute('class', 'network-orbit-line');
    orbitGroup.appendChild(orbit);
  });
  networkSvg.appendChild(orbitGroup);

  const spokeGroup = document.createElementNS(svgNamespace, 'g');
  spokeGroup.setAttribute('class', 'network-spokes');
  networkConfig.forEach((node) => {
    const spoke = document.createElementNS(svgNamespace, 'path');
    spoke.setAttribute('d', `M 500 310 L ${node.x * 10} ${node.y * 6.2}`);
    spoke.setAttribute('class', 'network-spoke');
    spoke.dataset.to = node.id;
    spokeGroup.appendChild(spoke);
  });
  networkSvg.appendChild(spokeGroup);

  const lineGroup = document.createElementNS(svgNamespace, 'g');
  lineGroup.setAttribute('class', 'network-lines');

  lines.forEach(([fromId, toId]) => {
    const from = networkConfig.find((node) => node.id === fromId);
    const to = networkConfig.find((node) => node.id === toId);

    if (!from || !to) return;

    const x1 = from.x * 10;
    const y1 = from.y * 6.2;
    const x2 = to.x * 10;
    const y2 = to.y * 6.2;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const length = Math.hypot(dx, dy) || 1;
    const curve = 22;
    const controlX = (x1 + x2) / 2 - (dy / length) * curve;
    const controlY = (y1 + y2) / 2 + (dx / length) * curve;
    const path = document.createElementNS(svgNamespace, 'path');
    path.setAttribute('d', `M ${x1} ${y1} Q ${controlX} ${controlY} ${x2} ${y2}`);
    path.setAttribute('class', 'network-link');
    path.dataset.from = fromId;
    path.dataset.to = toId;
    lineGroup.appendChild(path);
  });

  networkSvg.appendChild(lineGroup);

  const nodeButtons = new Map();
  networkConfig.forEach((node) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `network-node network-node--${node.size}`;
    button.dataset.key = node.id;
    button.style.setProperty('--node-x', `${node.x}%`);
    button.style.setProperty('--node-y', `${node.y}%`);
    button.style.setProperty('--float-delay', `${-((node.x + node.y) % 8)}s`);
    button.setAttribute('aria-pressed', 'false');
    button.setAttribute('aria-describedby', 'network-description');

    const surface = document.createElement('span');
    surface.className = 'network-node-surface';
    const beacon = document.createElement('span');
    beacon.className = 'network-node-beacon';
    beacon.setAttribute('aria-hidden', 'true');
    const label = document.createElement('span');
    label.className = 'network-node-label';
    label.textContent = node.label;
    surface.append(beacon, label);
    button.appendChild(surface);
    networkNodes.appendChild(button);
    nodeButtons.set(node.id, button);
    initializePointerTilt(surface);
  });

  const selectNode = (node, button) => {
    networkTitle.textContent = node.label;
    networkDescription.textContent = node.description;

    nodeButtons.forEach((candidate) => {
      const isActive = candidate === button;
      candidate.classList.toggle('is-active', isActive);
      candidate.setAttribute('aria-pressed', String(isActive));
    });
    networkSvg.querySelectorAll('.network-link, .network-spoke').forEach((path) => {
      path.classList.toggle('is-active', path.dataset.from === node.id || path.dataset.to === node.id);
    });
  };

  networkConfig.forEach((node) => {
    const button = nodeButtons.get(node.id);
    if (!button) return;
    const activate = () => selectNode(node, button);
    button.addEventListener('focus', activate);
    button.addEventListener('click', activate);
  });

  if (resetButton) {
    resetButton.addEventListener('click', () => {
      const defaultNode = networkConfig.find((node) => node.id === 'sociedad');
      const defaultButton = nodeButtons.get('sociedad');
      if (defaultNode && defaultButton) selectNode(defaultNode, defaultButton);
    });
  }

  const defaultNode = networkConfig.find((node) => node.id === 'sociedad');
  const defaultButton = nodeButtons.get('sociedad');
  if (defaultNode && defaultButton) {
    selectNode(defaultNode, defaultButton);
  }
}
