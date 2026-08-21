# AGENTS.md

## 1. Project Purpose

This repository powers Nazam LLC website work, including website automation, SEO, indexing support, PageSpeed improvement, keyword analysis, content visibility, and safe code improvements.

Codex should help with coding, audits, reports, testing, pull request preparation, and repeatable automation workflows that support the Nazam LLC website and related search visibility systems.

## 2. Main Goals

- Improve the Nazam LLC website safely and incrementally.
- Support SEO, AEO, GEO, indexing, PageSpeed, keyword research, and reporting workflows.
- Keep the current Hostinger static site maintainable while preserving the React app for possible future multipage work.
- Prepare clean pull requests with focused diffs and clear validation notes.
- Help automate audits, reports, testing, and code review tasks.
- Prefer small, reversible changes over broad rewrites.

## 3. Repository Expectations

- Treat `hostinger-site/` as the live source of truth for the current Nazam LLC website unless the human explicitly says otherwise.
- Make normal website, SEO, AEO, GEO, metadata, sitemap, robots, `llms.txt`, content, design, and upload-instruction changes only inside `hostinger-site/`.
- Treat the React app under `client/` as archived/future-use code. Do not maintain duplicate website changes there unless the human explicitly asks to revive or migrate to React.
- Keep the React app available for future use and avoid deleting it without explicit approval.
- Preserve SEO assets such as `robots.txt`, `sitemap.xml`, structured data, metadata, and `llms.txt`.
- Keep upload/deployment instructions current when static site files change.
- Follow existing project patterns before adding new patterns.
- Prefer diffs, patches, and targeted edits over replacing full files.
- Do not change unrelated files.

## 4. Token-Saving Rules

- Keep prompts short and outcome-first.
- Use structured JSON outputs when possible.
- Do not paste full logs, full sitemap files, full HTML files, or full API responses unless necessary.
- Pre-filter data before sending it to the model.
- Send only the most relevant files, errors, snippets, or top issues.
- Prefer diffs and patches over rewriting full files.
- Summarize long outputs instead of pasting them.
- Keep final answers concise.

## 5. Model-Routing Rules

- Prefer GPT-5.5 for coding, debugging, architecture, security review, automation design, and complex agent tasks.
- Use low reasoning for simple extraction, formatting, and short reports.
- Use medium reasoning for normal coding tasks.
- Use high reasoning only for complex debugging, architecture, or multi-step automation.
- Avoid extra-high reasoning unless the task is truly difficult and worth the token cost.
- Do not increase model cost for routine edits, summaries, or formatting.

## 6. Safety Rules

- Do not modify `.env` files, secrets, API keys, billing settings, DNS records, production deployment settings, or credentials.
- Do not deploy to production automatically.
- Do not run destructive commands such as `git reset --hard`, forced checkout, mass deletion, or destructive database/API operations.
- Do not install new production dependencies without human approval.
- Do not make live Google Search Console, Google Ads, indexing, hosting, or external API changes without explicit approval.
- Do not expose private keys, tokens, customer data, or credentials in prompts, logs, commits, or pull requests.
- Prefer small, reversible changes.
- Always summarize changed files, tests run, risks, and next steps.

## 7. Human-Approval Requirements

Ask for explicit approval before:

- Deploying or publishing to production.
- Changing DNS, hosting, billing, credentials, API keys, or secrets.
- Installing new production dependencies.
- Calling live Google Search Console, Google Ads, indexing APIs, hosting APIs, or external write APIs.
- Running destructive commands or irreversible migrations.
- Removing the React app, deleting major folders, or changing the deployment strategy.
- Making broad visual redesigns, large rewrites, or business-positioning changes.

## 8. Verification Requirements

Use the smallest relevant checks for the task:

- For Hostinger static site changes, validate HTML-critical syntax, JSON-LD parsing, sitemap XML, responsive layout, and contact form behavior when relevant.
- For React app changes, run the relevant build or test command, usually `npm run build`.
- For SEO changes, verify metadata, canonical URLs, robots rules, sitemap updates, structured data consistency, and visible-page alignment.
- For PageSpeed-related changes, document what was changed and how performance should be rechecked.
- For automation/reporting changes, verify inputs, outputs, error handling, and safe failure behavior.
- If a check cannot be run, explain why and state the remaining risk.

## 9. Definition of Done

A task is done when:

- The requested outcome is implemented.
- Changes are limited to the intended scope.
- Relevant checks were run and summarized.
- No secrets, credentials, production settings, or unrelated files were changed.
- The final response lists changed files, tests run, risks, and next steps.
- Any remaining manual steps are clear.
- For PR work, the branch, commit, PR link, validation, and excluded unrelated files are summarized.

## Required workflow for Codex tasks

For every non-trivial task, follow this sequence:

1. Understand the request.
2. Inspect only the relevant files.
3. Create a short plan before editing.
4. Make the smallest safe change.
5. Run relevant checks.
6. Summarize:
   - what changed
   - files changed
   - tests/checks run
   - risks
   - next recommended step

For audit or analysis tasks:
- Do not edit files.
- Return findings grouped by priority.
- Include exact files or workflow areas when possible.
- Recommend the smallest safe fix.

For coding tasks:
- Prefer minimal diffs.
- Do not rewrite full files unless necessary.
- Do not change unrelated formatting.
- Do not change public behavior unless requested.
- Add or update tests when reasonable.

For automation tasks:
- Separate read-only actions, safe local writes, and external side effects.
- External side effects require human approval.
- Include rollback notes for any workflow change.

## 10. Suggested Task Templates

### Website Change

```json
{
  "task": "Update the Hostinger static website",
  "scope": ["hostinger-site/index.html", "hostinger-site/styles.css", "hostinger-site/script.js"],
  "goal": "Describe the exact user-facing outcome",
  "approval_needed": false,
  "verification": ["JSON-LD parse", "sitemap XML check", "desktop/mobile browser check"]
}
```

### SEO Audit

```json
{
  "task": "Audit SEO/AEO/GEO readiness",
  "inputs": ["top pages", "robots.txt", "sitemap.xml", "metadata", "structured data"],
  "output": "Prioritized issues with fixes",
  "limit": "Return only top issues and recommended patches"
}
```

### PageSpeed Review

```json
{
  "task": "Review PageSpeed opportunities",
  "inputs": ["top Lighthouse/PageSpeed issues", "affected files"],
  "output": "Small reversible fixes",
  "approval_needed": "Ask before adding dependencies or changing hosting/CDN settings"
}
```

### Keyword / Content Report

```json
{
  "task": "Create keyword or content opportunity report",
  "inputs": ["filtered query data", "top URLs", "top questions"],
  "output": "Short table of opportunities, intent, suggested page, and priority",
  "limit": "Do not paste full Search Console exports"
}
```

### Pull Request Preparation

```json
{
  "task": "Prepare a GitHub PR",
  "steps": ["inspect status", "stage intended files only", "run checks", "commit", "push", "open draft PR"],
  "output": "Branch, commit, PR link, validation, risks, and excluded files"
}
```
