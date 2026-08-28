import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sitemapPath = resolve(__dirname, "../dist/sitemap-0.xml");

if (!existsSync(sitemapPath)) {
  console.warn("[fix-sitemap-home] sitemap-0.xml not found, skipping.");
  process.exit(0);
}

let xml = readFileSync(sitemapPath, "utf8");
const before = xml;
xml = xml.replace(
  /<loc>https:\/\/www\.lohen-genshin\.com\/<\/loc>/g,
  "<loc>https://www.lohen-genshin.com</loc>"
);

if (xml === before) {
  console.log("[fix-sitemap-home] no home trailing slash found, nothing changed.");
} else {
  writeFileSync(sitemapPath, xml, "utf8");
  console.log("[fix-sitemap-home] fixed home URL trailing slash in sitemap.");
}
