
(function(){
  const lb = document.getElementById('lightbox');
  if (!lb) return;

  const lbMedia = document.getElementById('lightboxMedia');
  const lbCaption = document.getElementById('lightboxCaption');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const closeBtn = document.getElementById('lightboxClose');

  let items = [];
  let index = 0;

  function render(){
    const item = items[index];
    if (!item) return;

    lbMedia.innerHTML = item.type === 'video'
      ? `<video src="${item.media}" controls autoplay playsinline></video>`
      : `<img src="${item.media}" alt="${item.title || ''}">`;

    lbCaption.textContent = item.title || '';

    const multi = items.length > 1;
    prevBtn.style.display = multi ? 'flex' : 'none';
    nextBtn.style.display = multi ? 'flex' : 'none';
  }

  function open(list, startIndex){
    if (!list || !list.length) return;
    items = list;
    index = startIndex || 0;
    render();
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close(){
    lb.classList.remove('open');
    lbMedia.innerHTML = '';
    document.body.style.overflow = '';
  }

  function prev(){ index = (index - 1 + items.length) % items.length; render(); }
  function next(){ index = (index + 1) % items.length; render(); }

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  // Cerrar al hacer click fuera de la imagen (en el fondo oscuro)
  lb.addEventListener('click', (e) => {
    if (e.target === lb) close();
  });

  // Atajos de teclado: Escape para cerrar, flechas para moverse
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });

  // Se expone globalmente para que carousel.js (o cualquier otro archivo) lo use
  window.Lightbox = { open, close };
})();
