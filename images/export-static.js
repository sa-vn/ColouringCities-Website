import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import fetch from "node-fetch";  // install: npm install node-fetch

const OUTPUT_HTML = "solid.html";
const IMAGES_DIR = "images";

(async () => {
  if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR);
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // 👇 Adjust this path to your build index.html
  await page.goto(
    "file:///C:/Samane/ColouringCities/Website/colouringcitieswebsite/build/index.html",
    { waitUntil: "networkidle0" }
  );

  // 1. Grab HTML (this already contains your <svg> map)
  let html = await page.content();

  // 2. Remove all <script> tags (since you want no JS)
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");

  // 3. Inline external CSS
  const styleLinks = await page.evaluate(() =>
    Array.from(document.querySelectorAll("link[rel=stylesheet]")).map(link => link.href)
  );

  for (const cssUrl of styleLinks) {
    try {
      const cssContent = await (await fetch(cssUrl)).text();
      html = html.replace(
        new RegExp(`<link[^>]+href=["']${cssUrl}["'][^>]*>`, "i"),
        `<style>${cssContent}</style>`
      );
    } catch (err) {
      console.error("❌ Could not fetch CSS:", cssUrl, err.message);
    }
  }

  // 4. Extract <img> sources and download them
  const imageSources = await page.evaluate(() =>
    Array.from(document.images).map(img => img.src)
  );

  for (const src of imageSources) {
    try {
      const res = await fetch(src);
      const buffer = await res.arrayBuffer();
      const url = new URL(src);
      const filename = path.basename(url.pathname);

      fs.writeFileSync(path.join(IMAGES_DIR, filename), Buffer.from(buffer));

      // Rewrite <img src="..."> to local images folder
      html = html.replace(new RegExp(src, "g"), `images/${filename}`);
    } catch (err) {
      console.error("❌ Could not fetch image:", src, err.message);
    }
  }

  // 5. Save final HTML
  fs.writeFileSync(OUTPUT_HTML, html, "utf-8");

  await browser.close();
  console.log(`✅ Export complete: ${OUTPUT_HTML} + /${IMAGES_DIR}`);
})();
