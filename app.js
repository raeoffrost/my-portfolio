import anime from "./modules/animejs/lib/anime.es.js";

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');

  gallery.addEventListener('click', (event) => {
    const button = event.target.closest('.button');
    // dont run animation if not btn
    if (!button) return;

    const root = button.closest('.root');
    const wrapper = root.querySelector('.wrapper');

    // Toggle text with animation
    if (wrapper.classList.contains('open')) {
      anime({
        targets: wrapper,
        height: 0,
        opacity: [1, 0],
        duration: 400,
        easing: 'easeOutQuad',
        complete() {
          wrapper.classList.remove('open');
          wrapper.style.display = 'none';
        }
      });
    } else {
      wrapper.style.display = 'block';
      wrapper.style.height = '0px';
      
      anime({
        targets: wrapper,
        height: el => el.scrollHeight,
        opacity: [0, 1],
        duration: 400,
        easing: 'easeOutCubic',
        complete() {
          wrapper.classList.add('open');
        }
      });
    }
  });
});