# PandoraTurnos

## Overview

PandoraTurnos is a booking automation and integration system for service-based businesses that need to manage bookings, reduce no-shows, and improve operational communication.

The project focuses on real-world workflows such as appointment scheduling, reservation management, WhatsApp-style alerts, webhook monitoring, incident tracking, and automation with tools like n8n. Its goal is to demonstrate backend development, API design, troubleshooting, integration support, and support automation skills through practical business scenarios.

PandoraIncidentLab is included as an internal technical layer inside PandoraTurnos. This layer is used to demonstrate logs, webhook failures, failed automations, incident registration, monitoring, and troubleshooting documentation.


## Real-World Context

- A dental clinic needs to reduce patient no-shows and improve communication before scheduled appointments.
- A sports court business needs to manage reservations, avoid last-minute no-shows, and improve the payment confirmation process.


## Technical Goals

This project is designed to practice and demonstrate:

- Backend API development with Node.js
- REST API design
- Booking and reservation management
- Incident tracking and troubleshooting
- WhatsApp-style notification workflows
- Webhooks and automation with n8n
- Error handling and logging
- Technical documentation


## How to Run the Project

Install dependencies:

```bash
npm install
```

Run the project in development mode:

```bash
npm run dev
```

Build the TypeScript project:

```bash
npm run build
```

Run the compiled project:

```bash
npm start
```

The API runs by default on:

```txt
http://localhost:3000
```


## Available Endpoints

- GET - `/health` - API health check 
- GET - `/api/bookings` - List all bookings 
- POST - `/api/bookings` - Create new booking 
- GET - `/api/bookings/:id` - Get booking by ID 
- PATCH - `/api/bookings/:id/status` - Update booking status 
- DELETE - `/api/bookings/:id` - Delete booking 
- GET - `/api/availability?startsAt=...` - Check time slot availability 


## Learning Goals

I want to strengthen my backend and automation skills by building a project that connects business workflows with technical implementation.

My learning goals include improving my understanding of API design, Node.js, webhooks, error handling, logging, troubleshooting, automation workflows, and technical decision-making.
