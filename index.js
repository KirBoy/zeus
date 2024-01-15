const url = new URL(window.location.href);
const params = url.searchParams;
const click = params.get('stag')

const logo = document.querySelector('.logo2');
const modal__link = document.querySelector('.button');

logo.href = `https://vovan9.fun?stag=${click}`
modal__link.href = `https://vovan9.fun?stag=${click}`
