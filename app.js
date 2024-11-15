import anime from "./node_modules/animejs/lib/anime.es.js";
let isOpen = false;
document.addEventListener('DOMContentLoaded', () => {
  let targets = document.getElementById('wrapper');
  let wrapperStyle = wrapper.style;
  let button = document.getElementById('button');
  button.addEventListener('click', () => {
    if (isOpen) {
      anime({
        targets,
        height: 0,
        opacity: [1, 0],
        duration: 400,
        easing: 'easeOutQuad',
        complete() {
          isOpen = false;
          wrapperStyle.display = '';
        }
      });
    } else {
      isOpen = true;
      wrapperStyle.display = 'block';
      wrapperStyle.height = '0px';
      anime({
        targets,
        height: el => el.scrollHeight,
        opacity: [0, 1],
        duration: 400,
        easing: 'easeOutCubic'
      });
    }
  }, false);
}, false);
document.addEventListener('DOMContentLoaded', () => {
    let targets = document.getElementById('wrapper2');
    let wrapperStyle = wrapper2.style;
    let button = document.getElementById('button2');
    button.addEventListener('click', () => {
      if (isOpen) {
        anime({
          targets,
          height: 0,
          opacity: [1, 0],
          duration: 400,
          easing: 'easeOutQuad',
          complete() {
            isOpen = false;
            wrapperStyle.display = '';
          }
        });
      } else {
        isOpen = true;
        wrapperStyle.display = 'block';
        wrapperStyle.height = '0px';
        anime({
          targets,
          height: el => el.scrollHeight,
          opacity: [0, 1],
          duration: 400,
          easing: 'easeOutCubic'
        });
      }
    }, false);
  }, false);
  document.addEventListener('DOMContentLoaded', () => {
    let targets = document.getElementById('wrapper3');
    let wrapperStyle = wrapper3.style;
    let button = document.getElementById('button3');
    button.addEventListener('click', () => {
      if (isOpen) {
        anime({
          targets,
          height: 0,
          opacity: [1, 0],
          duration: 400,
          easing: 'easeOutQuad',
          complete() {
            isOpen = false;
            wrapperStyle.display = '';
          }
        });
      } else {
        isOpen = true;
        wrapperStyle.display = 'block';
        wrapperStyle.height = '0px';
        anime({
          targets,
          height: el => el.scrollHeight,
          opacity: [0, 1],
          duration: 400,
          easing: 'easeOutCubic'
        });
      }
    }, false);
  }, false);