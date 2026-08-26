window.addEventListener('load', () => {
  const iframes = document.querySelectorAll('[data-iframe-target]');
  let elements;
  if (iframes.length > 0) {
    this.iframe = true;
    elements = [...iframes].map(element => element.contentWindow.document.querySelector(`[data-html-target]`))
  } else {
    this.iframe = false;
    elements = document.querySelectorAll(`[data-html-target]`)
  }
  updateCode(elements[0].dataset.htmlTarget)
  if (elements.length > 1) {
    createDropdown(elements)
  }
  addHomeLink()
})

function addHomeLink() {
  const main = document.querySelector('main');
  const div = document.createElement("div");
  div.classList = 'mb-3';
  const path = window.location.pathname;
  const regex = /^(\/[^\/]+(?:\/preview-[^\/]+)?)/gm;
  const link_path = path.split('/').filter(Boolean).length < 2 ? '/' : path.match(regex);
  div.innerHTML = `<a href="${link_path}"><i class="bi bi-arrow-left me-1"></i> Back to main menu</a>`;
  main.insertBefore(div, main.firstChild);
}

function updateCode(target) {
  const code = document.querySelector('.language-html')
  code.textContent = cleanHTML(target)
  delete code.dataset.highlighted;
  hljs.highlightAll()
}

function createDropdown(elements) {
  const select = document.createElement("select");


  elements.forEach(opt => {
    const option = document.createElement("option");
    option.value = opt.dataset.htmlTarget;
    option.textContent = opt.dataset.htmlTarget;
    select.appendChild(option);
  });

  select.classList = 'ms-2'
  select.addEventListener("change", function (event) {
    updateCode(event.target.value)
  })

  document.querySelector('[data-copy-target]').before(select)

}

function getTagElement(element) {
  if (this.iframe) {
    return document.querySelector(`[data-iframe-target="${element}"]`).contentWindow.document.querySelector(`[data-html-target="${element}"]`).cloneNode(true)
  }
  return document.querySelector(`[data-html-target="${element}"]`).cloneNode(true)
}

function cleanHTML(element=''){
  document.querySelector('[data-copy-target]').dataset.copyTarget = element;
  const tagElement = getTagElement(element);
  delete tagElement.dataset.htmlTarget;
  // looking at the element that has the data-html-target variable
  // get the last line of the element.
  // find the number of leading spaces for that element
  // i.e. </footer> element has 8 leading spaces
  const html = tagElement.dataset.innerHtml ? tagElement.innerHTML : tagElement.outerHTML;
  const lines = html.trimEnd().split('\n');
  const lastLine = lines[lines.length - 1];
  const outerLength = lastLine.match(/^\s*/)[0].length;
  // finds all spaces that are followed by a <
  // replace spaces with the same amount of spaces minus the number of spaces for the last element
  return html.replaceAll(/ +(?=<)/g, m => " ".repeat(Math.max(0, m.length - outerLength)))
}

function copyHTML(event) {
  const element = event.target.dataset.copyTarget;
  // Use the Clipboard API to write the text
  navigator.clipboard.writeText(cleanHTML(element))
    .then(() => {
      event.target.textContent = 'Copied!'
      setTimeout(() => {
        event.target.textContent = 'Copy'
      }, 4000);
    })
    .catch(err => {
      console.error("Failed to copy text: ", err);
    });
}