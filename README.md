# CleanAir API

Express API for CPCB air quality, Open-Meteo climate, drought analysis, and chat.

This folder is meant to be its own Git repo (sibling to the `cleanAir` frontend project). Next step: `git init` and push to GitHub — see `DEPLOY.md` in the frontend repo or run:

```bash
git init && git add . && git commit -m "CleanAir API"
```

## Local

```bash
npm install
cp .env.example .env
npm run dev
```

Health: http://localhost:4000/health

Optional Postgres:

```bash
docker compose up postgres
# set DATABASE_URL in .env
```

Or API + Postgres in Docker:

```bash
docker compose up --build
```

## Environment

| Variable | Purpose |
|----------|---------|
| `PORT` | Listen port (Render sets this) |
| `DATABASE_URL` | Postgres for chat history (optional locally) |
| `AIR_QUALITY_SOURCE` | `sample` or `live` (+ `DATA_GOV_IN_API_KEY`) |
| `CHAT_MODE` | `stub` without Groq; omit with `GROQ_API_KEY` for live |
| `CORS_ORIGIN` | Comma-separated frontend URLs (e.g. Vercel) |
| `OPEN_METEO_BASE_URL` | Leave unset on Render |

## Deploy on Render

1. Push this folder as its own Git repo (see monorepo `DEPLOY.md`).
2. **New → Web Service** → connect repo → **Docker**.
3. Add Postgres (or use `render.yaml` Blueprint).
4. Set `CORS_ORIGIN` to your Vercel site URL(s).
5. Copy the service URL for the frontend: `NEXT_PUBLIC_API_URL`.

## Tests

```bash
npm test
npm run build
```
