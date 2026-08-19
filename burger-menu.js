(function () {
  var openBtn = document.getElementById('burger-menu-open-btn');
  var menu = document.getElementById('burger-menu-59');
  if (!openBtn || !menu) return;

  var closeBtn = document.getElementById('burger-menu-close-btn');
  var wrapper = menu.querySelector('.nh-burger-menu__wrapper');

  function setOpen(isOpen) {
    menu.classList.toggle('burger-menu-is-open', isOpen);
    menu.classList.toggle('nh-burger-menu-layout__open', isOpen);
    menu.classList.toggle('nh-burger-menu-layout__close', !isOpen);
    menu.classList.toggle('nh-burger-menu-layout__close--1-3', !isOpen);
    if (wrapper) wrapper.classList.toggle('nh-burger-menu-layout__close--1-3', !isOpen);
    document.body.classList.toggle('burger-menu-open', isOpen);
    openBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    menu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  }

  openBtn.addEventListener('click', function () {
    setOpen(true);
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', function (event) {
      event.preventDefault();
      setOpen(false);
    });
  }

  menu.querySelectorAll('.nh-burger-menu__link').forEach(function (link) {
    link.addEventListener('click', function () {
      setOpen(false);
    });
  });

  menu.setAttribute('aria-hidden', 'true');
  openBtn.setAttribute('aria-expanded', 'false');
})();
