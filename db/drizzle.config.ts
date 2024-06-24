// https://vercel.com/docs/storage/vercel-postgres/using-an-orm#drizzle
import '@/db/env';

// https://orm.drizzle.team/kit-docs/conf
import { defineConfig } from 'drizzle-kit';

// Use individual environment variables instead of a connection string so that
// the environment variables can be shared with the Postgres Docker container.
export default defineConfig({
  dbCredentials: { url: process.env.POSTGRES_URL ?? '' },
  dialect: 'postgresql',
  out: './db/migrations',
  schema: './db/schema.ts',
});
