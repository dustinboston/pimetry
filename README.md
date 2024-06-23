# Pimetry (Work in Progress)

> Pimetry is a personal information manager.

## Prerequisites

Make sure you have installed docker, the legacy docker-compose, node and npm.

## Getting Started

1. Copy the `.env.example` file to `.env` and change the secrets.
2. Create your GitHub application: https://github.com/settings/apps
3. Copy the GitHub client id and secret into the `.env` file
4. Start the application with `docker-compose up`
5. Run the migration to initialize the database: `npm run dc:migrate`

Open http://localhost:3000 with your browser to see the result.

