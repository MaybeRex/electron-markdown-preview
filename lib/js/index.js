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

  const app = document.body.querySelector('.app');
  const textarea = document.body.querySelector('textarea');
  const mdOutput = document.body.querySelector('#markdownOutput');
  const outputMD = Handlebars.compile(mdOutput.innerHTML);
  app.insertAdjacentHTML(
    'beforeend',
    outputMD(window.localStorage)
  );

  const markdownOutput = document.body.querySelector('.mdOutput');

  textarea.addEventListener(
    'keyup',
    (e) => {
      const markDown = marked(e.target.value);
      window.localStorage.md = markDown;
      console.log(window.localStorage.md);
      markdownOutput.innerHTML = markDown;
    }
  );
}
