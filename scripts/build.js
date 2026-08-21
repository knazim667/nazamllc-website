#!/usr/bin/env node
/* Injects shared partials into page bodies. Node built-ins only. */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'site-src');
const OUT = path.join(ROOT, 'hostinger-site');
const ASSET_VERSION = '6'; // bump when styles.css or script.js changes

const partial = n => fs.readFileSync(path.join(SRC, 'partials', `${n}.html`), 'utf8');
const HEAD = partial('head');
const HEADER = partial('header');
const FOOTER = partial('footer');

/* Front matter: an HTML comment block at the top of each page file.
   <!--meta
   title: ...
   description: ...
   canonical: ...
   ogImage: images/hero-editorial.jpg
   -->                                                            */
function parseFrontMatter(raw) {
  // Consume exactly one newline after the closing "-->": a greedy \s* here
  // would also eat the body's leading indentation and corrupt the markup.
  const m = raw.match(/^<!--meta\s*([\s\S]*?)-->\r?\n?/);
  if (!m) throw new Error('missing <!--meta ... --> front matter');
  const meta = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^\s*([A-Za-z]+):\s*(.*)$/);
    if (kv) meta[kv[1]] = kv[2].trim();
  }
  for (const k of ['title', 'description', 'canonical']) {
    if (!meta[k]) throw new Error(`front matter missing "${k}"`);
  }
  return { meta, body: raw.slice(m[0].length) };
}

function substitute(tpl, vars) {
  return tpl.replace(/\{\{(\w+)\}\}/g, (whole, key) => {
    if (!(key in vars)) throw new Error(`unknown token {{${key}}}`);
    return vars[key];
  });
}

function pageFiles(dir, base = '') {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${e.name}` : e.name;
    if (e.isDirectory()) out.push(...pageFiles(path.join(dir, e.name), rel));
    else if (e.name.endsWith('.html')) out.push(rel);
  }
  return out;
}

let built = 0;
for (const rel of pageFiles(path.join(SRC, 'pages'))) {
  const raw = fs.readFileSync(path.join(SRC, 'pages', rel), 'utf8');
  let parsed;
  try { parsed = parseFrontMatter(raw); }
  catch (e) { console.error(`✗ ${rel}: ${e.message}`); process.exit(1); }
  const { meta, body } = parsed;

  // depth-aware asset prefix so /work/chromyne.html resolves ../styles.css
  const depth = rel.split('/').length - 1;
  const prefix = depth ? '../'.repeat(depth) : '';

  const vars = {
    TITLE: meta.title,
    DESCRIPTION: meta.description,
    CANONICAL: meta.canonical,
    OG_IMAGE: meta.ogImage || 'images/hero-editorial.jpg',
    OG_TYPE: meta.ogType || 'website',
    // Schema files are HTML fragments containing one or more complete
    // <script type="application/ld+json"> blocks. The homepage needs two
    // (ProfessionalService + FAQPage), so a bare .json file will not do.
    SCHEMA: meta.schema ? fs.readFileSync(path.join(SRC, 'schema', meta.schema), 'utf8') : '',
    BODY_CLASS: meta.bodyClass || '',
    ASSET_PREFIX: prefix,
    V: ASSET_VERSION,
  };

  const html = substitute(HEAD, vars)
    + substitute(HEADER, vars)
    + body
    + substitute(FOOTER, vars);

  const dest = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, html);
  built++;
  console.log(`  built ${rel}`);
}
console.log(`Built ${built} page(s).`);
