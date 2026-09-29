
const projectsData = {
  web: [
    { 
      title: 'Página Web de Mecatrónica', 
      org: 'Mecatronica', 
      desc: 'Sitio web enfocado en tecnología y mecatrónica, ofreciendo soporte técnico y mantenimiento de equipos.', 
      tags: ['HTML/CSS', 'JavaScript', 'Mecatrónica'], 
      kind: 'web',
      media: 'assets/img/meca1.png',
      type: 'image',
      gallery: [
        'assets/img/meca1.png',
        'assets/img/meca2.png',
        'assets/img/meca3.png',
        'assets/img/meca4.png',
        'assets/img/meca5.png',
        'assets/img/meca6.png',
        'assets/img/meca7.png',
        'assets/img/meca8.png'
      ]
    },
    { 
      title: 'Instituto Automotriz', 
      org: 'Automotriz', 
      desc: 'Sitio web para un instituto automotriz, con información sobre cursos, talleres y servicios de mantenimiento.', 
      tags: ['HTML', 'CSS', 'JavaScript'], 
      kind: 'web',
      media: 'assets/img/INST2.png',
      type: 'image',
      gallery: [
        'assets/img/INST2.png',
        'assets/img/INST3.png',
        'assets/img/INST4.png',
        'assets/img/INST5.png',
        'assets/img/INST6.png',
        'assets/img/INST7.png'
      ]
    },
    { 
      title: 'Muelles Goyo', 
      org: 'Muelles Goyo', 
      desc: 'Sitio web para una empresa de muelles, con información sobre productos, servicios y contacto.', 
      tags: ['JavaScript', 'HTML5'], 
      kind: 'web',
      media: 'assets/img/MUE1.png',
      type: 'image',
      gallery: [
        'assets/img/MUE1.png',
        'assets/img/MUE2.png',
        'assets/img/MUE3.png',
        'assets/img/MUE4.png',
        'assets/img/MUE5.png',
        'assets/img/MUE6.png',
        'assets/img/MUE7.png',
        'assets/img/MUE8.png'
      ]
    }
  ],

  software: [
    { 
      title: 'Proyecto de ingeniería', 
      org: 'Epislab', 
      desc: 'Proyecto estudiantil seleccionado para representar en las etapas estatal, nacional e internacional.', 
      tags: ['C#', 'Visual studio', 'Windows Forms'], 
      kind: 'software',
      media: 'assets/img/epis.png',
      type: 'image',
      gallery: [
        'assets/img/epis.png',
        'assets/img/epis2.jpeg',
        'assets/img/epis3.jpeg'
      ]
    }
  ],

  audiovisual: [
    { 
      title: 'Cinematografía con Dron y Gimbal', 
      org: 'Valdrix Motion', 
      desc: 'Producción, rodaje aéreo con dron, tomas dinámicas con gimbal y edición de video para el sector inmobiliario y comercial.', 
      tags: ['Dron', 'Gimbal', 'Edición Video', '4K'], 
      kind: 'audiovisual', 
      playable: true,
      media: 'assets/video/Centurias.mp4', // Reemplaza por la ruta de tu video o portada en assets/img/
      type: 'video', // Usa 'video' o 'image' según el tipo de tu portada principal
      gallery: [
        { media: 'assets/video/Centurias.mp4', type: 'video' },
        { media: 'assets/video/ElMilagro.mp4', type: 'video' },
        { media: 'assets/video/VIDEOPRUEBA.mp4', type: 'video' },
        { media: 'assets/video/Sentzia.mp4', type: 'video' },
        { media: 'assets/img/dar1.jpg', type: 'image' },
        { media: 'assets/img/dar2.jpg', type: 'image' },
        { media: 'assets/img/dar3.jpg', type: 'image' },
        { media: 'assets/img/dar4.jpg', type: 'image' },
        { media: 'assets/img/dar5.jpg', type: 'image' },
        { media: 'assets/img/dar6.jpg', type: 'image' },
        { media: 'assets/img/dar7.jpg', type: 'image' },
        { media: 'assets/img/dar8.jpg', type: 'image' },
        { media: 'assets/img/dar9.jpg', type: 'image' },
        { media: 'assets/img/dar10.jpg', type: 'image' },
        { media: 'assets/img/dar11.jpg', type: 'image' },

      ]
    }
  ]
};

