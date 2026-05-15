document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('[data-action="open-menu"]');
  const closeBtn = document.querySelector('[data-action="close-menu"]');
  const menu = document.querySelector('[data-menu="mobile"]');

  if (!openBtn || !closeBtn || !menu) return;

  const openMenu = () => {
    menu.dataset.state = 'open';
    document.documentElement.classList.add('menu-open');
  };

  const closeMenu = () => {
    menu.dataset.state = 'closed';
    document.documentElement.classList.remove('menu-open');
  };

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  menu.addEventListener('click', e => {
    if (e.target.closest('[data-menu-link]')) {
      closeMenu();
    }
  });

  menu.dataset.state = 'closed';
});
