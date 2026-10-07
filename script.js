// FAQ accordion: one item open at a time; clicking the open item closes it.
const faqItems = document.querySelectorAll('.faq-item');

function setOpen(item, open) {
  const button = item.querySelector('button');
  button.setAttribute('aria-expanded', String(open));
  item.querySelector('.faq-item__icon').textContent = open ? '−' : '+';
  item.querySelector('.faq-item__answer').hidden = !open;
}

faqItems.forEach((item) => {
  item.querySelector('button').addEventListener('click', () => {
    const wasOpen = item.querySelector('button').getAttribute('aria-expanded') === 'true';
    faqItems.forEach((other) => setOpen(other, false));
    if (!wasOpen) setOpen(item, true);
  });
});

// Screenshot slots: show a placeholder until the image file exists.
document.querySelectorAll('.shot img').forEach((img) => {
  const markEmpty = () => img.closest('.shot').classList.add('is-empty');
  if (img.complete && img.naturalWidth === 0) markEmpty();
  img.addEventListener('error', markEmpty);
});

// Mobile menu: toggle the nav, and close it after a link is tapped.
const menuBtn = document.querySelector('.menu-btn');
const siteNav = document.getElementById('site-nav');

function setMenu(open) {
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  siteNav.classList.toggle('is-open', open);
}

if (menuBtn && siteNav) {
  menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  siteNav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
}
