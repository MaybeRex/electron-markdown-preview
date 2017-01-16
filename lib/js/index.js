const Handlebars = require('handlebars');
const marked = require('marked');

window.addEventListener(
  'DOMContentLoaded',
  init
);

function init(){
  window.removeEventListener(
    'DOMContentLoaded',
    init
  );

  window.localStorage.md = window.localStorage.md || ' ';
  window.localStorage.rawMD = window.localStorage.rawMD || ' ';
  const app = document.body.querySelector('.app');
  const textarea = document.body.querySelector('textarea');
  const mdOutput = document.body.querySelector('#markdownOutput');
  const outputMD = Handlebars.compile(mdOutput.innerHTML);

  textarea.innerHTML = window.localStorage.rawMD

  app.insertAdjacentHTML(
    'beforeend',
    outputMD(window.localStorage)
  );

  const markdownOutput = document.body.querySelector('.mdOutput');

  textarea.addEventListener(
    'keyup',
    (e) => {
      const raw = e.target.value;
      const markDown = marked(raw);
      window.localStorage.rawMD = raw;
      window.localStorage.md = markDown;
      console.log(window.localStorage.md);
      markdownOutput.innerHTML = markDown;
    }
  );
}
