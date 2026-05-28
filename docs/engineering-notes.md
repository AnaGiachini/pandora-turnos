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

### TypeScript Type

Definition:

A TypeScript type describes the shape of data during development. It helps TypeScript check that objects have the expected fields and values.

Why it matters:

Types improve reliability because mistakes can be detected before running the application.

How this project uses it:

PandoraTurnos defines a `Booking` type to describe the expected structure of booking data.

### Mock Data

Definition:

Mock data is fake but realistic data used while building or testing a feature before connecting a real database.

Why it matters:

Mock data makes it possible to build and test API behavior early without waiting for persistence, authentication, or integrations.

How this project uses it:

PandoraTurnos uses mock bookings in the booking service to test the `/bookings` endpoint.

### POST Request

Definition:

A POST request is an HTTP request used to create a new resource or submit data to an API.

Why it matters:

POST endpoints are essential for workflows where clients, forms, automation tools, or integrations need to send new data to the backend.

How this project uses it:

PandoraTurnos uses `POST /bookings` to create a new booking from a JSON request body.

### Request Body

Definition:

The request body is the data sent by the client inside an HTTP request.

Why it matters:

APIs use request bodies to receive structured data such as booking details, customer information, and status updates.

How this project uses it:

PandoraTurnos reads `req.body` in the booking controller and passes that data to the booking service.

### Type Assertion

Definition:

A type assertion tells TypeScript to treat a value as a specific type.

Why it matters:

It helps connect external input, such as `req.body`, with the internal TypeScript contract used by the application.

How this project uses it:

PandoraTurnos uses `req.body as Booking` as a temporary development step before adding real runtime validation.

### Runtime Validation

Definition:

Runtime validation checks incoming data while the application is running.

Why it matters:

TypeScript types disappear at runtime, so backend APIs still need validation for external input coming from Postman, frontends, n8n, webhooks, or WhatsApp workflows.

How this project uses it:

PandoraTurnos validates the booking payload before creating a booking. It checks required string fields, allowed business types, and allowed booking statuses.

### Undefined Result

Definition:

`undefined` means that a value was not found or was not assigned.

Why it matters:

Search operations such as `find()` may not find a matching record. Backend code must handle that case instead of assuming the data always exists.

How this project uses it:

`getBookingById` returns `Booking | undefined`, and the controller converts `undefined` into a `404 Not Found` response.

### 404 Not Found

Definition:

`404 Not Found` is an HTTP response used when a requested resource does not exist.

Why it matters:

Returning a clear `404` helps API consumers, support teams, and integrators understand that the request was valid but the resource was not found.

How this project uses it:

PandoraTurnos returns `404` when a booking ID does not match any booking in memory.

### PATCH Request

Definition:

A PATCH request updates part of an existing resource.

Why it matters:

PATCH is useful when the API should change one field without replacing the whole resource.

How this project uses it:

PandoraTurnos uses `PATCH /bookings/:id/status` to update only the booking status.

### Booking Status

Definition:

A booking status represents the current operational state of a booking.

Why it matters:

Statuses make the booking workflow clear for the business and for automation tools.

How this project uses it:

PandoraTurnos supports `pending`, `confirmed`, `cancelled`, and `no_show` as booking statuses.

### DELETE Request

Definition:

A DELETE request removes an existing resource.

Why it matters:

DELETE endpoints are part of standard REST API design and help API consumers remove records in a predictable way.

How this project uses it:

