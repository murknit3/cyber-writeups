# Cybersecurity Write-Ups

A Docusaurus-powered portfolio and knowledge base for cybersecurity investigations, DFIR notes, threat hunting and offensive-security write-ups.

## Local development

Requires Node.js 20+.

```bash
npm install
npm start
```

## Add a write-up

1. Copy `WRITEUP_TEMPLATE.md` into the appropriate folder under `docs/`.
2. Rename it, for example `waynecorp-investigation.md`.
3. Write in Markdown.
4. Commit and push to `main`.

The GitHub Actions workflow builds and publishes the site automatically.

## GitHub Pages setup

Create the repository as **`cyber-writeups`** under the `murknit3` account, push these files, then open:

**Settings → Pages → Build and deployment → Source → GitHub Actions**

The configured production URL is:

`https://murknit3.github.io/cyber-writeups/`

If you use a different repository name, update `baseUrl` and `projectName` in `docusaurus.config.ts`.
