
# Bookstore Backend API

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![NestJS](https://img.shields.io/badge/NestJS-14.0.0-red.svg)](https://nestjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.6.0-blue.svg)](https://prisma.io/)

## Overview

This is a NestJS-based backend API for managing a bookstore. It includes features for user authentication, book management, customer management, and order management. The API uses Prisma as the ORM for PostgreSQL database interactions and Swagger for API documentation.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Features](#features)
3. [API Endpoints](#api-endpoints)
4. [Project Structure](#project-structure)
5. [Contributing](#contributing)
6. [License](#license)

## Getting Started

### Prerequisites

- Node.js (14.x or higher)
- PostgreSQL (for database)
- Prisma CLI installed globally:
  ```bash
  npm install -g prisma
  ```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/bookstore-backend.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Initialize Prisma:
   ```bash
   npx prisma init
   ```

4. Update `.env` with your PostgreSQL connection string:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
   JWT_SECRET = "your_key"
   ```

5. Generate Prisma Client:
   ```bash
   npx prisma generate
   ```

6. Apply database migrations:
   ```bash
   npx prisma migrate dev --name init
   ```

### Running the Application

Start the development server:
```bash
npm run start:dev
```

## Features

- **User Authentication**: JWT-based authentication for secure login and registration.
- **Book Management**: CRUD operations for managing books, including filtering and searching.
- **Customer Management**: Basic CRUD operations for customer management.
- **Order Management**: Create, read, and cancel orders with book-order relationships.
- **Swagger Documentation**: Interactive API documentation using Swagger.

## API Endpoints

### Authentication

- **POST /auth/login**: Login with email and password.
  - Request Body:
    ```json
    { "email": "string", "password": "string" }
    ```
  - Response:
    ```json
    { "access_token": "string" }
    ```
  Example:
  ```bash
  curl -X POST http://localhost:3000/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"email": "user@example.com", "password": "password123"}'
  ```

- **POST /auth/register**: Register a new user.
  - Request Body:
    ```json
    { "email": "string", "password": "string" }
    ```
  - Response:
    ```json
    { "access_token": "string" }
    ```
  Example:
  ```bash
  curl -X POST http://localhost:3000/auth/register \
  -H 'Content-Type: application/json' \
  -d '{"email": "newuser@example.com", "password": "newpassword123"}'
  ```

### Books

- **POST /books**: Create a new book.
  - Request Body:
    ```json
    { "title": "string", "author": "string", "category": "string", "price": "number", "rating?": "number", "publishedAt": "Date" }
    ```
  - Response: Created book object.
  Example:
  ```bash
  curl -X POST http://localhost:3000/books \
  -H 'Content-Type: application/json' \
  -d '{"title": "New Book", "author": "Author Name", "category": "Fiction", "price": 19.99, "publishedAt": "2025-04-09T00:00:00Z"}'
  ```

- **GET /books**: Retrieve all books.
  - Response: Array of book objects.
  Example:
  ```bash
  curl http://localhost:3000/books
  ```

### Customers

- **POST /customers**: Create a new customer.
  - Request Body:
    ```json
    { "userId": "number" }
    ```
  - Response: Created customer object.
  Example:
  ```bash
  curl -X POST http://localhost:3000/customers \
  -H 'Content-Type: application/json' \
  -d '{"userId": 1}'
  ```

- **GET /customers**: Retrieve all customers.
  - Response: Array of customer objects.
  Example:
  ```bash
  curl http://localhost:3000/customers
  ```

### Orders

- **POST /orders**: Create a new order.
  - Request Body:
    ```json
    { "customerId": "number", "bookIds": ["number[]"] }
    ```
  - Response: Created order object.
  Example:
  ```bash
  curl -X POST http://localhost:3000/orders \
  -H 'Content-Type: application/json' \
  -d '{"customerId": 1, "bookIds": [1, 2]}'
  ```

- **GET /orders**: Retrieve all orders.
  - Response: Array of order objects.
  Example:
  ```bash
  curl http://localhost:3000/orders
  ```

## Project Structure

```plaintext
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── auth/
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   ├── auth.service.ts
│   ├── dto/
│   │   ├── login.dto.ts
│   │   └── register.dto.ts
│   ├── guards/
│   │   └── jwt-auth.guard.ts
│   └── strategies/
│       └── jwt.strategy.ts
├── books/
│   ├── books.controller.ts
│   ├── books.module.ts
│   ├── books.service.ts
│   └── dto/
│       ├── create-book.dto.ts
│       └── update-book.dto.ts
├── customers/
│   ├── customers.controller.ts
│   ├── customers.module.ts
│   ├── customers.service.ts
│   └── entities/
│       └── customer.entity.ts
├── orders/
│   ├── orders.controller.ts
│   ├── orders.module.ts
│   ├── orders.service.ts
│   └── dto/
│       └── create-order.dto.ts
├── prisma/
│   ├── prisma.module.ts
│   └── prisma.service.ts
├── users/
│   ├── users.controller.ts
│   ├── users.module.ts
│   └── users.service.ts
└── main.ts
```

## Contributing

Contributions are welcome! Please submit a pull request with a detailed description of changes.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