PandoraTurnos uses `DELETE /bookings/:id` to remove a booking from the in-memory collection.

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
| TypeScript type | A development-time data contract | `Booking` defines booking fields |
| Mock data | Fake realistic data for development | Two sample bookings returned by `/bookings` |
| POST request | HTTP request used to create or submit data | `POST /bookings` creates a booking |
| Request body | Data sent inside an HTTP request | Booking JSON sent from Postman |
| Type assertion | Tells TypeScript to treat a value as a type | `req.body as Booking` |
| Runtime validation | Checks external data while the app runs | `isValidBookingPayload(req.body)` |
| undefined | A value that was not found or assigned | `find()` returns `undefined` |
| 404 Not Found | Resource does not exist | `GET /bookings/999` |
| PATCH request | Updates part of a resource | `PATCH /bookings/1/status` |
| Booking status | Operational state of a booking | `confirmed`, `cancelled`, `no_show` |
| DELETE request | Removes a resource | `DELETE /bookings/1` |
| Type guard | Narrows a TypeScript type when a condition is true | `value is string` in `isNonEmptyString` |
| Type cast | Tells TypeScript to treat a value as a specific type | `payload as Record<string, unknown>` |
| trim() | Removes whitespace from the start and end of a string | `id.trim() === ""` rejects blank IDs |
| Defensive validation | Checks existence, type, and content before using a value | `!id \|\| typeof id !== "string" \|\| id.trim() === ""` |
| findIndex | Returns the position of an element in an array or -1 | Used to locate a booking before deleting |
| splice | Removes elements from an array at a given position | `splice(index, 1)` removes one booking |
| PUT request | Replaces an entire resource | Not used in this project |
| PATCH request | Updates part of a resource | `PATCH /api/bookings/:id/status` |
| 400 Bad Request | The request is malformed or missing data | Missing or invalid booking ID |
| 404 Not Found | The request is valid but the resource does not exist | Booking ID not found in memory |
| Route param | Identifies a specific resource in the URL path | `req.params.id` in `GET /bookings/:id` |
| Query param | Passes a filter or question in the URL after `?` | `req.query.startsAt` in `GET /availability?startsAt=...` |
| Request body | Carries structured data inside the HTTP message | `req.body` in `POST /bookings` |
| Index router | A central file that mounts all module routers | `routes/index.ts` exports `indexRouter` |
| Type predicate | TypeScript syntax `value is Type` that narrows types after validation | `value is BookingStatus` in `isBookingStatus` |
| as const | TypeScript modifier that makes array literals readonly and literal types | `BOOKING_STATUSES = [...] as const` |

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

How I would explain it in an interview:

I separate routes, controllers, and services because each layer has a different responsibility. This makes the API easier to maintain, test, and extend as more features are added.

### Lesson 4: Choose a Domain Name That Can Grow

What I learned:

Choosing `Booking` instead of `Appointment` makes the module more reusable because it can represent sports court reservations, dental appointments, and other scheduled services.

Where I used it:

PandoraTurnos uses `bookings` as the main scheduling resource.

How I would explain it in an interview:

I started with one concrete real-world case, but chose a domain name that can support multiple business types. A booking is generic enough for sports courts and dental clinics, while still being specific enough to model availability, confirmations, cancellations, and no-shows.

### Lesson 5: Use Types Before Adding a Database

What I learned:

Before adding a database, I can define the expected data shape with TypeScript and use mock data to test API behavior.

Where I used it:

PandoraTurnos defines a `Booking` type and returns typed mock bookings from the booking service.

How I would explain it in an interview:

I used TypeScript types and mock data first to validate the API contract before adding persistence. This helps keep the project focused and reduces complexity while the domain model is still evolving.

### Lesson 6: Type Assertions Are Not Validation

What I learned:

Using `req.body as Booking` tells TypeScript how to treat the request body, but it does not validate that the incoming data is actually correct at runtime.

Where I used it:

PandoraTurnos uses a type assertion in `createBookingController` as a temporary step before adding validation.

How I would explain it in an interview:

I used a TypeScript type assertion to connect the request body with the `Booking` type during early development, but I understand that production APIs need runtime validation before trusting external input.

### Lesson 7: Validate External Input Before Business Logic

What I learned:

Any data that enters the API from outside should be validated before calling the service layer.

Where I used it:

PandoraTurnos validates `POST /bookings` payloads in the controller before calling `createBooking`.

How I would explain it in an interview:

I validate request payloads before passing data to business logic because TypeScript alone does not protect the application at runtime. This reduces invalid data, improves API reliability, and prepares the project for real integrations.

### Lesson 8: Let Controllers Decide HTTP Responses

What I learned:

