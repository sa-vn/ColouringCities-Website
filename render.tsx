import React from "react"
import ReactDOMServer from "react-dom/server"
import App from "./src/App"
import { writeFileSync, mkdirSync } from "fs"

// Render your React app to static HTML
const html = ReactDOMServer.renderToStaticMarkup(<App />)

// Ensure dist exists
mkdirSync("dist", { recursive: true })

// Write full HTML file
writeFileSync(
  "dist/index.html",
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Colouring Cities</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div id="root">${html}</div>
  </body>
</html>`
)

console.log("✅ Static HTML written to dist/index.html")
