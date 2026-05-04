# Engineering Notes

This document captures the technical concepts, backend patterns, automation ideas, and troubleshooting lessons learned while building PandoraTurnos.

## Purpose

Use this file as a learning journal for engineering concepts that are important for backend, automation, integrations, APIs, n8n, and support troubleshooting roles.

## Concepts Learned

### API

Definition:

An API (Application Programming Interface) is a contract that allows one system to communicate with another system. In backend development, an API usually exposes endpoints that clients or external tools can call using HTTP requests.

Why it matters:

APIs are the foundation of integrations. They allow frontends, automation tools, external platforms, and other services to use backend functionality in a controlled and predictable way.

How this project uses it:

PandoraTurnos exposes a backend API to manage bookings, notifications, incidents, webhook events, and troubleshooting workflows.

### REST

Definition:

REST (Representational State Transfer) is an architectural style for designing APIs around resources such as bookings, incidents, notifications, or users.

Why it matters:

REST helps keep APIs predictable by using standard HTTP methods like GET, POST, PUT, PATCH, and DELETE.

How this project uses it:

PandoraTurnos uses REST principles to organize booking and incident operations into clear endpoints.

### Endpoint

Definition:

An endpoint is a specific URL in an API that performs a defined action or returns a specific resource.

Why it matters:

Endpoints are how clients, automation tools, and external services interact with the backend.

How this project uses it:

Examples in PandoraTurnos will include endpoints such as a health check, booking creation, incident registration, and webhook handling.

### Webhook

Definition:

A webhook is an HTTP callback used by one system to notify another system when an event happens.

Why it matters:

Webhooks are essential for automation and integrations because they allow systems to react to events without manual work.

How this project uses it:

PandoraTurnos will use webhooks to simulate automation workflows, notification events, failed integrations, and incident creation.

### Incident

Definition:

An incident is a record of something that went wrong or needs technical follow-up, such as a failed notification, webhook error, payment confirmation issue, or automation failure.

Why it matters:

Incident tracking is important for troubleshooting, support, monitoring, and operational reliability.

How this project uses it:

PandoraIncidentLab, as an internal layer of PandoraTurnos, will register and document incidents related to failed workflows and integration problems.

### Logging

Definition:

Logging is the practice of recording important events, errors, requests, and system behavior while an application runs.

Why it matters:

Logs help developers and support teams understand what happened, when it happened, and where to investigate when something fails.

How this project uses it:

PandoraTurnos will use logs to support troubleshooting of bookings, webhooks, notifications, and incident flows.

### Troubleshooting

Definition:

Troubleshooting is the process of investigating a problem, identifying its cause, and applying a solution or workaround.

Why it matters:

Troubleshooting is a key skill for backend, integration, automation, and technical support roles.

How this project uses it:

PandoraIncidentLab will document how failures are detected, analyzed, registered, and resolved inside PandoraTurnos.

### npm Scripts

Definition:

npm scripts are custom commands defined inside the `scripts` section of `package.json`.

Why it matters:

Scripts make common project tasks easier to run and standardize how developers start, build, test, and maintain a project.

How this project uses it:

PandoraTurnos uses `dev`, `build`, and `start` scripts to separate development execution, TypeScript compilation, and production execution.

### Runtime

Definition:

A runtime is the environment that executes code. In this project, Node.js is the runtime that executes JavaScript files.

Why it matters:

Understanding the runtime helps explain why `node dist/server.js` runs the compiled project, while `tsx` is used only during development to run TypeScript directly.

How this project uses it:

PandoraTurnos uses Node.js to run the backend server after TypeScript has been compiled to JavaScript.

### TypeScript Compiler

Definition:

The TypeScript compiler, `tsc`, checks TypeScript code and compiles it into JavaScript.

Why it matters:

Browsers and Node.js execute JavaScript, not TypeScript directly. TypeScript improves development with types, but the final production code is JavaScript.

How this project uses it:

PandoraTurnos uses `npm run build` to execute `tsc` and prepare the project for production execution.

### Health Check

Definition:

A health check is a simple endpoint used to confirm that an API or service is running.

Why it matters:

Health checks are useful for development, monitoring, deployment, and troubleshooting. They give developers and systems a quick way to verify that the backend is alive.

How this project uses it:

PandoraTurnos uses `GET /health` as the first endpoint to confirm that the API is responding correctly.

### JSON Response

Definition:

A JSON response is structured data returned by an API using JavaScript Object Notation.

Why it matters:

APIs usually return JSON because it is easy for frontends, automation tools, and external services to read and process.

How this project uses it:

The health check returns a JSON response with the service status and service name.

### Type-Only Import

Definition:

A type-only import is an import used only by TypeScript for type checking. It does not exist at runtime.

Why it matters:

Using `import type` helps separate runtime code from TypeScript-only types, which makes the project clearer and avoids unnecessary runtime imports.

How this project uses it:

PandoraTurnos imports Express as runtime code and imports `Request` and `Response` only as TypeScript types.

### rootDir and outDir

Definition:

`rootDir` tells TypeScript where the source code lives. `outDir` tells TypeScript where compiled JavaScript files should be generated.

Why it matters:

Keeping source code and build output separated makes the project easier to read, maintain, clean, and deploy.

How this project uses it:

