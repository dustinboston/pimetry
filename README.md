# Pimetry (Work in Progress)

> Pimetry is a personal information manager.

## Prerequisites

Make sure you have installed docker, docker-compose (legacy), node and pnpm.
To enable pnpm from node, run `corepack enable pnpm`

## Getting Started

0. Run `pnpm install` to install dependencies.
1. Copy the `.env.example` file to `.env.local` and change the secrets.
2. Create your GitHub application: https://github.com/settings/apps
3. Copy the GitHub client id and secret into the `.env` file
4. Start Postgres with `pnpm db:start`
5. Then run the migration to initialize the database: `pnpm db:migrate`
6. Finally, start the development server: `pnpm dev`

Open http://localhost:3000 with your browser to see the result.
