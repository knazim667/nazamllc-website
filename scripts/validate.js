#!/usr/bin/env node
/* Validates built output in hostinger-site/. Node built-ins only. */
'use strict';
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'hostinger-site');
const errors = [];
const fail = (file, msg) => errors.push(`${file}: ${msg}`);

function htmlFiles(dir, base = '') {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${e.name}` : e.name;
    if (e.isDirectory()) {
      if (e.name === 'images') continue;
      out.push(...htmlFiles(path.join(dir, e.name), rel));
    } else if (e.name.endsWith('.html')) {
      out.push(rel);
    }
  }
  return out;
}

function checkPage(rel, html) {
  // 1. exactly one <h1>
  const h1s = html.match(/<h1[\s>]/g) || [];
  if (h1s.length !== 1) fail(rel, `expected 1 <h1>, found ${h1s.length}`);

  // 2. required meta
  if (!/<title>[^<]{5,}<\/title>/.test(html)) fail(rel, 'missing or empty <title>');
  if (!/<meta name="description" content="[^"]{20,}"/.test(html)) fail(rel, 'missing meta description');
  if (rel !== '404.html' && !/<link rel="canonical" href="https:\/\/nazamllc\.com\/[^"]*">/.test(html)) {
    fail(rel, 'missing or malformed canonical');
  }

  // 3. every JSON-LD block parses
  const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g) || [];
  ld.forEach((block, i) => {
    const body = block.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
    try { JSON.parse(body); } catch (e) { fail(rel, `JSON-LD block ${i + 1} does not parse: ${e.message}`); }
  });

  // 4. no dead placeholder links
  if (/href="#"/.test(html)) fail(rel, 'contains dead href="#"');

  // 5. accessibility floor
  if (rel !== '404.html') {
    if (!/<main[\s>]/.test(html)) fail(rel, 'missing <main> landmark');
    if (!/class="skip-link"/.test(html)) fail(rel, 'missing skip link');
  }

  // 6. images must declare dimensions and lazy-load (hero exempt via data-hero)
  const imgs = html.match(/<img\b[^>]*>/g) || [];
  for (const img of imgs) {
    if (!/\bwidth="\d+"/.test(img) || !/\bheight="\d+"/.test(img)) {
      fail(rel, `img missing width/height: ${img.slice(0, 80)}`);
    }
    if (!/loading="(lazy|eager)"/.test(img)) {
      fail(rel, `img missing loading attribute: ${img.slice(0, 80)}`);
    }
  }

  // 7. internal links resolve
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map(m => m[1]);
  for (const h of hrefs) {
    if (/^(https?:|mailto:|tel:|data:|#)/.test(h)) continue;
    const clean = h.split('#')[0].split('?')[0];
    if (!clean) continue;
    const target = clean.startsWith('/')
      ? path.join(OUT, clean)
      : path.join(OUT, path.dirname(rel), clean);
    if (!fs.existsSync(target)) fail(rel, `broken internal link: ${h}`);
  }
}

function checkSitemap(pages) {
  const p = path.join(OUT, 'sitemap.xml');
  if (!fs.existsSync(p)) return fail('sitemap.xml', 'missing');
  const xml = fs.readFileSync(p, 'utf8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  if (!locs.length) return fail('sitemap.xml', 'no <loc> entries');
  for (const loc of locs) {
    const rel = loc.replace('https://nazamllc.com/', '') || 'index.html';
    const file = rel.endsWith('/') || rel === '' ? 'index.html' : rel;
    if (!fs.existsSync(path.join(OUT, file))) fail('sitemap.xml', `<loc> has no file: ${loc}`);
  }
  if (locs.some(l => l.includes('404'))) fail('sitemap.xml', '404 page must not be listed');
  const listed = new Set(locs.map(l => (l.replace('https://nazamllc.com/', '') || 'index.html')));
  for (const pg of pages) {
    if (pg === '404.html') continue;
    const key = pg === 'index.html' ? 'index.html' : pg;
    if (!listed.has(key) && !listed.has(pg)) fail('sitemap.xml', `page not listed: ${pg}`);
  }
}

const pages = htmlFiles(OUT);
if (!pages.length) fail('hostinger-site', 'no HTML files found');
for (const rel of pages) {
  // Lead magnets under downloads/ are standalone documents, not built from
  // partials — they have no <main>, no skip link, and their own <h1> rules.
  // They still must appear in the sitemap, so they stay in `pages`.
  if (rel.startsWith('downloads/')) continue;
  checkPage(rel, fs.readFileSync(path.join(OUT, rel), 'utf8'));
}
checkSitemap(pages);

console.log(`Checked ${pages.length} pages.`);
if (errors.length) {
  console.error(`\n${errors.length} problem(s):`);
  for (const e of errors) console.error('  ✗ ' + e);
  process.exit(1);
}
console.log('All checks passed.');
