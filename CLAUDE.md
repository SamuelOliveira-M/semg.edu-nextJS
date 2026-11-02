# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

SEMG.Edu — a school secretariat (secretaria escolar) web app for managing students, teachers, classes (turmas), subjects, registrations (matrículas), schedules and classrooms. UI text and domain naming are in Portuguese/mixed (e.g. `senha`, `turno`, `matricula`, and the misspelled `studant` used consistently for "student" in routes, files and types — keep that spelling).

## Commands

- `npm run dev` — dev server
- `npm run build` / `npm start` — production build / serve
- `npm run lint` — `next lint` (ESLint)
- `npm run prettier` / `npm run prettier:check` — format / check (uses prettier-plugin-tailwindcss)
- No test runner is configured.
- `npm run seed` points at `scripts/seed.js`, which does not exist (leftover from the Next.js course template).

Node >= 18.17 (`.nvmrc` present). Required env vars (`.env`): `API_URL` (base URL of the external backend), `AUTH_SECRET`. `auth.ts` reads `NEXTAUTH_SECRET`.

## Architecture

Next.js 14 App Router + TypeScript + Tailwind, derived from the Next.js "dashboard" course template. Path alias `@/*` maps to the repo root.

**There is no local database.** All data comes from a separate REST backend at `process.env.API_URL` (hosted on a free tier, so first requests can be slow).

- `app/lib/api.ts` — all `fetch` calls to the backend (login, teachers, classes, students, registrations, allocations, subjects, statistics, calendar). Server-side only.
- `app/lib/actions.ts` — `'use server'` Server Actions: validate form data with zod, call `api.ts`, then `revalidatePath` / `redirect`. Forms in `app/ui/**/create-form.tsx` etc. use these (with `useFormState`-style feedback).
- `app/lib/definitions.ts` — shared types for API payloads (`Teacher`, `SchollClass`, `CreateStudantType`, ...).
- `app/lib/data.ts` — **legacy template code** using `@vercel/postgres` (invoices/customers/revenue). Not the real data layer; don't extend it. Same for `revenue-chart.tsx`-style leftovers.

**Auth:** NextAuth v5 beta with a Credentials provider (`auth.ts`). `authorize` calls the backend `/login` through `POST()` in `api.ts` (the backend returns the user including a hashed `senha`), then compares with `bcrypt`. `auth.config.ts` + `middleware.ts` gate everything under `/dashboard` (logged-in users hitting other pages are redirected to `/dashboard`).

**Routes** (`app/dashboard/...`): `(overview)` home, `class`, `class/[id]` (+ `matricula/create`), `studant` (+ `registration/[registrationId]`), `teacher` (+ `[id]/allocate`). Each has `create/` pages and some `error.tsx` boundaries. Pages are server components that fetch via `api.ts`; search/filter uses URL search params with `app/ui/search.tsx` (debounced). UI components live in `app/ui/<domain>/` (class, studant, teacher, dashboard, calendar) with shared skeletons in `app/ui/skeletons.tsx`.
