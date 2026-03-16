# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test runner is configured yet.

## Project Overview

**Buildoria** is a gamified engineering learning platform where users improve technical skills by completing exercises. The UI presents a city map of technology topics — buildings grow taller as users gain mastery in each topic, and building "activity" (lights, people) decays when the user disengages from a topic.

This is a hackathon project targeting the **DigitalOcean Gradient AI** platform.

## Architecture

### Frontend (Next.js 16 App Router)
- City map interface where technology topics are districts
- Exercise display and submission UI
- Progress visualized as building height/activity per topic
- Deployed on DigitalOcean App Platform

Tech: Next.js 16, React 19, TypeScript, Tailwind CSS v4

### Backend (Next.js API Routes)
Five internal services:
- **Authentication Service** — user login, tokens, identity
- **Exercise Service** — retrieves exercises by topic/difficulty, adaptive to user skill level
- **Submission Service** — stores submissions, fetches exercise metadata, triggers AI evaluation
- **Mentor Router** — routes submissions to the correct topic-specific mentor agent (e.g. REST API topic → API mentor agent)
- **Progress Service** — translates AI evaluation scores into concept mastery updates that drive city visuals

### AI Evaluation System (DigitalOcean Gradient AI)
Set of topic-specific mentor agents that:
- Analyze user answers
- Generate feedback
- Recommend next concepts to learn
- Return a mastery score update

The Mentor Router selects the appropriate agent based on exercise topic.

### Database (DigitalOcean Managed Databases)
Key data models:
- **Users** — account data and progress
- **Exercises** — challenges tied to specific concepts and topics
- **Concept Knowledge Graph** — hierarchical representation of tech skills (topics → concepts → dependencies)
- **UserConceptMastery** — per-user mastery scores per concept (drives city visuals)
- **Submissions** — user answers and AI evaluation results

### Object Storage (DigitalOcean Spaces)
Stores exercise assets, logs, and large evaluation outputs. Kept separate from the main DB.

## Key Architectural Decisions

- **Exercise type (MVP):** Written/design questions only — no code execution sandbox needed
- **AI provider:** DigitalOcean Gradient AI (locked in for hackathon)
- **Auth:** To be decided (NextAuth.js with GitHub OAuth recommended for speed)
- **Async evaluation:** AI responses are slow — submission flow should use streaming or polling, not synchronous blocking

## Specs

Full architecture specs are in `/specs/architecture/`. Key files:
- `system_context.md` — system overview and external dependencies
- `container_diagram.md` — the 5-container architecture
- `backend/backend.md` — backend service responsibilities
