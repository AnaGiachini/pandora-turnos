# Backend Project Guide

This guide documents the step-by-step process used to build PandoraTurnos. It can be reused as a reference for future backend, API, automation, and integration projects.

## 1. Define the Project Purpose

Before writing code, define the problem clearly.

Questions to answer:

- What problem does this project solve?
- Who is the user or business?
- Why is this project useful in the real world?
- What technical skills does this project demonstrate?

Example:

PandoraTurnos solves booking and reservation problems for small service businesses while practicing backend APIs, incident tracking, automation workflows, webhooks, logging, and troubleshooting.

## 2. Create the Project Folder

Create a clean folder for the new project.

```bash
mkdir project-name
cd project-name
```

Why:

- Keeps the project isolated.
- Avoids mixing old experiments with the new codebase.
- Makes the project easier to understand, publish, and maintain.

## 3. Initialize npm

Create the `package.json` file.

```bash
npm init -y
```

Why:

- Defines the Node.js project.
- Stores scripts, dependencies, metadata, and project configuration.
- Makes the project installable and reproducible.

Important fields:

- `name`: project package name.
- `version`: current project version.
- `description`: short explanation of the project.
- `main`: entry point for JavaScript projects.
- `scripts`: commands such as development, build, and test.
- `dependencies`: packages needed in production.
- `devDependencies`: packages needed only during development.

## 4. Write the First README

Create `README.md` early.

Recommended sections:

- Project name
- Overview
- Real-world context
- Technical goals
- Core modules
- Learning goals
- Technical decisions

Why:

- Helps clarify the project before coding.
- Improves portfolio quality.
- Trains technical communication.
- Helps prepare for interviews.

Important principle:

Write the first version yourself. It can be imperfect. Then improve it through review.

## 5. Create Documentation Files

Recommended folder:

```bash
mkdir docs
```

Recommended documents:

- `engineering-notes.md`: technical concepts and definitions.
- `decision-criteria.md`: why decisions were made.
- `critical-thinking.md`: reasoning, tradeoffs, and interview preparation.
- `backend-project-guide.md`: reusable process guide.

Why:

- Documents learning while building.
- Shows critical thinking.
- Helps explain decisions in a portfolio or interview.
- Prevents the project from becoming only a code exercise.

## 6. Install the Backend Stack

For a Node.js, Express, and TypeScript backend:

```bash
npm install express dotenv
npm install -D typescript tsx @types/node @types/express
```

Why each dependency matters:

- `express`: creates the HTTP server and API routes.
- `dotenv`: loads environment variables from `.env`.
- `typescript`: adds type checking and improves code reliability.
- `tsx`: runs TypeScript files during development without manual compilation.
- `@types/node`: provides TypeScript types for Node.js.
- `@types/express`: provides TypeScript types for Express.

## 7. Initialize TypeScript

Create the TypeScript configuration file.

```bash
npx tsc --init
```

Why:

- Creates `tsconfig.json`.
- Defines how TypeScript should check and compile the project.
- Helps keep the codebase consistent.

## 8. Plan the Initial Folder Structure

Recommended structure:

```text
src/
  app.ts
  server.ts
  routes/
  controllers/
  services/
  models/
  validators/
  middlewares/
  utils/
docs/
README.md
package.json
tsconfig.json
```

Purpose of each folder:

- `routes`: defines API endpoints.
- `controllers`: handles HTTP request and response logic.
- `services`: contains business logic.
- `models`: defines data shapes and domain entities.
- `validators`: validates input data.
- `middlewares`: handles shared request logic such as errors or logging.
- `utils`: stores helper functions.

## 9. Create the First Server

Start with a minimal server and one health check endpoint.

Recommended first endpoint:

```text
GET /health
```

Why:

- Confirms the server is running.
- Gives a simple endpoint for testing.
- Builds confidence before adding business logic.

## 10. Add Scripts

Recommended scripts in `package.json`:

```json
{
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
  }
}
```

Why:

- `dev`: runs the project during development.
- `build`: checks and compiles TypeScript.
- `start`: runs the compiled production version.

Key concepts:

- `npm run dev` executes the `dev` script defined in `package.json`.
- `tsx watch src/server.ts` runs the TypeScript server file in development mode and restarts when files change.
- `tsc` runs the TypeScript compiler.
- `node dist/server.js` runs the compiled JavaScript version of the server.
- `npm` is used to run package scripts, but `node` is the runtime that executes JavaScript files.

Common mistake:

```json
{
  "start": "npm node dist/server.js"
}
```

Why it is wrong:

`npm node` is not the correct command. The `start` script should call Node directly:

```json
{
  "start": "node dist/server.js"
}
```

Learning note:

Scripts should call the tool that performs the job. For example, development uses `tsx`, compilation uses `tsc`, and production execution uses `node`.

## 11. Build One Module at a Time

Recommended order:

1. Health check
2. Bookings
3. Incidents
4. Notifications
5. Webhooks
6. Audit logs
7. Error handling
8. Tests
9. Documentation polish

Why:

- Keeps the project manageable.
- Makes learning easier.
- Helps identify bugs earlier.
- Creates a clear story for portfolio and interviews.

## 12. Document Decisions While Building

For every important decision, write:

- Decision
- Reason
- Alternative considered
- Tradeoff
- Result

Example:

| Decision | Reason | Tradeoff |
| --- | --- | --- |
| Build API-first | Focus on backend skills before UI | Less visual at the beginning |

## 13. Use AI Correctly

Recommended workflow:

1. Try first.
2. Ask for review.
3. Understand the correction.
4. Rewrite or improve.
5. Explain the decision in your own words.

AI should help as:

- Tutor
- Reviewer
- Debugging assistant
- Documentation editor
- Interview simulator

AI should not replace:

- Your reasoning
- Your ability to debug
- Your ability to explain
- Your ownership of the project

## 14. Prepare for Employability

For each feature, be able to explain:

- What problem it solves.
- How the API works.
- What could fail.
- How errors are handled.
- How logs help troubleshoot.
- What tradeoffs were made.
- What would change in production.

Strong portfolio explanation:

I built a backend API that manages bookings, tracks operational incidents, triggers WhatsApp-style notification workflows, supports automation through webhooks, and documents troubleshooting decisions.
