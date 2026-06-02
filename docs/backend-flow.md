# Backend Flow

This document explains how a request moves through the PandoraTurnos API.

## 1. Request Arrives

When an HTTP request arrives, Express receives it in `app.ts`. Before continuing to the routes, the request passes through middleware.

## 2. Routing

The router decides which endpoint should handle the request.

## 3. Controller

The controller reads `req`, `res`, `body`, `params`, `query`, and other request data. It calls the correct service and responds with the right status code and data.

## 4. Service

The service executes the business logic and returns the result to the controller.

## 5. Response

The controller sends the JSON response to the client.