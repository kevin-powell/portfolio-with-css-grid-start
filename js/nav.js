const navToggle = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const containerAll = document.querySelector('.container-all');

const containerAllStyle = containerAll.style;
const bodyClassList = document.body.classList;

navToggle.addEventListener('click', () => {
  containerAllStyle.transition = 'transform ease-in-out 250ms';
  bodyClassList.toggle('nav-is-open');
});

nav.addEventListener('click', () => {
  containerAllStyle.transition = '0ms';
  bodyClassList.remove('nav-is-open');
});
