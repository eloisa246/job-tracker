# Job Tracker

A single-page React app for tracking job applications — saved roles, deadlines,
scored fit across several dimensions, and an AI-assisted resume/cover-letter
generator.

## Layout

```
.
├── package.json
├── public/
│   └── index.html      mobile-web-app meta, dark background, #root mount
└── src/
    ├── index.js        React 18 createRoot entry
    └── App.js          the entire app — ~890 lines, single file
```

`App.js` holds everything: the job data, the scoring model, the master resume
used for tailoring, and every component. It is one file by design, not an
accident of extraction.

## Running it

```bash
npm install
npm start
```

Create React App (`react-scripts` 5.0.1) on React 18. Dev server comes up on
port 3000.

```bash
npm run build     # production bundle to build/
```

## Data

Job entries live in a literal array at the top of `src/App.js` — 33 of them,
each carrying title, org, location, salary band, dates, requirements, freeform
notes, a tuition-benefit note, and a six-axis score (`qualification`,
`enjoyment`, `school`, `location`, `mph`, `mission`) with written rationale per
axis.

There is no backend and no database. Editing the data means editing the array.

## The resume generator

`ResumeGenerator` calls the Anthropic Messages API directly from the browser to
produce a tailored summary, bullet rewrites, and a cover letter for a given job.

- The API key is entered in the UI and persisted to `localStorage` under the key
  `anthropic_key`. It is never committed, and `.gitignore` covers `.env` files.
- The request sets `anthropic-dangerous-direct-browser-access: true`, which is
  what allows a browser-origin call to `api.anthropic.com`. This means the key
  lives in the browser — fine for a local single-user tool, not something to
  deploy publicly as-is, since anyone using a hosted copy would be pasting their
  own key into a page they don't control.
- The model is pinned to `claude-sonnet-4-6`, a previous-generation ID. Worth
  updating to a current model when convenient.

## Note on contents

`src/App.js` embeds a `MASTER_RESUME` constant containing a real full name,
email address, LinkedIn URL, education history, and complete employment history.
The job entries also carry candid personal notes — commute reasoning, salary
considerations, current-employer references, and frank assessments of specific
organizations.

Treat this repository as personal data. See the visibility discussion before
making it public or sharing the URL.
