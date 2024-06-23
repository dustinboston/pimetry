// https://orm.drizzle.team/kit-docs/conf
import { defineConfig } from "drizzle-kit";

console.log('env', process.env);

// Use individual environment variables instead of a connection string so that
// the environment variables can be shared with the Postgres Docker container.
export default defineConfig({
  dbCredentials: { url: process.env.POSTGRES_URL },
  dialect: "postgresql",
  out: "./database/migrations",
  schema: "./database/schema.ts"
});
