# Design: Interactive API Documentation

## What We Built

Twilio-inspired API documentation with interactive testing. Vue 3 SPA with two-column layout, scroll-spy sidebar, expandable "Try it" panels, and a live WebSocket tester.

## Files

- `website/documentation/index.html` — Vue 3 + Tailwind template
- `website/documentation/data.js` — All endpoint definitions, params, examples
- `website/documentation/main.js` — Vue app logic (auth, try-it, WebSocket tester)

## Key Design Decisions

- Auth uses the API's own `/auth/login` endpoint (no Cognito SDK needed)
- Vue 3 via CDN for reactivity without a build step
- Tailwind via CDN for styling
- Dark theme with indigo/purple accents
- Two-column: docs+params left, code examples+try-it right
- Every endpoint has expandable "Try it" panel
- WebSocket live tester built into the docs