PandoraTurnos keeps TypeScript source files in `src/` and compiled JavaScript output in `dist/`.

### Build Artifacts

Definition:

Build artifacts are files generated by a build process, such as compiled JavaScript files, declaration files, and source maps.

Why it matters:

Build artifacts should not be mixed with source files. If generated files appear inside `src/`, the project becomes harder to understand and maintain.

How this project uses it:

After configuring `rootDir` and `outDir`, PandoraTurnos generates build artifacts inside `dist/` instead of `src/`.

### Route

Definition:

A route defines how the API responds to a specific HTTP method and path.

Why it matters:

Routes organize API access points and connect incoming requests to the correct controller logic.

How this project uses it:

PandoraTurnos uses `booking.routes.ts` to define booking-related endpoints.

### Controller

Definition:

A controller handles the HTTP layer of an API request. It receives the request, calls the necessary business logic, and returns the response.

Why it matters:

Controllers keep request and response logic separate from business rules.

How this project uses it:

PandoraTurnos uses `booking.controller.ts` to return booking data through the API.

### Service

Definition:

A service contains business logic and data operations that should not live directly inside routes or controllers.

Why it matters:

Services make the code easier to test, reuse, and maintain as the application grows.

How this project uses it:

PandoraTurnos uses `booking.service.ts` to provide booking data to the controller.

### Router Mounting

Definition:

Router mounting means attaching a router to a base path in the main Express app.

Why it matters:

It keeps module routes clean. For example, the bookings router can define `GET /`, while the app mounts it under `/bookings`.

How this project uses it:

PandoraTurnos mounts the bookings router with `app.use("/bookings", bookingRouter)`, so `router.get("/")` becomes `GET /bookings`.

## Technical Vocabulary

| Term | Meaning | Project Example |
| --- | --- | --- |
| API | A contract that allows systems to communicate | The PandoraTurnos backend API |
| Endpoint | A specific API URL for an action or resource | `GET /health` checks if the API is running |
| Request | A message sent by a client to the server | A request to create a booking |
| Response | The message returned by the server | A JSON response with booking data |
| Status code | A numeric HTTP result code | `200` for success, `400` for invalid input |
| Webhook | An event-based HTTP callback between systems | n8n receives a booking event |
| Incident | A tracked operational or technical problem | A failed WhatsApp-style notification |
| Log | A recorded event or error from the system | A log entry for a failed webhook |
| Retry | A second attempt after a failure | Retrying a failed notification workflow |
| npm script | A reusable command defined in `package.json` | `npm run dev` starts the API in development |
| Runtime | The environment that executes code | Node.js runs `dist/server.js` |
| Compiler | A tool that transforms or checks code | `tsc` compiles TypeScript |
| Health check | An endpoint that confirms a service is running | `GET /health` returns API status |
| JSON response | Structured API data returned as JSON | `{ "status": "ok" }` |
| Type-only import | A TypeScript import used only for types | `import type { Request, Response }` |
| rootDir | TypeScript source directory | `src/` contains source files |
| outDir | TypeScript build output directory | `dist/` contains compiled files |
| Build artifact | A generated build file | `dist/server.js` |
| Route | An API path connected to a handler | `GET /bookings` |
| Controller | HTTP request/response logic | `listBookings` returns JSON |
| Service | Business logic or data access | `getBookings` returns booking data |
| Router mounting | Attaching routes under a base path | `/bookings` + `/` = `/bookings` |

## Lessons Learned

### Lesson 1: npm Scripts Should Call the Right Tool

What I learned:

Project scripts should call the tool responsible for the task. `dev` should run the development server, `build` should compile TypeScript, and `start` should run the compiled JavaScript application.

Where I used it:

In `package.json`, PandoraTurnos defines `dev`, `build`, and `start` scripts.

How I would explain it in an interview:

I use npm scripts to standardize common project commands. In development I run TypeScript with `tsx watch`, for build I use `tsc`, and for production start I use Node.js to execute the compiled JavaScript file.

### Lesson 2: Keep Source Code and Build Output Separate

What I learned:

TypeScript needs `rootDir` and `outDir` configured so source files and compiled files do not get mixed together.

Where I used it:

In `tsconfig.json`, PandoraTurnos uses `rootDir` as `src/` and `outDir` as `dist/`.

How I would explain it in an interview:

I keep TypeScript source code in `src/` and generated JavaScript in `dist/` because it makes the project cleaner and easier to build, run, and deploy.

### Lesson 3: Separate Routes, Controllers, and Services

What I learned:

Routes define API paths, controllers handle HTTP request and response behavior, and services contain business logic.

Where I used it:

PandoraTurnos uses separate files for booking routes, booking controllers, and booking services.

### Lesson 4: Choose a Domain Name That Can Grow

What I learned:

Choosing `Booking` instead of `Appointment` makes the module more reusable because it can represent sports court reservations, dental appointments, and other scheduled services.

Where I used it:

PandoraTurnos uses `bookings` as the main scheduling resource.

How I would explain it in an interview:

I started with one concrete real-world case, but chose a domain name that can support multiple business types. A booking is generic enough for sports courts and dental clinics, while still being specific enough to model availability, confirmations, cancellations, and no-shows.

How I would explain it in an interview:

I separate routes, controllers, and services because each layer has a different responsibility. This makes the API easier to maintain, test, and extend as more features are added.