The service layer can return `undefined` when data is not found, while the controller decides how that maps to HTTP behavior.

Where I used it:

`getBookingById` returns `Booking | undefined`, and `getBookingByIdController` returns `404` when no booking exists.

How I would explain it in an interview:

I keep business lookup logic in the service and HTTP response decisions in the controller. This makes the API easier to test and keeps responsibilities separated.

### Lesson 9: Model Workflow State Explicitly

What I learned:

Booking status should be modeled explicitly because it represents the operational workflow of a reservation.

Where I used it:

PandoraTurnos uses `BookingStatus` and `PATCH /bookings/:id/status` to update booking state.

How I would explain it in an interview:

I modeled booking status as a TypeScript union so only valid workflow states are allowed. This makes the API clearer and prepares the system for automation, reminders, cancellations, and no-show tracking.

### Lesson 10: Delete Depends on the Storage Layer

What I learned:

Deleting data from an in-memory array is different from deleting data from a database.

Where I used it:

PandoraTurnos uses `findIndex` and `splice` to remove a booking from an in-memory array.

How I would explain it in an interview:

In this early version, I delete bookings from an in-memory array using `findIndex` and `splice`. In a production version with a database, the same API behavior would be implemented with a database delete operation.

### Lesson 11: Use an API Prefix for Product Endpoints

What I learned:

An API prefix groups product endpoints under a common path, usually `/api`.

Where I used it:

PandoraTurnos mounts the main router with `app.use("/api", indexRouter)`, so booking and availability endpoints live under `/api`.

How I would explain it in an interview:

I use `/api` as a prefix to separate product API routes from infrastructure routes such as `/health`. This keeps the API structure clear and makes it easier to version or expose endpoints later.

### Lesson 12: Query Parameters Are Useful for Searches and Checks

What I learned:

A query parameter sends extra information in the URL without creating a new resource.

Where I used it:

PandoraTurnos uses `GET /api/availability?startsAt=...` to check whether a requested time slot is available.

How I would explain it in an interview:

I used a query parameter for availability because the client is asking a question about a specific time, not creating or updating a booking. This keeps the endpoint simple and aligned with REST behavior.

### Type Guard

Definition:

A type guard is a function that returns a boolean and also tells TypeScript what type a value is when the function returns `true`.

Why it matters:

Without a type guard, TypeScript keeps treating a value as `unknown` even after a condition confirms it is a string. The type guard narrows the type so TypeScript allows string operations on that value.

How this project uses it:

PandoraTurnos uses `isNonEmptyString` and `isBookingStatus` as type guards. They return `value is string` and `value is BookingStatus`, which tells TypeScript that inside the `if` block, the value can be treated as that specific type.

### value is Type Syntax

Definition:

The `value is Type` syntax in a function return type is a TypeScript type predicate. It declares that when this function returns `true`, the parameter `value` should be treated as type `Type` in subsequent code.

Why it matters:

Without this syntax, TypeScript would not narrow the type after the check. The type predicate creates a contract between runtime validation (the actual check) and compile-time type safety (TypeScript trusting the result).

How this project uses it:

`isBookingStatus(value: unknown): value is BookingStatus` tells TypeScript: if this returns true, value is a valid BookingStatus. This eliminates the need for `as BookingStatus` casts throughout the codebase.

### Type Cast

Definition:

A type cast tells TypeScript to treat a value as a specific type using the `as` keyword. It does not validate the data at runtime.

Why it matters:

When TypeScript sees `unknown`, it cannot allow property access. Casting to `Record<string, unknown>` tells TypeScript the value is an object with string keys, which allows accessing properties like `booking.id` or `booking.status`.

How this project uses it:

PandoraTurnos casts the incoming payload to `Record<string, unknown>` inside `validateBookingPayload` so each field can be accessed and validated individually.

### trim()

Definition:

`trim()` is a JavaScript string method that removes whitespace characters from the beginning and end of a string. It does not affect spaces in the middle.

Why it matters:

A string with only spaces like `"   "` would pass a simple empty string check without `trim()`. Using `trim()` ensures that fields containing only spaces are treated as empty and rejected.

