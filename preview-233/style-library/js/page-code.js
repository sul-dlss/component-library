window.addEventListener('load', () => {
  const elements = document.querySelectorAll(`[data-html-target]`)
  updateCode(elements[0].dataset.htmlTarget)
  if (elements.length > 1) {
    createDropdown(elements)

  }
})

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

  select.classList = 'float-start'
  select.addEventListener("change", function (event) {
    updateCode(event.target.value)
  })

  document.querySelector('[data-copy-target]').before(select)

}

function cleanHTML(element=''){
  document.querySelector('[data-copy-target]').dataset.copyTarget = element;
  const tagElement = document.querySelector(`[data-html-target="${element}"]`).cloneNode(true);
  delete tagElement.dataset.htmlTarget;
  // finds all spaces that are followed by a <
  // replace spaces with the same amount of spaces minus 4 spaces
  return tagElement.outerHTML.replaceAll(/ +(?=<)/g, m => " ".repeat(Math.max(0, m.length - 8)))
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