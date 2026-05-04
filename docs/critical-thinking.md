# Critical Thinking

This document is used to practice explaining technical choices with clarity, ownership, and professional reasoning.

## Purpose

The goal is not only to build the project, but to understand and defend the decisions behind it.

Critical thinking means being able to explain why a technical decision was made, what problem it solves, what alternatives existed, and what tradeoffs were accepted.

Good portfolio projects should answer:

- Why did I build this?
- Why did I choose this stack?
- Why did I design the API this way?
- What tradeoffs did I consider?
- What would I improve next?
- What did I learn that I can reuse in another project?

## Critical Thinking Principles

### Master Your Stack

What this means:

Mastering your stack means going beyond copying code. It means understanding the tools, language, framework, patterns, errors, and tradeoffs well enough to build, debug, explain, and improve real projects.

For this project, the stack is intentionally focused: Node.js, Express, TypeScript, REST APIs, webhooks, n8n-style automation, logging, incident tracking, and troubleshooting.

How I am applying it:

I am focusing on Node.js, backend APIs, REST, validation, error handling, logging, webhooks, n8n automation, and troubleshooting instead of jumping between too many unrelated technologies.

Evidence in this project:

PandoraTurnos is designed around one coherent backend and automation stack, with documentation that explains the reasoning behind each technical decision. PandoraIncidentLab works as the internal troubleshooting layer of the same project.

### Become Strong in the Fundamentals

What this means:

Strong fundamentals mean understanding requests, responses, status codes, data flow, validation, errors, logs, and how different systems communicate.

How I am applying it:

I am building the project step by step, starting with clear API behavior before adding more complex integrations.

Evidence in this project:

The project includes bookings, incidents, notifications, webhooks, and audit logs as practical ways to apply backend fundamentals.

The objective is not to memorize code, but to understand the flow: request, validation, business logic, response, logs, errors, and follow-up actions.

### Understand Before Automating

What this means:

Automation is more valuable when the underlying process is understood first. A workflow should not be automated blindly; it should solve a clear operational problem.

How I am applying it:

Before creating n8n workflows or notification flows, I define the business problem, expected behavior, possible failures, and troubleshooting path.

Evidence in this project:

The project connects automation to real cases such as booking reminders, reservation confirmations, failed notifications, and incident creation.

### Use AI as a Reviewer, Not a Replacement

What this means:

Using AI well means treating it as a tutor, reviewer, and accelerator while still understanding and owning the final code.

How I am applying it:

I write or attempt the code first, then use AI to review, improve, explain, and challenge my technical decisions.

Evidence in this project:

The workflow for this project prioritizes learning, explanation, debugging, and decision-making instead of only generating code quickly.

The expected workflow is: attempt first, review with AI, understand the correction, improve the implementation, and document the decision in my own words.

## How To Practice Critical Thinking In This Project

For each important feature, answer these questions:

- What problem does this feature solve?
- Who needs this feature?
- What could fail?
- How would I detect the failure?
- How would I explain this endpoint or workflow in an interview?
- What alternative did I consider?
- What tradeoff did I accept?

## Stack Mastery Checklist

- I can explain what Express does.
- I can explain what TypeScript adds to a Node.js project.
- I can describe the difference between routes, controllers, and services.
- I can explain what a webhook is.
- I can troubleshoot a failed request.
- I can read an error message without panicking.
- I can explain why logs matter.
- I can describe what an incident is in a support or integration context.
- I can explain why this project is more than a CRUD app.

## Interview Practice

### Question: Why did you create this project?

Answer draft:

I created PandoraTurnos to practice backend development and automation through a realistic business scenario. The project solves booking and reservation problems while also adding incident tracking, WhatsApp-style alerts, webhooks, and troubleshooting documentation through its internal PandoraIncidentLab layer.

### Question: Why did you choose Node.js?

Answer draft:

I chose Node.js because it is widely used for backend APIs, integrations, webhooks, and automation workflows. It is a practical stack for building services that communicate with external tools such as n8n or notification providers.

### Question: What makes this project more than a CRUD app?

Answer draft:

The project is not only about creating, reading, updating, and deleting bookings. It also models operational workflows: notifications, failed communication, incidents, logs, automation triggers, and troubleshooting paths.

### Question: How would you troubleshoot a failed WhatsApp notification?

Answer draft:

I would check whether the booking event was created correctly, verify the notification payload, inspect the webhook or automation execution, review logs, confirm the response from the notification provider, and create or update an incident if the failure needs follow-up.

### Question: What would you improve if this were going to production?

Answer draft:

I would add authentication, role-based access, persistent database storage, stronger validation, structured logging, retry logic, monitoring, real WhatsApp provider integration, automated tests, and deployment configuration.

## Weekly Reflection

### Week 1

What I built:

What I understood:

What was difficult:

What I can explain better now:
