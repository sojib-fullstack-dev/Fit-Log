# FitLog

A dark-themed workout library web app built with Next.js and Tailwind CSS. Browse exercises, add lifts to your daily plan, save favorites, and track live stats. Fully responsive across mobile, tablet, and desktop.

## Live Link
[https://fit-log-pro.vercel.app/](https://fit-log-pro.vercel.app/)

## GitHub Repository
[https://github.com/sojib-fullstack-dev/Fit-Log](https://github.com/sojib-fullstack-dev/Fit-Log)

## Description

FitLog is a gym companion app where users can explore a library of 12 workouts, view detailed instructions for each, and build a daily workout plan. Users can add up to 5 lifts to "Today's Plan" or save workouts for later. The My Plan page shows live stats (total exercises, minutes, and calories) and lets users mark workouts as done or remove them from the list.

## Technologies Used

- **Next.js** (App Router) — routing and server/client components
- **TypeScript** — type safety across components and data
- **Tailwind CSS** — styling and responsive design
- **React Context API** — global state management for plan/saved workouts
- **React Icons** — icons used across buttons and stats
- **React Toastify** — toast notifications for user actions

## Features

1. **Responsive Workout Library** — Displays all workouts in a 3x4 grid on desktop, adapting to 2 or 1 columns on tablet and mobile.
2. **Workout Detail Pages** — Each workout has its own page with equipment, difficulty, sets, reps, duration, calories, rating, and step-by-step instructions.
3. **Today's Plan & Saved Workouts** — Add workouts to a daily plan (capped at 5) or save them for later, with live badge counters in the navbar.
4. **Live Stats Tracking** — The My Plan page calculates and displays total exercises, minutes, and calories in real time as workouts are added or removed.
5. **Sort & Manage Plan** — Sort workouts by duration, calories, or rating, mark workouts as done, or remove them instantly from the plan.
6. **Toast Notifications** — Instant feedback (success/error toasts) for actions like adding, saving, or duplicate attempts.
7. **404 & Error Handling** — Custom not-found page for invalid routes, with safe handling for missing workout data.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
