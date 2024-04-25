# Blogging App

A simple Blogging App where users can create an account, sign in/up, and create and post blogs. This project uses Hono library for HTTP routing, Cloudflare Workers for serverless execution, PostgreSQL for the database, and Prisma as the ORM with a connection pool.

## Features

- User authentication (sign in/up)
- Create, read, update, and delete (CRUD) blog posts
- View an author's complete blogs
- Secure endpoints using Cloudflare Workers
- Database connection pooling with Prisma

## Technologies Used

- [Hono](https://github.com/honoapp/hono): A minimalistic JavaScript library for HTTP routing.
- [Cloudflare Workers]: Serverless execution environment for running server-side code.
- [PostgreSQL]
- [Prisma](https://www.prisma.io/): Modern database access toolkit with an ORM layer and connection pool.

## Prerequisites

- Node.js
- npm
- Cloudflare Workers account
- PostgreSQL database
- Prisma CLI

## Setup

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/blogging-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd blogging-app
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

### Configuration

1. Create a `.env` file in the project root with the following environment variables:
    ```
    DATABASE_URL="your_postgresql_database_url"
    SECRET_KEY="your_secret_key_for_jwt"
    ```

2. Initialize and apply database migrations with Prisma:
    ```bash
    npx prisma migrate dev
    ```

### Deployment

1. Build the project:
    ```bash
    npm run build
    ```

2. Deploy to Cloudflare Workers:
    ```bash
    npm run deploy
    ```

## Usage

### Local Development

To run the app locally:
```bash
npm run dev
