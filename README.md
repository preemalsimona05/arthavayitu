# Arthavayitu (ಅರ್ಥವಾಯಿತು)

Kannada text digitization: **Don't skip the Kannada. Understand it.**

## Local development

```bash
npm install
npm run dev
```

The app is currently a responsive MVP shell. OCR, saved documents, and Gemini
integration will be added in subsequent feature work.

## Configuration

Copy `.env.example` to `.env` for local server-side configuration. Never commit
`.env` or real API keys. For Cloudflare Pages, configure `GEMINI_API_KEY` as an
encrypted Pages Function secret instead of exposing it to the browser.

## Checks

```bash
npm run lint
npm run build
```
