# Decision Criteria

This document explains the reasoning behind technical and product decisions in PandoraTurnos.

## Purpose

The goal of this document is to show critical thinking: why the project exists, why it was designed this way, and why specific technologies or patterns were chosen.

This is useful for portfolio reviews, technical interviews, and explaining the project as more than a simple CRUD API.

## Project Motivation

Why I created this project:

I created PandoraTurnos to help professionals and small service businesses manage bookings, communication, and operational problems in a more organized and automated way.

This project is also part of my professional learning path. I want to build a realistic backend and automation project that connects technical practice with real business needs, instead of only following isolated tutorials or building generic exercises.

PandoraIncidentLab is not a separate portfolio project. It is an internal technical layer inside PandoraTurnos for demonstrating webhook failures, logs, failed automations, incident tracking, troubleshooting, and support-style problem resolution.

What real-world problem it solves:

Many small businesses depend on appointments or reservations, but they often lose time and money because of no-shows, unclear communication, manual follow-ups, payment delays, and operational issues that are not properly tracked.

The project is based on conversations with real people who described real operational problems. This makes the project more meaningful because it is not only a technical exercise; it is a response to problems that small businesses actually experience.

Who could use it:

This type of system could be useful for dental clinics, sports courts, beauty salons, medical offices, personal trainers, consultants, and other service-based businesses that depend on scheduled appointments or reservations.

Why this project is relevant for backend and automation roles:

The project is relevant because it includes common responsibilities in backend, automation, integrations, and technical support roles: designing APIs, validating data, handling errors, triggering workflows, working with webhooks, tracking incidents, reading logs, and documenting technical decisions.

The goal is to show recruiters that I can think beyond a basic booking app. PandoraTurnos includes an internal IncidentLab layer to demonstrate troubleshooting, error registration, failed automation handling, and technical documentation.

This helps me show critical thinking, responsibility, and the ability to approach real problems with commitment and technical reasoning.

## Core Product Decisions

### Why Bookings?

Decision:

The project starts with bookings as the main business workflow.

Reasoning:

Bookings are a more flexible concept than appointments. A booking can represent a sports court reservation, a dental appointment, or another scheduled service. This keeps the project focused on one reusable domain model instead of building separate systems for each business type.

Real-world example:

A sports court business can use bookings to manage court availability and reservations. A dental clinic can use the same booking concept to manage patient appointments.

Tradeoff:

Using `Booking` makes the project more flexible, but it requires clear documentation so recruiters understand that an appointment is treated as one type of booking.

### Why Incidents?

Decision:

The project includes incidents as a core module, not as an afterthought.

Reasoning:

Incidents make the project more technical and closer to real support and operations work. Instead of only storing bookings, the system can track what went wrong, when it happened, and how it could be resolved.

Real-world example:

If a WhatsApp notification fails or a payment confirmation does not arrive, the system can register an incident for troubleshooting.

Portfolio reasoning:

Adding incidents makes PandoraTurnos stronger than a simple booking app. It shows that the system can track failures and support investigation, which is important for backend, automation, integration, and technical support roles.

### Why WhatsApp-style Alerts?

Decision:

The project will model WhatsApp-style notifications as part of the communication workflow.

Reasoning:

Many small businesses rely on WhatsApp as their main communication channel. Even if the first version simulates WhatsApp instead of using a real provider, the workflow is realistic and useful for learning integrations.

Real-world example:

A patient receives an appointment reminder, or a customer receives a reservation confirmation before a match.

### Why Webhooks and Automation?

Decision:

The project will use webhooks and automation workflows to connect the backend with external processes such as n8n.

Reasoning:

Webhooks are common in modern integrations. They allow the backend to trigger or receive events from other tools, which is important for automation, support, and integration roles.

Real-world example:

When a booking is created, the API can trigger a webhook that starts an n8n workflow to send a notification or create a follow-up task.

## Technical Decisions

### Why Node.js?

Decision:

Use Node.js as the backend runtime.

Reasoning:

Node.js is widely used for APIs, integrations, automation workflows, and real-time event-driven systems. It is also a practical stack for connecting with tools like n8n, webhooks, and external APIs.

Tradeoffs:

Node.js is efficient for I/O-heavy applications and API integrations, but it requires discipline with project structure, error handling, async code, and TypeScript or validation patterns to keep the codebase maintainable.

### Why Build an API First?

Decision:

Build the backend API before focusing on a frontend interface.

Reasoning:

An API-first approach keeps the project focused on backend skills: routes, controllers, services, validation, data models, errors, logs, and integration points.

Tradeoffs:

The project may feel less visual at the beginning, but it becomes stronger for backend employability because the technical behavior is designed before the user interface.

### Why Document While Building?

Decision:

Document concepts, decisions, and lessons during the development process.

Reasoning:

Documentation helps transform the project from a code exercise into a portfolio asset. It also proves that the developer understands the reasoning behind the implementation.

Tradeoffs:

Writing documentation takes extra time, but it improves clarity, interview preparation, and long-term learning.

## Decision Log

| Date | Decision | Reason | Alternative Considered | Result |
| --- | --- | --- | --- | --- |
| 2026-04-29 | Start the project as a backend API focused on bookings, incidents, and automation | To build a portfolio project aligned with backend support, integrations, and troubleshooting roles | Build only a simple appointment app | Keeps the project more technical and easier to defend |
| 2026-05-03 | Rename the first module from appointments to bookings | `Booking` supports both sports court reservations and dental appointments with one reusable model | Keep `appointments` as the main module | Makes the product more flexible without losing the real use cases |