const icons = {
  web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 8h18"/></svg>',
  software: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12"/></svg>',
  audiovisual: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></svg>',
  placeholder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 5v14M5 12h14"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>'
};

(function initCarousel(){
  const track = document.getElementById('carTrack');
  const dotsWrap = document.getElementById('carDots');
  const prevBtn = document.querySelector('.car-arrow.prev');
  const nextBtn = document.querySelector('.car-arrow.next');
  const tabBtns = document.querySelectorAll('.tab-btn');
  if (!track) return;

  let activeIndex = 0;
  let currentItems = [];

  function mediaMarkup(item){
    if (item.media) {
      return item.type === 'video'
        ? `<video src="${item.media}" muted loop playsinline></video>`
        : `<img src="${item.media}" alt="${item.title}">`;
    }
    return icons[item.kind] || icons.placeholder;
  }

  function buildCard(item, index){
    const card = document.createElement('div');
    card.className = 'car-card';
    card.dataset.index = index;

    const mediaInner = mediaMarkup(item);

    card.innerHTML = `
      <div class="car-card-inner">
        <div class="car-media">
          ${item.org ? `<span class="car-tag-float">${item.org}</span>` : ''}
          ${mediaInner}
          ${item.playable ? `<span class="car-play">${icons.play}</span>` : ''}
        </div>
        <div class="car-body">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <div class="tag-row">${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        </div>
      </div>
      <div class="car-reflection" aria-hidden="true"></div>
    `;

    const reflection = card.querySelector('.car-reflection');
    reflection.innerHTML = `<div class="car-media" style="aspect-ratio:16/10;">${mediaInner}</div>`;

    card.addEventListener('click', () => {
      const i = parseInt(card.dataset.index, 10);
      if (i !== activeIndex) {
        activeIndex = i;
        updateCarousel();
      }
    });

    const mediaEl = card.querySelector('.car-media');
    mediaEl.addEventListener('click', (e) => {
      e.stopPropagation();
      const i = parseInt(card.dataset.index, 10);
      if (i !== activeIndex) {
        activeIndex = i;
        updateCarousel();
        return;
      }
      
      if (window.Lightbox) {
        if (item.gallery && item.gallery.length > 0) {
          const galleryItems = item.gallery.map(gItem => {
            if (typeof gItem === 'object') {
              return { media: gItem.media, type: gItem.type || 'image', title: item.title };
            }
            return { media: gItem, type: 'image', title: item.title };
          });
          window.Lightbox.open(galleryItems, 0);
        } else if (item.media) {
          window.Lightbox.open([{ media: item.media, type: item.type || 'image', title: item.title }], 0);
        }
      }
    });

    return card;
  }

  function renderCategory(category){
    currentItems = projectsData[category];
    activeIndex = 0;
    track.innerHTML = '';
    dotsWrap.innerHTML = '';
    currentItems.forEach((item, i) => {
      track.appendChild(buildCard(item, i));
      const dot = document.createElement('button');
      dot.className = 'car-dot';
      dot.setAttribute('aria-label', 'Ir al proyecto ' + (i + 1));
      dot.addEventListener('click', () => { activeIndex = i; updateCarousel(); });
      dotsWrap.appendChild(dot);
    });
    updateCarousel();
  }

  function updateCarousel(){
    const cards = track.querySelectorAll('.car-card');
    const dots = dotsWrap.querySelectorAll('.car-dot');
    cards.forEach((card) => {
      const i = parseInt(card.dataset.index, 10);
      const offset = i - activeIndex;
      const abs = Math.abs(offset);
      const x = offset * 190;
      const z = -abs * 160;
      const rotY = offset * -26;
      const scale = i === activeIndex ? 1 : 0.82;
      const opacity = abs > 2 ? 0 : 1 - abs * 0.32;
      card.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${rotY}deg) scale(${scale})`;
      card.style.opacity = opacity;
      card.style.zIndex = 100 - abs;
      card.classList.toggle('is-active', i === activeIndex);
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === activeIndex));
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      activeIndex = Math.max(0, activeIndex - 1);
      updateCarousel();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      activeIndex = Math.min(currentItems.length - 1, activeIndex + 1);
      updateCarousel();
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCategory(btn.dataset.tab);
    });
  });

  renderCategory('web');
})();