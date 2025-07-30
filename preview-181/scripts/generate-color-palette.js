const fs = require('fs')
const cssFile = './styles/palette.css'
const outputFile = './palette/index.html'
const cssContent = fs.readFileSync(cssFile, 'utf8');
const colors = getColors(cssContent)
const html = generateHTML(colors)

try {
  fs.writeFileSync(outputFile, html)
  console.log(`Generated ${outputFile} with ${colors.length} colors`)
} catch (error) {
  console.error(`Error writing the palette HTML: ${error.message}`)
  process.exit(1)
}

function getColors(css) {
  const colors = []
  const cssVariableRegex = /--([^:]+):\s*([^;]+);/g
  let match

  while ((match = cssVariableRegex.exec(css)) !== null) {
    const colorName = `--${match[1].trim()}`
    const colorValue = match[2].trim()
    if (colorName.includes('-rgb') && !colorValue.startsWith('rgb(')) {
      continue
    }
    colors.push({ name: colorName, value: colorValue })
  }

  return colors
}

function generateHTML(colors) {
  return `<!doctype html>
<html lang="en">
<head>
  <title>Component Library Color Palette</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
    crossorigin="anonymous"
  />
  <link href="../styles/sul.css" rel="stylesheet" />
  <style>
    .swatch { width: 4rem; height: 4rem; border-radius: 0.5rem; }
  </style>
</head>
<body class="bg-light p-5">
  <div class="container p-3">
    <h1 class="mb-4">Color Palette</h1>
    <div class="row g-3">${colors.map(color => `
      <div class="col-xl-4 col-md-6 col-sm-12">
        <div class="card">
          <div class="card-body d-flex align-items-center">
            <div class="swatch me-3 border" style="background-color: ${color.value};"></div>
              <small class="font-monospace fw-bold">${color.name}</small>
            </div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </div>
</body>
</html>`
}
