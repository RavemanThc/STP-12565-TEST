document.querySelectorAll('[data-faq-item="faq-item"]').forEach(item => {
  const summary = item.querySelector('[data-faq-summary="faq-summary"]');
  const content = item.querySelector('[data-faq-content="faq-content"]');

  summary.addEventListener('click', e => {
    e.preventDefault();

    const isOpen = item.hasAttribute('open');

    if (isOpen) {
      // CLOSE
      content.style.height = content.scrollHeight + 'px';

      requestAnimationFrame(() => {
        content.style.height = '0px';
      });

      content.addEventListener(
        'transitionend',
        () => {
          item.removeAttribute('open');
        },
        { once: true }
      );
    } else {
      // OPEN
      item.setAttribute('open', '');

      content.style.height = '0px';

      requestAnimationFrame(() => {
        content.style.height = content.scrollHeight + 'px';
      });

      content.addEventListener(
        'transitionend',
        () => {
          content.style.height = 'auto';
        },
        { once: true }
      );
    }
  });
});
