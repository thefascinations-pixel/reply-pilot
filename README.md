# ReplyPilot

ReplyPilot is a web-based AI customer service copilot MVP. It helps support agents analyze customer messages, compare multiple reply strategies, edit the final response, copy it, and mark tickets as resolved.

The app currently runs in demo mode with realistic mock customer conversations, mock AI analysis, and mock reply suggestions. No login, database, or API key is required.

## Features

- Marketing landing page
- Interactive support workspace at `/demo`
- Customer chat filtering and search
- AI analysis panel with sentiment, intent, urgency, risk, and predicted needs
- Three scored reply options per conversation
- Editable final reply composer
- Copy, save draft, regenerate options, and mark resolved interactions
- Dashboard with demo metrics and issue categories
- Settings page with local demo controls
- Knowledge Base and Team placeholder pages
- Mock API route prepared for future LLM integration

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui-style local components
- lucide-react icons
- sonner toasts
- No required backend or database for demo mode

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For validation:

```bash
npm run typecheck
npm run build
```

## Deploy To Vercel

1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Use Node.js 20 in the Vercel project settings. This is also declared in `package.json`.
4. Vercel will use `npm install` and `npm run build` from `vercel.json`.
5. Add environment variables from `.env.example` if desired.

`OPENAI_API_KEY` is not required for demo mode.

## Demo Mode

ReplyPilot currently runs in demo mode with mock data. The architecture is prepared for future LLM integration through `lib/ai-placeholder.ts` and `app/api/analyze/route.ts`.

## Future Integration Plan

1. Replace mock analysis with LLM classification for intent, sentiment, urgency, and risk.
2. Add a company knowledge base with embeddings for policy-aware responses.
3. Add integrations with Zendesk, Intercom, Gmail, Shopify, or Freshdesk.
4. Store tickets and selected replies in PostgreSQL.
5. Use real CSAT feedback to improve satisfaction prediction.