How this project uses it:

PandoraTurnos uses `id.trim() === ""` in controller ID validation to reject IDs that contain only whitespace.

### Defensive ID Validation

Definition:

Defensive ID validation checks that an incoming ID exists, is a plain string, and is not empty or whitespace before using it.

Why it matters:

Express types `req.params` values as `string | string[]`. A simple `typeof id !== "string"` check is not enough because it does not handle empty strings or whitespace-only values.

How this project uses it:

PandoraTurnos uses `!id || typeof id !== "string" || id.trim() === ""` in booking controllers to reject missing, non-string, or blank IDs before calling the service.

### findIndex and splice

Definition:

`findIndex` returns the position of an element in an array, or `-1` if not found. `splice(index, 1)` removes one element at that position from the array.

Why it matters:

To remove a specific element from an array, the position is needed. The element must be saved before `splice` is called because it no longer exists in the array after removal.

How this project uses it:

PandoraTurnos uses `findIndex` and `splice` in `deleteBooking` to locate and remove a booking from the in-memory array, returning the deleted booking to the controller.

### PUT vs PATCH

Definition:

PUT replaces the entire resource with new data. PATCH updates only a specific part of an existing resource.

Why it matters:

Using PUT when only one field needs to change would require sending all resource fields in the request. PATCH is more efficient and semantically correct for partial updates.

How this project uses it:

PandoraTurnos uses `PATCH /api/bookings/:id/status` because only the booking status changes. Sending the full booking object would be unnecessary and error-prone.

### 400 vs 404

Definition:

`400 Bad Request` means the request itself is malformed or missing required information. `404 Not Found` means the request was valid but the requested resource does not exist.

Why it matters:

Returning the correct status code helps API consumers, automation tools, and support teams understand what went wrong and how to fix it.

How this project uses it:

PandoraTurnos returns `400` when an ID is missing or invalid, and `404` when a valid ID does not match any existing booking.

### Route Parameters, Query Parameters, and Request Body

Definition:

Route parameters (`req.params`) identify a specific resource in the URL path. Query parameters (`req.query`) pass optional filters or questions after a `?` in the URL. The request body (`req.body`) carries structured data inside the HTTP message.

Why it matters:

Each mechanism serves a different purpose. Using the wrong one makes the API harder to understand and breaks REST conventions.

How this project uses it:

PandoraTurnos uses `req.params.id` to identify a booking, `req.query.startsAt` to ask whether a time slot is available, and `req.body` to receive booking data when creating or updating a resource.

### Index Router

Definition:

An index router is a central file that imports and mounts all module routers, then exports a single router for the main app to use.

Why it matters:

As the project grows, registering every router directly in `app.ts` makes the file hard to read. The index router centralizes that responsibility so `app.ts` stays clean.

How this project uses it:

PandoraTurnos uses `routes/index.ts` to mount `bookingRouter` under `/bookings` and `availabilityRouter` under `/availability`, then exports `indexRouter` for `app.ts`.

### Lesson 13: Availability Is Conflict Detection

What I learned:

Checking availability means looking for an existing booking that conflicts with the requested date and time.

Where I used it:

PandoraTurnos checks whether any non-cancelled booking already has the same `startsAt` value.

How I would explain it in an interview:

I implemented availability by detecting conflicts against existing bookings. Cancelled bookings do not block the slot, while pending or confirmed bookings make the slot unavailable. This is the first step toward a real WhatsApp booking flow.

### Lesson 14: Validate External Data with Type Guards, Not Casts

What I learned:

Using type casts (`as BookingStatus`) tells TypeScript to trust the type without checking. A type guard function validates at runtime and narrows the type automatically.

Where I used it:

Created `isBookingStatus` in `booking.model.ts` to validate whether an unknown value is a valid booking status before using it in business logic.

How I would explain it in an interview:

I replaced type casts with a type guard function that validates the value is a string and exists in the allowed statuses array. This ensures runtime safety and eliminates implicit trust in external input. Type guards are essential when integrating with third-party systems, webhooks, or APIs where you cannot control the data format.
